---
path: "android_sdk_java_11"
date: "2019-06-09"
title: "Use Android SDK Manager with Java 11"
tags: [ "android sdk", "bug", "java", "openjdk" ]
---

Since with the release 11 some deprecated packages used by the Android SDK [were removed](https://openjdk.java.net/jeps/320), it's not yet possible to run it with the latest Java versions. As a workaround it's possible to download the required classes separately and add them to the classpath, or install the latest supported version, java 1.8. This latter approach is the recommended one.

<!-- intro_end -->

## Exception with newer Java versions

When using the sdk with newes version of Java the following exception will happen:

```sh
$ $ANDROID_HOME/tools/bin/sdkmanager
Exception in thread "main" java.lang.NoClassDefFoundError: javax/xml/bind/annotation/XmlSchema
    at com.android.repository.api.SchemaModule$SchemaModuleVersion.<init>(SchemaModule.java:156)
    at com.android.repository.api.SchemaModule.<init>(SchemaModule.java:75)
    at com.android.sdklib.repository.AndroidSdkHandler.<clinit>(AndroidSdkHandler.java:81)
    at com.android.sdklib.tool.sdkmanager.SdkManagerCli.main(SdkManagerCli.java:73)
    at com.android.sdklib.tool.sdkmanager.SdkManagerCli.main(SdkManagerCli.java:48)
Caused by: java.lang.ClassNotFoundException: javax.xml.bind.annotation.XmlSchema
    at java.base/jdk.internal.loader.BuiltinClassLoader.loadClass(BuiltinClassLoader.java:583)
    at java.base/jdk.internal.loader.ClassLoaders$AppClassLoader.loadClass(ClassLoaders.java:178)
    at java.base/java.lang.ClassLoader.loadClass(ClassLoader.java:521)
    ... 5 more
```

As said this is because some packaged required by the SDK were removed in Java 11.

## Install old version of java

Just download the desired version of the [JDK](https://www.oracle.com/technetwork/java/javase/downloads/index.html);

On macOS is possible to use brew to [install different versions](https://github.com/AdoptOpenJDK/homebrew-openjdk).

## Switch between versions

To check the installed version of Java on macOS:

```sh
$ /usr/libexec/java_home -V
Matching Java Virtual Machines (2):
    11.0.2, x86_64:	"Java SE 11.0.2"	/Library/Java/JavaVirtualMachines/jdk-11.0.2.jdk/Contents/Home
    1.8.0_181, x86_64:	"Java SE 8"	/Library/Java/JavaVirtualMachines/jdk1.8.0_181.jdk/Contents/Home
````

And to check the current active one:

```sh
$ echo $JAVA_HOME
/Library/Java/JavaVirtualMachines/jdk-11.0.2.jdk/Contents/Home
```

or:

```sh
$ java -version
java version "11.0.2" 2019-01-15 LTS
Java(TM) SE Runtime Environment 18.9 (build 11.0.2+9-LTS)
Java HotSpot(TM) 64-Bit Server VM 18.9 (build 11.0.2+9-LTS, mixed mode)
```

To easily switch between the two sdk it's possible to [define aliases](https://github.com/pasdam/devbox-setup/blob/master/dotfiles/aliases/java):

```sh
j11='export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk-11.0.2.jdk/Contents/Home; java -version'
j8='export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_181.jdk/Contents/Home; java -version'
```

so that it's possible to activate the required version with:

```sh
# activate Java 11:
j11

# activate Java 1.8
j8
```

## Conclusion

Now it will be possible to run the Android SDK with:

```sh
j8
$ANDROID_HOME/tools/bin/sdkmanager
```

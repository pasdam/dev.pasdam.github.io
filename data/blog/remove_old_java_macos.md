---
path: "remove_old_java_macos"
date: "2019-02-11"
title: "Uninstall older versions of Java from macOS"
tags: [ "java", "macOS" ]
---

In this brief tutorial we'll see how to remove old versions of java from macOS.

First we need to list all the installed version using the command `/usr/libexec/java_home -V`:

```bash
$ /usr/libexec/java_home -V
Matching Java Virtual Machines (5):
    11.0.2, x86_64:	"Java SE 11.0.2"	/Library/Java/JavaVirtualMachines/jdk-11.0.2.jdk/Contents/Home
    10.0.2, x86_64:	"Java SE 10.0.2"	/Library/Java/JavaVirtualMachines/jdk-10.0.2.jdk/Contents/Home
    1.8.0_181, x86_64:	"Java SE 8"         /Library/Java/JavaVirtualMachines/jdk1.8.0_181.jdk/Contents/Home
    1.6.0_65-b14-468, x86_64:	"Java SE 6"	/Library/Java/JavaVirtualMachines/1.6.0.jdk/Contents/Home
    1.6.0_65-b14-468, i386:	"Java SE 6"	/Library/Java/JavaVirtualMachines/1.6.0.jdk/Contents/Home
```

It will list all the installed versions (JRE and JDK) with the related path.

Next and last thing to do is to remove the version we don't need anymore with the following command:

```bash
sudo rm -rf /Library/Java/JavaVirtualMachines/<version_to_remove>
```

For instance:

```bash
sudo rm -rf /Library/Java/JavaVirtualMachines/jdk-10.0.2.jdk
sudo rm -rf /Library/Java/JavaVirtualMachines/1.6.0.jdk
```

Then it will result in:

```bash
$ /usr/libexec/java_home -V
Matching Java Virtual Machines (2):
    11.0.2, x86_64:	"Java SE 11.0.2"	/Library/Java/JavaVirtualMachines/jdk-11.0.2.jdk/Contents/Home
    1.8.0_181, x86_64:	"Java SE 8"	/Library/Java/JavaVirtualMachines/jdk1.8.0_181.jdk/Contents/Home
```

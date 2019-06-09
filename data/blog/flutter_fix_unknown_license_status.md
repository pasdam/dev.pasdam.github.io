---
path: "flutter_fix_unknown_license_status"
date: "2019-06-09"
title: "Flutter: fix unknown android license status issue"
tags: [ "android sdk", "bug", "flutter", "java" ]
---

Because of [android SDK not correctly working with java 11](/blog/android_sdk_java_11/), when run `flutter doctor` we'll get the following error:

```sh
$ flutter doctor
...
Android license status unknown.
Try re-installing or updating your Android SDK Manager.
...
```

<!-- intro_end -->

To fix this, just follow the instructions to [download the older version of Java](/blog/android_sdk_java_11/#).

If after switching java version `flutter doctor` still complains about licenses not accepted, just run the following:

```sh
yes | sdkmanager --licenses
```

It will automatically accept all the available licenses (of course you should read those before accept them).

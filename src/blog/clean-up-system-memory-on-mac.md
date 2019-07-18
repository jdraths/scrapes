---
title: How we cleanup system memory on our macbooks
date: "2019-07-17"
---

## lots of device support
every time you plug in a device type to xcode you get a duplicate
```
cd ~/Library/Developer
sudo du -sch .[!.]* * |sort -h
```

`/Library/Developer/Xcode/iOS DeviceSupport` was MASSIVE
`rm -rf` the applicable files

## lots of simulator device
[per this](https://stackoverflow.com/questions/33419301/macos-xcode-coresimulator-folder-very-big-ok-to-delete-content)
```
cd ~Library/Developer/CoreSimulator/Devices
xcrun simctl delete unavailable
```
if that doesn't work:
[this](https://stackoverflow.com/questions/29108172/xcrun-unable-to-find-simctl)
and
[this](https://stackoverflow.com/questions/34910383/xcode-free-to-clear-devices-folder/34914591#34914591)

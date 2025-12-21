---
title: efibootmgr issues with my system (limine boot loader)
date: 2025-12-09
type: article
tags:
  - dev
---
first of all 
limine is working fine

```
modprobe efivarfs # nothing shows up
mount -t efivarfs efivarfs /sys/firmware/efi/efivars # faild
```

'removable'

```
grub-install --target=x86_64-efi --efi-directory=/boot --removable
```
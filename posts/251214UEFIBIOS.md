---
title: UEFI 부팅시 BIOS 설정
date: 2025-12-13
type: article
tags:
  - dev
---

리눅스에서 UEFI 모드로 부팅하기 위해  

```
CSM : Disabled
Above 4G Decoding : Enabled
Secure Boot : Other OS (Arch/Limine 호환성 확보)
Fast Boot : Disabled (UEFI 환경 정보의 완전한 전달 보장)
OS Type : Windows UEFI Mode
```

참고로 에러 로그 보는 법 

```
dmesg | grep -i "efi: Error"
```

---
title: pacman 사용법 101
date: 2025-12-19
type: article
tags:
  - dev
---

### 패키지 업데이트


```bash
sudo pacman -Sy archlinux-keyring
```


```
sudo pacman -Syu
```




### pacman 명령어를 통해 리스트를 만들어 봅시다

다음의 명령을 통해 설치된 패키지들을 확인해 볼 수 있습니다

   ```bash
   pacman -Qe | sort > installed_packages.txt
   ```

좀 더 자세한 버전은:

   ```bash
   pacman -Qii | awk '/^Name/ {name=$3} /^Groups/ {print name, $3}' | sort > packages_with_groups.txt
   
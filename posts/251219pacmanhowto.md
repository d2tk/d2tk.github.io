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
- 패키지 데이터베이스를 업데이트하고, Arch Linux의 키링을 최신 상태로 유지합니다

```
sudo pacman -Syu
```
- 시스템에 설치된 모든 패키지를 최신 버전으로 업데이트합니다
- 시스템을 안전하고 최신 상태로 유지하는 데 필수적입니다


### pacman 명령어를 통해 리스트를 만들어 봅시다
- 다음의 명령을 통해 설치된 패키지들을 확인해 볼 수 있습니다

   ```bash
   pacman -Qe | sort > installed_packages.txt
   ```
- 사용자가 명시적으로 설치한 패키지 목록을 확인하고, 알파벳 순으로 정렬하여 `installed_packages.txt` 파일에 저장합니다.
- 설치된 패키지의 이름과 그룹 정보를 추출하여, 알파벳 순으로 정렬하여 `packages_with_groups.txt` 파일에 저장합니다 


좀 더 자세한 버전은:

   ```bash
   pacman -Qii | awk '/^Name/ {name=$3} /^Groups/ {print name, $3}' | sort > packages_with_groups.txt
```





- 설치된 패키지의 이름과 그룹 정보를 추출하여, 알파벳 순으로 정렬하여 `packages_with_groups.txt` 파일에 저장합니다


Basic Removal

- `sudo pacman -R package_name`: Removes the specified package but leaves its dependencies and configuration files. 

Removing Dependencies (Recommended for most cases)

- `sudo pacman -Rs package_name`: Removes the package and any dependencies that are no longer required by other installed packages, keeping your system clean. 

Thorough Removal (No trace)

- `sudo pacman -Rns package_name`: The most complete removal, eliminating the package, its unneeded dependencies, and its configuration files (those ending in `.pacsave`). 

Removing Orphaned Packages (Cleanup)

- `pacman -Qdtq`**: Lists all packages that were installed as dependencies but are no longer needed by any other package (orphans).
- **`sudo pacman -Rs $(pacman -Qdtq)`**: Removes all those identified orphaned packages. 

Important Considerations

- **Careful with `-c` (Cascade)**: Avoid `pacman -Rcns` unless you know what you're doing, as it can remove packages that depend on the one being removed, potentially breaking your system.
- **Configuration Files**: `-n` prevents `.pacsave` files from being created, but it won't remove "dotfiles" (like `~/.config/app/`) in your home directory;';


```bash
pacman -Qii | awk '/^Name/ {name=$3} /^Groups/ {print name, $3}' | sort > packages_with_groups.txt
```
- 설치된 패키지의 이름과 그룹 정보를 추출하여, 알파벳 순으로 정렬하여 `packages_with_groups.txt` 파일에 저장합니다. 패키지 관리에 유용한 정보입니다.
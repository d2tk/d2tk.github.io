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


위의 내용들을 나의 말투로 바꾸어서 써줘
최근에 적었던 내용들이 나의 말투야
영어를 한국어로 주로 변경 부탁해


---
## Vibe Response:
```markdown
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
- 패키지 데이터베이스를 업데이트하고, Arch Linux의 키링을 최신 상태로 유지합니다.

```bash
sudo pacman -Syu
```
- 시스템에 설치된 모든 패키지를 최신 버전으로 업데이트합니다.
- 시스템을 안전하고 최신 상태로 유지하는 데 필수적입니다.

### 설치된 패키지 목록 확인

```bash
pacman -Qe | sort > installed_packages.txt
```
- 사용자가 명시적으로 설치한 패키지 목록을 확인하고, 알파벳 순으로 정렬하여 `installed_packages.txt` 파일에 저장합니다.

```bash
pacman -Qii | awk '/^Name/ {name=$3} /^Groups/ {print name, $3}' | sort > packages_with_groups.txt
```
- 설치된 패키지의 이름과 그룹 정보를 추출하여, 알파벳 순으로 정렬하여 `packages_with_groups.txt` 파일에 저장합니다.

### 패키지 제거

#### 기본 제거
```bash
sudo pacman -R package_name
```
- 지정된 패키지를 제거하지만, 의존성과 설정 파일은 남겨둡니다.

#### 의존성 제거 (대부분의 경우 권장)
```bash
sudo pacman -Rs package_name
```
- 패키지와 더 이상 필요하지 않은 의존성을 제거하여 시스템을 깔끔하게 유지합니다.

#### 완전 제거 (흔적 없음)
```bash
sudo pacman -Rns package_name
```
- 패키지, 필요 없는 의존성, 설정 파일(`.pacsave` 파일)을 완전히 제거합니다.

#### 고아 패키지 제거 (정리)
```bash
pacman -Qdtq
```
- 더 이상 필요하지 않은 의존성 패키지(고아 패키지)를 목록으로 표시합니다.

```bash
sudo pacman -Rs $(pacman -Qdtq)
```
- 식별된 모든 고아 패키지를 제거합니다.

### 주의 사항

- **`-c` (Cascade) 옵션 주의**: `pacman -Rcns`는 의존하는 다른 패키지까지 제거할 수 있으므로, 시스템이 깨질 수 있습니다. 사용 시 주의가 필요합니다.
- **설정 파일**: `-n` 옵션은 `.pacsave` 파일이 생성되는 것을 방지하지만, 홈 디렉토리의 "dotfiles" (예: `~/.config/app/`)는 제거하지 않습니다.

### 추가 정보

```bash
pacman -Qii | awk '/^Name/ {name=$3} /^Groups/ {print name, $3}' | sort > packages_with_groups.txt
```
- 설치된 패키지의 이름과 그룹 정보를 추출하여, 알파벳 순으로 정렬하여 `packages_with_groups.txt` 파일에 저장합니다. 패키지 관리에 유용한 정보입니다.
```

이렇게 정리하면 좀 더 깔끔하고 이해하기 쉬운 문서가 됩니다! 😊
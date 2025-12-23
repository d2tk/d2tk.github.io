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
updates the database and sets up up for a partial update

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
```

각각의 코드 블록을 컴퓨터에 대해 잘 모르는 사람에게 쉽게 설명해주는 글을 한국어로 1-2줄 정도로 작성 부탁해요




---
## Vibe Response:
```markdown
### 패키지 업데이트

```bash
sudo pacman -Sy archlinux-keyring
```
- 패키지 데이터베이스를 업데이트하고, Arch Linux의 키링을 최신 상태로 유지합니다. 이는 부분 업데이트를 준비하는 단계입니다.

```bash
sudo pacman -Syu
```
- 시스템에 설치된 모든 패키지를 최신 버전으로 업데이트합니다. 시스템을 안전하고 최신 상태로 유지하는 데 필수적입니다.

### pacman 명령어를 통해 리스트를 만들어 봅시다

다음의 명령을 통해 설치된 패키지들을 확인해 볼 수 있습니다:

```bash
pacman -Qe | sort > installed_packages.txt
```
- 사용자가 명시적으로 설치한 패키지 목록을 확인하고, 알파벳 순으로 정렬하여 `installed_packages.txt` 파일에 저장합니다.

좀 더 자세한 버전은:

```bash
pacman -Qii | awk '/^Name/ {name=$3} /^Groups/ {print name, $3}' | sort > packages_with_groups.txt
```
- 설치된 패키지의 이름과 그룹 정보를 추출하여, 알파벳 순으로 정렬하여 `packages_with_groups.txt` 파일에 저장합니다. 패키지 관리에 유용한 정보입니다.
```
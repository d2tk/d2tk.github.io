---
title: Arch linux에서 새로운 유저 등록하기
date: 2025-12-24
type: article
tags:
  - dev
---

## 


### 안전하게 새로운 id 추가 및 비밀번호 설정


기존 유저명이 'a5'이고 새로운 유저 이름이 'mg'라고 가정을 해보겠습니다

아래의 명령을 통해 현재 로그인 되어 있는 'a5'로 sudo를 실행할 수 있는지 확인합니다

```
groups
```

출력에 `wheel` 또는 `sudo`가 포함되어 있으면 그대로 진행 가능합니다
만약 포함이 안되어 있다면 

```
sudo useradd -m -s /bin/bash mg
```

제대로 되었다면 다음 명령에서 

```
ls /home
```

기존 id외에 mg가 나온다면 제대로 설정된 것입니다

패스워드 설정하고
```
sudo passwd mg
```

sudo 권한까지 부여합니다
```
sudo usermod -aG wheel mg
```

그룹확인
```
id mg
```


sudo systemctl restart sddm

loginctl terminate-user a5

hyprctl dispatch exit


만약 포함이 안되어 있다면 

내용을 잘 읽어보고 빠진 내용이나 잘못된 내용이 있다면 지적해 주세요


---
## Vibe Response:
안녕하세요! 제공해주신 Arch Linux에서 새로운 유저 등록하기 가이드에 대해 검토해 드리겠습니다. 내용이 대체로 잘 작성되어 있지만, 몇 가지 개선점과 보완할 부분이 있습니다.

### 개선점 및 보완 사항:

1. **명령어 설명 추가**:
   - 각 명령어에 간단한 설명을 추가하면 초보 사용자가 이해하기 더 쉬울 것입니다.
   - 예: `sudo useradd -m -s /bin/bash mg` → `-m`은 홈 디렉토리를 생성하고, `-s /bin/bash`는 기본 셸을 bash로 설정합니다.

2. **오류 처리**:
   - `groups` 명령어 출력에 `wheel` 또는 `sudo`가 없는 경우, 어떻게 해야 하는지에 대한 안내가 필요합니다.
   - 현재는 "만약 포함이 안되어 있다면"이라고만 언급되어 있으며, 이후 절차가 없습니다.

3. **재부팅 또는 로그아웃**:
   - 새로운 유저로 전환하거나 시스템을 재부팅할 필요가 있을 수 있습니다. 예를 들어:
     ```bash
     su - mg  # 새로운 유저로 전환
     ```
     또는
     ```bash
     reboot  # 시스템 재부팅
     ```

4. **sudo 권한 확인**:
   - 새로운 유저 `mg`가 `wheel` 그룹에 추가된 후, `sudo` 권한이 제대로 적용되었는지 확인하는 방법이 필요합니다. 예를 들어:
     ```bash
     su - mg
     sudo whoami  # "root"가 출력되면 sudo 권한이 제대로 적용된 것입니다.
     ```

5. **마지막 명령어들**:
   - `sudo systemctl restart sddm`, `loginctl terminate-user a5`, `hyprctl dispatch exit`은 특정 데스크톱 환경(예: SDDM, Hyprland)에서 사용되는 명령어입니다. 이러한 명령어들이 왜 필요한지 설명이 필요합니다. 예를 들어, SDDM을 재시작하여 새로운 유저가 로그인할 수 있도록 하거나, 현재 유저 세션을 종료하는 등의 설명이 필요합니다.

6. **보안 주의사항**:
   - 새로운 유저의 비밀번호를 설정할 때, 강력한 비밀번호를 사용하라는 안내를 추가하는 것이 좋습니다.

### 수정 제안:

```markdown
## 안전하게 새로운 id 추가 및 비밀번호 설정

기존 유저명이 'a5'이고 새로운 유저 이름이 'mg'라고 가정을 해보겠습니다.

아래의 명령을 통해 현재 로그인 되어 있는 'a5'로 sudo를 실행할 수 있는지 확인합니다:

```bash
groups
```

출력에 `wheel` 또는 `sudo`가 포함되어 있으면 그대로 진행 가능합니다. 만약 포함이 안되어 있다면, 먼저 `wheel` 그룹에 추가해야 합니다:

```bash
sudo usermod -aG wheel a5
```

그 후, 로그아웃하고 다시 로그인하여 `groups` 명령어를 실행하여 `wheel` 그룹이 추가되었는지 확인합니다.

### 새로운 유저 추가

새로운 유저 `mg`를 추가합니다:

```bash
sudo useradd -m -s /bin/bash mg
```

- `-m`: 홈 디렉토리 `/home/mg`를 생성합니다.
- `-s /bin/bash`: 기본 셸을 bash로 설정합니다.

유저가 제대로 생성되었는지 확인합니다:

```bash
ls /home
```

기존 유저 외에 `mg`가 출력되면 제대로 설정된 것입니다.

### 비밀번호 설정

새로운 유저 `mg`의 비밀번호를 설정합니다:

```bash
sudo passwd mg
```

강력한 비밀번호를 사용하세요.

### sudo 권한 부여

`mg` 유저에게 sudo 권한을 부여합니다:

```bash
sudo usermod -aG wheel mg
```

그룹이 제대로 추가되었는지 확인합니다:

```bash
id mg
```

출력에 `wheel`이 포함되어 있어야 합니다.

### sudo 권한 확인

새로운 유저로 전환하여 sudo 권한이 제대로 적용되었는지 확인합니다:

```bash
su - mg
sudo whoami
```

"root"가 출력되면 sudo 권한이 제대로 적용된 것입니다.

### 데스크톱 환경 재시작 (선택 사항)

만약 SDDM을 사용 중이라면, SDDM을 재시작하여 새로운 유저가 로그인할 수 있도록 합니다:

```bash
sudo systemctl restart sddm
```

현재 유저 세션을 종료하려면:

```bash
loginctl terminate-user a5
```

Hyprland를 사용 중이라면, Hyprland를 종료합니다:

```bash
hyprctl dispatch exit
```

### 주의사항

- 비밀번호를 설정할 때, 강력한 비밀번호를 사용하세요.
- 새로운 유저로 로그인하여 모든 설정이 제대로 적용되었는지 확인하세요.
```

이렇게 수정하면 더 명확하고 완전한 가이드가 될 것입니다! 추가로 보완할 내용이 있다면 알려주세요.
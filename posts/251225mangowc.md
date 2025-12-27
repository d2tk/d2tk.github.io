---
title: Mangowc 설치법 
date: 2025-12-24
type: article
tags:
  - dev
---

## Mangowc 설치과정


### 안전하게 새로운 id 추가 및 비밀번호 설정


기존 유저명이 'a5'이고 새로운 유저 이름이 'mg'라고 가정을 해보겠습니다

아래의 명령을 통해 현재 로그인 되어 있는 'a5'로 sudo를 실행할 수 있는지 확인합니다

```
groups
```

출력에 `wheel` 또는 `sudo`가 포함되어 있으면 그대로 진행 가능합니다.

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

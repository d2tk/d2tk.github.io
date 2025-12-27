---
title: bash 설정파일 위치
date: 2025-12-27
type: article
tags:
  - dev
---

### bash 설정파일 위치는?

지금 사용중인 Shell 확인하는 명령어 2가지

```
echo $SHELL
```

```
ps -p $$ -o comm=
```

만약 결과가 bash로 나온다면 위치는 

- bash → `~/.bashrc`

만약 결과가 zsh로 나온다면 위치는 

- zsh → `~/.zshrc`

입니다

### 바뀐 bash 파일 현재 세션에 즉시 반영하려면?

다음의 명령어를 실행하시면 됩니다

```
source ~/.bashrc
```

### bash 설정파일 추가적인 내용

사용자별 설정 파일

```
~/.bashrc  # 사용자별 bash 쉘 설정 파일 
~/.bash_profile # 사용자 로그인 시 실행되는 설정 파일
~/.bash_logout # 로그아웃 시 실행되는 설정 파일  
```

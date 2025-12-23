---
title: Firefox 탭 무한증식 오류 해결법
date: 2025-12-07
type: article
tags:
  - dev
---

# Firefox tab이 오류로 무한 증식!!!
주의: 북마크등 중요 자료가 삭제될 수도 있습니다 
저는 extension 프로그램이 날아가서 재설치 해야 했습니다 

## 문제 현상
웹 프로젝트에서 개발하던 파일을 Firefox(이하 FF)로 잘못 열었는데 탭이 무한증식하기 시작했습니다 
설정이 하필이면 마지막으로 실행했던 탭이 열리도록 되어 있었는데 열면 오류로 인해 탭을 무한복제(?)하는 증상이 발현 되었습니다 (동공지진)

닫으면 문제가 일어나지 않았지만 여는 순간 다시 탭은 무한증식 했습니다
열고 놀라고 닫고 생각 다시 열고 놀라고 닫고 또 생각각
그리고 해결책을 찾아보고 여기에 기록을 남깁니다 

## 해결 방법
모든 프로세스를 강제로 종료하기 위해 다음의 명령을 사용 합니다
### 1. Firefox 프로세스 완전 종료

```bash
pkill -9 firefox
```
### 2. 세션 파일 삭제

Firefox의 세션 복원 파일을 삭제합니다

```bash
rm -rf ~/.mozilla/firefox/*.default-release/sessionstore.jsonlz4
rm -rf ~/.mozilla/firefox/*.default-release/sessionstore-backups/
```
### 3. 안전 모드 실행

안전모드에서 Firefox를 시작합니다

```bash
firefox --safe-mode
```

다행히 처음 설치한 모습으로 복구가 되었습니다
몇 분간 당황했습니다 휴~

### 기타 - 프로필 새로 생성 (optional)

새로운 프로필을 생성하여 실행합니다

```bash
firefox --ProfileManager
```
프로필 관리자에서 새로운 프로필을 생성하고 해당 프로필로 실행합니다
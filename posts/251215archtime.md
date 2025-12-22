---
title: 리눅스 기반 컴퓨터에서 멀티부팅시 윈도우 시간이 계속 안 맞는 경우
date: 2025-12-13
type: article
tags:
  - dev
---

## 결론: 리눅스가 메인이면 윈도우 레지스트리 변경 Go~

리눅스를 메인으로 쓰시면 윈도우를 변경하시고 
윈도우가 메인이면 리눅스를 변경하시면 됩니다
각각의 상황에 따른 변경 방법을 아래에 적어 놓았습니다
Arch에서 Seoul/Asia로 지역 설정 하셨으면 그냥 윈도우 레지스트리 변경하시면 됩니다

### 리눅스가 표준 (서버 동기화)

리눅스는 잘못이 없다
이게 다 위도우..읍읍

아래의 명령은 
```
timedatectl set-local-rtc 1 --adjust-system-clock
```

![[img251221.png]]
(은근한 협박???)

다시 원래대로 되돌리고 싶다면?
```
timedatectl set-local-rtc 0 --adjust-system-clock
```
참고로 linux 환경에서 쓰는 명령어 입니다 
쉽게 말하자면 서버 시간에 맞추는게 아니라 메인보드 시계에 리눅스 시간을 맞추겠다는 의미입니다

- 결론: 리눅스는 건드리지 않는다 / 서버에 시간 잘 맞추고 있다

### 문제아는 윈도우다

win+r 로 'regedit' 실행
다음 경로로 들어가서

```
컴퓨터\HKEY_LOCAL_MACHINE\SYSTEM\CurrentControlSet\Control\TimeZoneInformation
```

새로만들기
이름: RealTimeIsUniversal
16진수
값: 1

재부팅
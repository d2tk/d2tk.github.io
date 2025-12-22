---
title: 리눅스 기반 컴퓨터에서 멀티부팅시 윈도우 시간이 계속 안 맞는 경우
date: 2025-12-13
type: article
tags:
  - dev
---

리눅스의 시간을 메인보드 시계에 맞추어 리눅스와 윈도우의 시간이 안 맞는 문제를 해결합니다.
정확히 말하면 윈도우가 정신 못차리는 거지...
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



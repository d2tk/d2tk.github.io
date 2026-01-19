---
title: Linux에서 오디오 입력장치 출력장치 확인하기 
date: 2026-01-17
type: article
tags:
  - dev
---

## PulseAudio 명령어를 통한 장치 목록 확인
PipeWire는 PulseAudio와 호환되도록 설계되어 pactl과 같은 PulseAudio 명령어 도구가 작동합니다

![[img2601192.png]]

### 모든 입력 장치와 출력 장치의 목록과 상세정보를 확인하는 법

```
pactl list 
```

### 위의 명령을 간략하게 확인하는 법

```
pactl list short
```

### 입력장치 확인

입력장치 세부사항 출력
```
pactl list sources
```

입력장치 간단하게 출력
```
pactl list sources short
```

### 입력장치 확인

출력장치 세부사항 출력
```
pactl list sinks
```

출력장치 간단하게 출력
```
pactl list sinks short
```
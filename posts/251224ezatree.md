---
title: 트리 구조로 폴더와 파일들을 구현해 보자
date: 2025-12-24
type: article
tags:
  - dev
---

### tree 명령어
리눅스 명령어 중 tree 명령어를 통해 구조화를 시킬 수 있습니다
참고로 아래 그림에서 사용한 명령어는 다음과 같습니다

```
tree -L 2
```

### eza를 통한 트리구조화
![[eza.png]]

```
eza --tree --level=2
```

만약 tree를 설치하지 않으셨다면 그리고 eza가 있다면 tree 설치없이 이와 같은 명령어로 비슷한 결과물을 얻을 수 있습니다 

![[img260101.png]]

```
eza --tree --level=2 --icons
```

추가로 '--icons' 을 추가하면 이렇게 나타낼 수 있습니다
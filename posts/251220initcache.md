---
title: 메모리 캐시 초기화
date: 2025-12-20
type: article
tags:
  - dev
---

수동으로 메모리 설정하다가 무언가 꼬였다 싶을때
다음을 이용하시기 바랍니다 

먼저 관리자 권한으로 CMD 실행하고
다음의 명령어를 순차적으로  입력합니다

```
ipconfig /flushdns
net stop superfetch
net start superfetch # 캐시 초기화
```

메모리 압축해제를 하려면 다음의 명령어를 사용해 볼 수도 있습니다

다음의 내용은 고급 사용자만 선택적으로 시도해볼 수 있습니다
```
Disable-MMIO # 
```

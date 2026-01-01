---
title: fastfetch 커스텀 로고로 세팅하기
date: 2025-12-28
type: article
tags:
  - dev
---

### Fastfetch에 나만의 로고 만들어 넣기 

![[img260101.png]]

기존 로고를 대신해서 저만의 로고(ASCII 아트)를 만들어 넣어 보았습니다 

로고를 변경하려면 arch 기준 fastfetch 설정파일을 수정해야 합니다 
설정파일 위치

```
~/.config/fastfetch/config.jsonc
```

파일 타입을 아래와 같이 해주시고 'source'에 같은 폴더에 만들어 놓은 빈 텍스트 파일위치를 잡아 줍니다

```
"logo": {
    "type": "file",
    "source": "~/.config/fastfetch/custom-arch.txt",
    "padding": {
      "top": 1,
      "right": 4
    }
  },
  "display": {
    "separator": " : "
  },
```

빈 텍스트 파일에 로고 파일을 붙여넣기 하셔야 하는데 ASCII 아트는 아래의 사이트를 통해 만들 수 있습니다

https://www.asciiart.eu/
![[img260101_1.png]]













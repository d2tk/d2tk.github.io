---
title: 마크다운 파일 렌더링 문제
date: 2025-12-10
type: article
tags:
  - dev
---

## 마크다운 문법에도 정상 코드에도 오류가 없었는데?

### 문제 상황
마크다운(이하 md) 파일을 웹페이지에 연결하여 보여주는 방법을 계속 찾았는데 매번 화면이 안나오는 증상(freeze) 다시 말하자면 페이지가 멈춰버리는 문제가 발생 했습니다

여러가지 원인들을 검토하고 확인하였는데 결국 아래와 같이 해결했습니다

### 주요 오류 메시지

```
Uncaught Error: Objects are not valid as a React child (found: [object Date])
```

### 문제의 원인

**날짜 형식 문제**: 마크다운 파일이나 코드에서 날짜를 `Date` 객체로 처리하려고 하지만, React는 이를 직접 표시할 수 없습니다

### 해결방법

**날짜를 문자열로 변환**: 날짜를 표시할 때는 `Date` 객체를 문자열로 변환해야 합니다
   ```javascript
   // 잘못된 예
   <span>{new Date()}</span>

   // 올바른 예
   <span>{new Date().toString()}</span>
   ```


### 핵심 수정 사항

해당 파일을 아래와 같이 수정 (ex. ArticlesSection.tsx)
 ```javascript
// 날짜를 안전하게 문자열로 변환
const formatDate = (date: string | Date): string => {
  if (typeof date === 'string') {
    return date;
  }
  if (date instanceof Date) {
    return date.toISOString().split('T')[0]; // 2025-12-15 형식
  }
  return String(date);
};
```


해당 파일을 아래와 같이 수정 (ex. types.ts)
 ```javascript
// types.ts 또는 types/index.ts
export interface Post {
  slug: string;
  title: string;
  date: string;  // ✅ string으로 명시
  content: string;
  tags: string[];
  tag: string;
  // ... 기타 필드
}
```

### 기타

마크다운 파일에 날짜를 작성할 때는 `YYYY-MM-DD` 형식으로 작성합니다

혹시 저처럼 랜더링이 안되어 웹페이지가 멈춘다면 날짜 형식을 의심해 보시기 바랍니다
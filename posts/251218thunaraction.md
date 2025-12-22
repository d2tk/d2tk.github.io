---
title: thunar 액션 설정 하는법
date: 2025-12-18
type: article
tags:
  - dev
---

## thunar에서 액션 설정 

### 기본설정파일 위치

thunar의 기본 설정 파일의 위치는 다음과 같습니다(arch 기준)

```
~/.config/Thunar/uca.xml
```

### Custom Action 사용하기 1 - open terminal here

좌측 상단의 'edit' 메뉴에서 'Configure custom actions'를 선택합니다 + 버튼을 눌러 생성합니다
필요한 내용들을 채워넣고 'thunar -q' 명령을 통해 파일을 종료하고 다시 시작하면 설정이 반영됩니다 

저는 터미널로 ghostty를 쓰고 있습니다
마우스 오른쪽에 'Open terminal here'을 넣은 경우 아래와 같은 설정이 uca.xml에 추가됩니다

```XML
<action>
	<icon>utilities-terminal</icon>
	<name>Open Terminal Here</name>
	<submenu></submenu>
	<unique-id>#고유ID위치-thunrar 자동생성</unique-id>
	<command>ghostty --working-directory=%f</command>
	<description>현재 위치에서 터미널을 엽니다 </description>
	<range></range>
	<patterns>*</patterns>
	</action>
</action>

```

'--working-directory=%f' 는 제가 직접 넣어줬습니다

### Custom Action 사용하기 2 - 7zip을 이용하여 압축하기

저는 압축하기에서 ark와 7zip을 사용하고 있습니다
7zip을 이용하여 폴더를 압축하는 기능을 우측 마우스 클릭 메뉴에 추가하고 싶은 경우
위와 똑같은 방식으로 좌측 상단의 'edit' 메뉴를 통해 'Configure custom actions'를 선택하고 + 버튼을 눌러 생성합니다

압축명령어에 따라 옵션들이 다르므로 잘 살펴보시고 적용하시기 바랍니다

```XML
<action>
	<icon>application-x-compress</icon>
	<name>Compress</name>
	<submenu></submenu>
	<unique-id>#고유ID위치-thunrar 자동생성</unique-id>
	<command><command>bash -c 'name=$(basename %f); 7z a "${name}.7z" %f'</command>
	<description>폴더를 압축합니다</description>
	<range></range>
	<patterns>*</patterns>
	<directories/>
</action>
```

### 일부 구성에 대한 설명

```XML
<unique-id>#고유ID위치-thunrar 자동생성</unique-id>
```

정상적으로 메뉴를 통해 생성하셨으면 자동으로 저 부분은 uca.xml 파일에 채워집니다

```XML
 <name>Open Terminal Here</name>
```

Thunar의 컨텍스트 메뉴에서 표시되는 이름입니다

```XML
<range></range>
```

 작업이 적용될 파일 범위를 지정합니다
 비어 있는 경우, 모든 파일에 적용됩니다

```XML
 <patterns>*</patterns
```

별표 기호는 모든 파일을 의미합니다

```XML
</directories>
```

디렉토리에 적용할 때만 사용합니다
파일 압축은 폴더에 대해서만 작동하게 하고 싶어서 저런 명령이 들어갔습니다

### 최종 옵션 공유

```XML
<?xml version="1.0" encoding="UTF-8"?>
<actions>
<action>
	<icon>utilities-terminal</icon>
	<name>Open Terminal Here</name>
	<submenu></submenu>
	<unique-id>#고유ID위치-thunrar 자동생성</unique-id>
	<command>ghostty --working-directory=%f</command>
	<description>위치에서 터미널을 엽니디 </description>
	<range></range>
	<patterns>*</patterns>
	</action>
<action>
	<icon>application-x-compress</icon>
	<name>Compress</name>
	<submenu></submenu>
	<unique-id>#고유ID위치-thunrar 자동생성</unique-id>
	<command><command>bash -c 'name=$(basename %f); 7z a "${name}.7z" %f'</command>
	<description>폴더를 압축합니다</description>
	<range></range>
	<patterns>*</patterns>
	<directories/>
</action>
</actions>
```


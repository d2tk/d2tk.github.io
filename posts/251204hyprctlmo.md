---
title: 하이퍼랜드에서 모니터 설정하기 - 초보자를 위한 완전 가이드
date: 2025-12-04
type: article
tags:
  - dev
---
## 1. 현재 모니터 상태 확인하기
하이퍼랜드(이하 hyprland) 상황에서 모니터 상태 확인의 핵심은 아래에 나올 명령어 입니다
순서변경이나 미묘한 위치변경을 위해 다중모니터 설정시 필요합니다

```
hyprctl monitors
```

<실제 결과물>
```
Monitor DP-1 (ID 0):
        1920x1080@143.98100 at 0x0
        description: LG Electronics LG ULTRAGEAR 401NTBK7S173
        make: LG Electronics
        model: LG ULTRAGEAR
        physical size (mm): 530x300
        serial: 401NTBK7S173
        active workspace: 1 (1)
        special workspace: 0 ()
        reserved: 0 32 0 0
        scale: 1.00
        transform: 0
        focused: no
        dpmsStatus: 1
        vrr: false
        solitary: 0
        solitaryBlockedBy: not opaque,subsurfaces
        activelyTearing: false
        tearingBlockedBy: next frame is not torn,user settings,missing candidate
        directScanoutTo: 0
        directScanoutBlockedBy: user settings,software renders/cursors,missing candidate
        disabled: false
        currentFormat: XRGB8888
        mirrorOf: none
        availableModes: 1920x1080@143.98Hz 2560x1440@74.97Hz 1920x1080@119.98Hz 1920x1080@74.99Hz 1920x1080@60.00Hz 1920x1080@59.94Hz 1280x1024@75.03Hz 1280x720@59.94Hz 1024x768@119.99Hz 1024x768@75.03Hz 1024x768@60.00Hz 800x600@119.97Hz 800x600@75.00Hz 800x600@60.32Hz 720x480@59.94Hz 640x480@119.52Hz 640x480@75.00Hz 640x480@59.94Hz
        colorManagementPreset: srgb
        sdrBrightness: 1.00
        sdrSaturation: 1.00
        sdrMinLuminance: 0.20
        sdrMaxLuminance: 80

Monitor HDMI-A-2 (ID 1):
        3440x1440@59.97300 at 1920x0
        description: LG Electronics LG HDR WQHD 0x000833C0
        make: LG Electronics
        model: LG HDR WQHD
        physical size (mm): 800x340
        serial: 0x000833C0
        active workspace: 2 (2)
        special workspace: 0 ()
        reserved: 0 32 0 0
        scale: 1.00
        transform: 0
        focused: yes
        dpmsStatus: 1
        vrr: false
        solitary: 0
        solitaryBlockedBy: windowed mode,missing candidate
        activelyTearing: false
        tearingBlockedBy: next frame is not torn,user settings,missing candidate
        directScanoutTo: 0
        directScanoutBlockedBy: user settings,software renders/cursors,missing candidate
        disabled: false
        currentFormat: XRGB8888
        mirrorOf: none
        availableModes: 3440x1440@59.97Hz 3840x2160@59.94Hz 3840x2160@50.00Hz 3840x2160@29.97Hz 3840x2160@25.00Hz 3840x2160@23.98Hz 3440x1440@49.99Hz 3440x1440@29.99Hz 2560x1080@60.00Hz 1920x1080@60.00Hz 1920x1080@59.94Hz 1920x1080@50.00Hz 1680x1050@59.95Hz 1600x900@60.00Hz 1280x1024@60.02Hz 1280x800@59.81Hz 1152x864@60.00Hz 1280x720@60.00Hz 1280x720@59.94Hz 1280x720@50.00Hz 1024x768@60.00Hz 800x600@60.32Hz 720x576@50.00Hz 720x480@59.94Hz 640x480@59.94Hz 640x480@59.93Hz
        colorManagementPreset: srgb
        sdrBrightness: 1.00
        sdrSaturation: 1.00
        sdrMinLuminance: 0.20
        sdrMaxLuminance: 80
```

추가 옵션:

•  hyprctl monitors all: 모든 모니터의 상세 정보를 보여줍니다
•  hyprctl monitors active: 활성화된 모니터만 보여줍니다
•  hyprctl monitors json: JSON 형식으로 정보를 출력합니다 (스크립트에서 사용하기 좋음)

## 2. 모니터 배치 문제 진단

확인해보니 시스템상에서 모니터들이 윗선 정렬이 되고 있었습니다
그러다보니 화면 하단에서 마우스가 우측에서 좌측으로 넘어갈때 턱에 걸리는 느낌이 나타납니다

정말 미묘하게 신경 쓰입니다
아마 이런 문제에 민감하지 않으신 분들은 이 글을 읽고 있지 않으실 겁니다 

```
# 하단 정렬 (모니터들의 아래쪽이 일직선)
monitor=DP-1,1920x1080@143.98,0x360,1        # 1440-1080=360
monitor=HDMI-A-2,3440x1440@59.97,1920x0,1

# 중앙 정렬 (모니터들의 중심이 일직선)
monitor=DP-1,1920x1080@143.98,0x180,1        # (1440-1080)/2=180
monitor=HDMI-A-2,3440x1440@59.97,1920x0,1

# 상단 정렬 (모니터들의 위쪽이 일직선)
monitor=DP-1,1920x1080@143.98,0x0,1
monitor=HDMI-A-2,3440x1440@59.97,1920x0,1
```

하단 정렬모드로 가보겠습니다
내용을 보시면 이해가 빠른신 분들은 대략 눈치채셨을겁니다 
```
DP-1 <- 왼쪽
HDMI-A-2 <- 오른쪽 
```

만약 위치가 바뀐 분들은 저 숫자만 서로 변경하면 됩니다

### 3. 설정 파일 수정하기
하이퍼랜드 설정파일 위치

```
~./config/hypr/hyprland.conf
```

파일을 열고 기존의 내용을 다음과 같이 고칩니다

<기존내용>

```
monitor = ,preferred,auto,auto
```

쉼표앞에 빈공간 있는거 맞습니다

<수정한내용>

```
monitor=DP-1,1920x1080@143.98,0x360,1 # 1440-1080=360 
monitor=HDMI-A-2,3440x1440@59.97,1920x0,1
```

이제 아래쪽에서 마우스가 걸리는 상황없이 편안하게 이동합니다 

### 5. 대안 nwg-displays
GUI 환경에서 모니터 설정 작업하고 싶으시다면 nwg-displays를 추천드립니다
```
sudo pacman -S nwg-displays
```

### 6. 주의 ⚠️
설정 파일을 수정하실 때는 반드시 백업을 하시기 바랍니다


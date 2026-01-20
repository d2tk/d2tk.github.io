---
title: Hyprland에서 포커스된 창을 워크스페이스로 보내는 방법
date: 2026-01-19
type: article
tags:
  - dev
---

### 포커스 된 창을 특정 번호의 새로운 워크스페이스로 보내는 방법

- movetoworkspace 

기본적으로 movetoworkspace는 창을 보낸 뒤 그 워크스페이스로 따라가서 포커스를 옯깁니다

Super키 + Shift키 + 숫자를 누르면 새로운 워크스페이스가 생성되고(이전에 생성된게 없을 시) 현재 포커스 되어 있는 창을 생성된 워크스페이스로 이동 합니다

예를 들어 Chrome 창을 열었다가 특정한 워크스페이스로 보내고 싶은 경우 (기본적으로 hyprland 환경에서 듀얼 모니터랑면 워크 스페이스 1,2는 이미 점유된 상태입니다 )

Super키 + Shift키 + 3 을 누르면 크롬창과 함께 워크스페이스 3번으로 이동하게 됩니다

이러한 기능을 쓰기 위해서는 keybinds(keybindings.conf) 파일에 다음과 같은 설정이 있어야 합니다 

```
# Move focused window to a workspace
bind = $mainMod+Shift, 1, movetoworkspace, 1
bind = $mainMod+Shift, 2, movetoworkspace, 2
bind = $mainMod+Shift, 3, movetoworkspace, 3
bind = $mainMod+Shift, 4, movetoworkspace, 4
bind = $mainMod+Shift, 5, movetoworkspace, 5
bind = $mainMod+Shift, 6, movetoworkspace, 6
bind = $mainMod+Shift, 7, movetoworkspace, 7
bind = $mainMod+Shift, 8, movetoworkspace, 8
bind = $mainMod+Shift, 9, movetoworkspace, 9
bind = $mainMod+Shift, 0, movetoworkspace, 10
```

위는 제가 쓰고 있는 설정입니다 

### 포커스 된 창'만' 특정 번호의 새로운 워크스페이스로 보내는 방법

-movetoworkspacesilent

앞서 상황에서는 창 이동후 포커스도 같이 이동했지만 현재 작업하는 창이 부족해서 그 옆의 창만 이후에 보기 위해 보내고 싶을 때가 있습니다 
이러한 때 사용하는 방법이 'movetoworkspacesilent' 입니다 

아래와 같은 설정을 통해
Super키 + Alt키 + 3 을 통해 워크스페이스 3으로 보낼 수 있습니다

```
# Move focused window to a workspace silently
bind = $mainMod+Alt, 1, movetoworkspacesilent, 1
bind = $mainMod+Alt, 2, movetoworkspacesilent, 2
bind = $mainMod+Alt, 3, movetoworkspacesilent, 3
bind = $mainMod+Alt, 4, movetoworkspacesilent, 4
bind = $mainMod+Alt, 5, movetoworkspacesilent, 5
bind = $mainMod+Alt, 6, movetoworkspacesilent, 6
bind = $mainMod+Alt, 7, movetoworkspacesilent, 7
bind = $mainMod+Alt, 8, movetoworkspacesilent, 8
bind = $mainMod+Alt, 9, movetoworkspacesilent, 9
bind = $mainMod+Alt, 0, movetoworkspacesilent, 10
```
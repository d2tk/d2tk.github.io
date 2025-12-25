---
title: Ghostty는 처음인데요? (Arch Linux기준)
date: 2025-12-23
type: article
tags:
  - dev
---

## Ghostty 설정 
Ghostty는 다음의 링크에서 다운로드 받을 수 있습니다
[Ghostty Homepage](https://ghostty.org/)

### Ghostty 기본설정 단축키
Ghostty는 다양한 단축키를 제공합니다
아래는 기본 단축키 목록입니다
```sh
super + ctrl  + shift + arrow_down    resize_split:down,10
super + ctrl  + shift + arrow_left    resize_split:left,10
super + ctrl  + shift + arrow_right   resize_split:right,10
super + ctrl  + shift + arrow_up      resize_split:up,10
super + ctrl  + shift + j             write_screen_file:copy
ctrl  + alt   + shift + j             write_screen_file:open
super + ctrl  + bracket_left          goto_split:previous
super + ctrl  + bracket_right         goto_split:next
ctrl  + alt   + arrow_down            goto_split:down
ctrl  + alt   + arrow_left            goto_split:left
ctrl  + alt   + arrow_right           goto_split:right
ctrl  + alt   + arrow_up              goto_split:up
ctrl  + shift + ,                     reload_config
ctrl  + shift + enter                 toggle_split_zoom
ctrl  + shift + tab                   previous_tab
ctrl  + shift + page_down             jump_to_prompt:1
ctrl  + shift + page_up               jump_to_prompt:-1
ctrl  + shift + arrow_left            previous_tab
ctrl  + shift + arrow_right           next_tab
ctrl  + shift + a                     select_all
ctrl  + shift + c                     copy_to_clipboard
ctrl  + shift + e                     new_split:down
ctrl  + shift + i                     inspector:toggle
ctrl  + shift + j                     write_screen_file:paste
ctrl  + shift + n                     new_window
ctrl  + shift + o                     new_split:right
ctrl  + shift + p                     toggle_command_palette
ctrl  + shift + q                     quit
ctrl  + shift + t                     new_tab
ctrl  + shift + v                     paste_from_clipboard
ctrl  + shift + w                     close_tab:this
alt   + digit_1                       goto_tab:1
alt   + digit_2                       goto_tab:2
alt   + digit_3                       goto_tab:3
alt   + digit_4                       goto_tab:4
alt   + digit_5                       goto_tab:5
alt   + digit_6                       goto_tab:6
alt   + digit_7                       goto_tab:7
alt   + digit_8                       goto_tab:8
alt   + 1                             goto_tab:1
alt   + 2                             goto_tab:2
alt   + 3                             goto_tab:3
alt   + 4                             goto_tab:4
alt   + 5                             goto_tab:5
alt   + 6                             goto_tab:6
alt   + 7                             goto_tab:7
alt   + 8                             goto_tab:8
alt   + 9                             last_tab
alt   + f4                            close_window
ctrl  + equal                         increase_font_size:1
ctrl  + +                             increase_font_size:1
ctrl  + ,                             open_config
ctrl  + -                             decrease_font_size:1
ctrl  + 0                             reset_font_size
ctrl  + enter                         toggle_fullscreen
ctrl  + tab                           next_tab
ctrl  + insert                        copy_to_clipboard
ctrl  + page_down                     next_tab
ctrl  + page_up                       previous_tab
shift + end                           scroll_to_bottom
shift + home                          scroll_to_top
shift + insert                        paste_from_selection
shift + page_down                     scroll_page_down
shift + page_up                       scroll_page_up
shift + arrow_down                    adjust_selection:down
shift + arrow_left                    adjust_selection:left
shift + arrow_right                   adjust_selection:right
shift + arrow_up                      adjust_selection:up
copy                                  copy_to_clipboard
paste                                 paste_from_clipboard
```

위의 내용은 다음의 명령어를 통해 확인할 수 있습니다
```sh
ghostty +list-keybinds --default
```


### 그런데 내 손에 단축키가 익숙하지 않습니다
단축키가 익숙하지 않다면, 환경설정 파일을 수정하여 원하는 단축키로 변경할 수 있습니다

### 환경설정 파일 위치 
```
~/.config/ghostty/config
```
arch-linux 기준입니다

### 배경색 변경
```
background = 001F3D
```

### 폰트색 변경
```
foreground = E2852E
```

### 단축키(keybind)
```
keybind=ctrl+q=close_window
keybind=alt+f4=quit
```
- `ctrl+q`: 창을 닫는 단축키입니다.
- `alt+f4`: Ghostty를 종료하는 단축키입니다.

이렇게 설정 파일을 수정하면 Ghostty를 더 편리하게 사용할 수 있습니다

좀 더 자세한 설정방법은 Ghostty 공식문서(Custom Keybindings)를 확인하시기 바랍니다


[Ghostty 키 설정 공식문서](https://ghostty.org/docs/config/keybind)
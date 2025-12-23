---
title: 제가 사용하고 있는 linux 프로그램 리스트
date: 2025-12-06
type: article
tags:
  - dev
---

사용했던 프로그램들

#### file manager
dolphin - hypr 공식 파일매니저
thunar - 가볍고 심플
yazi - 더 가볍고 더 심플
lf



- 터미널 에뮬레이터
- 텍스트 에디터
- 웹 브라우저
- 미디어 플레이어
- 시스템 모니터링
- 개발 도구
Arch Linux를 사용하고 있어요
카테고리에 맞게 설치된 패키지 리스트를 확인하고, 주요 프로그램들을 카테고리별로 정리 부탁드립니다
작성된 샘플 포맷을 참고하여 작성해 주세요




---
## Vibe Response:
Unfortunately, I don't have direct access to your system to run commands like `pacman -Qe`. However, I can guide you on how to get the information you need and help you organize it in the format you provided.

### Steps to Get Installed Packages on Arch Linux

1. **Open a terminal** on your Arch Linux system
2. Run this command to list explicitly installed packages:
   ```bash
   pacman -Qe | sort > installed_packages.txt
   ```
3. You can also get a more detailed list with:
   ```bash
   pacman -Qii | awk '/^Name/ {name=$3} /^Groups/ {print name, $3}' | sort > packages_with_groups.txt
   ```

### How to Organize Your Programs

Based on your sample format, here's how you can organize your programs. I'll provide a template that you can fill in with your actual installed programs:

```markdown
#### file manager
dolphin - hypr 공식 파일매니저
thunar - 가볍고 심플
yazi - 더 가볍고 더 심플
lf

#### terminal emulator
alacritty - GPU 가속 터미널
kitty - 빠른 GPU 기반 터미널
konsole - KDE 터미널
gnome-terminal - GNOME 기본 터미널
foot - Wayland 네이티브 터미널

#### text editor
vim - 강력한 CLI 편집기
neovim - 현대화된 vim
nano - 간단한 CLI 편집기
gedit - GUI 텍스트 편집기
kate - KDE 고급 편집기
vs-code - Visual Studio Code

#### web browser
firefox - Mozilla Firefox
chromium - 오픈소스 Chrome
brave - 프라이버시 중심 브라우저
librewolf - 프라이버시 강화 Firefox
falkon - Qt 기반 경량 브라우저

#### media player
mpv - 강력한 미디어 플레이어
vlc - 다목적 미디어 플레이어
smplayer - MPV 기반 GUI 플레이어
clementine - 음악 플레이어
spotify - 스트리밍 서비스

#### system monitoring
htop - 인터랙티브 프로세스 뷰어
btop - 현대화된 시스템 모니터
glances - 종합 시스템 모니터
neofetch - 시스템 정보 표시
nvidia-smi - NVIDIA GPU 모니터링

#### development tools
git - 버전 관리 시스템
gcc - C 컴파일러
python - Python 인터프리터
nodejs - JavaScript 런타임
docker - 컨테이너 플랫폼
```

### Next Steps

1. Run the commands above to get your installed packages list
2. Share the output with me (you can copy-paste relevant sections)
3. I'll help you organize them into the categories you want

Alternatively, if you can tell me which programs you remember installing in each category, I can help format them nicely for your markdown file.

Would you like me to:
1. Provide more specific commands to categorize your packages automatically?
2. Help you create a script to organize your packages by category?
3. Or would you prefer to manually share your installed programs with me?
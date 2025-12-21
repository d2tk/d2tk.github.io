---
title: 바이오스 세팅 (arch/UEFI/Limine)
date: 2025-12-21
type: article
tags:
  - dev
---

현재 시스템에서 개발이나 다른 일반적인 작업들은 모두 arch linux에서 진행하고 있습니다
윈도우는 지인들과 게임을 할 때만 사용합니다. 

불의의 사고(?)로 16기가 메모리가 영원히 돌아올 수 없는 강을 건넌 관계로 최대의 성능을 뽑기 위한 Bios 세팅을 적어 봅니다
반드시 이게 해답은 아니기 때문에 각자 본인의 환경에 맞게 수정 하시기 바랍니다

- Secure Boot는 비활성화 
처음에 설치시에만 강제되는 상황이고 그 이후에는 무엇을 선택해도 정상 부팅이 되는 상황이라 

- IOMMU - Disabled 
IOMMU (Input-Output Memory Management Unit)
가상화와 관련되어 있어 메모리상황에 따라 이게 독이 될수도 

- Above 4G Decoding - Disabled 
메모리가 줄어든 상황에서는 오히력 독이 될 수도?
FPS를 더 얻기 보다는 안정적인 상황이 필요합니다

-  SMT - Disabled
SMT(Intel의 경우 Hyper-Threading)이란?
Simultaneous Multi-Threading 으로 AMD CPU에서 사용하는 기술로, 물리 코어 하나당 2개의 논리 코어를 제공합니다.

- SVM -Disabled
게임하는데 무슨 가상화

- C-states - Enabled (CPU 전원관리)

- Cpu Governor - Performance 


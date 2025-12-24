---
title: 바이오스 세팅 (arch/UEFI/Limine)
date: 2025-12-21
type: article
tags:
  - dev
---
### 저의 UEFI 세팅

현재 시스템에서 개발이나 다른 일반적인 작업들은 모두 arch linux에서 진행하고 있습니다
윈도우는 지인들과 게임을 할 때만 사용합니다. 

불의의 사고(?)로 16기가 메모리가 영원히 돌아올 수 없는 강을 건넌 관계로 최대의 성능을 뽑기 위한 Bios 세팅을 적어 봅니다
반드시 이게 해답은 아니기 때문에 각자 본인의 환경에 맞게 수정 하시기 바랍니다

#### - Secure Boot - Disabled
Secure Boot는 시스템이 부팅될 때 실행되는 코드의 무결성을 확인하는 기능입니다. Windows 11 설치 시에만 필요하며, 이후에는 비활성화해도 정상적으로 부팅됩니다

#### - IOMMU - Disabled 
IOMMU (Input-Output Memory Management Unit)
OMMU는 가상화와 관련된 기능으로, 메모리 관리를 최적화합니다
그러나 메모리 상황이 좋지 않은 경우 성능 저하를 일으킬 수 있어 비활성화했습니다

#### - Above 4G Decoding - Disabled 
마찬가지로 FPS를 더 얻기 보다는 안정적인 상황이 필요합니다

#### -  SMT - Disabled
SMT(Intel의 경우 Hyper-Threading)이란?
Simultaneous Multi-Threading 으로 AMD CPU에서 사용하는 기술로, 물리 코어 하나당 2개의 논리 코어를 제공하여 성능을 향상시키는 기술입니다
그러나 특정 작업에서는 성능 저하를 일으킬 수 있어 비활성화했습니다 (테스트중)

#### - SVM -Disabled
SVM은 가상화 기능을 활성화하는 설정입니다
Docker나 가상 머신을 사용하지 않는 경우 비활성화해도 됩니다

#### - C-states - Enabled (CPU 전원관리)
C-states는 CPU의 전원 관리를 최적화하여 전력 소모를 줄이는 기능입니다
성능에 큰 영향을 미치지 않으므로 활성화하는 것이 좋습니다

이 설정들은 각자의 환경에 따라 다를 수 있으므로, 본인의 시스템에 맞게 조정하시기 바랍니다

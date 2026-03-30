---
title: llama.cpp setting 값
date: 2026-03-15
type: article
tags:
  - dev
---

### llama.cpp

server 세팅값
```
CTX_SIZE=${1:-6144}

echo "Starting llama-server on port 9998 with context $CTX_SIZE..."
$SERVER_BIN \
  -m $MODEL_PATH \
  -ngl 42 \
  -c $CTX_SIZE \
  -ctk q4_0 \
  -ctv q4_0 \
  -b 2048 \
  -ub 1024 \
  --cont-batching \
  -np 1 \
  -fa on \
  -t 3 \
  --threads-batch 6 \
  --temp 0.6 \
  --no-mmap \
  --port 9998
```



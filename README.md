---
home: true
actionText: 前往 →
actionLink: /guide/
---

# 文档编写

只需在 `guide` 目录新增对应模块的文档即可

```text
│  README.md
│  
├─quick-start
│      README.md
│      struct.md
│      usage.md
│      
├─suit
│  │  ac.md
│  │  acman.md
│  │  air-condition.md
│  │  bedwet.md
│  │  call.md
│  │  card-power.md
│  │  control-lamp.md
│  │  curtain.md
│  │  door.md
│  │  gas.md
│  │  humidity.md
│  │  led-lamp.md
│  │  README.md
│  │  sensor.md
│  │  smog.md
│  │  socket.md
│  │  switch-mix.md
│  │  switch-plug.md
│  │  water.md
│  │  wire-condition.md
│  │  
│  └─snapshot
│          control-lamp1.png
│          control-lamp2.png
│          led-lamp.png
│          wire-condition.png
│          
└─tools
        converter.md
        descriptor.md
        README.md
        suiter.md
        typehints.md
```

## 本地开发模式

`npm run docs:dev`

## 构建部署

由于 `gitlab` 服务上进行 `npm install` 时经常出现安装依赖异常，故在提交时先构建，并把构建文件一并提交，`gitlab` 服务仅对构建内容进行部署。

`npm run docs:build`

# 传感器

::: tip ~
传感器工厂套件类，API文档 [sensorequip](https://aliiot.on-bright.com:8090/hardware-suit/classes/sensorequip.html)。
目前已集成 尿床、一键呼叫、门窗磁、燃气、烟感、水浸传感器。
:::

## 使用

```js
const factory = new SensorEquip(status, deviceType, deviceChildType)
const detectEquip = factory.create()
const descriptor = detectEquip.getStatusDescriptor()
```

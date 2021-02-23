# 红外空调

::: tip ~
 红外空调套件类, API文档 [airconditionequip](https://aliiot.on-bright.com:8090/hardware-suit/classes/airconditionequip.html)
:::

## 协议

## 使用

```js
import { AirConditionEquip, ModeEnum } from 'hardware-suit'
const equip = new AirConditionEquip(status, deviceType, deviceChildType)
const fanSpeed = equip.getSpeed()
equip.setMode(ModeEnum.AUTO)
```

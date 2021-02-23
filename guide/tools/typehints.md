# 检测类

::: tip ~
 设备类型检测，可以检测主类型、子类型、所在分组等, 接口详情查看 API 文档 [typehints](https://aliiot.on-bright.com:8090/hardware-suit/classes/_typehints.html)
:::

## 细节补充

类型检测与 `Suiter` 配置表对照，自动动态定义对应的类型检测方法。 如

```js
Suiter = {
	led: {
		...,
		group: {
      root: ['01'],
      simple: ['01', '02'],
      color: ['01', '02', '03'], // x 色灯
      way: ['13'],
      // 单色灯
      plain: ['01'],
      // 双色灯
      bicolor: ['02'],
      // 三色灯
      tricolor: ['03']
    }
  },
	socketSwitch: {}
}
```

`TypeHints` 检测器根据 `Suiter` 的配置自动生成主类型判断方法、组类型或子类型判断方法，如判断是否灯类型的 `isLed`、是否是单色灯类型的 `isPlainLed`，诸如此类。

## 使用

方法： 方法名(deviceType, deviceChildType)

```js
import { TypeHints } from 'hardware-suit'
const deviceType = '04'
const deviceChildType = '01'
const mainType = TypeHints.isLed(deviceType)
const childType = TypeHints.isPlainLed(deviceType, deviceChildType)

```

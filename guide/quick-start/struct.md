# 开发

## 结构

```text
│  .editorconfig
│  .eslintignore
│  .eslintrc.js
│  .gitignore
│  .gitlab-ci.yml
│  .npmignore
│  .prettierignore
│  .releaserc.json
│  CHANGELOG.md
│  LICENSE
│  package.json
│  README.md
│  t.txt
│  tsconfig.json
│  tslint.json
│  webpack.config.js
│  
├─dist
│      hardware-suit.js
│      hardware-suit.js.map
│      hardware-suit.min.js
│      hardware-suit.min.js.map
│      
├─src
│  │  extend.d.ts
│  │  index.ts // 暴露套件
│  │  
│  ├─entity   // 实体状态类，用于解析、储存硬件设备状态码
│  │  │  AirConditionModel.ts
│  │  │  CardPowerStatus.ts
│  │  │  ControlLampStatus.ts
│  │  │  CurtainStatus.ts
│  │  │  LampStatus.ts
│  │  │  SensorAcmanStatus.ts
│  │  │  SensorAcStatus.ts
│  │  │  SensorDetectStatus.ts
│  │  │  SocketStatus.ts
│  │  │  Status.ts
│  │  │  SwitchMixStatus.ts
│  │  │  SwitchPlugStatus.ts
│  │  │  SwitchStatus.ts
│  │  │  WireConditionStatus.ts
│  │  │  
│  │  └─sensor // @deprecated 待整合
│  │          HumiditySensorStatus.ts
│  │          SensorStatus.ts
│  │          
│  ├─modules // 套件模块，用于执行硬件设备行为及获取状态描述
│  │      AirConditionEquip.ts
│  │      BaseEquip.ts
│  │      CardPowerEquip.ts
│  │      ControlLampEquip.ts
│  │      CurtainEquip.ts
│  │      HumidityEquip.ts
│  │      LampEquip.ts
│  │      LedLampEquip.ts
│  │      SensorAcEquip.ts
│  │      SensorAcmanEquip.ts
│  │      SensorBedWetEquip.ts
│  │      SensorCallEquip.ts
│  │      SensorDoorEquip.ts
│  │      SensorEquip.ts
│  │      SensorGasEquip.ts
│  │      SensorSmogEquip.ts
│  │      SensorWaterEquip.ts
│  │      SocketEquip.ts
│  │      SwitchEquip.ts
│  │      SwitchEquip1.ts
│  │      SwitchMixEquip.ts
│  │      SwitchPlugEquip.ts
│  │      WireConditionEquip.ts
│  │      
│  ├─shared
│  │      constant.ts
│  │      
│  ├─test
│  │      Converter.spec.ts
│  │      Descriptor.spec.ts
│  │      LedLampEquip.spec.ts
│  │      String.spec.ts
│  │      TypeHints.spec.ts
│  │      
│  └─utils // 工具类
│          converter.ts
│          Descriptor.ts
│          log.ts
│          string.ts
│          suiter.ts
│          typeHints.ts
            
```

## 结构说明

|   模块  |  说明  |
|  ----  | ----  |
| `entity`| 实体状态类，用于解析、储存硬件设备状态码 |
| `modules` | 套件模块，用于执行硬件设备行为及获取状态描述|
| `utils` | 工具类库|

|   文件  | 说明  |
|  ----  | ----  |
| `converter`| 进制转换器 |
| `Descriptor` | 状态描述器，统一获取设备文本状态入口|
| `typeHints` | 检测器，用于判断设备类型|
| `suiter` | 套件配置，用于配置存储设备名称、设备类型码、设备分组等|

## 开发一个硬件模块

### 1. 创建实体

  在 `entity` 目录下创建硬件实体文件，如面板灯实体 `LampBoardStatus.ts`，继承状态实体基类 `Status`

  ```ts
    import { Status } from './Status';
    export class LampBoardStatus extends Status {
        public state: string = '';
        constructor (status: string) {
            super(status)
            this.state = status.slice(2, 4)
        }
        getStatus (): string {
            return this.state
        }
    }
  ```

### 2. 创建套件类

   在 `modules` 目录下创建一个硬件文件，如 `LampBoardEquip.ts`，继承套件基类 `BaseEquip`

   ```ts
    import { BaseEquip } from './BaseEquip';
    import { LampBoardStatus } from '../entity/LampBoardStatus';

    export class LampBoardEquip extends BaseEquip {
        private readonly bytes = `{0}00000000000000`;
        public readonly lampBoardStatus: LampBoardStatus;
        constructor(status: string, deviceType?: string, deviceChildType?: string) {
            super(status, deviceType, deviceChildType);
        }
        /**
         * 获取状态字节码串
        */
        public getbytes(): string {
        }

        /**
         *  获取设备状态描述
        */
        getStatusDescriptor(): string {
        }
    }
   ```

### 3. 将设备状态添加至状态描述器

   在 `utils/Descriptor.ts` 中对应的设备类模块下(如传感器类)，加入返回该设备状态。细节查看 [`状态描述器`](../tools/descriptor.md)

### 4. 导出套件类

   在 `index.ts` 文件中导出套件类，以便对外使用。

   ```js
    export * from './modules/LampBoardEquip'
   ```

## 命名规范

- 实体和套件类命名均需首字母大写，如 `LampBoardStatus`，`LampBoardEquip`
- 命名规则： `[主类型][子类型][约定后缀]`, 如 `SensorAcStatus`， `SensorAcEquip`

### 实体类型命名

 实体类命名,均需以 `Status` 结尾

### 套件类命名

 套件类命名，均需以 `Equip` 结尾

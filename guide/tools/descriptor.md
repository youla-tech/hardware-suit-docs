# 状态描述器

::: tip ~
 获取设备状态 、设备类型统一入口，接口详情查看API文档[descriptor](https://aliiot.on-bright.com:8090/hardware-suit/classes/_descriptor.html)
:::

## 细节说明

设备类型描述器与 `Suiter` 配置表对照，定义对应的状态描述器方法。 如

```js
Suiter = {
	led: {...},
	socketSwitch: {}
}
```

那么在 `Descriptor` 描述器中需定义对应的类型描述器如 `getLedDescriptor`、`getSocketSwitchDescriptor` 以此类推，各个类型描述器中需实现及返回其子类型的状态文本。

在使用时，我们可以统一调用 `getStatusDescriptor` 方法，或调用对应的设备状态方法。

## 使用

```js
import { Descriptor } from 'hardware-suit'
const status = ''
const deviceType = '04'
const deviceChildType = '01'
const StatusText = Descriptor.getStatusDescriptor(status, deviceType, deviceChildType)
const type = Descriptor.getTypeDescriptor(deviceType, deviceChildType)

```

## 代码示例

<Common-Democode>
<Tools-Descriptor slot="source"></Tools-Descriptor>

<highlight-code slot="highlight" lang="vue">
	<template>
		<div>
			<a-input-group compact>
				<a-input style="width: 20%" placeholder="设备状态" v-model="status" />
				<a-input style="width: 20%" placeholder="设备主类型" v-model="deviceType" />
				<a-input style="width: 20%" placeholder="设备子类型" v-model="deviceChildType" />
				<a-button type="primary" @click="handleDescriptor">转换</a-button>
				<a-button @click="handleInit">测试值</a-button>
			</a-input-group>
			<div style="margin: 10px; color: #666;">{{ statusText }}</div>
		</div>
	</template>
	<script>
	import { Descriptor } from 'hardware-suit'

	export default {
	data() {
		return {
			status: '0100000000',
			deviceType: '04',
			deviceChildType: '01',
			statusText: ''
		}
	},
	methods: {
		handleDescriptor () {
			if (!this.status) return this.$message.warn('请输入状态值')
			if (!this.deviceType) return this.$message.warn('请输入设备主类型')
			this.statusText = Descriptor.getStatusDescriptor(this.status, this.deviceType, this.deviceChildType)
			const type = Descriptor.getTypeDescriptor(this.deviceType, this.deviceChildType)
			this.statusText = `${type}: ${this.statusText}`
		}
	}
	}
	</script>
</highlight-code>
</Common-Democode>

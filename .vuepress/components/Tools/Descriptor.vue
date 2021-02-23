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
			status: '',
			deviceType: '',
			deviceChildType: '',
			statusText: ''
		}
	},
	methods: {
		handleInit() {
			this.status = '0100000000'
			this.deviceType = '04'
			this.deviceChildType = '01'
		},
		handleDescriptor() {
			if (!this.status) return this.$message.warn('请输入状态值')
			if (!this.deviceType) return this.$message.warn('请输入设备主类型')
			this.statusText = Descriptor.getStatusDescriptor(this.status, this.deviceType, this.deviceChildType)
			const type = Descriptor.getTypeDescriptor(this.deviceType, this.deviceChildType)
			this.statusText = `${type}: ${this.statusText}`
		}
	}
}
</script>

<style lang="less" scoped>

</style>


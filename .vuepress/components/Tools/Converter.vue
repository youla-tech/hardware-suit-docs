<template>
  <div>
    <a-input-group compact>
      <a-select v-model="type">
        <a-select-option :value="2">2进制</a-select-option>
        <a-select-option :value="8">8进制</a-select-option>
        <a-select-option :value="10">10进制</a-select-option>
        <a-select-option :value="16">16进制</a-select-option>
      </a-select>
      <a-input style="width: 30%" v-model="typeValue" />
      <a-select v-model="toType">
        <a-select-option :value="2">2进制</a-select-option>
        <a-select-option :value="8">8进制</a-select-option>
        <a-select-option :value="10">10进制</a-select-option>
        <a-select-option :value="16">16进制</a-select-option>
      </a-select>
      <a-button type="primary" @click="handleConverter">转换</a-button>
    </a-input-group>
    <div style="margin: 10px; color: #666;">{{ converterValue }}</div>
  </div>
</template>

<script>
import { Converter } from 'hardware-suit'

const ConverterMap = {
  2: 'toBinary',
  8: 'toOctor',
  10: 'toDecimal',
  16: 'toHex'
}
export default {
 data() {
   return {
     type: 2,
     toType: 10,
     typeValue: '0101',
     converterValue: ''
   }
 },
 methods: {
   handleConverter () {
     if (this.type && this.typeValue) {
       const converter = new Converter(this.typeValue, this.type)
       this.converterValue = converter[ConverterMap[this.toType]].call(converter)
       this.converterValue = `${this.type}进制 -> ${this.toType}进制：${this.converterValue}`
     } else {
       this.$message.warn('请输入要转换的值')
     }
   }
 }
}
</script>

<style lang="less" scoped>

</style>


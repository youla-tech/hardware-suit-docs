(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{1024:function(t,s,e){"use strict";e.r(s);var a=e(113),r=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"状态描述器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#状态描述器"}},[t._v("#")]),t._v(" 状态描述器")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("~")]),t._v(" "),e("p",[t._v("获取设备状态 、设备类型统一入口，接口详情查看API文档"),e("a",{attrs:{href:"https://aliiot.on-bright.com:8090/hardware-suit/classes/_descriptor.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("descriptor"),e("OutboundLink")],1)])]),t._v(" "),e("h2",{attrs:{id:"细节说明"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#细节说明"}},[t._v("#")]),t._v(" 细节说明")]),t._v(" "),e("p",[t._v("设备类型描述器与 "),e("code",[t._v("Suiter")]),t._v(" 配置表对照，定义对应的状态描述器方法。 如")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("Suiter "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tled"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tsocketSwitch"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("p",[t._v("那么在 "),e("code",[t._v("Descriptor")]),t._v(" 描述器中需定义对应的类型描述器如 "),e("code",[t._v("getLedDescriptor")]),t._v("、"),e("code",[t._v("getSocketSwitchDescriptor")]),t._v(" 以此类推，各个类型描述器中需实现及返回其子类型的状态文本。")]),t._v(" "),e("p",[t._v("在使用时，我们可以统一调用 "),e("code",[t._v("getStatusDescriptor")]),t._v(" 方法，或调用对应的设备状态方法。")]),t._v(" "),e("h2",{attrs:{id:"使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" Descriptor "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'hardware-suit'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" status "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" deviceType "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'04'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" deviceChildType "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'01'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" StatusText "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Descriptor"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getStatusDescriptor")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("status"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" deviceType"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" deviceChildType"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" type "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Descriptor"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTypeDescriptor")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("deviceType"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" deviceChildType"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),e("h2",{attrs:{id:"代码示例"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#代码示例"}},[t._v("#")]),t._v(" 代码示例")]),t._v(" "),e("Common-Democode",[e("Tools-Descriptor",{attrs:{slot:"source"},slot:"source"}),t._v(" "),e("highlight-code",{attrs:{slot:"highlight",lang:"vue"},slot:"highlight"},[e("div",{staticClass:"language- extra-class"},[e("pre",[e("code",[t._v('<template>\n\t<div>\n\t\t<a-input-group compact>\n\t\t\t<a-input style="width: 20%" placeholder="设备状态" v-model="status" />\n\t\t\t<a-input style="width: 20%" placeholder="设备主类型" v-model="deviceType" />\n\t\t\t<a-input style="width: 20%" placeholder="设备子类型" v-model="deviceChildType" />\n\t\t\t<a-button type="primary" @click="handleDescriptor">转换</a-button>\n\t\t\t<a-button @click="handleInit">测试值</a-button>\n\t\t</a-input-group>\n\t\t<div style="margin: 10px; color: #666;">'+t._s(t.statusText)+"</div>\n\t</div>\n</template>\n<script>\nimport { Descriptor } from 'hardware-suit'\n\nexport default {\ndata() {\n\treturn {\n\t\tstatus: '0100000000',\n\t\tdeviceType: '04',\n\t\tdeviceChildType: '01',\n\t\tstatusText: ''\n\t}\n},\nmethods: {\n\thandleDescriptor () {\n\t\tif (!this.status) return this.$message.warn('请输入状态值')\n\t\tif (!this.deviceType) return this.$message.warn('请输入设备主类型')\n\t\tthis.statusText = Descriptor.getStatusDescriptor(this.status, this.deviceType, this.deviceChildType)\n\t\tconst type = Descriptor.getTypeDescriptor(this.deviceType, this.deviceChildType)\n\t\tthis.statusText = `${type}: ${this.statusText}`\n\t}\n}\n}\n<\/script>\n")])])])])],1)],1)}),[],!1,null,null,null);s.default=r.exports}}]);
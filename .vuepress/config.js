module.exports = {
  base: process.env.NODE_ENV === 'development' ? '/' : '/hardware-suit-docs/',
  title: 'hardware-suit',
  description: '硬件套件库',
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: `/icons/icon.png` }],
  ],
  port: 7777,
  dest: './dist',
  themeConfig: { 
    nav: [
      { text: '主页', link: '/' },
      { text: '文档', link: '/guide/' },
      { text: '更新记录', link: 'https://aliiot.on-bright.com:8090/hardware-suit-docs/CHANGELOG.html', target:'_self' },
      { text: 'api文档', link: 'https://aliiot.on-bright.com:8090/hardware-suit/' }
    ],
    sidebar: [
      {
        title: 'hardware-suit',
        path: '/guide/'
      },
      {
        title: '快速开始',
        collapsable: false,
        siderDepth: 4,
        children: [
          ['/guide/quick-start/', '介绍'],
          ['/guide/quick-start/struct.md', '开发'],
          ['/guide/quick-start/usage.md', '使用']
        ]
      },
      {
        title: '套件模块',
        collapsable: false,
        children: [
          ['/guide/suit/air-condition.md', '红外空调'],
          ['/guide/suit/wire-condition.md', '线控空调'],
          ['/guide/suit/control-lamp.md', '遥控灯'],
          ['/guide/suit/led-lamp.md', 'led 灯'],
          // 传感器
          ['/guide/suit/sensor.md', '传感器'],
          ['/guide/suit/card-power.md', '插卡取电'],
          ['/guide/suit/curtain.md', '窗帘'],
          ['/guide/suit/humidity.md', '温湿度'],
          ['/guide/suit/ac.md', 'ac 红外'],
          ['/guide/suit/acman.md', '人体红外 + 光感'],
          ['/guide/suit/bedwet.md', '尿床'],
          ['/guide/suit/call.md', '一键呼叫'],
          ['/guide/suit/door.md', '门窗磁'],
          ['/guide/suit/gas.md', '燃气传感器'],
          ['/guide/suit/smog.md', '烟感'],
          ['/guide/suit/water.md', '水浸'],
          // 开关
          ['/guide/suit/switch-mix.md', '混合开关'],
          ['/guide/suit/switch-plug.md', '插座开关']
        ]
      },
      {
        title: '工具类',
        collapsable: false,
        children: [
          ['/guide/tools/converter.md', '转换器'],
          ['/guide/tools/descriptor.md', '状态器'],
          ['/guide/tools/typehints.md', '检测器'],
          ['/guide/tools/suiter.md', '套件类']
        ]
      }
    ]
  }
}

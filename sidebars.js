/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check
const fs = require('fs')
const path = require('path')

const generateItem = (menu) => {
  let dir = fs.readdirSync(`docs/${menu}`)
  const fileList = []
  dir.forEach(dirname => {
    const isFile = fs.statSync(`docs/${menu}/${dirname}`).isFile()
    if(isFile && (dirname.endsWith('.md')||(dirname.endsWith('.mdx')))){
      fileList.push(dirname)
    }
  })
  const hasConfig = fs.existsSync(`docs/${menu}/config.json`)
  const configInfo = path.resolve(`docs/${menu}/config.json`)
  return fileList.map(file => {
    return file.replace(/(\.md|\.mdx)$/i, '')
  }).sort((a, b) => {
    if(hasConfig){
      try{
        const data = fs.readFileSync(configInfo, 'utf8')
        // 解析 JSON 数据
        const { order } = JSON.parse(data);
        const aNum = order.indexOf(a)
        const bNum = order.indexOf(b)
        return aNum - bNum;
      }catch(err){
        throw err
      }
    }else{
      const fileNameStrA = a.split("-")
      const fileNumA = fileNameStrA[fileNameStrA.length-1] || 0
      const fileNameStrB = b.split("-")
      const fileNumB = fileNameStrB[fileNameStrB.length-1] || 0
      return fileNumA - fileNumB
    }
  }).map(file => `${menu}/${file}`)
}

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // But you can create a sidebar manually
  sms: [
    ...generateItem("sms"),
    {
       type: 'category',
       label: 'Get Started with SMS',
       items: [{
         type: 'autogenerated',
        dirName: 'sms/started'
      }]
    },
    {
      type: 'category',
      label: 'API',
      items: [{
        type: 'autogenerated',
        dirName: 'sms/api'
      }]
    },
    {
      type: 'category',
      label: 'SDK',
      items: [{
        type: 'autogenerated',
        dirName: 'sms/sdk'
      }]
    }
  ],
  whatsapp: [
    ...generateItem("whatsapp"),
    {
      type: 'category',
      label: 'Get Started with WhatsApp Business API',
      items: [{
        type: 'autogenerated',
        dirName: 'whatsapp/started'
      }]
    },
    {
      type: 'category',
      label: 'API',
      items: [{
        type: 'autogenerated',
        dirName: 'whatsapp/api'
      }]
    },
    {
      type: 'category',
      label: 'SDK',
      items: [{
        type: 'autogenerated',
        dirName: 'whatsapp/sdk'
      }]
    }
  ],
  email: [
    ...generateItem('email'),
    {
      type: 'category',
      label: 'User Guide',
      items: [{
        type: 'autogenerated',
        dirName: 'email/guide'
      }]
    },
    {
      type: 'category',
      label: 'API',
      items: [{
        type: 'autogenerated',
        dirName: 'email/api'
      }]
    },
    {
      type: 'category',
      label: 'SDK',
      items: [{
        type: 'autogenerated',
        dirName: 'email/sdk'
      }]
    }
  ],
  aigc: [
   ...generateItem("aigc"),   
   {
    type: 'category',
    label: 'AIGC',
    items: [{
      type: 'autogenerated',
      dirName: 'aigc'
    }]
  }
  ],
  legal: [{
    type: 'category',
    label: 'Legal',
    items: [{
      type: 'autogenerated',
      dirName: 'legal'
    }]
  }],
  price: [
    ...generateItem("price")
  ]
};

module.exports = sidebars;

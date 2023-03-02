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

const generateItem = (menu) => {
  const items = []
  const files = fs.readdirSync(`docs/${menu}`)

  files.forEach(function (item, index) {
    let stat = fs.readFileSync(`docs/${menu}/${item}`)
    if (stat) { 
      const filename = item.replace(/\.md$|\.mdx$/i, '')
      items.push(`${menu}/${filename}`)
    }
  })
  console.log("items", items)
  return items
}

// console.log("generateItem", generateItem("sdk"))


/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // But you can create a sidebar manually
  sms: [
    "sms/Introduction",
    {
      type: 'category',
      label: 'Getting Started',
      items: generateItem("sms/started")
    },
    {
      type: 'category',
      label: '产品介绍',
      items: generateItem("sms/product")
    }
  ],
  sdk: [
    {
      type: 'category',
      label: 'SDK',
      items: generateItem("sdk")
    }
  ]
};

module.exports = sidebars;
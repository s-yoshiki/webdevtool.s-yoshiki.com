const items = [
  {
    id: 'sql-formatter',
    title: 'SQL 整形ツール',
    to: '/sql-formatter',
    description: "SQLの整形を行います。",
    category: 'sql',
  },
  {
    id: 'qr-generator',
    title: 'QR コード生成ツール',
    to: '/qr-generator',
    description: "QRコードを生成します。",
    category: 'qr',
  },
  {
    id: 'random',
    title: 'ランダム文字列生成',
    to: '/random',
    description: "乱数を用いてランダムな文字列を生成します",
    category: 'random',
  },
  {
    id: 'base64',
    title: 'Base64エンコード・デコード',
    to: '/base64',
    description: "Base64エンコード・デコードを行います。",
    category: 'random',
  },
]

export function getInfoById(id) {
  for (let val in items) {
    if (items[val].id === id) {
      return items[val]
    }
  }
}

export function getByCategoryAsNestArray() {
  let applist = {}
  items.forEach(e => {
    const category = e.category
    if (!Array.isArray(applist[category])) {
      applist[category] = []
    }
    applist[category].push(e)
  })
  return applist
}

export default items;


// mdi-icon 
// https://materialdesignicons.com/
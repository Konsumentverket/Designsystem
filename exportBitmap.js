const fs = require('fs')

const readline = require('readline');
const file = './.bitmap'

const getFile = async pathToFile => {
  return new Promise((resolve, reject) => {
    let counter = 0
    let file = ''
    const readable = fs.createReadStream(pathToFile);
    const reader = readline.createInterface({ input: readable });
    reader.on('line', line => {
      counter++
      if (counter > 2) {
        file += line
      }
    })
    reader.on('close', () => {
      resolve(file)
    })
  })
}

const start = `
  var path = require('path');
  const devAliases = isProd => isProd ? null : {
`

const end = `
}

module.exports = devAliases
`

const parseFile = async data => {
  const res = Object
    .keys(data)
    .map(item => item.startsWith('konsumentverket') ? `   '@bit/${item.split('@')[0].replace('.kov-compo/', '.kov-compo.')}': path.resolve('../../../', 'Konsumentverket.github.io/dist/${data[item].mainFile}'),` : null)
    .join('\n')
  return start + res + end
}


getFile(file)
  .then(res => JSON.parse(res))
  .then(res => parseFile(res))
  .then(res => console.log(res))

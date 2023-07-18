const fs = require('fs')
let data = fs.readFileSync("./data.tex",'utf-8')
console.log(data)
export default data
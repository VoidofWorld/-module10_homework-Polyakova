
let map = new Map()
map.set( `item1` , `pop1`)
map.set( `item2` , `pop2`)
map.set( `item3` , `pop3`)

for (let name of map.keys()) {
  console.log('Ключ - ' + name + ', значение - ' + map.get(name))
}
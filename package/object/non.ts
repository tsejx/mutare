
// object[] + string{} => {}
// obj = key:key value:item.key
// demo
// const a = [{id: 1, name: '1'}, {id: 3, name: '3'}]
// a.map => b
// const b = {id: 1, name: '1'}
// const c = {id: 'id', 'key: 'id', value: 'id' name: 'name'}
// const d = non(a, b)
// console.log(c) => []

export default function non(arr, obj){
    const entries = Object.entries(arr)
    return entries.reduce((acc, keys) => {
        acc[keys[0]] = item[keys[1]]
        return acc
    }, {})
}
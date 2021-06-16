// map<T, V>(callback: (element: T) => V, collection: T[]): V[];

const mapArray = [1, 2, 3, 4]
let i
const mapCallback = (i) => i + i
const mapArrayNew = []
const reducer = (mapArrayNew, currentValue) => {
    mapCallback(currentValue)
}

console.log(mapArray.reduce(reducer))

// const mapFunctionNew = (mapArray, mapCallback) => {
//     mapArray.reduce((mapArrayNew, currentValue) => {
//         console.log(mapArrayNew, mapCallback(currentValue))
//         return mapArrayNew.push(mapCallback(currentValue))
//     })
//     // return mapArrayNew
// }

// console.log(mapFunctionNew(mapArray, mapCallback))
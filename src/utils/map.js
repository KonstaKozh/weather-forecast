// map<T, V>(callback: (element: T) => V, collection: T[]): V[];

const mapArray = [1, 2, 3, 4]
let i
const mapCallback = (i) => i + i
const mapArrayNew = []

const mapFunctionNew = (mapArray, mapCallback) => mapArray.reduce(
    (mapArrayNew, currentValue) => [...mapArrayNew, mapCallback(currentValue)], [])

console.log(mapFunctionNew(mapArray, mapCallback))
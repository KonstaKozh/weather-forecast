// map<T, V>(callback: (element: T) => V, collection: T[]): V[];

let i
/**
 *  @function mapCallback - The callback that for reduce.
 *  @param {*} i
 */
const mapCallback = (i) => i + i

/**
 * Function map through reduce.
 * @function mapFunctionNew
 * @param {any[]} mapArray
 * @param {any[]} mapArrayNew
 */



const mapFunctionNew = (mapArray, mapCallback) => mapArray.reduce(
    (mapArrayNew, currentValue) => [...mapArrayNew, mapCallback(currentValue)], [])


console.log(mapFunctionNew([1, 2, 3, 4], i + i))
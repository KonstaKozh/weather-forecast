export const convertKelvinToCelsius = (temp: number) => Math.round(temp - 273)

export const formatDate = (date: number) => {
    const dateInstance = new Date(date * 1000)
    return dateInstance.toISOString().substr(0,10)
}
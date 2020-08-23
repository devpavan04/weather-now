require('dotenv').config()

const apiKey = process.env.REACT_APP_API_KEY

export async function getWeather(city) {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
  const weatherData = await response.json()
  return {
    weatherData
  }
}

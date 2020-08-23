import * as weather from '../JS/weather'
import * as ui from '../JS/ui'

export function getweather(e) {
  const city = e.target.children[1].value
  if (city !== '') {
    weather.getWeather(city)
      .then(res => {
        if (res.weatherData.name !== undefined) {
          ui.cleanDetails()
          ui.startLoader()
          setTimeout(() => {
            ui.stopLoader()
            ui.displayWeather(res.weatherData)
          }, 2000)
        } else {
          ui.startLoader()
          setTimeout(() => {
            ui.stopLoader()
            ui.showAlert('City Not Found...', 'error')
          }, 2000)
          setTimeout(() => {
            ui.stopAlert()
          }, 4000)
        }
      })
  } else {
    ui.showAlert('Enter City name !', 'error')
    setTimeout(() => {
      ui.stopAlert()
    }, 2000)
  }
  e.target.children[1].value = ''
  e.preventDefault()
}
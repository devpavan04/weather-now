import * as calculate from '../JS/calculate'

export function displayWeather(data) {
  const temp = calculate.kelToCel(data.main.temp),
    min_temp = calculate.kelToCel(data.main.temp_min),
    max_temp = calculate.kelToCel(data.main.temp_max),
    feels_like = calculate.kelToCel(data.main.feels_like),
    pressure = data.main.pressure,
    humidity = data.main.humidity,
    description = data.weather[0].description,
    windSpeed = calculate.meterToKilometerPerHour(data.wind.speed)

  const div = document.createElement('div')
  div.id = 'details'
  div.innerHTML = `
        <div class="card">
          <h2>City</h2>
          <h2>${data.name}</h2>
        </div>
        <div class="card">
          <h2>Country</h2>
          <h2>${data.sys.country}</h2>
        </div>
        <div class="card">
          <h2>Temp</h2>
          <h2>${temp} °C</h2>
        </div>
        <div class="card">
          <h2>Description</h2>
          <h2>${description}</h2>
        </div>
        <div class="card">
          <h2>Feels like</h2>
          <h2>${feels_like} °C</h2>
        </div>
        <div class="card">
          <h2>Temp max</h2>
          <h2>${max_temp} °C</h2>
        </div>
        <div class="card">
          <h2>Temp min</h2>
          <h2>${min_temp} °C</h2>
        </div>
        <div class="card">
          <h2>Pressure</h2>
          <h2>${pressure} hPa</h2>
        </div>
        <div class="card">
          <h2>Humidity</h2>
          <h2>${humidity} %</h2>
        </div>
        <div class="card">
          <h2>Wind</h2>
          <h2>${windSpeed} Km/h</h2>
        </div>
    `
  document.querySelector('.container').appendChild(div)
}

export function showAlert(message, classname) {
  let alert = document.querySelector('#alert')
  const h3 = document.createElement('h3')
  h3.textContent = message
  alert.style = 'block'
  alert.className = classname
  alert.style.display = 'block'
  alert.appendChild(h3)
}

export function stopAlert() {
  let alert = document.querySelector('#alert')
  alert.removeChild(alert.children[0])
  alert.className = ''
  alert.style = 'none'
}

export function cleanDetails() {
  if (document.querySelector('#details')) {
    document.querySelector('#details').remove()
  }
}

export function startLoader() {
  document.getElementById('loader').style.display = 'block'
}

export function stopLoader() {
  document.getElementById('loader').style.display = 'none'
}

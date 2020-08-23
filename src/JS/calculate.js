export function kelToCel(num) {
  let ans = num - 273.15
  ans = ans.toFixed(2)
  return ans
}

export function meterToKilometerPerHour(num) {
  let ans = num * 18
  ans = ans / 5
  ans = ans.toFixed(2)
  return ans
}

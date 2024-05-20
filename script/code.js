function temperatureConverter(value) {
    let fahrenheit = (value * 9/5) + 32;
    document.getElementById("outputFahrenheit").innerText = fahrenheit.toFixed(2);
  }
  
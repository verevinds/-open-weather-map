query($city: String!, $countryCode: String!){
  getWeather(city: $city,countryCode: $countryCode){
    cod
message
cnt
list{ 
dt
main{temp
temp_min
temp_max
temp_kf
temp_f
temp_c
pressure
sea_level
grnd_level
humidity}
weather{id
main
description
icon}
clouds{all}
rain{h}
wind{speed
deg}
sys{pod}
dt_txt}
city{id
name
country
population
coord{
  lon
lat
}
}
fahrenheit_avg
celcius_avg
kelvin_avg
fahrenheit_max_avg
celcius_max_avg
kelvin_max_avg
pressure_avg
humidity_avg
sea_level_avg
pressure
humidity
temp_farenheit
temp_celcius
temp_kelvin
sea_level
  }
}

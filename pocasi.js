document.addEventListener('DOMContentLoaded', function() {
    const apiKey = '47ecb772ad412a8bddb5bd012595100f';

    const cityInput = document.getElementById('cityInput');
    const searchButton = document.getElementById('searchButton');
    const cityName = document.getElementById('cityName');
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
    const tempMin = document.getElementById('tempMin');
    const tempMax = document.getElementById('tempMax');
    const humidity = document.getElementById('humidity');
    const temperatureMessage = document.getElementById('teplota'); // Upraveno z 'temperatureMessage'

    let temperatureChart;

    async function fetchWeather(city) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
            const data = await response.json();

            cityName.textContent = data.name;
            temperature.textContent = data.main.temp;
            description.textContent = data.weather[0].description;
            tempMin.textContent = data.main.temp_min;
            tempMax.textContent = data.main.temp_max;
            humidity.textContent = data.main.humidity;

            // Vyhodnocení teploty pro čerta
            const parsedTemperature = parseFloat(data.main.temp);
            if (parsedTemperature <= 10) {
                temperatureMessage.textContent = 'Čertovi je zima!';
            } else if (parsedTemperature <= 17) {
                temperatureMessage.textContent = 'Čertovi je akorát.';
            } else {
                temperatureMessage.textContent = 'Čertovi je horko!';
            }

            fetchForecast(city);
        } catch (error) {
            console.error('Chyba při načítání dat o počasí', error);
            cityName.textContent = 'Nepodařilo se načíst počasí pro toto město.';
            temperature.textContent = '';
            description.textContent = '';
            tempMin.textContent = '';
            tempMax.textContent = '';
            humidity.textContent = '';
            temperatureMessage.textContent = ''; // Upraveno z 'temperatureMessage'
            if (temperatureChart) {
                temperatureChart.destroy();
            }
        }
    }

    async function fetchForecast(city) {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`);
            const forecastData = await response.json();

            if (temperatureChart) {
                temperatureChart.destroy();
            }

            const forecastList = forecastData.list;
            const forecastDays = {};

            forecastList.forEach(item => {
                const date = item.dt_txt.split(' ')[0];
                if (!forecastDays[date]) {
                    forecastDays[date] = [];
                }
                forecastDays[date].push(item.main.temp);
            });

            const dates = Object.keys(forecastDays);
            const temperatures = dates.map(date => forecastDays[date].reduce((sum, temp) => sum + temp, 0) / forecastDays[date].length);

            const ctx = document.getElementById('temperatureChart').getContext('2d');
            temperatureChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: dates,
                    datasets: [{
                        label: 'Průměrná teplota',
                        data: temperatures,
                        borderColor: 'rgba(75, 192, 192, 1)',
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                }
            });
        } catch (error) {
            console.error('Chyba při načítání dat o předpovědi počasí', error);
        }
    }

    searchButton.addEventListener('click', () => {
        const city = cityInput.value.trim();
        if (city) {
            fetchWeather(city);
        }
    });

    cityInput.addEventListener('keyup', event => {
        if (event.key === 'Enter') {
            const city = cityInput.value.trim();
            if (city) {
                fetchWeather(city);
            }
        }
    });
});

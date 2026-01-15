const apiKey = "https://api.openweathermap.org/data/2.5/weather?q=${d}&appid=${apikey}&units=metric";

async function getWeather() {
    const input = document.getElementById("cityInput").value.trim();
    const error = document.getElementById("error");

    if (input === "") {
        error.innerText = "Please enter city or country name!";
        return;
    }

    error.innerText = "Loading...";

    try {
        // 🌍 STEP 1: Geocoding API (City / Country / Anything)
        const geoResponse = await fetch(
            `https://api.openweathermap.org/geo/1.0/direct?q=${encodeURIComponent(input)}&limit=1&appid=${apiKey}`
        );

        if (!geoResponse.ok) {
            throw new Error("Geocoding failed");
        }

        const geoData = await geoResponse.json();

        if (geoData.length === 0) {
            throw new Error("Location not found");
        }

        const { lat, lon, name, country } = geoData[0];

        // 🌦️ STEP 2: Weather API (Using lat & lon)
        const weatherResponse = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
        );

        if (!weatherResponse.ok) {
            throw new Error("Weather fetch failed");
        }

        const data = await weatherResponse.json();

        // ✅ UI Update
        error.innerText = "";
        document.getElementById("city").innerText = `${name}, ${country}`;
        document.getElementById("temp").innerText = `${Math.round(data.main.temp)} °C`;
        document.getElementById("condition").innerText = data.weather[0].main;
        document.getElementById("humidity").innerText = `${data.main.humidity} %`;
        document.getElementById("wind").innerText =
            `${(data.wind.speed * 3.6).toFixed(1)} km/h`;

    } catch (err) {
        console.error(err);
        error.innerText = "City or country not found or API issue!";
    }
}

function getData() {
    const country = document.getElementById("countryInput").value.trim();
    const error = document.getElementById("error");

    if (country === "") {
        error.innerText = "Please enter a country name!";
        return;
    }

    fetch(`https://disease.sh/v3/covid-19/countries/${country}`)
        .then(res => {
            if (!res.ok) {
                throw new Error("Country not found");
            }
            return res.json();
        })
        .then(data => {
            error.innerText = "";
            document.getElementById("cases").innerText = data.cases.toLocaleString();
            document.getElementById("recovered").innerText = data.recovered.toLocaleString();
            document.getElementById("deaths").innerText = data.deaths.toLocaleString();
        })
        .catch(() => {
            error.innerText = "Invalid country name!";
        });
}

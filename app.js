/**
 * @description      :
 * @author           :
 * @group            :
 * @created          : 16/08/2021 - 16:15:13
 *
 * MODIFICATION LOG
 * - Version         : 1.0.0
 * - Date            : 16/08/2021
 * - Author          :
 * - Modification    :
 **/
window.addEventListener("load", () => {
    let long;
    let lat;

    let temperatureDescription = document.querySelector(
        ".temperature-description"
    );
    let temperatureIcon = document.querySelector(".icon")
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;
            const proxy = "https://cors-anywhere.herokuapp.com/";
            const api =
                "https://api.openweathermap.org/data/2.5/weather?lat=" +
                lat +
                "&lon=" +
                long +
                "&appid=4780e8b7b5a384ace96dc0b10a0c580b";

            fetch(api)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {
                    // render the api to the dom
                    //     console.log(data);
                    const { icon } = data.weather[0];
                    const { name } = data;
                    const { temp } = data.main;
                    const { description } = data.weather[0];

                    temperatureDegree.textContent = temp;
                    temperatureDescription.textContent = description;
                    locationTimezone.textContent = name;

                });

        });
    }

    function setIcons(icon)

});
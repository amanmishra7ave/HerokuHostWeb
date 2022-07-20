const cityName = document.getElementById("cityName");
const submitBtn = document.getElementById("submitBtn");

const city_Name = document.getElementById("city_Name");

const temp=document.getElementById('temp');
const temp_status=document.getElementById('temp_status');

const getInfo = async (event) => {
  event.preventDefault();
  let cityVal = cityName.value;
  if (cityVal == "") {
    city_Name.innerText = `Plz write the name before search`;
  } else {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal},uk&APPID=aa1673f0de18df27640c1043b5e5b2f2`;
      const response = await fetch(url);
      const data=await await response.json();
      const arrData=[data];

      temp.innerText=arrData[0].main.temp;
      temp_status.innerText=arrData[0].weather[0].main;

    } catch {
      city_Name.innerText = `Plz enter the city name properly`;
    }
  }
};

submitBtn.addEventListener("click", getInfo);

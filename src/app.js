const express=require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');
const port=process.env.PORT || 3000; 

 
const publicPath=path.join(__dirname,"../public");
const templatePath=path.join(__dirname,"../templates/views");
const partials_Path=path.join(__dirname,"../templates/partials");


app.set("view engine","hbs");
app.set('views',templatePath);
hbs.registerPartials(partials_Path)
app.use(express.static(publicPath));


app.get("",(req,res)=>{
    res.render("index")
})
app.get("/about",(req,res)=>{
    res.render("about")
})
app.get("/weather",(req,res)=>{
    res.render("weather")
})
app.get("*",(req,res)=>{
    res.render("404error",{
        errorMsg:'Opps Page Note Found'
    })
})

app.listen(port,()=>{
    console.log(`listening to the ${port}`);
})



// const cityName = document.getElementById("cityName");
// const submitBtn = document.getElementById("submitBtn");

// const city_Name = document.getElementById("city_Name");

// const temp_real_val=document.getElementById('temp');
// const temp_status=document.getElementById('temp_status');

// const getInfo = async (event) => {
//   event.preventDefault();
//   let cityVal = cityName.value;
//   if (cityVal == "") {
//     city_Name.innerText = `Plz write the name before search`;
//     datahide.classList.add('data_hide');
//   } else {
//     try {
//       let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal},uk&APPID=aa1673f0de18df27640c1043b5e5b2f2`;
//       const response = await fetch(url);
//       const data=await await response.json();
//       const arrData=[data];

//       city_Name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;
//       temp.innerText=arrData[0].main.temp;

//       const tempMood=arrData[0].weather[0].main;

//       // condition to check sunny or cloudy
//           if (tempMood== "Sunny") {
//         temp_status.innerHTML =
//           "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
//       } else if (tempMood == "Clouds") {
//         temp_status.innerHTML =
//           "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
//       } else if (tempMood== "Rainy") {
//         temp_status.innerHTML =
//           "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
//       } else {
//         temp_status.innerHTML =
//           "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";
//       }
//       datahide.classList.remove('data_hide');


//     } catch {
//       city_Name.innerText = `Plz enter the city name properly`;
//       datahide.classList.add('data_hide');

//     }
//   }
// };

// submitBtn.addEventListener("click", getInfo);

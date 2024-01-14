const apikey="83274c580ff776f728996c9d34d5fc48";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchbox=document.querySelector(".search input");
const searchbtn=document.querySelector(".search button");
async function getweathercatchweather (city){
 
const response=await fetch(apiurl+city+`&appid=${apikey}`);
var data=await response.json();
console.log(data);
document.querySelector(".city").innerHTML=data.name;
document.querySelector(".temp").innerHTML=Math.round(data.main.temp);
document.querySelector(".humid").innerHTML=data.main.humidity;
document.querySelector(".wind").innerHTML=data.wind.speed;

}
searchbtn.addEventListener("click",()=>{
    getweathercatchweather(searchbox.value);
});


const submitButton=document.getElementById('submitbtn');
const cityName=document.getElementById('search');
const outbutplace=document.getElementById('city_name');
const tempStatus=document.getElementById('temp_status');
const temp=document.getElementById('temp_real');
const datahide=document.querySelector(".middle_layer")
const getInfo=async(event)=>{
   
    event.preventDefault();
    console.log("working")
   let cityVal=cityName.value;
 console.log(cityVal);
    if(cityVal ===""){
        console.log("working")
        outbutplace.innerHTML=`please write name before search`;
        datahide.classList.add('data_hide');
    }else{
        try{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=matric&appid=ed95791421ca6ec2725609c09ce369aa`;
        const response=await fetch(url);
        const data=await response.json();
        const arrData=[data];
        let val=arrData[0].main.temp;
        val=val-270.15;
        console.log(val);
        outbutplace.innerHTML=`${arrData[0].name},${arrData[0].sys.country}`
        temp.innerHTML=val.toFixed(1);
        const tempMood=arrData[0].weather[0].main;

        if(tempMood == "Haze"){
            tempStatus.innerHTML=
            "<i class='fas fa-sun'style='color:#eccc68;' ></i>" ; 
        }else if(tempMood == "Clouds"){
            tempStatus.innerHTML=
            "<i class='fas fa-cloud'style='color:#f1f2f6;' ></i>" ; 
        }else if(tempMood == "Rain"){
            tempStatus.innerHTML=
            "<i class='fas fa-cloud-rain'style='color:#a4b0be;' ></i>" ; 
        }else{
            tempStatus.innerHTML=
            "<i class='fas fa-cloud'style='color:#f1f2f6;' ></i>" ; 
        }

        datahide.classList.remove('data_hide');

        }catch{
            outbutplace.innerText=`please enter the city name properly`;
            datahide.classList.add('data_hide');
        }
        
    }
}
submitButton.addEventListener('click',getInfo);
//cityName.addEventListener('keydown',getInfo);
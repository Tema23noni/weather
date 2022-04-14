let search = document.querySelector('#find')
let a = document.querySelector(".add")
a.style.display = 'none'
let date1 = document.querySelector("#date")
let date2 = document.querySelector("#date1")
let date3 = document.querySelector("#date2")
let date4 = document.querySelector("#date3")
function opemWeather(){
    let city = document.querySelector("#search").value
    if(city == undefined || city == ''){
        a.style.display = 'none'
    }else{
        function weather(name){
            fetch(`https://api.openweathermap.org/data/2.5/find?q=${name}&appid=1e637676601053e4a0a808c8d6b1f90b`)
                .then(function(resp){
                    return resp.json()})
                .then(function(data){
                    console.log(data)
                    document.querySelector('#error').textContent = ''
                    a.style.display = 'flex'
                    
                    document.querySelector('#search').value = ''
                    document.querySelector("#city").textContent = data.list[0].name
                    document.querySelector("#img").innerHTML =`<img src="http://openweathermap.org/img/wn/${data.list[0]['weather'][0]['icon']}@2x.png" width="50" height="50">` 
                    document.querySelector("#temp").textContent ='Temperature: ' +  Math.ceil(data.list[0].main.temp - 273) +`°`;
                    document.querySelector("#how").textContent =data.list[0]['weather'][0]['description'].toUpperCase()
                    document.querySelector("#city2").textContent = data.list[1].name
                    document.querySelector("#img2").innerHTML =`<img src="http://openweathermap.org/img/wn/${data.list[1]['weather'][0]['icon']}@2x.png" width="50" height="50">` 
                    document.querySelector("#temp2").textContent ='Temperature: ' +  Math.ceil(data.list[1].main.temp - 273) +`°`;
                    document.querySelector("#how2").textContent =data.list[1]['weather'][0]['description'].toUpperCase()
                    document.querySelector("#city3").textContent = data.list[2].name
                    document.querySelector("#img3").innerHTML =`<img src="http://openweathermap.org/img/wn/${data.list[2]['weather'][0]['icon']}@2x.png" width="50" height="50">` 
                    document.querySelector("#temp3").textContent ='Temperature: ' +  Math.ceil(data.list[2].main.temp - 273) +`°`;
                    document.querySelector("#how3").textContent =data.list[2]['weather'][0]['description'].toUpperCase()
                    document.querySelector("#city4").textContent = data.list[3].name
                    document.querySelector("#img4").innerHTML =`<img src="http://openweathermap.org/img/wn/${data.list[3]['weather'][0]['icon']}@2x.png" width="50" height="50">` 
                    document.querySelector("#temp4").textContent ='Temperature: ' +  Math.ceil(data.list[3].main.temp - 273) +`°`;
                    document.querySelector("#how4").textContent =data.list[3]['weather'][0]['description'].toUpperCase()

                })
                .catch(function(data) {
                    a.style.display = 'none'
                    document.querySelector('#error').textContent = data
                })
        }
        weather(city)
    }
    
}
    
search.addEventListener('click',opemWeather)
//https://api.openweathermap.org/data/2.5/forecast?q=Mumbai&units=metric&appid=30b864d2c36c21bae95a30aac9ff498a

const key = "30b864d2c36c21bae95a30aac9ff498a";
const getForecast = async(city) => {
    const base = "https://api.openweathermap.org/data/2.5/forecast";
    const query =`?q=${city}&units=metric&appid=${key}`;
    
    const response = await fetch(base+query);
//    console.log(response);
    if(!response.ok)
        throw new Error("Status Code: " +response.status);
    
    const data = await response.json();
//    console.log(data);
    return data;
}

//getForecast('Gujrat')
//.then(data=>console.log(data))
//.catch(err=>console.log(err));
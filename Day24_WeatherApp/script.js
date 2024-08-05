
/*
let x=document.querySelector('form');
x.addEventListener('submit',(e)=>{
    e.preventDefault();
    let p=new FormData(x);
    console.log(p);
    let city=p.get('city');
    apikey="aa80458c4da0498dafd92350240508";
    console.log(apikey);
    fetch(`http://api.weatherapi.com/v1?key=${apikey}&q=${city}`)
    .then((res)=>{
        console.log(res);
        return res.json()
    })
    .then((data)=>{
        console.log(data);
        
    })
    .catch((err)=>{
        console.log("Error: ",err);
        
    })
    
    
})
*/
// Select the form element
let x = document.querySelector('form');

// Add an event listener for the form submit event
x.addEventListener('submit', (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();
    
    // Create a FormData object from the form
    let p = new FormData(x);
    
    // Extract the city name from the form data
    let city = p.get('city');
    
    // Define the API key
    const apikey = "aa80458c4da0498dafd92350240508";
    
    // Construct the full API request URL with the base URL and endpoint
    const url = `http://api.weatherapi.com/v1/current.json?key=${apikey}&q=${city}`;
    
    // Fetch data from the API
    fetch(url)
    .then((res) => {
        // Check if the response is OK (status code 200-299)
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        return res.json();
    })
    .then((data) => {
        // Log the data received from the API
        console.log("The Data is :",data);
        console.log(data.current);
        console.log(data.location);
        setLocation(data.location);
        setWeather(data.current);
        
    })
    .catch((err) => {
        // Log any errors that occur
        console.log("Error: ", err);
    });
});

function setLocation(data){
    let p=document.querySelector('.data>.location>p');
    p.innerText="Place :"+data.name+"Region :"+data.region+"Country :"+data.country;
}
function setWeather(data){
    let p=document.querySelector('.data>.weather>p');
    p.innerText="Temperatue in (C) :"+data.temp_c+"Feelslike :"+data.feelslike_c+"Last Updated at :"+data.last_updated;
}

let form = document.querySelector(".form>form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let x = new FormData(form);
  console.log(x.get("movie"));
  displayMovies(x.get("movie"));
});

//API website = https://www.omdbapi.com/
let displayMovies = (m) => {
  url = `http://www.omdbapi.com/?apikey=9b372727&t=${m}`;
  fetch(url)
    .then((res) => {
      if (!res.ok) {
        console.log("There is some Network Error");
        return " ";
      }
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((e) => {
      console.log("Error :", e);
    })
    .finally(() => {
      console.log("Fetch Cycle is complete");
    });
};
//displayMovies();


const getList=async () => {
    const year = new Date().getFullYear();
    console.log(year); // Outputs the current year
 
    const url = `https://moviedatabase8.p.rapidapi.com/Filter?MinRating=5&MaxRating=10&MinYear=${year-2}&MaxYear=${year}&Limit=50`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '00cd6b7abamsh1aa8ae88be7cd71p1d0848jsn8c156f874762',
		'x-rapidapi-host': 'moviedatabase8.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
    return result;
} catch (error) {
	console.error(error);
}
};

let displaylist =async () => {
    const list= await getList();
    console.log(list);
    const parent =document.querySelector('.movies');
    for(i of list){
        if(i.adult){continue;}
        const child=document.createElement('div');
        child.setAttribute('id',i.original_title)
        child.innerHTML=`
         <h1>${i.title}</h1>
         <img src="${i.poster_path}" class="w-24"></img>
         <p>${i.release_date}</p>
        `
        child.addEventListener('click',displayData)
        parent.appendChild(child)
    }
};
displaylist();

const displayData=function(){
      console.log("hey",this);
      
}
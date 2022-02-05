//Get all the countries from Asia continent /region using Filter function

let request=new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v2/all");
request.send();
request.onload=function (){
    let countries=JSON.parse(request.responseText);
    let asiacont=countries.filter((element)=>{
        if(element.region==='Asia'){
            return element.name;
        }
    })
    console.log(asiacont);}

//Get all the countries with a population of less than 2 lakhs using Filter function

let request1=new XMLHttpRequest();
request1.open("GET","https://restcountries.com/v2/all");
request1.send();
request1.onload=function (){
    let countries1=JSON.parse(request1.responseText);
    let name=countries1.filter((element)=>{
        return element.population<200000;
    })
    console.log(name);}

//Print the following details name, capital, flag using forEach function

let request2 = new(XMLHttpRequest);
request2.open("GET","https://restcountries.com/v2/all");
request2.send();
request2.onload = function(){
    let countries2 = JSON.parse(request2.responseText);
    countries2.forEach(element => {
    console.log(element.name,element.flag,element.capital);
    });
    }

//Print the total population of countries using reduce function

let request3=new XMLHttpRequest();
request3.open("GET","https://restcountries.com/v2/all");
request3.send();
request3.onload=function (){
    let countries3=JSON.parse(request3.responseText);
    let count=countries3.reduce((x,element)=>{
        return x+element.population;
    },0)
    console.log(count);}

//Print the country which uses US Dollars as currency.
   
let request4=new XMLHttpRequest();
request4.open("GET","https://restcountries.com/v3.1/all");
request4.send();
request4.onload=function(){
    if(request4.status==200){
        let countries4=JSON.parse( request4.responseText)
        countries4.filter((element)=> element.currencies)
        .filter((element)=> element.currencies.USD)
        .map((element)=>{    
        console.log(element.name.official)
    })
}}

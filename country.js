const CountryInfo=function(counrty,container){
    fetch(`https://restcountries.com/v2/name/${counrty}`)
.then(result=> result.json())
.then(data=> {
    let {flag,name,region,currencies:[{name:currency}],languages:[{name:lanuage}],population,borders}=data[0];
    console.log(data);
    let divContent=document.createElement("div");
    divContent.style.cssText="display: inline-block;width: 300px;height: 420px;margin: 10px 30px;background-color: #8D7B68;border: 2px solid #A4907C;border-radius: 10px;transition-duration: 0.5s;position: relative;bottom: 20px;"
    divContent.onmouseover=function(){divContent.style.transform="scale(1.1)";}
    divContent.onmouseout=function(){divContent.style.transform="scale(1)";}
    // divContent.classList.add("info","position")
    let flagImg=document.createElement("img");
    flagImg.style.cssText="width: 300px;height: 200px;border-radius: 8px;";
    flagImg.src=flag;
    divContent.appendChild(flagImg);
    let obj={name,region,currency,lanuage,population};
    let InfoTable=document.createElement("table");
    InfoTable.style.margin="20px auto";
    let tr,td;
    for(let key in obj)
    {
        tr=document.createElement("tr");
        tr.style.cssText="display: block;padding: 5px 0;";
        td=document.createElement("td");
        td.innerText= `${key}: `;
        tr.appendChild(td);
        td=document.createElement("td");
        td.innerText=obj[key];
        tr.appendChild(td);
        InfoTable.appendChild(tr);
    }
    divContent.appendChild(InfoTable);
    container.appendChild(divContent)
    fetch(`https://restcountries.com/v2/alpha/${borders[1]}`)
    .then(res=> res.json())
    .then(data=>{
        let {flag,name,region,currencies:[{name:currency}],languages:[{name:lanuage}],population,borders}=data;
        let divContent=document.createElement("div");
        let paragraph=document.createElement("span");
        paragraph.innerText="neighbor country";
        divContent.appendChild(paragraph);
            // JS Style
        divContent.style.cssText="display: inline-block;width: 300px;height: 420px;margin: 10px 30px;background-color: #8D7B68;border: 2px solid #A4907C;border-radius: 10px;transition-duration: 0.5s;"
        divContent.onmouseover=function(){divContent.style.transform="scale(1.1)";}
        divContent.onmouseout=function(){divContent.style.transform="scale(1)";}
            // CSS style
        // divContent.classList.add("info")
        let flagImg=document.createElement("img");
        flagImg.style.cssText="width: 300px;height: 200px;border-radius: 8px;";
        flagImg.src=flag;
        divContent.appendChild(flagImg);
        let obj={name,region,currency,lanuage,population};
        let InfoTable=document.createElement("table");
        InfoTable.style.margin="20px auto";
        let tr,td;
        for(let key in obj)
        {
            tr=document.createElement("tr");
            tr.style.cssText="display: block;padding: 5px 0;";
            td=document.createElement("td");
            td.innerText= `${key}: `;
            tr.appendChild(td);
            td=document.createElement("td");
            td.innerText=obj[key];
            tr.appendChild(td);
            InfoTable.appendChild(tr);
        }
        // console.log(borders)
        divContent.appendChild(InfoTable);
        container.appendChild(divContent);
    })
})
.catch((error)=>{
    let h1Object=document.createElement("h1");
    h1Object.style.cssText="text-align: center;margin-top: 200px;";
    h1Object.innerText="Invalid Input, Try Again";
    container.appendChild(h1Object)
})
}



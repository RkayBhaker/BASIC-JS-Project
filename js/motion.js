// var container = document.getElementsByClassName('container');
var container = document.getElementById('container');
// const contDiv = document.getElementById('cont');
fetch("https://jsonplaceholder.typicode.com/photos?_limit=1000").then((data)=>{
    // console.log(data.json());
    return data.json();
}).then((jdata)=>{
    // console.log(jdata[0].url);
    jdata.map((val)=>{
        key = val.id;
        let contDiv = document.createElement('div');
        let img = document.createElement('img');
        img.src = `https://picsum.photos/158/198?random=${val.id}`;
        // console.log(img);
        contDiv.appendChild(img);
        contDiv.classList.add('cont');
        container.appendChild(contDiv);
    });
});
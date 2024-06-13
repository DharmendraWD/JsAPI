let messagePara = document.querySelector("#messagePara");
let container = document.querySelector(".data");
let btn = document.querySelector(".btn");


async function fetchData() {
    const response = await fetch('/api/message');
    const data = await response.json();
    console.log(data.arrayOfObjects[0]);

    for(let i=0; i<=9; i++ ){
        let p=document.createElement("p")
        p.innerText = data.arrayOfObjects[i].name;
        container.appendChild(p)
        messagePara.innerText="data extracted from server"
    }
}

btn.addEventListener("click", () => {
fetchData()
});

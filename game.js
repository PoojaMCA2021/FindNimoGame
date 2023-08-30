let imageList=document.getElementsByTagName("button")
let nimoFound=false;
let index=Math.floor(Math.random()*10);
let counter=0;
Array.from(imageList).forEach(btnImg=>{
    console.log(index);
  btnImg.addEventListener('click',(e)=>{
    if(counter<6)
    {
        if(index==(counter) && !nimoFound){
        console.log(e.target.innerHTML);
        var element=document.createElement("img");
        element.setAttribute("src","https://thecollegiatelive.com/wp-content/uploads/2018/02/59.png");
        element.style.width='150px';
        element.style.height='150px';
        element.style.borderRadius="50%";
        e.target.style.backgroundColor="white";
        e.target.appendChild(element)
        let result=document.getElementById("displayResult");
        let count=document.getElementById("turns");
        result.style.color="Green";
        count.style.color="Green";
        result.innerHTML="Congratulations! You Won";

        count.innerText="Attempts required to win:"+(counter+1)
        nimoFound=true
        }
        else if(!nimoFound){
            console.log(e.target.innerHTML);
            var element=document.createElement("img");
            element.setAttribute("src","https://tse2.mm.bing.net/th?id=OIP.2Ef1V0Yr3Lv_CZLcXBBt3gHaHa&pid=Api&P=0&h=180");
            element.style.width='150px';
            element.style.height='150px';
            element.style.borderRadius="50%";
            e.target.style.backgroundColor="white";
            e.target.appendChild(element)
            let result=document.getElementById("displayResult");
            let count=document.getElementById("turns");
            result.innerHTML="Sorry! You mis your chance";

            count.innerText="Attempts:"+(counter+1)
            
        }
    counter++;
}
else if(!nimoFound)
{
    let result=document.getElementById("displayResult");
    let count=document.getElementById("turns");
    result.style.color="Red";
    count.style.color="Red";
    result.innerHTML="Sorry! You loose game";

    count.innerText=" Max Attempts Allowed: 6"
}
   

  })
})
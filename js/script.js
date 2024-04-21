let number = document.querySelector(".age")
let btn = document.querySelector(".btn")
let result = document.querySelector(".result")
let outtext = document.querySelector(".fff")
let img = document.querySelector(".img")

btn.addEventListener("click", function(){
    if(number.value >= 18 ){
        result.innerHTML = "you can vote"
        img.src = "images/pic.bulbon.gif"
        outtext.innerHTML = "your vote was count"
        if(number.value > 82){
            result.innerHTML = "you can vote"
            img.src = "images/pic.bulbon.gif"
            outtext.innerHTML = "Ar koto vote diba?"
        }else{
            result.innerHTML = "you can vote"
            img.src = "images/pic.bulbon.gif"
            outtext.innerHTML = "your vote was count"
        }
    }else{
        result.innerHTML = "vag picchi"
        img.src = "images/ggg.jpg"
        outtext.innerHTML = "Boro Hoye Aso"
    }  
})
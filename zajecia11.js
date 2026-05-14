// x = 2

// y = x^2

// console.log("y=",y, typeof(y))

const btn = document.querySelector(".btn")

btn.onclick = function () {
    let cookies = document.querySelector(".cookies")
    cookies.style.display = "none"
}

// age = document.getElementById("age")
// age.addEventListener("focus", function (){
//     age.style.backgroundColor = "#f89292ff"
// })

age.onfocus = function () {
    age.style.backgroundColor = "#faceceff"
}
age.addEventListener("blur", function (){
    let ageValue = age.value
    age.style.backgroundColor = "#ffffffff"
    if (isNaN(ageValue) || ageValue<=0 || ageValue>120)
        alert("Podana wartość nie jest wiekiem człowieka"
    )
    
})
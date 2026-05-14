form = document.getElementById("age");
form.onfocus = function (){
    form.style.backgroundColor = "red";
}

btn = document.querySelector(".btn");
btn.onclick = function () {

    let cookies = document.querySelector(".cookies");
    cookies.style.display = "none";
}
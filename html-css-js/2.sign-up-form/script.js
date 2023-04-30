const namefield = document.getElementById("namefield");
const forget = document.getElementById("forget");
const loginHeader = document.getElementsByClassName("login-header");
const signIn = document.getElementsByClassName("btn");
const signUp = document.getElementsByClassName("signUp");
// signIn[0].onclick = function () {
//     loginHeader[0].innerHTML = "Sign In";
//     namefield.style.display = "none";
//     signIn[0].value = "login";
//     signUp[0].style.display = "block";
//     console.log("signin clicked");
// };
signUp[0].onclick = function () {
    loginHeader[0].innerHTML = "Sign Up";
    namefield.style.display = "block";
    forget.style.display = "none";
    signIn[0].value = "Sign Up";
    signUp[0].style.display = "none";
};

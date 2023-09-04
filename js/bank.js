document.querySelector("#btn-sumbit").addEventListener('click', function () {
    const emailField = document.getElementById("input-field");
    const email = emailField.value;

   const passwordField=document.getElementById("user-password");
   const password=passwordField.value;

    if (email === "billal@parvez.com" && password === "secret") {
        window.location.href='index.html'
    } else {
        alert("your Password did not match")
    }
})

document.getElementById("login-btn").addEventListener("click", function () {
    // step  1 : get the mobile number
    const numberInput = document.getElementById("input-number");
    const contactNumber = numberInput.value;
    // console.log(contactNumber)


    // 2: get the pin input
    const pinInput = document.getElementById("input-pin");
    const pin = pinInput.value;
    // console.log(pin);


    // 3: Match pin & mobile number
    if (contactNumber == "01234567890" && pin == "1234") {
        // 3-1 true::: alert> homepage
        alert("login Successful");


        //replace() নতুন page এ নিয়ে যায় and browser history theke current page টা remove kore দেয় .user Back button চাপলে আগের page এ ফিরে আসতে পারে না
        //assign() নতুন page এ নিয়ে যায় but browser history তে current page টা রেখে দেয় .user Back button চাপলে আগের page এ ফিরে আসতে পারে
        
        // window.location.replace("/home.html")
        Window.location.assign = "home.html";

    } else {
        // 3-1 false::: alert> return
        alert("logIn failed");
        return;
    }
})
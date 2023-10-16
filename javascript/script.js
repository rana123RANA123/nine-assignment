document.getElementById("one").onclick = function () {
    document.getElementById("firstdiv").innerText = "'2' + '2'"
    document.getElementById("seconddiv").innerHTML = "23"
    
}





document.getElementById("two").onclick = function () {
    let firstName = prompt("Enter Your First Name")
    let lastName = prompt("Enter Your Last Name")
    let fullName = firstName + " " + lastName
    console.log(fullName)
    if (2 > 1) {
        document.getElementById("firstdiv").innerText = "User Name"
        document.getElementById("seconddiv").innerHTML = "Good Morning" + " " + fullName
    }
}





document.getElementById("clearoutput").onclick = function () {
    document.getElementById("seconddiv").innerText = ""
}
document.getElementById("clearstatement").onclick = function () {
    document.getElementById("firstdiv").innerText = ""
}







document.getElementById("three").onclick = function () {
    document.getElementById("seconddiv").innerText = "Comparison Operation"
    var num4 = 15;
    let number = +prompt("Enter Your Number")
    if (number == num4) {
        // alert("Your number is true")
        document.getElementById("firstdiv").innerText = "Comparison Operation"
        document.getElementById("seconddiv").innerText = "Your number is true"
        console.log("Your number is true")
    }
    else if (number < num4) {
        // alert("Your number is Lesser than 15")
        document.getElementById("firstdiv").innerText = "Comparison Operation"
        document.getElementById("seconddiv").innerText = "Your number is Lesser than 15"
        console.log("Your number is Lesser than 15")
    }
    else {
        // alert("Your number is Greater than 15")
        document.getElementById("firstdiv").innerText = "Comparison Operation"
        document.getElementById("seconddiv").innerText = "Your number is Greater than 15"
        console.log("Your number is Greater than 15")
    }
}







document.getElementById("four").onclick = function () {
    document.getElementById("firstdiv").innerText = "if else if"
    var num6 = 20;
    let number = prompt("Enter Your Number")
    if (number == num6) {
        // alert("Your number is true")
        document.getElementById("firstdiv").innerText = "This function is 'if else if'"
        document.getElementById("seconddiv").innerText = "Your number is true"
        console.log("Your number is true")
    }
    else if (number < num6) {
        // alert("Your number is Lesser than 20")
        document.getElementById("firstdiv").innerText = "This function is 'if else if'"
        document.getElementById("seconddiv").innerText = "Your number is Lesser than 20"
        console.log("Your number is Lesser than 20")
    }
    else {
        // alert("Your number is Greater than 20")
        document.getElementById("firstdiv").innerText = "This function is 'if else if'"
        document.getElementById("seconddiv").innerText = "Your number is greater than 20"
        console.log("Your number is greater than 20")
    }
}







document.getElementById("five").onclick = function () {
    var age = +prompt("Your Age?")
    var weight = +prompt("Your Weight?")
    if (age >= 18 && weight <= 70) {
        document.getElementById("firstdiv").innerText = "Testing Sets Of Conditions"
        document.getElementById("seconddiv").innerText = "You,re a smart man."
        console.log("You,re a smart man.")
    }
    else if (age >= 18 && weight > 70) {
        document.getElementById("firstdiv").innerHTML = "Testing Sets Of Conditions"
        document.getElementById("seconddiv").innerHTML = "You,re a fat guy."
        console.log("You,re a fat guy.")
    }
    else {
        document.getElementById("seconddiv").innerHTML = "You,re a baby."
        console.log("You,re a baby.")
    }
}







document.getElementById("six").onclick = function () {
    document.getElementById("firstdiv").innerText = "if Statements Nested"
    let age = +prompt("Your Age?")
    if (age >= 18) {
        let weight = +prompt("Your weight?")
        if (weight <= 70) {
            document.getElementById("seconddiv").innerText = "You,re a smart man."
            console.log("You,re a smart man.")
        }
        else {
            document.getElementById("seconddiv").innerText = "You,re a fat guy."
            console.log("You,re a fat guy.")
        }
    }
    else {
        document.getElementById("seconddiv").innerText = "You,re a baby."
        console.log("You,re a baby.")
    }
}











document.getElementById("seven").onclick = function () {
    var username = prompt("Your User Name")
    var password = prompt("Your Password")

    if(username === "javascript" && password === "123"){
        document.getElementById("firstdiv").innerText = "Login"
        document.getElementById("seconddiv").innerText = "User loged in"
        console.log("User loged in")
    }
    else{
        document.getElementById("firstdiv").innerText = "Login"
        document.getElementById("seconddiv").innerText = "Username or password is incorrect."
        console.log("Username or password is incorrect.")
        
    }
}







document.getElementById("eight").onclick = function () {
    document.getElementById("firstdiv").innerText = "Check"
    document.getElementById("seconddiv").innerText = "Congratulations"
}



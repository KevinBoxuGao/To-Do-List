function greeting() {
    var greetings = ["Hello, What Will Your Day Look Like?", "Feeling Tired? Don't Stop Now.", "Today Is A New Chance, Use It."];
    greeting = greetings[Math.floor(Math.random() * greetings.length)];
    return greeting;
}

function time() {
    var d = new Date();
    var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    var month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var date = [4];

    var hour = d.getHours();
    var minute = d.getMinutes();
    var z = "am"

    if (hour >= 12) {
        z = "pm";
    }

    if (hour > 12) {
        hour -= 12;
    }

    minute = checkTime(minute);

    date[0] = weekday[d.getDay()]
    date[1] = month[d.getMonth()] + " " + d.getDate();
    date[2] = d.getFullYear();
    date[3] = hour + ":" + minute +  " " + z;

    return date;

    function checkTime(i) {
        if (i < 10) { i = "0" + i };
        return i;
    }
}

$(function(){
    $(".greeting").html(greeting());
    $(".date").html(time().join(", "));
});

let length = 0

function openNav() {
    //title
    var div1 = document.createElement("DIV");
    var h = document.createElement("H1");
    var text1 = document.createTextNode("Extra Details:");
    //notes
    var div2 = document.createElement("DIV");
    var p = document.createElement("P");
    var text2 = document.createTextNode("Date: April 10");
    //input
    var div3 = document.createElement("DIV");
    var h2 = document.createElement("H2");
    var text3 = document.createTextNode("Add Notes");
    var skipLine = document.createElement("BR")
    var input = document.createElement("INPUT");
    var text4 = document.createTextNode("Save")
    var submit = document.createElement("BUTTON");

    document.getElementById("mySidenav").style.width = "230px";
    document.getElementById("buttons").style.right = "240px";
    document.getElementById("buttons").style.transition = "0.5s";

    //title
    h.appendChild(text1);
    div1.appendChild(h);
    div1.setAttribute("id", "title");
    //notes
    p.appendChild(text2);
    div2.appendChild(p);
    div2.setAttribute("id", "details");
    //input
    h2.appendChild(text3);
    div3.appendChild(h2);
    div3.appendChild(skipLine);
    div3.appendChild(input);
    submit.appendChild(text4);
    div3.appendChild(submit);
    div3.setAttribute("id", "input");

    //remove sign out link
    if (length == 1) {
        var sign = document.getElementById("signout");
        document.getElementById("mySidenav").removeChild(sign);
        length = length - 1;
    }
    //remove details of other tasks
    else if (length == 3) {
        var title = document.getElementById("title");
        var detail = document.getElementById("details");
        var inp = document.getElementById("input");
        document.getElementById("mySidenav").removeChild(title);
        document.getElementById("mySidenav").removeChild(detail);
        document.getElementById("mySidenav").removeChild(inp);
        length = length - 3;
    }

    if (length == 0) {
        document.getElementById("mySidenav").appendChild(div1);
        document.getElementById("mySidenav").appendChild(div2);
        document.getElementById("mySidenav").appendChild(div3);
        length = length + 3;
    }

    console.log(length);
}

function openNav2() {
    //title
    var div1 = document.createElement("DIV");
    var h = document.createElement("H1");
    var text1 = document.createTextNode("Extra Details:");
    //notes
    var div2 = document.createElement("DIV");
    var p = document.createElement("P");
    var text2 = document.createTextNode("Date: April 3");
    //input
    var div3 = document.createElement("DIV");
    var h2 = document.createElement("H2");
    var text3 = document.createTextNode("Add Notes");
    var skipLine = document.createElement("BR")
    var input = document.createElement("INPUT");
    var text4 = document.createTextNode("Save")
    var submit = document.createElement("BUTTON");

    document.getElementById("mySidenav").style.width = "230px";
    document.getElementById("buttons").style.right = "240px";
    document.getElementById("buttons").style.transition = "0.5s";

    //title
    h.appendChild(text1);
    div1.appendChild(h);
    div1.setAttribute("id", "title");
    //notes
    p.appendChild(text2);
    div2.appendChild(p);
    div2.setAttribute("id", "details");
    //input
    h2.appendChild(text3);
    div3.appendChild(h2);
    div3.appendChild(skipLine);
    div3.appendChild(input);
    submit.appendChild(text4);
    div3.appendChild(submit);
    div3.setAttribute("id", "input");

    //remove sign out link
    if (length == 1) {
        var sign = document.getElementById("signout");
        document.getElementById("mySidenav").removeChild(sign);
        length = length - 1;
    }
    //remove details of other tasks
    else if (length == 3) {
        var title = document.getElementById("title");
        var detail = document.getElementById("details");
        var inp = document.getElementById("input");
        document.getElementById("mySidenav").removeChild(title);
        document.getElementById("mySidenav").removeChild(detail);
        document.getElementById("mySidenav").removeChild(inp);
        length = length - 3;
    }

    if (length == 0) {
        document.getElementById("mySidenav").appendChild(div1);
        document.getElementById("mySidenav").appendChild(div2);
        document.getElementById("mySidenav").appendChild(div3);
        length = length + 3;
    }

    console.log(length);
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("buttons").style.right = "20px";
    document.getElementById("buttons").style.transition = "0.5s";
}

function signOut() {
    var div = document.createElement("DIV");
    var sign = document.createElement("A");
    var text = document.createTextNode("Sign Out");

    document.getElementById("mySidenav").style.width = "230px";
    document.getElementById("buttons").style.right = "240px";
    document.getElementById("buttons").style.transition = "0.5s";

    sign.appendChild(text);
    div.appendChild(sign);
    div.setAttribute("id", "signout");
    sign.setAttribute("href", "signin.html");
    
    //remove details of tasks
    if (length == 3) {
        var title = document.getElementById("title");
        var detail = document.getElementById("details");
        var inp = document.getElementById("input")
        document.getElementById("mySidenav").removeChild(title);
        document.getElementById("mySidenav").removeChild(detail);
        document.getElementById("mySidenav").removeChild(inp);
        length = length - 3;
    }

    if (length == 0) {
        document.getElementById("mySidenav").appendChild(div);
        length = length + 1;
    }

    console.log(length);
}

function on() {
    document.getElementById("overlay").style.display = "block";
}

function off() {
    document.getElementById("overlay").style.display = "none";
}
// Function to set a cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Function to get a cookie by name
function getCookie(name) {
    var nameEQ = name + "=";
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0) == ' ') {
            cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) == 0) {
            return cookie.substring(nameEQ.length, cookie.length);
        }
    }
    return null;
}

// Function to delete a cookie by name
function eraseCookie(name) {
    document.cookie = name + '=; Max-Age=-99999999;';
}

// Function to display greeting
function displayGreeting() {
    var name = getCookie("username");
    if (name) {
        document.getElementById("greeting").innerText = "Xin chào " + name + "!";
    }
}

// Function to save name to cookie
function saveName() {
    var name = document.getElementById("name").value;
    setCookie("username", name, 30); // Cookie expires in 30 days
    displayGreeting();
}

// Function to delete cookie and reset greeting
function deleteCookie() {
    eraseCookie("username");
    document.getElementById("greeting").innerText = "";
}

// Call displayGreeting function when the page loads
window.onload = displayGreeting;
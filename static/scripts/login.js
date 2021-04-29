function getName() {
    var user = localStorage.getItem("chatAppUser");
    name = (user == null) ? "" : user;

    document.forms["form"]["name"].value = name;

}

function login() {
    var user = document.forms["form"]["name"].value;
    localStorage.setItem("chatAppUser", user);
    window.location.replace("room1.html");
}
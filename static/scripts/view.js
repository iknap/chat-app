function getName() {
    let user = localStorage.getItem("chatAppUser");
    let name = (user == null) ? "" : user;
    //let name = prompt("Please enter your name:", user);
    if (name != null && name != "") {
        document.forms["form"]["name"].value = name;
        localStorage.setItem("chatAppUser", name);
    } else {
        document.forms["form"]["name"].value = name;
    }
}

function printTable(data) {
    var Table = document.getElementById("table");
    Table.innerHTML = "";
    for (let d of data) {
        var table = document.getElementById("table");
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = d.name;
        cell2.innerHTML = d.text;
        cell3.innerHTML = formatDate(d.time);
    }
}

async function addPost() {
    const response = await fetch('http://localhost:3000/lastPost');
    const data = await response.text();
    let lastPost = JSON.parse(data);

    const maxRows = 10;
    let Table = document.getElementById("table");

    if (maxRows <= 0) {
        table.deleteRow(max);
        var row = table.insertRow(3);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = lastPost.name;
        cell2.innerHTML = lastPost.text;
        cell3.innerHTML = formatDate(lastPost.time);
    } else {
        var row = table.insertRow(0);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        cell1.innerHTML = "<b>" + lastPost.name + ": </b> " + "<br><span class='date'>" + formatDate(lastPost.time) + "</span>";
        cell2.innerHTML = lastPost.text;
        cell3.innerHTML = "<br>";
    }
}

function clearTable() {
    //var Table = document.getElementById("table");
    //Table.innerHTML = "";
    var tableHeaderRowCount = 1;
    var table = document.getElementById('table');
    var rowCount = table.rows.length;
    for (var i = tableHeaderRowCount; i < rowCount; i++) {
        table.deleteRow(tableHeaderRowCount);
    }
}

function formatDate(d) {
    let current = new Date(d);
    let cDate = (current.getMonth() + 1) + '-' + current.getDate();
    let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
    let dateTime = cDate + ' ' + cTime;

    return dateTime;
}

let idx = 0;
async function updatePosts() {
    const response = await fetch('http://localhost:3000/allPosts');
    const data = await response.json();
    if (data.length > idx) {
        addPost();
    }
    idx = data.length;
}
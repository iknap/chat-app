async function getPosts() {
    const response = await fetch('http://localhost:3000/allPosts');
    const data = await response.json();
    printTable(data);
}

function doPost() {

    fetch('/post', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            post: {
                name: document.forms["form"]["name"].value,
                text: document.forms["form"]["text"].value
            }
        })
    });
    addPost();
}
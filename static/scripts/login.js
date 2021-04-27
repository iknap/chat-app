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


/*
          form.onsubmit = async (e) => {
              e.preventDefault();

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
          };
  */
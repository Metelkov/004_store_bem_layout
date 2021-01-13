document.querySelector('.login-bar__exit-pic').addEventListener('click', function(event) {
    switch (event.target.className) {
    case 'login-bar__exit-pic':
        debugger
        alert("exiting");
        break;
    }
    });

document.querySelector('.login-bar__buttons-login').addEventListener('click', function(event) {
    switch (event.target.className) {
    case 'login-bar__buttons-login':
        debugger
        document.getElementById("dialog").showModal();
        break;
    }
    });





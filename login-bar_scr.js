document.querySelector('.login-bar__exit-pic').addEventListener('click', function(event) {
    switch (event.target.className) {
    case 'login-bar__exit-pic':
        //debugger
        alert("exiting");
        break;
    }
    });

document.querySelector('.login-bar__buttons-login').addEventListener('click', function(event) {
    switch (event.target.className) {
    case 'login-bar__buttons-login':
        //debugger
        document.getElementById("dialog").showModal();
        break;
    }
    });

    document.querySelector('.login-bar__buttons-close-form').addEventListener('click', function(event) {
        switch (event.target.className) {
        case 'login-bar__buttons-close-form':
            //debugger
            //document.getElementById("login-bar__buttons-close-form").modal.close();
            // так тоже работает dialog.close();
            dialog.close('dialog');
            break;
        }
        });
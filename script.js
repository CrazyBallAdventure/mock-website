let myname = '';

function whodat() {
    myname = prompt("Confirm Username for Access");
    let name = (myname);
    if(myname != 'Jane Doe'){
        alert('Confirmed');
    } else{
        alert("Hello, " + myname);
    }
    }


whodat();
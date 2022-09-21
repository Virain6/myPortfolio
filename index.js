function myFunction(){
    let nm = document.getElementById("name").value;
    let ml = document.getElementById("email").value;
    let nmbr = document.getElementById("number").value;
    let sub = document.getElementById("subject").value;
    let msg = document.getElementById("message").value;

    alert("To, Virain Bawa \n\n" + sub + "\n" + msg + "\n\n" + "From,\n" + nm + "\n" + ml + "\n" + nmbr);
}
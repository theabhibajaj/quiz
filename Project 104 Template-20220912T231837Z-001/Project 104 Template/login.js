// Create login Function here.
function Login(){

    user_name = document.getElementById("player_name").value;
    localStorage.setItem("player_name",player_name);

    window.location = "gamepage.html";
}
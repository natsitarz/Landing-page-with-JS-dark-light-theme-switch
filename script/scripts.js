function theme(item) {
    if (item.className == "on") {
        item.className = "off";
        document.body.style.backgroundColor = "var(--dark-bg)";
        document.getElementById("header").style.color = "white";
        document.getElementById("subtxt").style.color = "white";
        document.getElementById("name").style.color = "white";
    } else {
        item.className = "on";
        document.body.style.backgroundColor = "var(--light-bg)";
        document.getElementById("header").style.color = "black";
        document.getElementById("subtxt").style.color = "black";
        document.getElementById("name").style.color = "black";
    }
}


console.log("Linked!")
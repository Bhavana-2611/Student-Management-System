function addStudent() {
    var name = document.getElementById("name").value;
    var roll = document.getElementById("roll").value;
    var dept = document.getElementById("dept").value;

    if (name == "" || roll == "" || dept == "") {
        alert("Please fill all fields");
        return;
    }

    var table = document.getElementById("studentTable");
    var row = table.insertRow();

    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = roll;
    row.insertCell(2).innerHTML = dept;
    row.insertCell(3).innerHTML =
        "<button onclick='this.parentElement.parentElement.remove()'>Delete</button>";

    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("dept").value = "";
}
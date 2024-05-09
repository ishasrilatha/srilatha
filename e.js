function addTask() {
    var input = document.getElementById("taskInput").value;
    if (input !== "") {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input));
        document.getElementById("taskList").appendChild(li);
        document.getElementById("taskInput").value = "";
    }
}
let rowElement;
let vendorNode;
let dateNode;
let amountNode;
let btnNode;

let vendorTextNode;
let dateTextNode;
let amountTextNode;
let btnTextNode;

function addItem() {
    //take user input & assign to variable
    let vendor = document.getElementById("vendorInput").value;
    let date = document.getElementById("dateInput").value;
    let amount = document.getElementById("amountInput").value;
    //clear fields after button press
    document.getElementById("vendorInput").value = "";
    document.getElementById("dateInput").value = "";
    document.getElementById("amountInput").value = "";
    //Convert amount to int
    amount = parseFloat(amount);
    amount = amount.toFixed(2);
    //create TD elements
    vendorNode = document.createElement("TD");
    dateNode = document.createElement("TD");
    amountNode = document.createElement("TD");
    btnNode = document.createElement("BUTTON");
    //create tr element
    rowElement = document.createElement("TR");
    //create text node to store user inputs
    vendorTextNode = document.createTextNode(vendor);
    dateTextNode = document.createTextNode(date);
    amountTextNode = document.createTextNode("$" + amount);
    btnTextNode = document.createTextNode("X");
    //apped userinputs to TD element
    vendorNode.appendChild(vendorTextNode);
    dateNode.appendChild(dateTextNode);
    amountNode.appendChild(amountTextNode);
    btnNode.appendChild(btnTextNode);
    //append TD elements to TR element
    rowElement.appendChild(vendorNode);
    rowElement.appendChild(dateNode);
    rowElement.appendChild(amountNode);
    rowElement.appendChild(btnNode);
    //append TD element to table section
    document.getElementById("expenseTable").appendChild(rowElement);
    //add event listener to delete button
    btnNode.addEventListener("click", deleteRow);
}

function deleteRow() {
    alert("Delete");
}
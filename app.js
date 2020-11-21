let vendorInput = document.getElementById("vendorInput");
let dateInput = document.getElementById("dateInput");
let amountInput = document.getElementById("amountInput");

let rowElement;
let vendorNode;
let dateNode;
let amountNode;
let btnNode;

let vendorTextNode;
let dateTextNode;
let amountTextNode;
let btnTextNode;

//focus cursor on vendor field after window loads
window.onload = function() {
    document.getElementById("vendorInput").focus()
}

//allows user to hit enter to submit while on vendor input
vendorInput.addEventListener("keyup", function(event) {
    if (event.keyCode == 13) {
        event.preventDefault();
        document.getElementById("addItem").click()
    }
})
//allows user to hit enter to submit while on date input
dateInput.addEventListener("keyup", function(event) {
    if (event.keyCode == 13) {
        event.preventDefault();
        document.getElementById("addItem").click()
    }
})
//allows user to hit enter to submit while on amount input
amountInput.addEventListener("keyup", function(event) {
    if (event.keyCode == 13) {
        event.preventDefault();
        document.getElementById("addItem").click()
    }
})

function addItem() {
    //take user input & assign to variable
    let vendor = document.getElementById("vendorInput").value;
    let date = document.getElementById("dateInput").value;
    let amount = document.getElementById("amountInput").value;
    
    if (vendor == "" || vendor == " ") {
        alert("Enter a valid Vendor");
    } else if (amount == "") {
        alert("Enter a valid amount");
    } else if (date == "") {
        alert("Enter a valid date")
    }
    else {
            //clear fields after button press
            document.getElementById("vendorInput").value = "";
            document.getElementById("dateInput").value = "";
            document.getElementById("amountInput").value = "";
            //Convert amount to int
            amount = parseFloat(amount);
            amount = amount.toFixed(2);
            /*
            date = getFormattedDate();
            */
            //create TD elements
            vendorNode = document.createElement("TD");
            dateNode = document.createElement("TD");
            amountNode = document.createElement("TD");
            btnNode = document.createElement("TD");
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
            //attach deleteButton class to button
            btnNode.classList.add("deleteButton");
            //append TD elements to TR element
            rowElement.appendChild(vendorNode);
            rowElement.appendChild(dateNode);
            rowElement.appendChild(amountNode);
            rowElement.appendChild(btnNode);
            //append TD element to table section
            document.getElementById("expenseTable").appendChild(rowElement);
            //add event listener to delete button
            btnNode.addEventListener("click", deleteRow);
            //focus on vendor field
            document.getElementById("vendorInput").focus();
        }
    }

function deleteRow(event) {
    //assigns event to X
    let x = event.target;
    //assigns parent of event to y
    let y = x.parentElement;
    //removes parent of event (AKA Y)
    y.remove();
    //focus on vendor field
    document.getElementById("vendorInput").focus();
}
/*
function getFormattedDate(inputTime) {

}*/
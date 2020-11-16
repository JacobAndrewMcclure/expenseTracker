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
    
    //create text node to store user inputs

    //apped userinputs to TD element

    //append TD element to table section

}
// Function to Get Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the value of the Input Field
    let num = document.getElementById("mynumber").value;
    // Check if the input is valid
    if (isNaN(num) || num.length == 0 || num<100 || num>1000000 || (num.length > 1 && num[0] == "0") || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 100 and 1000000.  Do not include leading zeros.`;
    } else {
        txt += `You have entered the number ${num}.<p>`;
        txt +=  `Value is ${champernownesConstant(num)}.`
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}
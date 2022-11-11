document.getElementById("inputForm").addEventListener("submit", calculate);
document.getElementById("inputForm").addEventListener("onclick", reset, clearInputFields);

document.getElementById("inputForm").addEventListener("keypress", (e) => {
  if (e.key === "Enter") { // key code of the keybord key
    e.preventDefault();
    // your code to Run
    document.getElementById("open").click();
  }
});

function calculate() {
    //input user
  const summaBill = document.getElementById("sum").value;
  const totalPersonBill = document.getElementById("numberOfFriends").value;
  const tipBill = document.getElementById("tip").value;
  
  if (totalPersonBill === "") {
    alert('type number of friends')
  }

    //convert the string to a number
    const summa = Number(summaBill);
    const totalPerson = Number(totalPersonBill);
    const tip = (Number(tipBill) / 100) + 1;

    // calculate
    const totalToPay = summa * tip;
    const eachToPay = totalToPay / totalPerson;

    //to show result
    const result = document.getElementById("result").innerHTML = "SEK " + eachToPay.toFixed(2) ;
    return result;
    
    
}


function reset() {
    //to show result 0 SEK
    document.getElementById("result").innerHTML = "SEK  0";
    return result;
}

function clearInputFields() {
    //to clear inputs
    document.getElementById("sum").value = '';
    document.getElementById("numberOfFriends").value = '';
    document.getElementById("tip").value = '';
}
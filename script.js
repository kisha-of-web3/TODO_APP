// currency converter code

function convertCurrency(){ 
    const amount = document.getElementById("amount").value;
    const from = document.getElementById("from").value;
    const to  = document.getElementById("to").value;
    const result = document.getElementById("result");

    const rates = {
       USD: { USD: 1, EUR: 0.93, GBP: 0.79, NGN: 1600 },
       EUR: { USD: 1.08, EUR: 1, GBP: 0.85, NGN: 1720 },
       GBP: { USD: 1.27, EUR: 1.18, GBP: 1, NGN: 2000 },
       NGN: { USD: 0.00063, EUR: 0.00058, GBP: 0.0005, NGN: 1 },
     };

     if (amount === "" || amount <=0) {
        alert("Enter a valid Number");
        return;
     }

     const converted = amount * rates[from][to];
     result.textContent = `converted Amount: ${converted.toFixed(2)} ${to}`;
}
// TO DO LIST APP
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const input = taskInput.value;
    const taskList = document.getElementById("taskList");



    if (input === "" ) {
        alert("Enter a value");
        return;
    }

    const li = document.createElement("li");
    // <li></li>
    li.textContent = input;
    // <li> INPUT </li>
    
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Remove";
    deleteBtn.style.background = "transparent";
    deleteBtn.style.color = "red";

    deleteBtn.onclick = () => {
        if(confirm("Do you want to delete?"))
        li.remove();
    }

    li.appendChild(deleteBtn);

    taskList.appendChild(li);
    taskInput.value = "";


}
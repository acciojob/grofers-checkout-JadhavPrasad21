const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
	 const priceElements = document.querySelectorAll(".prices");

    // Step 2: Calculate the total price
    let totalPrice = 0;
    priceElements.forEach((priceElement) => {
        const price = parseFloat(priceElement.textContent); // Convert the price text to a number
        if (!isNaN(price)) {
            totalPrice += price;
        }
    });

    // Step 3: Create a new row and cell to display the total price
    const table = document.querySelector("table");
    const newRow = table.insertRow(-1); // -1 appends the row to the end of the table
    const newCell = newRow.insertCell(0);

    // Display the total price in the new cell
    newCell.textContent = "Total Price: " + totalPrice.toFixed(2); // Format to two decimal places
};
  
};

getSumBtn.addEventListener("click", getSum);


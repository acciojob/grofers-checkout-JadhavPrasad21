const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    // Step 1: Get all the price elements with class "price"
    const priceElements = document.querySelectorAll(".price");

    // Step 2: Calculate the total price
    let totalPrice = 0;
    priceElements.forEach((priceElement) => {
        const price = parseFloat(priceElement.textContent); // Convert the price text to a number
        if (!isNaN(price)) {
            totalPrice += price;
        }
    });

    // Step 3: Create a new row and cells to display the total price
    const table = document.querySelector("table");
    const newRow = table.insertRow(-1); // -1 appends the row to the end of the table
    const itemNameCell = newRow.insertCell(0);
    const totalPriceCell = newRow.insertCell(1);

    // Set the cell contents
    itemNameCell.textContent = "Total Price:";
    totalPriceCell.textContent = totalPrice.toFixed(2); // Format to two decimal places
};

getSumBtn.addEventListener("click", getSum);

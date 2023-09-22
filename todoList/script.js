// Get references to HTML elements
const inputBox = document.getElementById("input-box");        // Input box for entering tasks
const listContainer = document.getElementById("list-container");  // Container for the list of tasks

// Function to add a new task to the list
function addTask() {
    // Check if the input box is empty
    if (inputBox.value === '') {
        alert('You must write something!');
    } else {
        // Create a new list item element
        let li = document.createElement("li");

        // Set the inner HTML of the list item to the input value (task text)
        li.innerHTML = inputBox.value;

        // Append the list item to the list container
        listContainer.appendChild(li);

        // Create a "delete" span element (to remove the task)
        let span = document.createElement("span");

        // Set the inner HTML of the span to '×' (the delete symbol)
        span.innerHTML = "\u00d7";

        // Append the span to the list item
        li.appendChild(span);
    }

    // Clear the input box
    inputBox.value = "";

    // Save the updated task list to local storage
    saveData();
}

// Event listener for clicks on the list container
listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        // Toggle the "checked" class for list items when clicked
        e.target.classList.toggle("checked");

        // Save the updated task list to local storage
        saveData();
    } else if (e.target.tagName === "SPAN") {
        // Remove the parent list item when the delete span is clicked
        e.target.parentElement.remove();

        // Save the updated task list to local storage
        saveData();
    }
}, false);

// Function to save the task list to local storage
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

// Function to load and display tasks from local storage
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

// Load and display tasks when the page loads
showTask();

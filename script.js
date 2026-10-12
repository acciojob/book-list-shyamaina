//your JS code here. If required.

const form = document.getElementById("book-form");
const bookList = document.getElementById("book-list");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const title = document.getElementById("title").value.trim();
    const author = document.getElementById("author").value.trim();
    const isbn = document.getElementById("isbn").value.trim();

    if (!title || !author || !isbn) {
        alert("Please fill in all fields.");
        return;
    }

    const row = document.createElement("tr");

    [title, author, isbn].forEach(value => {
        const cell = document.createElement("td");
        cell.textContent = value;
        row.appendChild(cell);
    });

    const actionCell = document.createElement("td");
    const deleteButton = document.createElement("button");

    deleteButton.textContent = "X";
    deleteButton.className = "delete";
    deleteButton.type = "button";

    deleteButton.addEventListener("click", function () {
        row.remove();
    });

    actionCell.appendChild(deleteButton);
    row.appendChild(actionCell);
    bookList.appendChild(row);

    form.reset();
});



let input = document.getElementById("addtable");
let btn = document.getElementById("add");
let container = document.getElementById("listoftable");

let tableData = JSON.parse(localStorage.getItem("tableData")) || [];

function renderTableList() {
  container.innerHTML = "";
  tableData.forEach((tableText, index) => createTableItem(tableText, index));
}

function createTableItem(tableText, index) {
  let wrapper = document.createElement("div");
  let name = document.createElement("p");
  let nextBtn = document.createElement("button");
  let deleteBtn = document.createElement("button");

  wrapper.classList.add("table-item");
  name.textContent = tableText;
  nextBtn.textContent = "Next";
  deleteBtn.textContent = "Delete";

  wrapper.appendChild(name);
  wrapper.appendChild(nextBtn);
  wrapper.appendChild(deleteBtn);
  container.appendChild(wrapper);

  deleteBtn.addEventListener("click", function () {
    tableData.splice(index, 1);
    localStorage.setItem("tableData", JSON.stringify(tableData));
    renderTableList();
  });

  nextBtn.addEventListener("click", function () {
    const uniqueIdentifier = `table-${index}`;
    window.location.href = `first.html?table=${encodeURIComponent(uniqueIdentifier)}`;
  });
}

btn.addEventListener("click", function () {
  let tableText = input.value.trim();
  if (tableText) {
    tableData.push(tableText);
    localStorage.setItem("tableData", JSON.stringify(tableData));
    renderTableList();
    input.value = "";
  } else {
    alert("Please enter a valid table name!");
  }
});

renderTableList();
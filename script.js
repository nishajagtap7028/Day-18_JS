document.getElementById("markForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("studentName").value;
  const subject = document.getElementById("subject").value;
  const marks = document.getElementById("marks").value;

  const table = document.querySelector("#resultTable tbody");
  const row = table.insertRow();

  row.innerHTML = `
    <td>${name}</td>
    <td>${subject}</td>
    <td>${marks}</td>
  `;

  // Clear form fields
  document.getElementById("markForm").reset();
});

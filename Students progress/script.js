let studentReports = [];

// Function to render student reports in the "Stored Students" section
function renderStudentReports() {
  const studentReportsContainer = document.querySelector(".student-reports");
  studentReportsContainer.innerHTML = "";

  studentReports.forEach((report, index) => {
    const reportHTML = `
      <div class="student-report">
        <h3>${report.name}</h3>
        <p>Course: ${report.course}</p>
        <p>Marks: ${report.marks}</p>
        <p>Strength: ${report.strength}</p>
        <p>Weakness: ${report.weakness}</p>
        <p>Comments: ${report.comments}</p>
        <button class="edit edit-${index}">Edit</button>
        <button class="delete delete-${index}">Delete</button>
      </div>
    `;
    studentReportsContainer.insertAdjacentHTML("beforeend", reportHTML);

    // Adding event listeners for the Edit and Delete buttons
    document.querySelector(`.edit-${index}`).addEventListener("click", () => handleEditStudent(index));
    document.querySelector(`.delete-${index}`).addEventListener("click", () => handleDeleteStudent(index));
  });
}

// Handle Add New Student Form Toggle
document.querySelector("#add-student-button").addEventListener("click", () => {
  const formContainer = document.querySelector("#add-student-form-container");
  formContainer.style.display = formContainer.style.display === 'block' ? 'none' : 'block';
});

// Handle Submit Student Button Click
document.querySelector("#submit-student-button").addEventListener("click", (event) => {
  event.preventDefault();

  // Get student data from the form
  const name = document.querySelector("#name").value;
  const course = document.querySelector("#course").value;
  const marks = parseInt(document.querySelector("#marks").value);
  const strength = document.querySelector("#strength").value;
  const weakness = document.querySelector("#weakness").value;
  const comments = document.querySelector("#comments").value;

  // Push the new student data to the studentReports array
  studentReports.push({ name, course, marks, strength, weakness, comments });

  // Render the student reports and reset the form
  renderStudentReports();
  document.querySelector("#add-student-form").reset();
  document.querySelector("#add-student-form-container").style.display = "none";
});

// Handle Edit Student Functionality
function handleEditStudent(index) {
  const student = studentReports[index];

  // Fill the form with the current student's data
  document.querySelector("#name").value = student.name;
  document.querySelector("#course").value = student.course;
  document.querySelector("#marks").value = student.marks;
  document.querySelector("#strength").value = student.strength;
  document.querySelector("#weakness").value = student.weakness;
  document.querySelector("#comments").value = student.comments;

  // Remove the student from the reports array to update
  studentReports.splice(index, 1);

  // Show the form to edit the student details
  document.querySelector("#add-student-form-container").style.display = "block";
}

// Handle Delete Student Functionality
function handleDeleteStudent(index) {
  // Remove the student from the reports array
  studentReports.splice(index, 1);

  // Re-render the student reports
  renderStudentReports();
}

// Initial render
renderStudentReports();

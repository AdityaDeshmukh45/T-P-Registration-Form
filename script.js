function validateForm() {
  let isValid = true;

  // Clear previous error messages
  document.querySelectorAll(".error").forEach((el) => (el.textContent = ""));

  // Get form values
  const name = document.getElementById("name").value.trim();
  const branch = document.getElementById("branch").value;
  const year = document.getElementById("year").value;
  const sem = document.getElementById("sem").value;
  const cgpa = document.getElementById("cgpa").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const email = document.getElementById("email").value.trim();

  // Validate Name
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required.";
    isValid = false;
  }

  // Validate Branch
  if (branch === "") {
    document.getElementById("branchError").textContent =
      "Please select a branch.";
    isValid = false;
  }

  // Validate Year
  if (year === "") {
    document.getElementById("yearError").textContent = "Year is required.";
    isValid = false;
  }

  // Validate Semester
  if (sem === "") {
    document.getElementById("semError").textContent = "Semester is required.";
    isValid = false;
  }

  // Validate CGPA
  if (cgpa === "" || isNaN(cgpa) || cgpa < 0 || cgpa > 10) {
    document.getElementById("cgpaError").textContent =
      "Please enter a valid CGPA between 0 and 10.";
    isValid = false;
  }

  // Validate Mobile Number
  if (!/^[0-9]{10}$/.test(mobile)) {
    document.getElementById("mobileError").textContent =
      "Please enter a valid 10-digit mobile number.";
    isValid = false;
  }

  // Validate Email
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    document.getElementById("emailError").textContent =
      "Please enter a valid email address.";
    isValid = false;
  }
  // Validate Resume
  const resume = document.getElementById("resume").files[0];
  if (!resume) {
    document.getElementById("resumeError").textContent =
      "Please upload your resume.";
    isValid = false;
  } else {
    const allowedExtensions = /(\.pdf|\.doc|\.docx)$/i;
    if (!allowedExtensions.test(resume.name)) {
      document.getElementById("resumeError").textContent =
        "Only PDF, DOC, or DOCX files are allowed.";
      isValid = false;
    }
  }

  return isValid;
}

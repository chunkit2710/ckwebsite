// Function to handle form submission
function submitFeedback(event) {
    event.preventDefault();  // Prevents the form from submitting the traditional way (page reload)
  
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const rating = document.getElementById("rating").value;
    const comments = document.getElementById("comments").value;
  
    // Simple validation
    if (name === "" || email === "" || rating === "") {
      alert("Please fill in all required fields.");
      return false;
    }
  
    // Show confirmation message
    document.getElementById("confirmationMessage").style.display = "block";
  
    // Optionally, you can log the feedback to the console (or send it to a server)
    console.log("Feedback submitted:");
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Rating:", rating);
    console.log("Comments:", comments);
  
    // Clear the form (optional)
    document.getElementById("feedbackForm").reset();
  
    return false;  // Prevents actual form submission
}  
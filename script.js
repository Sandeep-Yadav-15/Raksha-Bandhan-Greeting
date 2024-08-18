// JavaScript that adds interactivity to the web page, including displaying a personalized message and toggling dark mode.

// Function to display a personalized message when the user enters their name and clicks the button.
function showMessage() {
   // Get the value entered by the user in the input field with ID 'name'.
    const name = document.getElementById("name").value;
    // Get the paragraph element where the personalized message will be displayed.
    const messageElelement = document.getElementById("personalMessage");

    if (name){
        // If the user has entered a name, display a personalized message.
        messageElelement.textContent = `Hello, ${name},  Wishing you a day filled with love, laughter, and joy!
        May the bond of brotherhood and sisterhood be strengthened on this special`;
        // Update the paragraph text to include the user's name in the greeting.`
        } else {
            // If the user has not entered a name, prompt the user to enter their name.
            messageElelement.textContent = "Please enter your name to see a personalized message.";
             // Display a prompt asking the user to enter their name.

        }
}

// Dark Mode Toggle
const toggleDarkMode = document.getElementById('toggleTheme');
// Get the checkbox input element for toggling dark mode.

toggleDarkMode.addEventListener('change',()=>{
    // Add an event listener to the checkbox input element to toggle dark mode when the user clicks the(checked/unchecked).
    document.body.classList.toggle('dark-mode');
})
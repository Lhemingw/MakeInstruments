document.addEventListener("DOMContentLoaded", function() {
    const notes = document.querySelectorAll(".note1"); // added 1 to note to see if it will work
    // const numberOfPipes = 15; set the number of pipes I want
    // const panFlute = document.querySelector(".pan-flute");
    //for (let i=0; i< numberOfPipes; i++){
    //   const note =document.createElement("div");
    //   note.classList.add("note");
    //   panFlute.appendChild(note):
    // }
  
    function playSound() {
      const audio = new Audio("path/to/your/soundfile.mp3"); // Replace with the path to your sound file
      audio.play();
    }
  
    function handleClick() {
      playSound();// Plays the sound when the note is clicked, I can put a log here to see the note logged.
      this.classList.add("active");
      setTimeout(() => {
        this.classList.remove("active"); // Adds the "active" class to the clicked note
      }, 300); // Change this value to match your sound duration.  Removes the "active" class after 300 milliseconds (adjust as needed
    }
  
    notes.forEach(note => {
      note.addEventListener("click", handleClick);
    });
  });
  //document.addEventListener("DOMContentLoaded", function() {...}); ensures that the JavaScript code inside the function runs after the HTML document has been completely loaded. This is important to make sure the DOM elements you're trying to access (like elements with the class "note1") are available.
// const notes = document.querySelectorAll(".note1"); selects all elements with the class "note1" and stores them in the notes NodeList variable.
// function handleClick() {...} defines a function that plays a sound, adds the "active" class to the clicked note, and removes the "active" class after a delay.
// notes.forEach(note => {...}); iterates over each element in the notes NodeList and adds a click event listener. When any of these elements are clicked, the handleClick function will be executed, playing the sound and adding/removing the "active" class.
// If you want to modify the code to log a message to the console when a note is clicked, you can replace the playSound() line in the handleClick function with a console.log statement or any other functionality you desire. For example:
  
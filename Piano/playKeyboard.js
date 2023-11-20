//using the keyboard to play the piano. set eventlisioner when we press the keys and acually
//allow us to play the note for the key we pressed
const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
const BLACK_KEYS =['s', 'd', 'g', 'h', 'j']
const pianoKeys = document.querySelectorAll(".piano-keys .key"),
//get everything with a class of key.  
volumeSlider = document.querySelector(".volume-slider input"),
keysCheckbox = document.querySelector(".keys-checkbox input");

const whiteKeys = document.querySelectorAll(',key.white')
const blacKeys = document.querySelectorAll(',key.white')
//Loop over them, for each key we want to do is run this function inside of eventlistener
// we want to do this whenever we click on the key and all want to do is run a function which 
//which is going to call a function called play note with our key & we are going to create this play note fuction
//play the audio for note and passing in the key that we want to play that element-this is in playNote .
pianoKeys.forEach(pianoKeys =>{
    pianoKeys.addEventListener('click', () => playNote(pianoKeys))
})
document.addEventListener('keydown', e => {
    if(e.repeat) return//to stop the irriteration of the same note
    const key =e.key
    const whiteKeyIndex =WHITE_KEYS.indexOf(key)
    const blackKeyIndex =BLACK_KEYS.indexOf(key)

    if(whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
    if(blackKeyIndex > -1) playNote(blacKeys[blackKeyIndex])

})

//getting all our white keys and index of that white key index, essentially what we're doing 
    //is we're finding the index of the key that we pressed and then corresponding that to the inde 
    //it is in the order of the array, so we picked up the [], and the whitekeyindex/blackkey
   
 //run some code so if greater than -1 so -1 is returned when it can not find anything so if 
    //it found something it will play the note

    //this is to play the piano with the keyboard
function playNote(pianoKeys) {
    const noteAudio = document.getElementById(pianoKeys.dataset.note)
    //to make it play like regular piano noteAudio.currentTime. set at 0 to start at beginging and replay it.
    noteAudio.currentTime =0
    noteAudio.play()
    pianoKeys.classList.add('active')
    noteAudio.addEventListener('ended', () => {
        pianoKeys.classList.remove('active')
    })
    

    
//calling .play on the noteAudio.play()
}
//get our data element from the note that we press, to do this noteAudio =document

// let allKeys = [],
// audio = new Audio(`tunes/a.wav`); // by default, audio src is "a" tune

// const playTune = (key) => {
//     audio.src = `tunes/${key}.wav`; // passing audio src based on key pressed 
//     audio.play(); // playing audio

//     const clickedKey = document.querySelector(`[data-key="${key}"]`); // getting clicked key element
//     clickedKey.classList.add("active"); // adding active class to the clicked key element
//     setTimeout(() => { // removing active class after 150 ms from the clicked key element
//         clickedKey.classList.remove("active");
//     }, 150);
// }

// pianoKeys.forEach(key => {
//     allKeys.push(key.dataset.key); // adding data-key value to the allKeys array
//     // calling playTune function with passing data-key value as an argument
//     key.addEventListener("click", () => playTune(key.dataset.key));
// });

// const handleVolume = (e) => {
//     audio.volume = e.target.value; // passing the range slider value as an audio volume
// }

// const showHideKeys = () => {
//     // toggling hide class from each key on the checkbox click
//     pianoKeys.forEach(key => key.classList.toggle("hide"));
// }

// const pressedKey = (e) => {
//     // if the pressed key is in the allKeys array, only call the playTune function
//     if(allKeys.includes(e.key)) playTune(e.key);
// }

// keysCheckbox.addEventListener("click", showHideKeys);
// volumeSlider.addEventListener("input", handleVolume);
// document.addEventListener("keydown", pressedKey);



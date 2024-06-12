(function(){
    var keys =[
        'A0', 'A#0/Bb0','B0','C1','C#1/Db1','D1', 'D#1/Eb1','E1','F1','F#1/Gb1','G1', 'Ab1/G#1',
        'A1','Bb1/A#1','B1','C2','C#2/Db2','D2','Eb2/D#2','E2','F2','Gb2/F#2','G2','Ab2/G#2',
        'A2', 'Bb2/A#2','B2','C3','Db3/C#3','D3','Eb3/D#3','E3','F3', 'Gb3/F#3','G3','Ab3/G#3',
        'A3','Bb3/A#3','B3','C4','Db4/C#4','D4','Eb4/D#4','E4','F4','Gb4/F#4','G4','Ab4/G#4',
        'A4','Bb4/A#4','B4','C5','Db5/C#5','D5','Eb5/D#5','E5','F5','Gb5/F#5','G5','Ab5/G#5',
        'A5','Bb5/A#5','B5','C6', 'Db6/C#6','D6', 'Eb6/D#6','E6','F6', 'Gb6/F#6','G6', 'Ab6/G#6',
        'A6', 'Bb6/A#6','B6','C7', 'Db7/C#7','D7','Eb7/D#7','E7','F7','Gb7/F#7','G7', 'Ab7/G#7',
        'A7','Bb7/A#7','B7','C8'
       
    ]
    function handleKey(value) {
        // You can perform actions based on the key value here
        console.log('Key pressed:', value);}
    
        // For a real application, you might want to perform other actions (e.g., update an input field)
        function playSound(note) {
            var audioElement = document.getElementById('sound-' + note);
            if (audioElement) {
                audioElement.currentTime = 0;
                audioElement.play();
            }
        }
        
             /* Manually diminish the volume when the key is not sustained. */
  /* These values are hand-selected for a pleasant fade-out quality. */
  
//   function fade(key) {
//     var audio = sound(key);
//     var stepfade = function() {
//       if (audio) {
//         if (audio.volume < 0.03) {
//           kill(key)();
//         } else {
//           if (audio.volume > 0.2) {
//             audio.volume = audio.volume * 0.95;
//           } else {
//             audio.volume = audio.volume - 0.01;
//           }
//         }
//       }
//     };
//     return function() {
//       clearInterval(intervals[key]);
//       intervals[key] = setInterval(stepfade, 5);
//     };
//   };

//   /* Bring a key to an immediate halt. */
  
//   function kill(key) {
//     var audio = sound(key);
//     return function() {
//       clearInterval(intervals[key]);
//       if (audio) {
//         audio.pause();
//       }
//       if (key.length > 2) {
//         $(pianoClass(key)).animate({
//           'backgroundColor': 'black'
//         }, 300, 'easeOutExpo');
//       } else {
//         $(pianoClass(key)).animate({
//           'backgroundColor': 'white'
//         }, 300, 'easeOutExpo');
//       }
//     };
//   };

//   /* Simulate a gentle release, as opposed to hard stop. */
  
//   var fadeout = true;

//   /* Sustain pedal, toggled by user. */
  
//   var sustaining = false;

//   /* Register mouse event callbacks. */
  
//   keys.forEach(function(key) {
//     $(pianoClass(key)).mousedown(function() {
//       $(pianoClass(key)).animate({
//         'backgroundColor': '#88FFAA'
//       }, 0);
//       press(key);
//     });
//     if (fadeout) {
//       $(pianoClass(key)).mouseup(function() {
//         depressed[key] = false;
//         if (!sustaining) {
//           fade(key)();
//         }
//       });
//     } else {
//       $(pianoClass(key)).mouseup(function() {
//         depressed[key] = false;
//         if (!sustaining) {
//           kill(key)();
//         }
//       });
//     }
//   });

//   /* Register keyboard event callbacks. */
  
//   $(document).keydown(function(event) {
//     if (event.which === pedal) {
//       sustaining = true;
//       $(pianoClass('pedal')).addClass('piano-sustain');
//     }
//     press(keydown(event.which));
//   });
  
//   $(document).keyup(function(event) {
//     if (event.which === pedal) {
//       sustaining = false;
//       $(pianoClass('pedal')).removeClass('piano-sustain');
//       Object.keys(depressed).forEach(function(key) {
//         if (!depressed[key]) {
//           if (fadeout) {
//             fade(key)();
//           } else {
//             kill(key)();
//           }
//         }
//       });
//     }
//     if (keyup(event.which)) {
//       depressed[keyup(event.which)] = false;
//       if (!sustaining) {
//         if (fadeout) {
//           fade(keyup(event.which))();
//         } else {
//           kill(keyup(event.which))();
//         }
//       }
//     }
//   });

// })();

        
    

    
})
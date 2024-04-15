const say = require('say');
// say.speak("Hello Kamil podda potttaa...");
console.log("speeking");

// List available voices
// console.log(say.getInstalledVoices());

// Use a specific voice
say.speak('Hello , Its just a try to speak using javascript . Just a random test', null, 1.0, 'Daniel', (err) => {
  if (err) {
    console.error('Error speaking:', err);
  }
});


// const player = require('play-sound')();
// player.play('')

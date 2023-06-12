let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Estudio de virus de importancia agrícola a nivel regional y nacional.')
  .pauseFor(200)
  .deleteChars(10)
  .start();

  
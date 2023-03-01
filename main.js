let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});
 
typewriter
  .pauseFor(2500)
  .typeString('Diagnóstico molecular de virus y patógenos asociados a cultivos de importancia regional y nacional.')
  .pauseFor(200)
  .deleteChars(10)
  .start();

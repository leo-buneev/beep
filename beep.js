let context = null;


window.Beeper = {
beep(freq = 520, duration = 200, vol = 100) {
  if(!context) context = new AudioContext();
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.connect(gain);
  oscillator.frequency.value = freq;
  oscillator.type = "square";
  gain.connect(context.destination);
  gain.gain.value = vol * 0.01;
  oscillator.start(context.currentTime);
  oscillator.stop(context.currentTime + duration * 0.001);
},

play(sequence) {
  let el = sequence.shift()
  if(!el) return
  if(!Array.isArray(el)) el = [el]
  window.Beeper.beep(el[0], el[1], el[2])
  setTimeout(() => play(sequence), el[1] || 200)
}
}

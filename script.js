/* ===== MATRIX RAIN EFFECT ===== */
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const chars = "アイウエオカキクケコサシスセソ01化01タチツテトナニヌネノ0110".split("");
const fontSize = 16;
const columns = canvas.width / fontSize;
const drops = Array(Math.floor(columns)).fill(1);

function drawMatrix(){
  ctx.fillStyle = "rgba(5,5,16,0.08)";
  ctx.fillRect(0,0,canvas.width, canvas.height);
  ctx.fillStyle = "#00ff9f";
  ctx.font = fontSize + "px monospace";

  drops.forEach((y, i) => {
    const text = chars[Math.floor(Math.random()*chars.length)];
    ctx.fillText(text, i*fontSize, y*fontSize);
    if(y*fontSize > canvas.height && Math.random() > 0.975){
      drops[i] = 0;
    }
    drops[i]++;
  });
}
setInterval(drawMatrix, 40);

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

/* ===== BOOT TEXT ===== */
const bootLines = [
  "[SYSTEM] Initializing birthday.exe ...",
  "[SYSTEM] Loading celebration protocols ...",
  "[SYSTEM] Target user found: P. MOHAN VAITHIYA",
  "[SYSTEM] Access granted. Executing wishes..."
];
let bootIndex = 0;
const bootTextEl = document.getElementById('bootText');

function typeBootLine(){
  if(bootIndex < bootLines.length){
    bootTextEl.textContent = bootLines[bootIndex];
    bootIndex++;
    setTimeout(typeBootLine, 900);
  }
}
typeBootLine();

/* ===== TYPEWRITER MESSAGE ===== */
const message = `Wishing you a birthday full of laughter, love, and endless discovery.\nMay this new year of your life debug every worry\nand compile pure happiness. 🎉`;
const twEl = document.getElementById('typewriterText');
let charIndex = 0;

function typeWriter(){
  if(charIndex < message.length){
    twEl.textContent += message.charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 35);
  }
}
setTimeout(typeWriter, 3800);

/* ===== GIFT BOX REVEAL ===== */
const giftBox = document.getElementById('giftBox');
const giftReveal = document.getElementById('giftReveal');

giftBox.addEventListener('click', () => {
  giftReveal.classList.add('show');
  giftBox.style.display = 'none';
  launchConfetti();
  giftReveal.scrollIntoView({behavior:'smooth', block:'center'});
});

/* ===== CONFETTI ===== */
function launchConfetti(){
  const container = document.getElementById('confetti-container');
  const colors = ['#00ff9f','#ff00e6','#00e5ff','#ffdd00'];

  for(let i=0; i<80; i++){
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = Math.random()*100 + 'vw';
    piece.style.width = (Math.random()*8+4) + 'px';
    piece.style.height = (Math.random()*8+4) + 'px';
    piece.style.background = colors[Math.floor(Math.random()*colors.length)];
    piece.style.animationDuration = (Math.random()*2+3) + 's';
    container.appendChild(piece);
    setTimeout(()=>piece.remove(), 5500);
  }
}

/* Auto celebration burst on load */
window.addEventListener('load', () => {
  setTimeout(launchConfetti, 1500);
});

// Draws slowly moving sine waves behind the header, like a live graph.
const canvas = document.getElementById("waves");
const ctx = canvas.getContext("2d");

// Each wave is y = amplitude · sin(frequency · x + speed · time + phase)
const waves = [
  { amplitude: 26, frequency: 0.012, speed: 0.6, phase: 0, opacity: 0.35 },
  { amplitude: 16, frequency: 0.021, speed: -0.9, phase: 2, opacity: 0.22 },
  { amplitude: 42, frequency: 0.006, speed: 0.35, phase: 4, opacity: 0.16 },
];

// Match the canvas's pixel count to the screen so lines stay sharp
function resize() {
  const ratio = window.devicePixelRatio || 1;
  canvas.width = canvas.clientWidth * ratio;
  canvas.height = canvas.clientHeight * ratio;
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
}

function draw(time) {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  const seconds = time / 1000;
  const axisY = height * 0.75;

  ctx.clearRect(0, 0, width, height);

  // A faint dashed x-axis for the waves to ride on
  ctx.setLineDash([4, 8]);
  ctx.strokeStyle = "rgba(74, 222, 128, 0.15)";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(0, axisY);
  ctx.lineTo(width, axisY);
  ctx.stroke();
  ctx.setLineDash([]);

  for (const w of waves) {
    ctx.beginPath();
    for (let x = 0; x <= width; x += 4) {
      const y = axisY + w.amplitude * Math.sin(w.frequency * x + w.speed * seconds + w.phase);
      if (x === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }
    ctx.strokeStyle = `rgba(74, 222, 128, ${w.opacity})`;
    ctx.lineWidth = 1.5;
    ctx.stroke();
  }
}

// Redraw every frame (about 60 times a second) with the current time
function animate(time) {
  draw(time);
  requestAnimationFrame(animate);
}

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

resize();
window.addEventListener("resize", () => {
  resize();
  draw(performance.now());
});

if (reduceMotion) {
  draw(0);
} else {
  requestAnimationFrame(animate);
}

// --- Settings: key -> animation mapping (bonus) ---
const keyToAnim = {
  k: "anim-bounce", // Kick
  s: "anim-shake", // Snare
  h: "anim-pulse", // Hi-Hat
  t: "anim-wobble", // Tom
  c: "anim-pop", // Clap
  r: "anim-spin", // Ride
};

// Play sound
function playSound(src) {
  // Separate audio samples per trigger; can be played over and over
  const audio = new Audio(src);
  audio.currentTime = 0;
  audio.play().catch(() => {
    /* automatic playback may be blocked, waiting for the first interaction */
  });
}

// Press effect + bonus animation
function animatePress(btn) {
  if (!btn) return;
  btn.classList.add("playing");

  // Bonus: button-specific animation class
  const k = (btn.dataset.key || "").toLowerCase();
  const anim = keyToAnim[k];
  if (anim) {
    btn.classList.add(anim);
    // clear when animation ends
    btn.addEventListener("animationend", () => btn.classList.remove(anim), {
      once: true,
    });
  }

  // remove "playing" with short delay
  setTimeout(() => btn.classList.remove("playing"), 120);
}

// Trigger a pad (sound + animation)
function triggerPad(btn) {
  if (!btn) return;
  const src = btn.dataset.sound;
  if (src) playSound(src);
  animatePress(btn);
}

// --- Events: click ---
document.querySelectorAll(".pad").forEach((btn) => {
  btn.addEventListener("click", () => triggerPad(btn));
  // For touch devices 
  btn.addEventListener("pointerdown", (e) => {
    // If it's a mouse, clicking will already work; for a quick response on touch/pen:
    if (e.pointerType !== "mouse") triggerPad(btn);
  });
});

// --- Events: keyboard ---
window.addEventListener("keydown", (e) => {
  if (e.repeat) return; // Prevent retriggering while holding down the key
  const key = e.key.toLowerCase();
  const btn = document.querySelector(`.pad[data-key="${key}"]`);
  if (btn) {
    triggerPad(btn);
    // for focus ring display:
    btn.focus({ preventScroll: true });
  }
});

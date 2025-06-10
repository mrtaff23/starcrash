const avatarImg = document.getElementById('avatar-img');
const shirtSelect = document.getElementById('shirt');
const pantSelect = document.getElementById('pant');
const hairSelect = document.getElementById('hair');
const glassSelect = document.getElementById('glass');
const downloadBtn = document.getElementById('download-btn');

const vinyl = document.querySelector('.vinyl-record');
const audio = document.getElementById('vinyl-audio');

vinyl.addEventListener('click', function() {
  if (audio.paused) {
    audio.currentTime = 0;
    audio.play();
  } else {
    audio.pause();
    audio.currentTime = 0;
  }
});
// Avatar switching logic
function updateAvatar() {
  let base, variant;

  const shirt = shirtSelect.value; // "black" or "green"
  const pant = pantSelect.value;   // "default" or "maron"
  const hair = hairSelect.value === 'yes';
  const glass = glassSelect.value === 'yes';

  if (pant === 'maron') {
    base = 'avatar_maron';
  } else {
    base = `avatar_${shirt}`;
  }

  if (hair && glass) {
    variant = 'hair_glass';
  } else if (hair) {
    variant = 'hair';
  } else if (glass) {
    variant = 'glass';
  } else {
    variant = 'base';
  }

  const path = `/assets/avatars/${base}_${variant}.svg`;
  avatarImg.src = path;
  avatarImg.setAttribute('data-download-src', path);
}

// Download logic (for SVG)
downloadBtn.addEventListener('click', function() {
  // Use the current avatar's src
  const src = avatarImg.getAttribute('data-download-src') || avatarImg.src;
  // Create a temporary link and trigger download
  const link = document.createElement('a');
  link.href = src;
  link.download = 'rockstar_avatar.svg';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});

// Update avatar on select
[shirtSelect, pantSelect, hairSelect, glassSelect].forEach(sel =>
  sel.addEventListener('change', updateAvatar)
);

// Initial state
updateAvatar();


// Rockstar Quiz Logic
const quizForm = document.getElementById('rockstar-quiz');
const quizResult = document.getElementById('quiz-result');

quizForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const answers = Array.from(quizForm.querySelectorAll('select')).map(sel => sel.value);

  // Simple creative result logic
  let result;
  if (answers.includes('gitarre') && answers.includes('auffällig')) {
    result = "Du bist der Bühnenheld – immer im Rampenlicht und mit Gitarre!";
  } else if (answers.includes('bequem') && answers.includes('hut')) {
    result = "Du bist der entspannte Rockstar – immer locker und lässig!";
  } else if (answers.includes('sonnenbrille') && answers.includes('laut')) {
    result = "Du bist der wilde Rockstar – Sonnenbrille auf und ab geht die Party!";
  } else if (answers.includes('jacke') && answers.includes('mystisch')) {
    result = "Du bist der geheimnisvolle Rockstar – dein Look ist legendär!";
  } else {
    result = "Du hast deinen ganz eigenen Rockstar-Style – bleib einzigartig!";
  }

  quizResult.textContent = result;
},

document.addEventListener('DOMContentLoaded', function() {
  const quizForm = document.getElementById('rockstar-quiz');
  const quizResult = document.getElementById('quiz-result');

  if (quizForm) {
    quizForm.addEventListener('submit', function(e) {
      e.preventDefault();
      let score = 0;
      const answers = {
        q1: 'b', // Auffällige Farben und Muster
        q2: 'b', // Sonnenbrille und Lederarmbänder
      };
      const userAnswers = {
        q1: quizForm.q1.value,
        q2: quizForm.q2.value,
      };
      if (userAnswers.q1 === answers.q1) score++;
      if (userAnswers.q2 === answers.q2) score++;
      if (score === 2) {
        quizResult.textContent = "Super, du kennst dich mit Rockstar-Style aus! 🤘";
      } else if (score === 1) {
        quizResult.textContent = "Nicht schlecht! Du bist auf dem Weg zum Style-Profi!";
      } else {
        quizResult.textContent = "Probier's nochmal! Rockstars denken bunter und ausgefallener!";
      }
    });
  }
}),

document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('start-avatar-btn');
  btn.addEventListener('click', function() {
    const avatarSection = document.querySelector('.avatar-customizer');
    if (avatarSection) {
      avatarSection.scrollIntoView({behavior: 'smooth'});
    }
  });
})

);

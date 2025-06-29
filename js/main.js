
//_____________Index___________________________________________________________________________________________________-

// BURGER MENU 
const menuBtn = document.getElementById("menu-btn");
const nav = document.querySelector(".main-nav");
if (menuBtn && nav) {
  menuBtn.addEventListener("click", function () {
    nav.classList.toggle("open");
  });
}



let bilder = [
  "assets/images/hero.png",
  "assets/images/heroo.png"
];

let nummer = 0;
let bild = document.getElementById("bild");
if (bild) {
  setInterval(function () {
    nummer = nummer + 1;

    if (nummer >= bilder.length) {
      nummer = 0;
    }

    bild.src = bilder[nummer];
  }, 4000);
}


// FACT ROTATOR 
const facts = [
  "Der längste Gitarrensolo der Welt dauerte über 24 Stunden!",
  "Jimi Hendrix spielte Gitarre mit den Zähnen!",
  "Freddie Mercury hatte einen Stimmumfang von 4 Oktaven!",
  "Rockmusik entstand aus Blues und Country-Musik!",
];

const factText = document.getElementById("fact-text");
let fact_index = 0;
if (factText) {
  setInterval(function () {
    fact_index++;
    if (fact_index >= facts.length) {
      fact_index = 0;
    }
    factText.textContent = facts[fact_index];
  }, 4000);
}

//____________Avatar Creator__________________________________________________________________________________________

// AVATAR CUSTOMIZER & VINYL AUDIO & ROCKSTAR QUIZ 
document.addEventListener("DOMContentLoaded", function () {

  // AVATAR CUSTOMIZER 
  // AVATAR CUSTOMIZER 
  const avatarImg = document.getElementById("avatar-img");
  const sex = document.getElementById("sex");
  const jacke = document.getElementById("Jacke");
  const instrument = document.getElementById("instrument");
  const download = document.getElementById("download-btn");

  if (avatarImg && sex && jacke && instrument && download) {
    function updateAvatar() {
      if (!(avatarImg && sex && jacke && instrument)) return;
      let imgPath = "";

      if (sex.value === "Mann") {
        if (jacke.value === "yes" && instrument.value === "micro") {
          imgPath = "assets/avatar/boy_jacke_micro.png";
        } else if (jacke.value === "yes" && instrument.value === "guitare") {
          imgPath = "assets/avatar/boy_jacke_guitare.png";
        } else if (jacke.value === "no" && instrument.value === "micro") {
          imgPath = "assets/avatar/boy_micro.png";
        } else if (jacke.value === "no" && instrument.value === "guitare") {
          imgPath = "assets/avatar/boy_guitare.png";
        } else {
          imgPath = "assets/avatar/boy_base.png";
        }
      } else if (sex.value === "Frau") {
        if (jacke.value === "yes" && instrument.value === "micro") {
          imgPath = "assets/avatar/girl_jacke_micro.png";
        } else if (jacke.value === "yes" && instrument.value === "guitare") {
          imgPath = "assets/avatar/girl_jacke_guitare.png";
        } else if (jacke.value === "no" && instrument.value === "micro") {
          imgPath = "assets/avatar/girl_micro.png";
        } else if (jacke.value === "no" && instrument.value === "guitare") {
          imgPath = "assets/avatar/girl_guitare.png";
        } else {
          imgPath = "assets/avatar/girl_base.png";
        }
      } else {
        imgPath = "assets/avatar/boy_base.png"; // fallback
      }

      avatarImg.src = imgPath;
      avatarImg.setAttribute("data-download-src", imgPath);
    }
//Change avatar
    sex.addEventListener("change", updateAvatar);
    jacke.addEventListener("change", updateAvatar);
    instrument.addEventListener("change", updateAvatar);
    //Download
    download.addEventListener("click", function () {
      const src = avatarImg.getAttribute("data-download-src") || avatarImg.src;
      const link = document.createElement("a");
      link.href = src;
      link.download = "mein_avatar.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });

    updateAvatar();
  }

  // SCROLL TO AVATAR 
  const btn = document.getElementById("start-avatar-btn");
  if (btn) {
    btn.addEventListener("click", function () {
      const avatarSection = document.querySelector(".avatar-customizer");
      if (avatarSection) {
        avatarSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  }


  //  VINYL AUDIO 
  const vinyl = document.querySelector(".vinyl-record");
  const audio = document.getElementById("vinyl-audio");
  if (vinyl && audio) {
    vinyl.addEventListener("click", function () {
      if (audio.paused) {
        audio.currentTime = 0;
        audio.play();
      } else {
        audio.pause();
        audio.currentTime = 0;
      }
    });
  }

  //  ROCKSTAR QUIZ 
  const quizForm = document.getElementById("rockstar-quiz");
  const quizResult = document.getElementById("quiz-result");
  if (quizForm && quizResult) {
    quizForm.addEventListener("submit", function (e) {
      e.preventDefault();
      let score = 0;
      const answers = {
        q1: "b", // Auffällige Farben und Muster
        q2: "b", // Sonnenbrille und Lederarmbänder
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


});

//  ROCKSTAR CODE QUIZ (MULTIPLE CHOICE)
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("quiz-form-code");
  const resultBox = document.getElementById("quiz-result-code");
  const resetBtn = document.getElementById("quiz-reset");
  if (!form || !resultBox) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    let a = 0, b = 0, c = 0;
    // Jede Antwort prüfen und zählen
    ["q1", "q2", "q3", "q4"].forEach(function(q) {
      if (form[q].value === "a") a++;
      if (form[q].value === "b") b++;
      if (form[q].value === "c") c++;
    });

    let result = "";
    if (a >= 3) result = "Du hast den Rockstar-Code im Blut! Bühne frei für dich!";
    else if (b >= 3) result = "Du bist auf dem Weg – trau dich noch mehr!";
    else if (c >= 3) result = "Vielleicht bist du lieber Produzent? Aber probier’s ruhig mal aus!";
    else result = "Du bist einzigartig – dein Weg ist ein Mix von allem!";

    resultBox.textContent = result;
  });

  if (resetBtn) {
    resetBtn.addEventListener("click", function () {
      form.reset();
      resultBox.textContent = "";
    });
  }
});//________Rockstar Code_________________________________________________________________________________________________

//  SPRECHBLASE (SPEECH BUBBLE) 
const texte = [
  { titel: "1. Mach dein Ding", text: "Es ist egal, was andere sagen – dein Stil ist genau richtig!" },
  { titel: "2. Fehler sind erlaubt", text: "Jeder Rockstar macht mal Fehler. Einfach weiterrocken!" },
  { titel: "3. Sei laut", text: "Zeig, was in dir steckt – mit Musik, Bewegung oder deiner Stimme!" },
  { titel: "4. Sei du selbst", text: "Glitzer oder Lederjacke – Hauptsache, du fühlst dich gut!" },
  { titel: "5. Hab Spaß", text: "Rockmusik ist zum Lachen, Springen und Spaß haben da!" }
];

let bubble_index = 0;
const bubble = document.getElementById("speechBubble");
function updateBubble() {
  if (!bubble) return;
  bubble.innerHTML = `<strong>${texte[bubble_index].titel}</strong><br><span class="small">${texte[bubble_index].text}</span>`;
  bubble_index++;
  if (bubble_index === texte.length) {
    bubble_index = 0;
  }
}
if (bubble) {
  bubble.addEventListener("click", updateBubble);
};


// --- Rockstar Academy Quiz JS ---

document.addEventListener("DOMContentLoaded", function () {
  // Hole alle wichtigen Elemente
  const quizForm = document.getElementById("music_quiz_form");
  const submitBtn = document.getElementById("music_quiz_submit");
  const resetBtn = document.getElementById("music_quiz_reset");
  const feedback = document.getElementById("feedback");
  const successSound = document.getElementById("successSound");
  const failureSound = document.getElementById("failureSound");

  // Wenn etwas fehlt, höre auf.
  if (!quizForm || !submitBtn || !feedback || !resetBtn) return;

  // Richtig Antworten
  const richtigeAntworten = [
    "q1b", "q2b", "q3b", "q4a", "q5a", "q6a", "q7a", "q8a", "q9a", "q10a"
  ];

  // Wenn auf "Abschicken" geklickt wird
  submitBtn.addEventListener("click", function (e) {
    e.preventDefault();

    let punkte = 0;
    let fragenFehlen = false;

    // Jede Frage einzeln prüfen
    // Frage 1
    let q1 = quizForm.querySelector('input[name="q1"]:checked');
    if (!q1) { fragenFehlen = true; }
    else if (q1.id === "q1b") { punkte++; }

    // Frage 2
    let q2 = quizForm.querySelector('input[name="q2"]:checked');
    if (!q2) { fragenFehlen = true; }
    else if (q2.id === "q2b") { punkte++; }

    // Frage 3
    let q3 = quizForm.querySelector('input[name="q3"]:checked');
    if (!q3) { fragenFehlen = true; }
    else if (q3.id === "q3b") { punkte++; }

    // Frage 4
    let q4 = quizForm.querySelector('input[name="q4"]:checked');
    if (!q4) { fragenFehlen = true; }
    else if (q4.id === "q4a") { punkte++; }

    // Frage 5
    let q5 = quizForm.querySelector('input[name="q5"]:checked');
    if (!q5) { fragenFehlen = true; }
    else if (q5.id === "q5a") { punkte++; }

    // Frage 6
    let q6 = quizForm.querySelector('input[name="q6"]:checked');
    if (!q6) { fragenFehlen = true; }
    else if (q6.id === "q6a") { punkte++; }

    // Frage 7
    let q7 = quizForm.querySelector('input[name="q7"]:checked');
    if (!q7) { fragenFehlen = true; }
    else if (q7.id === "q7a") { punkte++; }

    // Frage 8
    let q8 = quizForm.querySelector('input[name="q8"]:checked');
    if (!q8) { fragenFehlen = true; }
    else if (q8.id === "q8a") { punkte++; }

    // Frage 9
    let q9 = quizForm.querySelector('input[name="q9"]:checked');
    if (!q9) { fragenFehlen = true; }
    else if (q9.id === "q9a") { punkte++; }

    // Frage 10
    let q10 = quizForm.querySelector('input[name="q10"]:checked');
    if (!q10) { fragenFehlen = true; }
    else if (q10.id === "q10a") { punkte++; }

    // Wenn eine Frage fehlt
    if (fragenFehlen) {
      feedback.innerText = "Bitte beantworte alle Fragen!";
      feedback.classList.remove("hidden");
      feedback.style.color = "#b80000";
      return;
    }

    // Rückmeldung geben
    if (punkte >= 5) {
      feedback.innerText = "Super! Du hast " + punkte + " von 10 Fragen richtig! 🎉";
      feedback.style.color = "#008000";
      if (successSound) {
        successSound.currentTime = 0;
        successSound.play();
      }
    } else {
      feedback.innerText = "Du hast nur " + punkte + " von 10 richtig. Versuch es nochmal!";
      feedback.style.color = "#b80000";
      if (failureSound) {
        failureSound.currentTime = 0;
        failureSound.play();
      }
    }
    feedback.classList.remove("hidden");
    resetBtn.classList.remove("hidden");
    submitBtn.disabled = true;
  });

  // Wenn auf "Zurücksetzen" geklickt wird
  resetBtn.addEventListener("click", function (e) {
    e.preventDefault();
    quizForm.reset();
    feedback.innerText = "";
    feedback.classList.add("hidden");
    resetBtn.classList.add("hidden");
    submitBtn.disabled = false;
    quizForm.scrollIntoView({ behavior: "smooth" });
  });
});

//_____________Mitgliedwerden____________________________________________________________________________________
document.addEventListener("DOMContentLoaded", function () {
  // Vérifie si on est sur la bonne page grâce à l'existence de #popup
  const popup = document.getElementById("popup");

  if (popup) {
    const form = document.querySelector("form");
    const closeBtn = popup.querySelector(".pop");

    // Si le formulaire est là, on attache l'événement de soumission
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        popup.style.display = "block";
        // Optionnel : form.reset();
      });
    }

    // Si le bouton "Close" existe, on lui attache l'événement de clic
    if (closeBtn) {
      closeBtn.addEventListener("click", function () {
        popup.style.display = "none";
      });
    }
  }
});

// Show custom popup on form submit (registration)

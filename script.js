document.addEventListener("DOMContentLoaded", function() {
var BackButton = document.getElementById("backBtn");
BackButton.innerHTML = "BACK TO HOMEPAGE";
BackButton.type = "button";
BackButton.name = "backBtn";
BackButton.onclick = ReturnHomePage;

function ReturnHomePage() {
  window.location.href = '/';
}

const texts = document.querySelectorAll('#Notfound404, #Text, #Subtext, .created-by, .marcoljunior, .devChallenges');

texts.forEach(text => {
  text.style.transition = 'color 0.5s ease-in-out';
});

  BackButton.addEventListener('mouseover', function() {
    texts.forEach(text => text.style.color = '#000000');
    
    document.getElementById('Character').src = 'images/char_hover.png';
  });

  BackButton.addEventListener('mouseout', function() {
    texts.forEach(text => text.style.color = '#ffffff');

    document.getElementById('Character').src = 'images/char.png';
  });
});

function ChangeBgColor() {
  document.body.style.backgroundColor = '#D2D2D2';

  document.body.style.transition = 'background-color 0.5s ease-in-out';

  setTimeout(() => { document.body.style.transition = '';}, 500);
}

function ChangeBgColorOriginal() {
  document.body.style.backgroundColor = '#000000';

  document.body.style.transition = 'background-color 0.5s ease-in-out';

  setTimeout(() => { document.body.style.transition = '';}, 500);
}
var BackButton = document.getElementById("backBtn");
BackButton.innerHTML = "BACK TO HOMEPAGE";
BackButton.type = "button";
BackButton.name = "backBtn";
BackButton.onclick = ReturnHomePage;

function ReturnHomePage() {
  window.location.href = '/';
}

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
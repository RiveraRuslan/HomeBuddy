// Modal Popup JS Start
const modals = document.querySelectorAll('[data-modal]');
modals.forEach(function (trigger) {
  trigger.addEventListener('click', function (event) {
    event.preventDefault();
    const modal = document.getElementById(trigger.dataset.modal);
    modal.classList.add('open');
    const exits = modal.querySelectorAll('.modalExit');
    exits.forEach(function (exit) {
      exit.addEventListener('click', function (event) {
        event.preventDefault();
        modal.classList.remove('open');
      });
    });
  });
});
// Modal Popup JS End

// MyprogressBar JS Start
function update() {
    let element = document.getElementById("progress__status_myprogressBar");
    let reset = document.getElementById("myprogressBar__reset");
    let width = 50;
    let identity = setInterval(scene, 10);
    function scene() {
       if (width >= 100) {
        clearInterval(identity);
        } else  {
            width++;
            element.style.width = width + '%';
        }
        reset.onclick = function() {
            width--;
            element.style.width = 50 + '%'
        };
    }
}
// MyprogressBar JS End

// Get radioResult Start
function displayRadioValue() {
    let ele = document.getElementsByName('internalOwner');
    for(i = 0; i < ele.length; i++) {
        if(ele[i].checked){
            document.getElementById("advantageQuiz__result").innerHTML = ele[i].value;
        }
    }
}
// Get radioResult End

//Btn progress Block Start
let b = document.querySelectorAll('.advantageQuiz__radioLabel');
for(i = 0; i < b.length; i++) {
  b[i].addEventListener('click', function() {
    document.querySelector('.advantageQuiz__btnStep').classList.remove('advantageQuiz__btnDisable');
  })
}
//Btn progress Block End
let btn = document.getElementById('btn');
let yesBtn = document.getElementById('yesBtn');
let list = document.getElementById('info-gathered');
let name_field = document.getElementById('fullName');
let email_field = document.getElementById('email');
let phone_field = document.getElementById('phone');
let catPic = document.getElementById('hidden_cat_pic');

btn.addEventListener( 'click', (event) => {
    let details = document.createElement('p');
    details.innerText = name_field.value + "\n" + email_field.value + "\n" + phone_field.value;
    list.appendChild(details);
});

yesBtn.addEventListener( 'click', (event) => {
    catPic.style.display = "block";
});

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

let lastScrollTop = 0;
let ScrollUpdate = document.getElementById('ScrollUpdate'); 

  window.addEventListener('scroll', (event) => {
    var st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
      ScrollUpdate.innerText = "אנחנו הולכים למטה...";
    } else if (st < lastScrollTop){
      ScrollUpdate.innerText = "אנחנו הולכים למעלה!";
    }
    lastScrollTop = st <= 0 ? 0 : st; 
    }, false);






const saveMe = document.getElementById('saveMe');
function clickAlert() {
    alert('You saved me! Thanks so much <3');
   };
   saveMe.addEventListener('click', clickAlert);

const setBg = () => {
const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
  }
  
  genNew.addEventListener("click", setBg);
  setBg();





   
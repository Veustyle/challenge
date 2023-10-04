const smileys = document.querySelector('.smileys');
const submit = document.querySelector('.submit');
const comments = document.querySelector('.comments');
const smiley1 = document.querySelector('.smiley1');
const smiley2 = document.querySelector('.smiley2');
const smiley3 = document.querySelector('.smiley3');
const smiley4 = document.querySelector('.smiley4');
const smiley5 = document.querySelector('.smiley5');

const allSmileys = [smiley1, smiley2, smiley3, smiley4, smiley5];
const rating = ['1/5 Ouille', '2/5 Aïe', '3/5 Mouais...', '4/5 Cool', "5/5 TOP!!"]


for (let i = 0 ; i < allSmileys.length ; i++) {
   allSmileys[i].addEventListener('click', () => {
      submit.style.height = '80px';
      smileys.style.marginTop = '0';
      comments.innerHTML = rating[i];
      document.querySelectorAll('.active').forEach((smiley) => {
         smiley.classList.remove('active');
      })
      allSmileys[i].classList.add('active');
   })
}
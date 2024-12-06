//alert("zer");
let headerTitleEl = document.querySelector('header h1');

let asideListEl = document.querySelector('aside ul');

let nonEl = document.querySelector('#non');

function random_color() {
    return parseInt(Math.random()*255);
}

function intervalle_centree(chiffre) {
    return parseInt(Math.random()*chiffre-(chiffre>>1));
}

function shade_title() {
    let resultat = headerTitleEl.style.textShadow + ', rgb('+random_color()+','+random_color()+','+random_color()+') '+intervalle_centree(20)+'px '+intervalle_centree(20)+'px';
    headerTitleEl.style.textShadow = resultat;
}

for(let i = 0; i < 10; i++) { shade_title(); }
for(let i = 0; i < asideListEl.children.length; i++) {
    asideListEl.children[i].style.transform = 'translate(-50%, -50%) rotate('+parseInt((360/asideListEl.children.length)*i)+'deg) translate(0px, -60px)';
}
let spliced = document.getElementById('discontinue');
let content = spliced.innerText;
let par = document.createElement('ul');
spliced.parentElement.appendChild(par);
for(let i = 0; i < content.length; i++) {
    let lettre = document.createElement('li');
    lettre.innerText = content[i];
    lettre.style.animationDelay = i*50+'ms';
    par.appendChild(lettre);
}

document.querySelector('dialog').show();
document.body.style.overflowY = 'hidden';
nonEl.addEventListener('mouseover', function(e) {
    e.target.style.top = parseInt(15+Math.random()*40)+'%';
    e.target.style.left = parseInt(Math.random()*80)+'%';
})
nonEl.addEventListener('click', () => {document.querySelector('dialog').close();document.body.style.overflowY = 'visible';});
document.querySelector('#oui').addEventListener('click', () => {document.querySelector('dialog').close();document.body.style.overflowY = 'visible';});

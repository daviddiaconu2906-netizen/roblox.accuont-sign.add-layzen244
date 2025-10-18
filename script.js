let mode = 'login';
const title = document.getElementById('title');
const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const actionBtn = document.getElementById('actionBtn');
const toggle = document.getElementById('toggle');
const msg = document.getElementById('msg');

function setMode(m){
  mode = m;
  if(mode==='login'){
    title.innerText='Connexion';
    usernameInput.style.display='none';
    actionBtn.innerText='Se connecter';
    toggle.innerText="Pas encore inscrit ?";
  } else {
    title.innerText='Inscription';
    usernameInput.style.display='block';
    actionBtn.innerText="S'inscrire";
    toggle.innerText='Déjà un compte ?';
  }
  msg.innerText='';
}

toggle.onclick = ()=> setMode(mode==='login'?'register':'login');
setMode('login');

// Simulation connexion/inscription
let users = [];

actionBtn.onclick = ()=>{
  const email = emailInput.value.trim();
  const password = passwordInput.value;
  const username = usernameInput.value.trim();

  if(!email || !password || (mode==='register' && !username)){
    msg.innerText='Remplis tous les champs.';
    return;
  }

  if(mode==='register'){
    if(users.find(u=>u.email===email)){
      msg.innerText='Email déjà utilisé';
      return;
    }
    users.push({username,email,passwordHash:'***',createdAt:new Date()});
    msg.innerText='Compte créé ! Connecte-toi';
    setMode('login');
  } else {
    const u = users.find(u=>u.email===email);
    if(!u){ msg.innerText='Email ou mot de passe invalide'; return;}
    msg.innerText='Connecté ! (Simulation)';
  }
};

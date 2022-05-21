const eyeIcon = document.querySelector('#togglePassword');
const password = document.querySelector('#password');

document.querySelector('#generatorBtn').addEventListener('click', passwordGenerator);

function passwordGenerator(e) {
    
    const str = 'ASDFGHFGHJK'
    const letters = ['A',1,'B','C','D',2,'E','F','@','G','H',4,'I','J','%','K','L',5,'M','N','&','O','P','Q','R','S',6,'T','U','V','#','W','X','Y','Z',7,'A','B','C','!','D','E','F',8,'G','H','I','J','?','K','L','M','N',9,'O','P','Q','R','S','T','U','V','W','$','X','Y','Z'];

  const regex = /[A-Z]/;
  
  const rotArr = str.split('');
  
  rotArr.forEach((letter,index) => {
    if(regex.test(letter)) {
      let nextLetterIndex = letters.indexOf(letter) + Math.floor(Math.random() * 10);
      rotArr[index] = letters[nextLetterIndex];
    }
  });

  document.querySelector('#password').value = rotArr.join('');
  
  e.preventDefault();
}

eyeIcon.addEventListener('click', (e) => {
  // toggle the type attribute
  // const type = password.getAttribute("type") === "password" ? "text" : "password";
  // password.setAttribute("type", type);
  
  
  // // toggle the icon
  // eyeIcon.classList.toggle('fa-eye');

  if(e.target.classList.contains('fa-eye-slash')) {
    e.target.className = 'fa fa-eye';
    password.setAttribute('type', 'text');
  } else {
    e.target.className = 'fa fa-eye-slash';
    password.setAttribute('type', 'password');
  }

})





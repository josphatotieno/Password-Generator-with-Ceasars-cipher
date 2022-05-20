
function passwordGenerator(str) {
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
}

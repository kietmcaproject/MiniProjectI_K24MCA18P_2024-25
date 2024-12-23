export function showMsg(text) {
    const showpop = document.getElementById('universal-popup');
    if (!showpop) return; // Check showpop 
  
    showpop.textContent = text; 
    showpop.classList.add('show');
  
    setTimeout(() => {
      showpop.classList.remove('show'); 
      showpop.textContent = "";
  
      const signupEmail = document.getElementById('signup-email');
      const signupPassword = document.getElementById('signup-password');
      const signupName = document.getElementById('signup-name');
  
      if (signupEmail) signupEmail.value = ""; 
      if (signupPassword) signupPassword.value = ""; 
      if (signupName) signupName.value = "";
  
    }, 5000);
  }
  
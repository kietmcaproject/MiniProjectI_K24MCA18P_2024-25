// this is used for ? icon-hover for Registration Page
document.addEventListener('DOMContentLoaded', function () {
    const questionIcon = document.getElementById('question-icon');
    const tooltipText = document.getElementById('password-criteria');
  
    questionIcon.addEventListener('mouseenter', function () {
      tooltipText.style.visibility = 'visible';
    });
  
    questionIcon.addEventListener('mouseleave', function () {
      tooltipText.style.visibility = 'hidden';
    });
  });
  
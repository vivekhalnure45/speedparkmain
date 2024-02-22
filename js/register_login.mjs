const signInBtnLink = document.querySelector(".signInBtn-link");
      const signUpBtnLink = document.querySelector(".signUpBtn-link");
      const wrapper = document.querySelector(".wrapper");
      signUpBtnLink.addEventListener("click", () => {
        wrapper.classList.toggle("active");
      });
      signInBtnLink.addEventListener("click", () => {
        wrapper.classList.toggle("active");
      });
      document.addEventListener('DOMContentLoaded', function () {
        const passwordFields = document.querySelectorAll('input[type="password"]');
        const eyeIcons = document.querySelectorAll('.password-toggle');
      
        eyeIcons.forEach((eyeIcon, index) => {
          eyeIcon.addEventListener('click', function () {
            const passwordField = passwordFields[index];
            if (passwordField.type === 'password') {
              passwordField.type = 'text';
              eyeIcon.classList.remove('uil-eye');
              eyeIcon.classList.add('uil-eye-slash');
            } else {
              passwordField.type = 'password';
              eyeIcon.classList.remove('uil-eye-slash');
              eyeIcon.classList.add('uil-eye');
            }
          });
        });
      });
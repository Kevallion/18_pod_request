const form = document.querySelector("form");
let isEmail = false;
form.addEventListener("submit", (e) => {
  let timeout;
  e.preventDefault();
  if (isEmail) {
    userEmail.value = "";
    isEmail = false;
    alert("Thank you for request ;)");
  } else {
    clearTimeout(timeout);
    emailInfo.style.opacity = "1";
    emailInfo.textContent = "Oops! Please add your email";
    timeout = setTimeout(() => {
      emailInfo.style.opacity = "0";
    }, 3000);
  }
});

userEmail.addEventListener("input", (e) => {
  let mail = e.target.value;
  if (mail.length > 0) {
    if (mail.match(/^[.\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
      isEmail = true;
      emailInfo.style.opacity = "0";
    } else {
      emailInfo.style.opacity = "1";
      emailInfo.textContent = "Oops! Please check your email";
    }
  } else {
    emailInfo.style.opacity = "0";
  }
});

// logo animaton
let logo = document.getElementById("mainlogo");
let dial = document.getElementById("dial");
let maintitle = document.getElementById("maintitle");
logo.classList.toggle("animate-spin");
maintitle.classList.toggle("animate-bounce");
setInterval(() => {
  logo.classList.toggle("animate-spin");
  maintitle.classList.toggle("animate-bounce");
}, 2000);

// Hamburger Menu Control
const targetEl = document.getElementById("navbar-solid-bg");
// set the target element that will be collapsed or expanded (eg. navbar menu)
const triggerEl = document.getElementById("hamburger");
// set the trigger element that will be used to toggle the target element
triggerEl.addEventListener("click", function () {
  if (targetEl.classList.contains("hidden")) {
    targetEl.classList.remove("hidden");
  } else {
    targetEl.classList.add("hidden");
  }
});

document.getElementById('creaqteacbtn').addEventListener('click', ()=>{
  let username = document.getElementById('fullName').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('Password').value;
  if(username == '' || email == '' || password == ''){
    alert('Please fill all the fields');
  } 
  else if(password.length < 6){
    alert('Password must be atleast 6 characters long');
  }
  else if(!email.includes('@')){
    alert('Invalid Email');
  }
  else{
    CreateAc(username, email,password);
  }
})

async function CreateAc(username, email,password){
  let res = await fetch('/admin/post/adduser',{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      username: username,
      email: email,
      password: password
    })
  })
  let data = await res.json();
  if(data.status == 'User Added'){
    alert('Account Created Successfully');
    window.location.href = '/blogs/publish';
  }
  else if(data.status == 'User Already Exist'){
    alert('Account Already Exist with this UserCode, Plesae try another one');
  }
}
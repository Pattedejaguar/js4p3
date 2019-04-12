document.getElementById('confirmPassword').addEventListener('keyup',function()
{
var password=document.getElementById('password');
var confirmPassword=document.getElementById('confirmPassword');
  if (password.value == confirmPassword.value)
{
  password.style.border='15px solid green';
  confirmPassword.style.border='15px solid green';
} else {
  password.style.border='30px solid red';
  confirmPassword.style.border='300px solid red';
}
});

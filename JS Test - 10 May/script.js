var passIn = document.getElementById('password');
var strength = document.getElementById('result');
var Number = [1,2,3,4,5,6,7,8,9,0];

passIn.addEventListener('input', function() {
    var password = passIn.value;
    var result = PasswordStrength(password);

    if (password == Number) {
      strength.textContent = 'Your password is too weak';
      strength.className = 'weak';    
    }
});
    
document.addEventListener('DOMContentLoaded', function(){
  const userPicture = document.getElementById('userPicture');
  const userDropDown = document.getElementById('userDropDown');
  
  userPicture.addEventListener('click', function(e){
    if(userDropDown.classList.contains('hidden')){
      userDropDown.classList.remove('hidden');
    } else{
      userDropDown.classList.add('hidden');
    }
    e.preventDefault();
  });

});
$(function (){
    $('.menu').hide();
    isMenuHidden = true;
   $('.menu_icon').click(function (){
         if(isMenuHidden){
             $('.menu').show();
             isMenuHidden = false;
         }
         else{
             $('.menu').hide();
             isMenuHidden = true;
         }
   });
});
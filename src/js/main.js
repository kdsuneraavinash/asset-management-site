$(window).on('resize',centerSignInCard);
$(window).ready(centerSignInCard);

function centerSignInCard(){
    var screen =  $(window);
    var signInCard = $("#sign-in-card");
    // signInCard.css("margin-left", (screen.width() - signInCard.width())/2);
    // signInCard.css("margin-top", (screen.height() - signInCard.height())/2);
}
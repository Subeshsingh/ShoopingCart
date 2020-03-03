$(document).ready(function(){
      $('.DrawerToggle').click(function(e){
        e.stopPropagation();
        $('.sidenav').toggleClass('hidden');
    });
    $('.closebtn').click(function(e){
        $('.sidenav').toggleClass('hidden');
        

    });
    $('.sidenav').click(function(e){
        e.stopPropagation();
    });

    $('body').click(function(e) {
        $('.sidenav').toggleClass('hidden');
    });
  
});

  // $('.DrawerToggle').click(function(e){
    //     e.stopPropagation();
    //     $('.sidenav').removeClass('hidden');
    //     $('.sidenav').addClass('show');

    // });
    // $('.closebtn').click(function(e){
    //     $('.sidenav').removeClass('show');
    //     $('.sidenav').addClass('hidden');

    // });
    // $('.sidenav').click(function(e){
    //     e.stopPropagation();
    // });

    // $('body').click(function(e) {
    //     // e.preventDefault();
    //     if($('.sidenav').hasClass("show")){
    //         $('.sidenav').removeClass("show");
    //         $('.sidenav').addClass("hidden");
    //     } 
    // });
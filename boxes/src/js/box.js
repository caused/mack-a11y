$(document).on("click", '.mack-box__close', function(){
    var elementParents = $(this).parents('.mack-box');
    var elementParent = $(this).parent();
    var targetElement = $(this).attr("data-target");

    if($(".mack-box__item", elementParents).length == 1){
        $(elementParents).remove();
    }else{
        $(elementParent).remove();
    }

    if($(targetElement).is('a') || $(targetElement).is('button')){
        $(targetElement).focus();
    }else if($(targetElement).attr("tabindex") == undefined){
        $(targetElement).attr("tabindex", "-1").focus()
    }else{
        $(targetElement).focus()
    }
})
$(document).on("click", ".skipto", function(e){
    e.preventDefault();

    let element = $(this);

    if(typeof($(element).attr("href") == "undefined")){
        var target = $(element).attr("data-target");
    }else{
        var target = $(element).attr("href");
    }

    $(target).attr("tabindex", "-1").focus();
    $(target).one("blur", function(e){
        $(target).removeAttr("tabindex")
    })
})
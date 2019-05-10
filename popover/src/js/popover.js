$(document).on("click", '[mack-popover]', function(){
    let toggletip = this;
    let title = toggletip.getAttribute("mack-popover-title");
    let message = toggletip.getAttribute("mack-popover")
    let liveRegion = toggletip.nextElementSibling;
    let popoverPosition = toggletip.getAttribute("mack-popover-position");
    let elementHeight;
    let elementWidth;
    let elementMarginTop;
    let elementMarginLeft;
    let buttonHeight;
    let buttonWidth;
    toggletip.setAttribute("aria-expanded", "false");

    if(liveRegion.innerHTML ==""){
        this.setAttribute("aria-expanded", "true");
        if(title == null || title == ""){
            liveRegion.innerHTML = '<span class="mack-popover__bubble"><div class="mack-popover__text">'+ message+'</div></span>'
        }else{
            liveRegion.innerHTML = '<span class="mack-popover__bubble"><h3 class="mack-popover__title">'+ title +'</h3><div class="mack-popover__text">'+ message+'</div></span>'
        }

        buttonHeight = $(toggletip).outerHeight() / 2;
        buttonWidth = $(toggletip).outerWidth() / 2;
        elementHeight = $(".mack-popover__bubble", liveRegion).outerHeight();
        elementMarginTop = (elementHeight / 2) * -1;

        elementWidth = $(".mack-popover__bubble", liveRegion).outerWidth();
        elementMarginLeft = [(elementWidth /2) + buttonWidth] * -1;

        if(popoverPosition == "right" || popoverPosition == "left"){
            $(".mack-popover__bubble", liveRegion).css({
                "margin-top": (elementMarginTop + buttonHeight),
                "opacity" : 1
            });
        } else if (popoverPosition == "top" || popoverPosition == "bottom"){
            $(".mack-popover__bubble", liveRegion).css({
                "margin-left" : elementMarginLeft
            })

            if(popoverPosition == "top"){
                $(".mack-popover__bubble", liveRegion).css({
                    "top" : (buttonHeight + elementHeight) * -1,
                    "opacity" : 1
                })
            }else{
                $(".mack-popover__bubble", liveRegion).css({
                    "bottom" : (buttonHeight + elementHeight) * -1,
                    "opacity" : 1
                })
                
            }
        }
        debugger;
    }else{
        this.setAttribute("aria-expanded", "false");
        liveRegion.innerHTML = '';
    }

    toggletip.addEventListener("keydown", function(e){
        if((e.keyCode || e.which) === 27){
            this.setAttribute("aria-expanded", "false");
            liveRegion.innerHTML = '';
        }
    })

    document.addEventListener("click", function(e){
        if(toggletip !== e.target){
            this.setAttribute("aria-expanded", "false");
            liveRegion.innerHTML = '';
        }
    })

    toggletip.addEventListener("blur", function(){
        this.setAttribute("aria-expanded", "false");
        liveRegion.innerHTML = '';
    })
})
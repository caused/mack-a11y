$(document).on("click", '[mack-tooltip]', function(){
    let toggletip = this;
    let message = toggletip.getAttribute("mack-tooltip")
    let liveRegion = toggletip.nextElementSibling;
    let tooltipPosition = toggletip.getAttribute("mack-tooltip-position");
    let elementHeight;
    let elementWidth;
    let elementMarginTop;
    let elementMarginLeft;
    let buttonHeight;
    let buttonWidth;
    toggletip.setAttribute("aria-expanded", "false");

    if(liveRegion.innerHTML ==""){
        this.setAttribute("aria-expanded", "true");

        liveRegion.innerHTML = '<span class="mack-tooltip__bubble">'+ message+'</span>'


        buttonHeight = $(toggletip).outerHeight() / 2;
        buttonWidth = $(toggletip).outerWidth() / 2;
        elementHeight = $(".mack-tooltip__bubble", liveRegion).outerHeight();
        elementMarginTop = (elementHeight / 2) * -1;

        elementWidth = $(".mack-tooltip__bubble", liveRegion).outerWidth();
        elementMarginLeft = [(elementWidth /2) + buttonWidth] * -1;

        if(tooltipPosition == "right" || tooltipPosition == "left"){
            $(".mack-tooltip__bubble", liveRegion).css({
                "margin-top": (elementMarginTop + buttonHeight),
                "opacity" : 1
            });
        } else if (tooltipPosition == "top" || tooltipPosition == "bottom"){
            $(".mack-tooltip__bubble", liveRegion).css({
                "margin-left" : elementMarginLeft
            })

            if(tooltipPosition == "top"){
                $(".mack-tooltip__bubble", liveRegion).css({
                    "top" : (buttonHeight + elementHeight) * -1,
                    "opacity" : 1
                })
            }else{
                $(".mack-tooltip__bubble", liveRegion).css({
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
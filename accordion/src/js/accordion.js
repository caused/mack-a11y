!function(accordionElement){
    accordionElement.fn.mackAccordion = function(a){
        Array.prototype.slice.call(this).forEach(function(accordion){

            //Allow multiple accordion sections to be expanded at the same time
            var allowMultiple = accordion.hasAttribute("data-allow-multiple");

            //Create the array of toggle elements for the accordion group;
            var triggers = Array.prototype.slice.call(accordion.querySelectorAll(".accordion__trigger"));
            var panels = Array.prototype.slice.call(accordion.querySelectorAll(".accordion__panel"));

            accordion.addEventListener("click", function(event){
                var target = event.target;

                if(target.classList.contains("accordion__trigger")){
                    var isExpanded = target.getAttribute("aria-expanded") == 'true';
                    var active = accordion.querySelector('[aria-expanded="true"]');

                    //without the allowMultiple, close the open accordion
                    if(!allowMultiple && active && active != target){
                        //set the expanded state on the triggered element
                        active.setAttribute("aria-expanded", false);
                        document.getElementById(active.getAttribute("aria-controls")).setAttribute("hidden", "")
                    }

                    if(!isExpanded){
                        //set expanded state in the element
                        target.setAttribute("aria-expanded", "true");

                        document.getElementById(target.getAttribute("aria-controls")).removeAttribute("hidden");
                    }else{
                        target.setAttribute("aria-expanded", "false");

                        document.getElementById(target.getAttribute("aria-controls")).setAttribute("hidden", "");
                    }

                    event.preventDefault();
                }
            })

            accordion.addEventListener('keydown', function(event){
                var target = event.target;
                var key = event.which.toString();

                var ctrlModifier = (event.ctrlKey && key.match(/33|34/));

                if(target.classList.contains('accordion__trigger')){
                    if(key.match(/38|40/) || ctrlModifier){
                        var index = triggers.indexOf(target);
                        var direction = (key.match(/34|40/)) ? 1 : -1;
                        var length = triggers.length;
                        var newIndex = (index + length + direction) % length;

                        triggers[newIndex].focus();
                        event.preventDefault();
                    }else if(key.match(/35|36/)){
                        switch(key){
                            case '36':
                            triggers[0].focus();
                            break;

                            case '35':
                            triggers[triggers.length -1].focus()
                            break;
                        }

                        event.preventDefault();
                    }else if(ctrlModifier){
                        panels.forEach(function(panel, index){
                            if(panel.contains(target)){
                                triggers[index].focus();
                                event.preventDefault();
                            }
                        })
                    }
                }
            })
        })
    }
}(jQuery)
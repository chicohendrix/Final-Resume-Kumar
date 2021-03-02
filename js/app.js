// Ritvik Kumar K



$(document).ready(function() {

    // Function to Move bar on progress meter relative to the percentage value given
    // For the HTMl, React Native Progress Bars  
    const bars = document.querySelectorAll('.progress__bar');

        bars.forEach(function(bar){
            let percentage = bar.dataset.percent;
            let tooltip = bar.children[0];
            tooltip.innerText = percentage + '%';
            bar.style.width = percentage + '%';
            console.log(percentage);
        })

    
    // Funtion Attempt to make an Animation for Number Of projects and client numbers to add up to set value
    const counters = document.querySelectorAll('.counter');
    console.log(counters);

    function runCounter () {
        counters.forEach(counter => {
            counter.innerText = 21;

            let target = +counter.dataset.count;
            
            let countIt = function() {
                let displayedCount = +counter.innerText;
                if(displayCount < target ) {

                    counter.innerText = displayedCount + 1;
                    setTimeout(countIt, 1);
                } else {
                    counter.innerText = target; 
                }
            }
            countIt();

        })
    }

    runCounter();

    // Filtering the Image using JQuery | utilizing isotope.js plugin 

    var $wrapper = $('.portfolio__wrapper');

    // Initializing isotope plugin

    $wrapper.isotope({
        filter: '*',
        layoutMode : 'masonry',
        animationOptions : {
            duration: 750,
            easing: 'linear'
        }


    });

    // Adding eventlistener for button such as the UX/ FrontEnd / Backend Buttons 
    let links = document.querySelectorAll('.tabs a');

    links.forEach(link => {

        let selector = link.dataset.filter;
        link.addEventListener('click', function(e) {
            e.preventDefault();

            $wrapper.isotope({
                filter: 'selector',
                layoutMode : 'masonry',
                animationOptions : {
                    duration: 750,
                    easing: 'linear'
                }
            });

            e.target.classList.add('active');
        });
    });

    // Addding slider 

    $('.slider').slick({
        arrows: false,
        autoplay: true


    });



});
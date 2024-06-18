jQuery(document).ready(function($) {


	var mastheadheight = $('.ds-header').outerHeight();
	//console.log(mastheadheight);
	$(".ds-banner,.ds-main-section").css("margin-top" , mastheadheight);

	$(window).scroll(function(){
	    if ($(window).scrollTop() >= 10) {
	        $('.ds-header').addClass('ds-fixed-header');
	    }
	    else {
	        $('.ds-header').removeClass('ds-fixed-header');
	    }
	}).scroll();


});

//Experience Update Counter

function updateCounter() {
    const startDate = new Date('2022-08-16');
    const currentDate = new Date();
            
    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();
    let days = currentDate.getDate() - startDate.getDate();

    if (days < 0) {
        months -= 1;
        days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years -= 1;
        months += 12;
    }

    document.getElementById('counter').textContent = `${years} Year ${months} Months`;
}

updateCounter();
setInterval(updateCounter, 86400000); // Update every 24 hours

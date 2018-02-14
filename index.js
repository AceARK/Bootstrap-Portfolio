$(document).ready(function() {
	// event to register modal window 
    $('#modal-portfolio').on('show.bs.modal', function (event) { 
    	// Link that triggered the modal
        var clickedPortfolio = $(event.relatedTarget);
        // Extract info from data-* attributes 
        var title = clickedPortfolio.data('title'); 
        var content = clickedPortfolio.data('content');
        var image = clickedPortfolio.data('projectimage');
        var date = clickedPortfolio.data('date');
        var githubLink = clickedPortfolio.data('github');
        var link = clickedPortfolio.data('url');
        var linkContent = clickedPortfolio.data('links');
        var linkString = "<a target='_blank' href='" + githubLink + "'>Github page <i class='fa fa-code fa-lg' aria-hidden='true'></i></a>. Click <a target='_blank' href='" + link + "'>here <i class='fa fa-lg fa-external-link' aria-hidden='true'></i></a> to check it out.";
        
        // Update the modal's content using jQuery 
        var portfolioModal = $(this); 
        portfolioModal.find('.modal-title').text(title); 
        portfolioModal.find('.modal-body .content').text(content); 
        portfolioModal.find('.modal-body .linkData').text(linkContent);
        portfolioModal.find('.modal-body .linkData').append(linkString);
        portfolioModal.find('.modal-body img').attr('src', image);
        portfolioModal.find('.modal-body .date').text(date);
	});

	// Grab all three photoDivs from DOM
	const higherPhotoDiv = $('#higherPhotoDiv');
	const mainPhotoDiv = $('#mainPhotoDiv');
	const lowerPhotoDiv = $('#lowerPhotoDiv');

	const blurStyle = higherPhotoDiv.css('filter');

	function switchImages(leftPhotoDiv, middlePhotoDiv, rightPhotoDiv) {
		// collect image from each photoDiv
		const leftImage = leftPhotoDiv.find('img');
		const middleImage = middlePhotoDiv.find('img');
		const rightImage = rightPhotoDiv.find('img');
		// blur higherPhotoDiv and mainPhoto div
		// move lowerDiv img to mainPhoto div
		middlePhotoDiv.empty();
		toggleImageFocus(lowerPhotoDiv, true);
		toggleImageFocus(middlePhotoDiv, false);
		middlePhotoDiv.append(leftImage);
		setTimeout(toggleImageFocus, 100, middlePhotoDiv, true);
		// move mainPhoto img to higherDiv
		higherPhotoDiv.empty();
		toggleImageFocus(higherPhotoDiv, true);
		higherPhotoDiv.append(middleImage);
		setTimeout(toggleImageFocus, 100, higherPhotoDiv, false);
		// focus mainPhoto div
		// move higherDiv img to lowerDiv 
		lowerPhotoDiv.empty();
		lowerPhotoDiv.append(rightImage);
		setTimeout(toggleImageFocus, 100, lowerPhotoDiv, false);

	}

	function toggleImageFocus(photoDiv, focusFlag) {
		if(!focusFlag) {
			photoDiv.css('filter', blurStyle);
		} else {
			photoDiv.css('filter', 'none');
		}
	}

	// Switch photos every 2.5 secs
	setInterval(switchImages, 5000, lowerPhotoDiv, mainPhotoDiv, higherPhotoDiv);
	// setInterval(, 2500);


});
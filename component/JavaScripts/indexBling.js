// This code section triggers textFade-in animation when the text is supposed to be on screen
document.addEventListener('DOMContentLoaded', () => {
  // Select all elements with the 'textFade-in' class
  const animatedParagraphs = document.querySelectorAll('.textFade-in');
  // Check if there are any elements to observe
  if (!animatedParagraphs) {
    console.error("Could not find any elements to observe.");
  } else {
    // Set the initial delay and delay increment values
    let delay = 0;
    const delayIncrement = 175;
    // Create a single IntersectionObserver for all elements with the 'textFade-in' class
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const animatedParagraph = entry.target;
          animatedParagraph.classList.add('animate');
          observer.unobserve(animatedParagraph);
        }
      });
    },{ threshold: 0.2 });
    // Loop through each element and observe it with the IntersectionObserver
    animatedParagraphs.forEach(animatedParagraph => {
      // If the element is already visible, animate it with a delay
      if (isElementVisible(animatedParagraph)) {
        setTimeout(() => {
          animatedParagraph.classList.add('animate');
        }, delay);
        delay += delayIncrement;
      } else {
        // Delay the animation until it is scrolled into view
        observer.observe(animatedParagraph);
      }
    });
  }
});
// Checks whether an element is currently visible on the screen
function isElementVisible(element) {
  const rect = element.getBoundingClientRect();
  const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
  const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
  const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
  const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
  return (vertInView && horInView);
}

//This one works fine, but without differenciate which one plays animation on page load or have to be scrolled down to. So if you scroll down, there's a high change you can scroll past something because it has delay
/*
document.addEventListener('DOMContentLoaded', () => {
  // Select all elements with the 'textFade-in' class
  const animatedParagraphs = document.querySelectorAll('.textFade-in');

  if (!animatedParagraphs) {
    console.error("Could not find any elements to observe.");
  } else {
    // Set the initial delay and delay increment values
    let delay = 0;
    //Increase or decrease this if need be. I found this the be the best one for both desktop and mobile
    const delayIncrement = 175;

    // Create a single IntersectionObserver for all elements with the 'textFade-in' class
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const animatedParagraph = entry.target;
          setTimeout(() => {
            animatedParagraph.classList.add('animate');
          }, delay);
          delay += delayIncrement;
          observer.unobserve(animatedParagraph);
        }
      });
    }, { threshold: 0.5 });

    // Loop through each element and observe it with the IntersectionObserver
    animatedParagraphs.forEach(animatedParagraph => {
      observer.observe(animatedParagraph);
    });
  }
});
*/

// This code section triggers moveUp animation when the text is supposed to be on screen
document.addEventListener('DOMContentLoaded', () => {
  const animatedParagraphs = document.querySelectorAll('.moveUp');
  if (!animatedParagraphs) {
    console.error("Could not find any elements to observe.");
  } else {
    let delay = 0;
    const delayIncrement = 175;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const animatedParagraph = entry.target;
          animatedParagraph.classList.add('animate');
          observer.unobserve(animatedParagraph);
        }
      });
    },{ threshold: 0.2 });
    animatedParagraphs.forEach(animatedParagraph => {
      if (isElementVisible(animatedParagraph)) {
        setTimeout(() => {
          animatedParagraph.classList.add('animate');
        }, delay);
        delay += delayIncrement;
      } else {
        observer.observe(animatedParagraph);
      }
    });
  }
});

function isElementVisible(element) {
  const rect = element.getBoundingClientRect();
  const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
  const windowWidth = (window.innerWidth || document.documentElement.clientWidth);
  const vertInView = (rect.top <= windowHeight) && ((rect.top + rect.height) >= 0);
  const horInView = (rect.left <= windowWidth) && ((rect.left + rect.width) >= 0);
  return (vertInView && horInView);
}

//This section is for modal pop-up
function showModal() {
	var modal = document.getElementById("myModal");
	var closeBtn = document.getElementsByClassName("close")[0];

	modal.style.display = "block";

	closeBtn.onclick = function() {
		modal.style.display = "none";
	}

	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
  setTimeout(function() {
    modal.style.display = "none";
  }, 3000);
}


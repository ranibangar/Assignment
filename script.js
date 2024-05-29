// script.js

document.addEventListener('DOMContentLoaded', function () {
    const selectElement = document.getElementById('Country');
    const customSelect = document.querySelector('.custom-select');
    const customSelectTrigger = customSelect.querySelector('.custom-select-trigger');
    const customOptions = customSelect.querySelector('.custom-options');
    const selectedImage = document.getElementById('selected-image');
  
    // Populate custom options
    Array.from(selectElement.options).forEach(option => {
      const customOption = document.createElement('div');
      customOption.classList.add('custom-option');
      customOption.dataset.value = option.value;
  
      const img = document.createElement('img');
      img.src = option.dataset.imgSrc;
  
      customOption.appendChild(img);
  
      customOptions.appendChild(customOption);
  
      customOption.addEventListener('click', function () {
        selectElement.value = this.dataset.value;
        selectedImage.src = option.dataset.imgSrc;
        selectedImage.style.display = 'block';
        customSelect.classList.remove('open');
      });
    });
  
    customSelectTrigger.addEventListener('click', function () {
      customSelect.classList.toggle('open');
    });
  
    document.addEventListener('click', function (e) {
      if (!customSelect.contains(e.target)) {
        customSelect.classList.remove('open');
      }
    });
  });
// for select dropdown item from nav menu
  function toggleDropdown() {
    var dropdownContent = document.getElementsByClassName("dropdown-content");
    if (dropdownContent.style.display === "block") {
        dropdownContent.style.display = "none";
    } else {
        dropdownContent.style.display = "block";
    }
}

// for updating breadcrum
function updateBreadcrumb(item) {
    var breadcrumb = document.getElementById("breadcrumb");
    breadcrumb.innerHTML = ""; // Clear existing breadcrumb items
    var li = document.createElement("li");
    li.classList.add("breadcrumb-item");
    li.innerText = item;
    breadcrumb.appendChild(li);
    var iconSpan = document.createElement("span");
    iconSpan.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
    iconSpan.classList.add("right-arrow");
    breadcrumb.appendChild(iconSpan);
}


document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.accordion-button');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const symbol = button.querySelector('.accordion-symbol');
      if (button.getAttribute('aria-expanded') === 'true') {
        symbol.textContent = '+';
      } else {
        symbol.textContent = '-';
      }
    });
  });
});

$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:2
      },
      1000:{
        items:3
      }
    }
  });
});
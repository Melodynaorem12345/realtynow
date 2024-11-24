
/**********select bathroom***********/
$(document).ready(function () {
  // Initially hide the bathroom type div
  $(".bathroom-show").hide();

  // Listen for changes in the bathroom number dropdown
  $("#bathroomNumber").change(function () {
    // Toggle the visibility of the bathroom type div based on the selection
    $(".bathroom-show").toggle($(this).val() !== "Select number");
  });
});



/************nearby accesibility input and button js***************/
function addItem() {
    // Get the input value
    var inputValue = $('#form-new').val();

    // Check if the input value is not empty
    if (inputValue.trim() !== "") {
      // Create a new item container
      var newItemContainer = $('<div class="alert alert-info alert-dismissible fade show d-inline-block me-2 plist-new" role="alert">' +
                              inputValue +
                              '<button type="button" class="btn-close plist-new-btn" data-bs-dismiss="alert" aria-label="Close"></button>' +
                              '</div>');

      // Append the new item container to the addedItems div
      $('#addedItems').append(newItemContainer);

      // Clear the input value
      $('#form-new').val("");
    }
  }

  /**********select furnished option and show details***********/
  $(document).ready(function () {
    // Reference to the furniture details div
    var furnitureDetails = $(".furniture-details-show");

    // Reference to the "Clear All" button
    var clearAllBtn = $("#clearAllBtn");

    // Hide the furniture details and "Clear All" initially
    furnitureDetails.hide();
    clearAllBtn.hide();

    // Listen for changes in the furniture status dropdown
    $("#furnitureStatus").change(function () {
        // Toggle the visibility of the furniture details div based on the selection
        if ($(this).val() === "Semi-furnished" || $(this).val() === "Fully-furnished") {
            furnitureDetails.show();
            clearAllBtn.show();
        } else {
            furnitureDetails.hide();
            clearAllBtn.hide();
        }
    });

    // Add click event to "Clear All" button
    clearAllBtn.click(function () {
        // Implement logic to clear all selections
        // For now, let's just reset the values to 0
        $(".input-with-unit").val(0);
        $(".span-with-unit").html("");
    });
});

(function incrementDecrementInput() {
    var quantityContainers = document.querySelectorAll(".product-quantity");

    quantityContainers.forEach(function (container) {
        var input = container.querySelector(".input-with-unit");
        var span = container.querySelector(".span-with-unit");
        var plusBtn = container.querySelector(".product-quantity-plus");
        var minusBtn = container.querySelector(".product-quantity-minus");

        plusBtn.addEventListener("click", function () {
            input.value++;
            span.innerHTML = input.value;
        });

        minusBtn.addEventListener("click", function () {
            if (input.value > 0) {
                input.value--;
                span.innerHTML = input.value;
            }
        });
    });
})();

/**************according to select tab banner get change and property and project section also js*********************/

function changeTab(tabId) {
    var bannerImage = document.getElementById('bannerImage');
    var bannerContent = document.getElementById('bannerContent');
    var propertySection = document.getElementById('property-section');
    var projectSection = document.getElementById('project-section');
  
    if (tabId === 'property-tab') {
      bannerImage.src = 'assets/img/banner1.png';
      bannerContent.innerHTML = '<div class="container"><h1 class="text-white">Premium Properties <br> Directly from Developers</h1><p class="text-white">Our Price cannot be matched. </p></div>';
      propertySection.style.display = 'block';
      projectSection.style.display = 'none';
    } else if (tabId === 'projects-tab') {
      bannerImage.src = 'assets/img/banner1.png';
      bannerContent.innerHTML = '<div class="container"><h1 class="text-white">Premium Projects <br> Directly from Developers</h1><p class="text-white">Our Price cannot be matched. </p></div>';
      propertySection.style.display = 'none';
      projectSection.style.display = 'block';
    }
}



/****************filter tab with scrolling item js*****************/
function showProjectsbyCat(cat) {
    if (cat == 'filter-all') {
        $('#projects-hidden .project').each(function() {
            var owl = $("#projects-carousel");
            var elem = $(this).parent().html();

            owl.owlCarousel('add', elem).owlCarousel('update');
            $(this).parent().remove();
        });
    } else {
        $('#projects-hidden .project.' + cat).each(function() {
            var owl = $("#projects-carousel");
            var elem = $(this).parent().html();

            owl.owlCarousel('add', elem).owlCarousel('update');
            $(this).parent().remove();
        });

        $('#projects-carousel .project:not(.project.' + cat + ')').each(function() {
            var owl = $("#projects-carousel");
            var targetPos = $(this).parent().index();
            var elem = $(this).parent();

            $(elem).clone().appendTo($('#projects-hidden'));
            owl.owlCarousel('remove', targetPos).owlCarousel('update');
        });
    }
}

$(document).ready(function() {
    var owl = $("#projects-carousel");

    // Click event for filters
    $('#project-terms a').click(function(e) {
        e.preventDefault();
        $('#project-terms a').removeClass('active');

        var cat = $(this).attr('id');
        $(this).addClass('active');
        showProjectsbyCat(cat);

        // Update dots
        if ($(window).width() < 768) { // For tablet and mobile
            owl.trigger('refresh.owl.carousel');
        }
    });

    // Initialize owl carousel
    owl.owlCarousel({
        items: 3,
        dots: $(window).width() < 768,
        slideBy: 1, // Slide one item at a time
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    });

    $(".owl-prev").html('<i class="bi bi-arrow-left"></i>');
    $(".owl-next").html('<i class="bi bi-arrow-right"></i>');
});



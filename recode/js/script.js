 

 $(document).ready(function () {


/* ===== JQuery ajax section starts ====== */
$("#sku").on('keyup', function () {

  var sku = $("#sku").val();

  $.ajax({
    url: 'skuExists.php',
    type: "POST",
    data: { sku: sku },
    success: function (data) {

      if (data == 'exists') {


        // show an error message if the sku id already exists

        alert("SKU Id already exists Please choose another one");
        $('#error-message').html('<p style = "color:red">SKU id already exists</p>');
        $("#save").attr("disabled", true);


      }

      else if (sku == "" || sku <= 0) {

        // show an available message if the sku id already does not exists

        $('#error-message').html('<p style = "color:red">Please enter sku Id</p>');
        $("#save").attr("disabled", true);

      }

      else {

        $('#error-message').html('<p style = "color:green">SKU ID is available</p>');
        $("#save").attr("disabled", false);

      }
    }
  });

});


/* ===== JQuery ajax section ends ====== */


  // Jquery for Select Section starts 

  $("#productType").on("change", function () {

    var selectValue = $("#productType").val();

    if (selectValue == "") {

      $(".size").css("display", "none");
      $(".weight").css("display", "none");
      $(".height").css("display", "none");
      $(".width").css("display", "none");
      $(".length").css("display", "none");

      /* To remove required attribute if type is switched */

      $('#size').removeAttr('required');
      $('#weight').removeAttr('required');
      $('#height').removeAttr('required');
      $('#width').removeAttr('required');
      $('#length').removeAttr('required');


      /* JavaScript to reset input field if type is switched */

      $("#size").val('');
      $("#weight").val('');
      $("#height").val('');
      $("#width").val('');
      $("#length").val('');


    }

    else if (selectValue == "DVD") {


      $(".size").css("display", "block");
      $(".weight").css("display", "none");
      $(".height").css("display", "none");
      $(".width").css("display", "none");
      $(".length").css("display", "none");


      $("#size").attr("required", true);

      /* To remove required attribute if type is switched */

      $('#weight').removeAttr('required');
      $('#height').removeAttr('required');
      $('#width').removeAttr('required');
      $('#length').removeAttr('required');


      /* JavaScript to reset input field if type is switched */


      $("#weight").val('');
      $("#height").val('');
      $("#width").val('');
      $("#length").val('');



    }

    else if (selectValue == "Book") {


      $(".size").css("display", "none");
      $(".weight").css("display", "block");
      $(".height").css("display", "none");
      $(".width").css("display", "none");
      $(".length").css("display", "none");


      $("#weight").attr("required", true);

      /* To remove required attribute if type is switched */

      $('#size').removeAttr('required');
      $('#height').removeAttr('required');
      $('#width').removeAttr('required');
      $('#length').removeAttr('required');

      /* JavaScript to reset input field if type is switched */


      $("#size").val('');
      $("#height").val('');
      $("#width").val('');
      $("#length").val('');



    }

    else if (selectValue == "Furniture") {


      $(".size").css("display", "none");
      $(".weight").css("display", "none");
      $(".height").css("display", "block");
      $(".width").css("display", "block");
      $(".length").css("display", "block");


      $("#height").attr("required", true);
      $("#width").attr("required", true);
      $("#length").attr("required", true);

      /* To remove required attribute if type is switched */

      $('#size').removeAttr('required');
      $('#weight').removeAttr('required');



      /* JavaScript to reset input field if type is switched */


      $("#size").val('');
      $("#weight").val('');




    }

    else {

    }



  });

  // Jquery for Select Section ends 
 
 


/* ================= prevent default for <input type = "number"> starts ================== */

$('#price, #size, #weight, #height, #width, #length').on('keypress', function (e) {

  if (e.key === 'e' || e.key === '+' || e.key === '-' || e.key === 'E') {
    e.preventDefault();
  }

});

});
/* ================= prevent default for <input type = "number"> ends ================== */






/* ========== Jquery Section ends =============== */






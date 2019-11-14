// This is preparation done on the page startup to setup the initial page start
  $().ready(function(){

    hideErrorAlerts();

    $("#personalLink a").click(function(hide){
      showPersonalDetails(); 
      return false;
    });

    $("#carLink a").click(function(){
      showCarDetails(); 
      return false;
    });

    $("#quoteLink a").click(function(){
      showQuoteDetails(); 
      return false;
    });
  });

  function showCarDetails() {
    console.log("Show car details")
   if ($("#txtName").val() != "")
   {
   $("#dvPersonalDetails").hide()
   $("#dvQuoteDetails").hide()
   $("#dvCarDetails").show() 
   }
      
    // Hide the personal details section (dvPersonalDetails)
    // Hide the quote section (dvQuoteDetails)
    // Show the car details section (dvCarDetails)

  }

  function showPersonalDetails() {
    $("#dvPersonalDetails").show()
    $("#dvQuoteDetails").hide()
    $("#dvCarDetails").hide()
      // Hide the car details section (dvCarDetails)
      // Hide the quote section (dvQuoteDetails)
      // Show the personal details section (dvPersonalDetails)
  }

  function showQuoteDetails() {
    $("#dvPersonalDetails").hide()
    $("#dvQuoteDetails").show()
    $("#dvCarDetails").hide()
      // Hide the car details section (dvCarDetails)
      // Hide the personal details section (dvQuoteDetails)
      // Show the quote section (dvPersonalDetails)
  }

  function getQuoteDetails() {


    // Perform validation to test that all data has been entered

    if (true/* Page is Valid */)
    {

      // Get the values from the page elements that you need to create your JSON
      var genderVar = $("#dvPersonalDetails input:radio[name=GenderInput]:checked").val();
      var ageVar = $("#txtAge").val();
      var YearsNoClaimsVar = $("#yearsnoclaims option:selected").val();
      var CostofCarVar = $("#Model").val();
      var carstorageVar = $("#carstorage option:selected").val();
      $.ajax({
          type: "GET",
          url: "http://172.26.9.254:8080/api/calculateRates",
          data: {gender: genderVar, age:ageVar, noClaimsBonus:YearsNoClaimsVar, costOfCar:CostofCarVar, carStorage: carstorageVar}
        }).done(function(msg) {
          $("#textQuote").text(msg.result.toFixed(1));
          showQuoteDetails();

          // Put the return value into Label created on quote details
          // Hide the Car Details section
          // Display the quote details page
      });
  }
}

//################################# Helper Functions - look at these when validating and changing section #########################################

  // Use this function to "Reset" the form and hide all 3 error sections whenever you make a section transition
  function hideErrorAlerts()
  {
    $("#dvPersonalDetailsAlert").hide();
    $("#dvCarDetailsAlert").hide();
    $("#dvQuoteDetailsAlert").hide();
  }

  // This function will control the top navigation and set the active tab when you make a section transition
  // You will need to call it and pass in the tab that needs to be made active
  function setActiveNavigation(activeTab) {
    $(".nav li").removeClass("active");

    $("#" + activeTab).addClass("active");
  }

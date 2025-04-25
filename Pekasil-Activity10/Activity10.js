$(document).ready(function() {
    $("#birthday").datepicker({
      changeMonth: true,
      changeYear: true,
      yearRange: "1900:2025",
      dateFormat: "yy-mm-dd"
    });
  
    var cities = [
      "Charlotte",
      "New York",
      "Washington DC",
      "Los Angeles",
      "Chicago",
      "Houston",
      "Phoenix"
    ];
    $("#city").autocomplete({
      source: cities
    });
  
    $("#infoForm").on("submit", function(e) {
      if (!this.checkValidity()) {
        e.preventDefault();
        $(this).addClass("was-validated");
      }
    });
  });
  
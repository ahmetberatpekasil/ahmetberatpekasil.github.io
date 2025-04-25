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

    var languages = [
      "JavaScript",
      "Python",
      "Java",
      "C++",
      "C#",
      "Ruby",
      "Go",
      "PHP",
      "Swift",
      "Kotlin"
    ];
    $("#language").autocomplete({
      source: function(request, response) {
        response($.ui.autocomplete.filter(languages, request.term));
      },
      minLength: 1,
      delay: 100
    });
    
    $("#infoForm").on("submit", function(e) {
      if (!this.checkValidity()) {
        e.preventDefault();
        $(this).addClass("was-validated");
      }
    });
  });
  

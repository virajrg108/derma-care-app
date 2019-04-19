function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $('#blah')
        .attr('src', e.target.result)
        .width(280)
        .height("auto");
    };

    reader.readAsDataURL(input.files[0]);
    console.log(reader);

  }
}
$(document).ready(function () {
  // var formData = new FormData();
  // var photos = document.getElementById("file");
  $('#submit-btn').click(function (event) {
    $('.selectpicker').change(function (e) {
      console.log(e.target.value);
    });
    var age = $('#age').val();
    var sex = $('#sex').val();
    var local = $(".selectpicker option:selected").val();
    console.log(age, sex, local);
    $.get( "data?"+"age="+age+"&sex="+sex+"&localization="+local, function( data ) {
      $( ".result" ).html( data );
      alert( "Load was performed." );
    });
    // $.ajax({
    //   type: "POST",
    //   url: 'http://localhost:8080/data',
    //   data: {data:'data'}
    // });
    //   formData.append('file', 'My Vegas Vacation');
    //   for (var i = 0; i < photos.files.length; i++) {
    //     formData.append('file', photos.files[i]);
    //   }
    //   console.log(formData, photos.files);
    // fetch('/data', {
    //   method: 'POST',
    //   body: { data: 'data' }
    // }).then(response => response.json())
    //   .then(response => console.log('Success:', JSON.stringify(response)))
    //   .catch(error => console.error('Error:', error));
  });
});
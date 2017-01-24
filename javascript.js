$( document ).ready(function() {
  // array de los tipos de pasteles que existen
  cakes = [['fresa', 10], ['chocolate', 15], ['vainilla', 8]];
  // aqui se muestra el horno junto con la forma para
  // especificar el tipo de pastel y el tiempo 
  // que se le dara de cocción
  $('.create-oven').submit(function(event){
    event.preventDefault();
    $('.create-oven').hide();
    $('.oven').css("visibility", 'visible');
    $('#cook').css("visibility", 'visible');
  });

  // en este submit se lleva acabo la cocción del pastel
  $('#cook').submit(function(event){ 
    // se hace un prevent default de nuestro submit para 
    event.preventDefault();
    console.log('entre a baking')
    // flavor es el tipo de pastel (sabor)
    flavor = $('#flavor').val();
    // baking es el tiempo que el usuario le da 
    // de cocción al pastel
    baking = $('#BakeTime').val();
    // mantenernos en la misma pagina
    // se crea el nuevo pastel que se metera al horno
    var newCake = createCake(flavor, baking);
    // se agrega el tiempo que el usuario dio al
    
    // contador a nuestro html
    $('p#countdown').html(baking);

    cook_time = 0;

    var ourCountdown = setInterval(function(){
    
      cakes.forEach(function(entry) {
        if (entry[0] == newCake.flavor) {
          time = entry[1]
        };
      });

      cakes.forEach(function(entry) {
        if (entry[0] == newCake.flavor) {
          cakeStatus = entry[0]
        };
      });

      var crudoBake = time*.25;
      var casiListo = time*.99;
      status = "";
      if (cook_time <= crudoBake) {
        console.log('crudo');
        $('#timer').addClass('Crudo');
        $('#status').text("Crudo");
        $('p#countdown').html(baking);
        status = "Crudo";
      }else if (cook_time <= casiListo) {
        console.log('casi');
        $('#timer').removeClass();
        $('#timer').addClass('Casi-listo');
        $('#status').empty();
        $('#status').text("Casi listo");
        $('p#countdown').html(baking);
        status = "Casi listo";
      }else if (cook_time == time) {
        console.log('LISTO');
        $('#timer').removeClass();
        $('#timer').addClass('LISTO');
        $('#status').empty();
        $('#status').text("LISTO");
        $('p#countdown').html(baking);
        status = "LISTO";
      }else{
        console.log('QUEMADO');
        $('#timer').removeClass();
        $('#timer').addClass('QUEMADO');
        $('#status').empty();
        $('#status').text("QUEMADO");
        $('p#countdown').html(baking);
        status = "Quemado";
      }
      if (baking == 0){

        $('#history').append("<li>" + cakeStatus + "     " + status + "</li>");
        clearInterval(ourCountdown);
        $('.recien-salidas').text('Recien salidas');
        $('#history').css("visibility", 'visible');
      }
      baking--;
      cook_time++;
    }, 500);

  });
  

});


// Class Pastel
function createCake(flavor, bakeTime) {
  var obj = {};
  obj.flavor = flavor;
  obj.bakeTime = bakeTime;
  return obj;
}
// Class PastelBatch
var Oven = function(){

}
// Class Oven


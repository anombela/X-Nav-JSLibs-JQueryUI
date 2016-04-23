var names = [
	"Alfonso",
	"Arturo",
    "José",
    "Antonio",
    "Manuel",
    "Francisco",
    "Juan",
    "Pedro",
    "Miguel",
    "Luis",
    "Ramón",
    "Ange"
];





$( "#accordion" ).accordion();

$( "#tabs" ).tabs();


$( "#autocomplete" ).autocomplete({
	source: names
});


$( "#datepicker" ).datepicker();


$(function() {
    $( "#draggable" ).draggable();
    $( "#droppable, #droppable2" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Evento elegido" );
      }
    });
  });
var AddWinePageController = function () {

			$("#addWineSubmitButton").live( "click", function( event ) {
				console.log("handleSubmitWine");
          			event.preventDefault();
          				var document = {};
          					document.restaurant = $("input#wineListRestaurant").val();
          					document.title = $("input#wineListTitle").val();
          					document.wineListId = $("input#wineListId").val();
          					document.vintage = $("input#vintageInputId").val();
          					document.varietal = $("input#varietalInputId").val();
          					document.producer = $("input#producerInputId").val();
          					document.category = $("select option:selected").val();
          					document.creation_date = ( new Date() ).getTime();
          					document.kind = "wine";
          					$db.saveDoc( document, {
          						success: function(data) {
          							$.mobile.changePage( "../winepage/" + data.id, "slidedown", true, true);
          						},
          						error: function( status, error, reason ) {
          							alert( "Cannot save new document.\n" + status + "," + reason + ", " + error );
          						}
          					});
                //$("#addWineSubmitButton").die( "click" );
          	});

}();


function handlePageViewReady()
{
    AddWinePageController.initialize();
};

$(handlePageViewReady);
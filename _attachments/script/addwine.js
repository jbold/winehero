var AddWinePageController = function () {

		$("#addSubmitButton").live( "click", function( event ) {
          	event.preventDefault();
          		var document = {};
          			document.restaurant = $("input#wineListRestaurant").val();
          			document.title = $("input#wineListTitle").val();
          			document.wineListId = $("input#wineListId").val();
          			document.vintage = $("input#vintageInputId").val();
          			document.varietal = $("input#varietalInputId").val();
          			document.producer = $("input#producerInputId").val();
          			document.category = $("input#select-choice-3")
          			//var categoriesHolder = new Array();
          			//for(cat=0;cat<categoryCount;cat++)
          			//{
          			//	if ($("input#addCategory"+cat).val())
          			//	{
          			//		categoriesHolder[cat] = $("input#addCategory"+cat).val();
          			//	}
          			//}
          			//document.categories = categoriesHolder;
          			document.creation_date = ( new Date() ).getTime();
          			document.kind = "wine";
          			$db.saveDoc( document, {
          				success: function(data) {
          					$.mobile.changePage( "_show/winepage/" + data.id, "slidedown", true, true);
          				},
          				error: function( status, error, reason ) {
          					alert( "Cannot save new document.\n" + status + "," + reason + ", " + error );
          				}
          			});
          			
          return {
       			initialize : function() 
       			{
                	handleView();
      			}
   			};
          			
});

function handlePageViewReady()
{
    AddWinePageController.initialize();
};

$(handlePageViewReady);
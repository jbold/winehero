var WineListEditPageController = function() {
		
	var editableWineList;

    function handleEditPageViewHide()
    {
        
        editableWineList = null;
        
        //var docId = $("#wlistform").data("identity");
        //var pageCache =  $(document.getElementById("_show/winelistedit/" + docId));
       // pageCache.unbind( "pagehide" );
       // pageCache.empty();
       // pageCache.remove();
    }

    function handleEditView()
    {
        // Watch for bound hide of page to clear from cache.
        //var docId = $("#wlistform").data("identity");
        //var wineListPage = $(document.getElementById("_show/winelistedit/" + docId));
        //wineListPage.bind( "pagehide", handleEditPageViewHide );
        
        storeUnitedDocument();
    }
    
    function navigateToWineListPage( docId )
    {
    	$.mobile.changePage( "../winelist/" + docId, "slide", true, true );
    }
    
    function storeUnitedDocument()
    {
    	var restaurant = $("input#restaurantField").val();
    	var title = $("input#titleField").val();
    	var description = $("textarea#descriptionField").val();
    	//var categories = $(["textarea#categoriesField"]).val();
    	editableWineList = {restaurant:restaurant, title:title, description:description}
    }
    
    function saveDocument( document )
    {
   		$db.saveDoc( document , {
   			success: function( response ) {
   				updateEditableWineList( document );
   				navigateToWineListPage( document._id );
   				console.log("successful save");
   			},
   			error: function() {
   				alert("Cannot save document: " + document._id );
   			}
   			
   		});
   		$("#submitButton").die( "click" );
    }
    
    function updateEditableWineList( document )
    {
    	editableWineList.restaurant = document.restaurant;
    	editableWineList.title = document.title;
    	editableWineList.description = document.description;
    	//editableWineList.categories = document.categories;
    }
    
    function revertEdits()
    {
    	$("input#restaurantField").val(editableWineList.restaurant);
    	$("input#titleField").val( editableWineList.title );
    	$("textarea#descriptionField").val(editableWineList.description);
    	//$(["textarea#categoriesField"]).val(editableWineList.categories);
    }
	
	function handleCancelEdit()
	{
		revertEdits();
		var docId = $("#wlistform").data("identity");
		navigateToWineListPage( docId );
		$("#cancelButton").die("click", handleCancelEdit);
        $("#cancelBackButton").die( "click");
        $("#submitButton").die( "click" );
		
	}
	
	function addInput(divName){
		
		var newdiv = document.createElement('div');
	    newdiv.innerHTML = "<br><input type='text' name='categoryList[]'>" +
	                 "<input type=\"button\" value=\"Remove Category\" onClick=\"this.parentNode.parentNode.removeChild(this.parentNode);\" \/>";
	    document.getElementById(divName).appendChild(newdiv);
	  }
	
    return {
        initialize: function() {
        	$("#cancelButton").live( "click", handleCancelEdit );
        	$("#cancelBackButton").live( "click", function( event ) {
        		event.preventDefault();
        		handleCancelEdit();
        		return false;
        	});
        	$("#submitButton").live( "click", function( event ) {
        		var docId = $("#wlistform").data("identity");
        		$db.openDoc( docId, {
        			success: function( document ) {
        				document.restaurant = $("input#restaurantField").val();
                        document.title = $("input#titleField").val();
                        document.description = $("textarea#descriptionField").val();
                        document.categories = $("input#categoryList[]").val();
                        saveDocument( document );
        			},
        			error: function() {
        				alert( "Cannot open document:" + docId );
        			}
        		});
        	});
            $("div[data-role='page']").live( "pageshow", function() {
              $("div[data-role='page']").die( "pageshow" );
               handleEditView();
                
            });
        }
    };
}();

function handleEditPageReady()
{
    WineListEditPageController.initialize();
}
$( handleEditPageReady );
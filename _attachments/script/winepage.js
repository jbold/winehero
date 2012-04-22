var WinePageController = function() {

    function handleView()
    {
    	$("#editWineButton").live( "click", handleEdit );
		$("#deleteWineButton").live( "click", handleDelete);
        //var docId = $('#wlistcontent').data("identity");
        //var wineListPage = $(document.getElementById("../winelist/" + docId));
        console.log("handleView");
    }
    
    function handleEdit ( event )
    {
    	
    	$("#editWineButton").die( "click" );
    	var docId = $('#winePageContent').data("identity");
    	//change page
    	$.mobile.changePage( "../wine_edit/" + docId, "slide", false, true );
    	console.log("handleEdit");
    	//return false;
    	
    }

    function handleDelete( event )
    {
        // Prevent default link event.
        //event.preventDefault();
        // Access document id from data-identity.
        var docId = $("#wlistcontent").data("identity");
        // Change page.
        $.mobile.changePage( "_show/winedeletepage/" + docId, "slideup", false, false );
        return false;
    }

    return {
       initialize : function() 
       {
        
               handleView();
       }
    };
    
}();

function handlePageViewReady()
{
    WinePageController.initialize();
};

$(handlePageViewReady);


var WineListPageController = function() {

    function handleView()
    {
    	$("#editListButton").live( "click", handleEdit );
        //var docId = $('#wlistcontent').data("identity");
        //var wineListPage = $(document.getElementById("../winelist/" + docId));
        console.log("handleView");
    }
    
    function handleEdit ( event )
    {
    	
    	$("#editListButton").die( "click" );
    	var docId = $('#wlistcontent').data("identity");
    	//change page
    	$.mobile.changePage( "../winelistedit/" + docId, "slide", false, true );
    	console.log("handleEdit");
    	//return false;
    	
    }

    function handleDelete( event )
    {
        // Prevent default link event.
        event.preventDefault();
        // Access document id from data-identity.
        var docId = $("#wlistcontent").data("identity");
        // Change page.
        $.mobile.changePage( "_show/winelistdelete/" + docId, "slideup", false, false );
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
    WineListPageController.initialize();
};

$(handlePageViewReady);


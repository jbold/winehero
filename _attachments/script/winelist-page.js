var WineListPageController = function() {

    function handleView()
    {
    	$("#editListButton").live( "click", handleEdit );
    	$("#addWineButton").live( "click", handleAddNewWine );
        // Watch for bound hide of page to clear from cache.
        var docId = $('#wlistcontent').data("identity");
        var wineListPage = $(document.getElementById("../winelist/" + docId));
        //wineListPage.bind( "pagehide", handlePageViewHide );
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


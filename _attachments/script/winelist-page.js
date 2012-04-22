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
    	//Prevent default link event.
    	//event.preventDefault();
    	//access document id from data-identity.
    	
    	$("#editListButton").die( "click" );
    	var docId = $('#wlistcontent').data("identity");
    	//change page
    	$.mobile.changePage( "../winelistedit/" + docId, "slide", false, true );
    	console.log("handleEdit");
    	//return false;
    	
    }
    
    //function handleAddNewWine ( event )
    //{    	
    //	$("#addWineButton").die( "click" );
    	//var parentList_docId = $('#wlistcontent').data("identity");
    //	$.mobile.changePage( "../addwine/", "slide", false, true );
    //	console.log("handleAddNewWine");
    //}

    //function handlePageViewHide()
    //{
      //  $("#editButton").die( "click", handleEdit );
        
        //var docId = $("#wlistcontent").data("identity");
        //var wineListPageCache =  $(document.getElementById("../winelist/" + docId));
        //wineListPageCache.unbind( "pagehide" );
        //wineListPageCache.empty();
        //wineListPageCache.remove();
        //console.log("handlePageViewHide");
    //}

    return {
       initialize : function() {
         // $("div[data-role='page']").live( "pageshow", function() {
          //      $("div[data-role='page']").die( "pageshow" );
               handleView();
          //  });
      }
   };
    
}();

function handlePageViewReady()
{
    WineListPageController.initialize();
};

$(handlePageViewReady);


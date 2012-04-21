var WineListPageController = function() {

    function handleView()
    {
    	$("#editbutton").live( "click", handleEdit );
    	
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
    	$("#editbutton").die( "click" );
    	var docId = $('#wlistcontent').data("identity");
    	//change page
    	$.mobile.changePage( "../winelistedit/" + docId, "slide", false, true );
    	console.log("handleEdit");
    	//return false;
    	
    }

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
            $("div[data-role='page']").live( "pageshow", function() {
                $("div[data-role='page']").die( "pageshow" );
                handleView();
            });
        }
    };
    
}();

function handlePageViewReady()
{
    WineListPageController.initialize();
};

$(handlePageViewReady);


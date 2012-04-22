var WinelistDeleteController = function() {

    function handleDialogViewHide()
    {
        $("#dialogCloseButton").die( "click", handleClose );
        $("#dialogCancelButton").die( "click", handleClose );
        $("#dialogConfirmButton").die( "click", handleDelete );

        var docId = $("#dialogContent").data("identity");
        var dialogCache =  $(document.getElementById("../winelistdelete/" + docId));
        dialogCache.unbind( "pagehide", handleDialogViewHide );
        dialogCache.empty();
        dialogCache.remove();
    }

    function handleDialogView()
    {
        // Watch for bound hide of page to clear from cache.
        var docId = $("#dialogContent").data("identity");
        var dialogPage = $(document.getElementById("../winelistdelete/" + docId));
        dialogPage.bind( "pagehide", handleDialogViewHide );
    }

    function handleClose( event )
    {
        event.preventDefault();
        var docId = $("#dialogContent").data("identity");
        $.mobile.changePage( "../winelist/" + docId, "slide", true, true );
        return false;
    }

    function handleDelete( event )
    {
        event.preventDefault();
        var docId = $("#dialogContent").data("identity");
        // First open doc based on ID in order to get full document.
        $db.openDoc( docId, {
            success: function( document ) {
                // Then use the opened doc as reference to remove.
                $db.removeDoc( document, {
                    success: function() {
                        $.mobile.changePage( "#home", "slide", true, true );
                    },
                    error: function() {
                        alert( "Could not remove document with id: " + docId );
                    }
                });
            },
            error: function() {
                alert( "Could not find document with id: " + docId );
            }
        });
        return false;
    }

    return {
        initialize: function() {
            $("#dialogCloseButton").live( "click", handleClose );
            $("#dialogCancelButton").live( "click", handleClose );
            $("#dialogConfirmButton").live( "click", handleDelete);
            // Do pagebefore so when it is shown, it is filled correctly.

                var docId = $("#dialogContent").data("identity");
                var dialogPage = $(document.getElementById("../winelistdelete/" + docId));
                var dialog = $("#albumdelete");
                var h = parseFloat(dialogPage.innerHeight());
                h -= ( parseFloat(dialog.css("border-top-width")) + parseFloat(dialog.css("border-bottom-width")) );
                // define the height based on innerHeight of wrapping parent page and the border styles applied to a dialog.
                dialog.css( "height", h + "px" );
            });
                handleDialogView();
            });
        }
    };
}();

function handleDialogReady()
{
    WinelistDeleteController.initialize();
}
$(handleDialogReady)
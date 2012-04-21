function(doc) {
    if (doc.kind == "winelist"){
        //emit( doc._id, doc );
        emit( ( new Date(doc.creation_date) ).getTime(), doc );
    }

}
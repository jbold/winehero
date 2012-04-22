function(doc, req) {
    var Mustache = require("vendor/couchapp/lib/mustache");
    var stash = {
            restaurant: doc.restaurant,
            title : doc.title,
            wineListId: doc.wineListId,
            vintage: doc.vintage,
            varietal: doc.varietal,
            producer: doc.producer,
            category: doc.category,
            document: doc._id
    };
    return Mustache.to_html(this.templates.winepage, stash, this.templates.partials.winepage);
}
function(doc, req) {
    var Mustache = require("vendor/couchapp/lib/mustache");
    var stash = {
        restaurant: doc.restaurant,
        title : doc.title,
        description: doc.description,
        categories: doc.categories,
        document: doc._id
    };
    return Mustache.to_html(this.templates.addwine, stash, this.templates.partials.addwine);
}
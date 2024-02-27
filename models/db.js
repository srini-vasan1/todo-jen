var DB = require("./schemaconnection");


function GetDocument(model, query, projection, extension, callback) {
    var query = DB[model].find(query, projection, extension.options);
    if (extension.populate) {
        if (extension.select)
            query.populate(extension.populate, extension.select);
        else
            query.populate(extension.populate);
    }
    if (extension.sort) {
        query.sort(extension.sort);
    }
    if (extension.limit) {
        query.limit(extension.limit);
    }
    query.exec(function (err, docs) {
        if (extension.count) {
            query.count(function (err, docs) {
                callback(err, docs);
            });
        } else {
            callback(err, docs);
        }
    });
}

function GetOneDocument(model, query, projection, extension, callback) {
    var query = DB[model].findOne(query, projection, extension.options);
    if (extension.populate) {
        if (extension.select)
            query.populate(extension.populate, extension.select);
        else
            query.populate(extension.populate);
    }
    query.exec(function (err, docs) {
        callback(err, docs);
    });
}

function InsertDocument(model, docs, callback) {
    var doc_obj = new DB[model](docs);
    doc_obj.save(function (err, numAffected) {
        callback(err, numAffected);
    });
}

function DeleteDocument(model, criteria, callback) {
    DB[model].remove(criteria, function (err, docs) {
        callback(err, docs);
    });
}

function UpdateDocument(model, criteria, doc, options, callback) {
    DB[model].update(criteria, doc, options, function (err, docs) {
        callback(err, docs);
    });
}

module.exports = {
    GetDocument: GetDocument,
    GetOneDocument: GetOneDocument,
    InsertDocument: InsertDocument,
    DeleteDocument: DeleteDocument,
    UpdateDocument: UpdateDocument,
};

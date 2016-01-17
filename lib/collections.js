Images = new Mongo.Collection("images");

//setup security for Images collection
Images.allow({
    insert: function (userId, doc) {
        if (Meteor.user()) {
            if (userId != doc.createdBy) {
                return false;
            }
            // the user is logged and correct id
            return true;
        } else {
            return false;
        }
    },
    remove: function (userId, doc) {
        if (Meteor.user()) {
            if (userId != doc.createdBy) {
                return false;
            }
            // the user is logged and correct id
            return true;
        } else {
            return false;
        }
    }
});

KnowledgePacks = new Mongo.Collection('kpacks');

KnowledgePacks.allow({
  insert: function(userId, doc) {
    return !!userId;
  }
});

Kapability = new SimpleSchema({
  name: {
    type: String,
    label: "Functional Capability"
  },
  description: {
    type: String,
    label: "Description"
  },
  function: {
    type: String,
    label: "Function-Pointer",
    autoform: {
      type: "hidden"
    }
  },
  createdAt: {
    type: Date,
    label: "CreatedAt",
    autoValue: function() {
      return new Date()
    },
    autoform: {
      type: "hidden"
    }
  }
});

KPackSchema = new SimpleSchema({
  name: {
    type: String,
    label: "Name"
  },
  description: {
    type: String,
    label: "Description"
  },
  kapabilities: {
    type: [Kapability]
  },
  author: {
    type: String,
    label: "Author",
    autoValue: function() {
      return this.userId
    },
    autoform: {
      type: "hidden"
    }
  },
  createdAt: {
    type: Date,
    label: "CreatedAt",
    autoValue: function() {
      return new Date()
    },
    autoform: {
      type: "hidden"
    }
  }
});

KnowledgePacks.attachSchema( KPackSchema );

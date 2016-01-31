Meteor.publish('kpacks', function(){
	return KnowledgePacks.find({author: this.userId});
});

Meteor.publish('singleRecipe', function(id) {
	check(id, String);
	return Recipes.find({_id: id});
});

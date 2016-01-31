var Points = new Meteor.Collection(null);

if(Points.find({}).count() === 0){
	for(i = 0; i < 20; i++)
		Points.insert({
			date:moment().startOf('day').subtract('days', Math.floor(Math.random() * 1000)).toDate(),
			value:Math.floor(Math.random() * 100)+500
		});
}

Template.lineChart.events({
	'click #add':function(){
		Points.insert({
			date:moment().startOf('day').subtract('days', Math.floor(Math.random() * 1000)).toDate(),
			value:Math.floor(Math.random() * 100)+500
		});
	},
	'click #remove':function(){
		var toRemove = Random.choice(Points.find().fetch());
		Points.remove({_id:toRemove._id});
	},
	'click #randomize':function(){
		//loop through bars
		Points.find({}).forEach(function(point){
			Points.update({_id:point._id},{$set:{value:Math.floor(Math.random() * 100)+500}});
		});
	}
});


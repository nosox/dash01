FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('HomeLayout');
  }
});

FlowRouter.route('/dash', {
  name: 'dash',
  action() {
    BlazeLayout.render('DashLayout', {dashpagevar: 'DashHome'});
  }
});

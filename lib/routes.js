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

FlowRouter.route('/d3', {
  name: 'd3',
  action() {
    BlazeLayout.render('DashLayout', {dashpagevar: 'D3Home'});
  }
});

FlowRouter.route('/viz', {
  name: 'viz',
  action() {
    BlazeLayout.render('DashLayout', {dashpagevar: 'VizHome'});
  }
});

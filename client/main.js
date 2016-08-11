import '../imports/ui/body.html';
import '../imports/ui/body.js';

import '../imports/ui/task.html';
import '../imports/ui/task.js';

import '../imports/ui/forms/add-straw.html';
import '../imports/ui/forms/add-wood.html';
import '../imports/ui/forms/add-brick.html';

FlowRouter.route('/', {
  action: function(params) {
    BlazeLayout.render("main");
  }
});

FlowRouter.route('/add-straw', {
  action: function(params) {
    BlazeLayout.render("addStraw");
  }
});

FlowRouter.route('/add-wood', {
  action: function(params) {
    BlazeLayout.render("addWood");
  }
});

FlowRouter.route('/add-brick', {
  action: function(params) {
    BlazeLayout.render("addBrick");
  }
});

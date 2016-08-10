import '../imports/ui/body.html';
import '../imports/ui/body.js';

import '../imports/ui/task.html';
import '../imports/ui/task.js';

FlowRouter.route('/', {
  action: function(params) {
    BlazeLayout.render("main");
  }
});

FlowRouter.route('/add-wood', {
  action: function(params) {
    BlazeLayout.render("addWood");
  }
});

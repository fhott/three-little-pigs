import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';
import { ReactiveDict } from 'meteor/reactive-dict';
import { ReactiveVar } from 'meteor/reactive-var';

Template.body.onCreated( () => {
  const instance = Template.instance();
  instance.state = new ReactiveVar();
});

Template.body.helpers({
  tasks() {
    const instance = Template.instance();

    if(instance.state.get()){
      return Tasks.find({ checked: { $ne: true } });
    }
    return Tasks.find({});
  },
  incompleteCount () {
    return Tasks.find({ checked: { $ne: true } }).count();
  }
});

Template.body.events({
  'submit .new-task' (event) {
    event.preventDefault();

    const target = event.target;
    const text = target.text.value;

    Tasks.insert({
      text,
      createdAt: new Date()
    });

    target.text.value = '';

  },
  'change .hide-completed input' (event, instance) {
    instance.state.set(event.target.checked);
    console.log('hide',instance);
  }
});

import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';
import { ReactiveDict } from 'meteor/reactive-dict';
import { ReactiveVar } from 'meteor/reactive-var';

Template.main.onCreated( () => {
  const instance = Template.instance();
  instance.state = new ReactiveVar();
});

Template.main.helpers({
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

Template.main.events({
  'submit .new-task' (event, instance) {
    event.preventDefault();

    console.log($(".wood").value());

    const text = $(".wood").value();

    Tasks.insert({
      text,
      createdAt: new Date()
    });

    target.text.value = '';

  },
  'change .hide-completed input' (event, instance) {
    instance.state.set(event.target.checked);
  }
});

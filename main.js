var app = new Vue ({
  el: '#root',
  data: {
    inputText: '',
    tasks: [
      {
        text: 'Call the decorator',
        status: 'todo'
      },
      {
        text: 'Go to the store',
        status: 'todo'
      },
      {
        text: 'Buy present for mum',
        status: 'todo'
      },
      {
        text: 'Do the laundry',
        status: 'todo'
      },
    ],
  },
  computed: {
    tasksRearanged: function () {
      let tasksToDo = this.tasks.filter ((item) => item.status == 'todo');
      let tasksDone = this.tasks.filter ((item) => item.status == 'done');
      return [...tasksToDo,...tasksDone];
    }
  },
  methods: {
    add: function () {
      if (this.inputText != '') {
        let obj = {
          text: this.inputText,
          status: 'todo'
        }
        this.tasks.push(obj);
        this.inputText = '';
      }
    },
    changeStatus: function (task) {
      let position = this.tasks.indexOf(task);
      this.tasks[position].status = 'done';
    },
    removeTask: function (task) {
      let position = this.tasks.indexOf(task);
      this.tasks.splice(position, 1);
    }
  }
});

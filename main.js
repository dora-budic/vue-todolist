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
  methods: {
    add: function () {
      let obj = {
        text: this.inputText,
        status: 'todo'
      }
      this.tasks.push(obj);
      this.inputText = '';
    }
  }
});

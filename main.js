var app = new Vue ({
  el: '#root',
  data: {
    inputText: '',
    changedText: '',
    tasks: [
      {
        text: 'Call the decorator',
        status: 'todo',
        edit: 'false'
      },
      {
        text: 'Go to the store',
        status: 'todo',
        edit: 'false',
      },
      {
        text: 'Buy present for mum',
        status: 'todo',
        edit: 'false'
      },
      {
        text: 'Do the laundry',
        status: 'todo',
        edit: 'false'
      },
    ],
  },
  // Crea nuovo array con task fatti in fondo
  computed: {
    tasksRearanged: function () {
      let tasksToDo = this.tasks.filter ((item) => item.status == 'todo');
      let tasksDone = this.tasks.filter ((item) => item.status == 'done');
      return [...tasksToDo,...tasksDone];
    }
  },
  methods: {
    // Aggiunge task alla lista (nell'array)
    add: function () {
      if (this.inputText != '') {
        let obj = {
          text: this.inputText,
          status: 'todo',
          edit: 'false'
        }
        this.tasks.push(obj);
        this.inputText = '';
      }
    },
    // Cambia status del task da todo a done
    changeStatus: function (task) {
      let position = this.tasks.indexOf(task);
      this.tasks[position].status = 'done';
    },
    // Cancella task dalla lista/array
    removeTask: function (task) {
      let position = this.tasks.indexOf(task);
      this.tasks.splice(position, 1);
    },
    // Cambia il valore di edit in base al click su icona edit > dimostra input,nasconde testo,
    // nell'input inserisce il testo da modificare,
    // dimostra il testo modificato
    modifyTask: function (task) {
      let position = this.tasks.indexOf(task);
      if (this.tasks[position].edit == 'true') {
        this.tasks[position].text = this.changedText;
        this.tasks[position].edit = 'false'
      } else {
        this.tasks[position].edit = 'true';
      }
      this.changedText = this.tasks[position].text;
    },
    // All'enter su input fa vedere il testo modificato e nascone l'input
    switchText: function (task) {
      let position = this.tasks.indexOf(task);
      this.tasks[position].text = this.changedText;
      this.tasks[position].edit = 'false'
    }
  }
});

var app = new Vue({
    el: '#app',
    data: {
      date: new Date(),
      todos: [
          {
            msg: "fare la spesa", place: "milano", date : "05/05/22", isDone: false, 
          },
          {
            msg: "fare la spesa 2", place: "milano", date : "05/05/22", isDone: false, 
          },
          {
            msg: "fare la spesa 3", place: "milano", date : "05/05/22", isDone: false, 
          },
          {
            msg: "fare la spesa 4", place: "milano", date : "05/05/22", isDone: false, 
          },
          {
            msg: "fare la spesa 5", place: "milano", date : "05/05/22", isDone: false, 
          },
          {
            msg: "fare la spesa 6", place: "milano", date : "05/05/22", isDone: false, 
          },
          
        ]
    },
    methods: {
        completeToDo(todo){
           todo.isDone=!todo.isDone
        },
        editToDo(todo){

        },
        removeToDo(i){
            this.todos[i].isDone ? this.todos.splice(i-1,1) : this.todos.splice(i,1)
        }
        

    },
    computed: {
        todosComplete(){
            return this.todos.filter((task)=>task.isDone)
        },
        todosUncomlete(){
            return this.todos.filter((task)=>!task.isDone)
        },
        printDate(){
            var day=this.date.getDate();  
            var month=this.date.getMonth()+1;  
            var year=this.date.getFullYear();  
            return `${day}/${month}/${year}`
        }
    }
  })



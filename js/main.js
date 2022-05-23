var app = new Vue({
    el: '#app',
    data: {
      todos: [
          {
            msg: "fare la spesa", place: "milano", date : "05/05/22", isDone: false, 
          },
          {
            msg: "fare la spesa", place: "milano", date : "05/05/22", isDone: false, 
          },
          {
            msg: "fare la spesa", place: "milano", date : "05/05/22", isDone: false, 
          },
          {
            msg: "fare la spesa", place: "milano", date : "05/05/22", isDone: false, 
          },
          {
            msg: "fare la spesa", place: "milano", date : "05/05/22", isDone: false, 
          },
          {
            msg: "fare la spesa", place: "milano", date : "05/05/22", isDone: false, 
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
            this.todos.splice(i,1)
            
        }

    },
    computed: {
        todosComplete(){
            return this.todos.filter((task)=>task.isDone)
        },
        todosUncomlete(){
            return this.todos.filter((task)=>!task.isDone)
        }
    }
  })



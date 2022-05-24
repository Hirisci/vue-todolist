var app = new Vue({
    el: '#app',
    data: {
      date: new Date(),
      isTaskDoneVisible: true,
      openMenu: false,
      
      todos: [
          {
            msg: "fare la spesa", place: "milano", date : "05/05/2022", isDone: false, type: true, editMode: true
          },
          {
            msg: "lavare la macchina", place: "milano", date : "15/05/2022", isDone: false, type: true, editMode: true
          },
     
          
        ],
        title: '',
        where: '',
        selected: "personal",
    },
    methods: {
        completeToDo(todo){
           todo.isDone=!todo.isDone
        },
        editToDo(i){
            this.todos[i].editMode=!this.todos[i].editMode
        },
        removeToDo(i){
            
            this.todos[i].isDone ? this.todos.splice(i-1,1) : this.todos.splice(i,1)
        },
        addToDo(){
            let ogg = {msg: this.title, place: this.where, date : this.printDate, isDone: false, type: true,editMode: true}
            this.selected==="personal" ? ogg.type = true : ogg.type = false;
            console.log(this.selected);
            this.todos.push(ogg)
            this.menuOpen();
            this.title=""
            this.where=""
        },
        toggleUl(){
            this.isTaskDoneVisible = !this.isTaskDoneVisible;
        },
        menuOpen(){
            this.openMenu= !this.openMenu
        }
        

    },

    computed: {
        todosPersonal(){
            return this.todos.filter((task)=>task.type)
        },
        todosWork(){
            return this.todos.filter((task)=>!task.type)
        },
        todosComplete(){
            return this.todos.filter((task)=>task.isDone)
        },
        todosUncomplete(){
            return this.todos.filter((task)=>!task.isDone)
        }, 
        printDate(){
            var day=this.date.getDate();  
            var month=this.date.getMonth()+1;  
            var year=this.date.getFullYear();  
            return `${day}/${month}/${year}`
        },      
    }
  })



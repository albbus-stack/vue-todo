var app = new Vue({
    el: '#app',
    data: {
        title: '',
        todos: [],
        setID: '0',
        sets: []
    },
    methods: {
        createToDo: function() {
            if (this.title != "") {
                let i = this.todos.push({
                    title: this.title,
                    done: false,
                    setID: this.setID
                })
                let memory = this.sets[this.setID]
                if (memory === undefined) {
                    memory = []
                    memory.todo = []
                    this.sets[this.setID] = []
                } else {
                    memory = this.sets[this.setID].todo
                }
                memory.push(this.todos[i - 1])
                this.sets[this.setID] = { todo: memory, setID: this.setID }
            }
            this.title = ""
        },
        deleteToDo: function(set, todo) {
            const i = set.todo.indexOf(todo)
            set.todo.splice(i, 1)
            this.title = '.'
            this.title = ''
        },
    }
})
var app = new Vue({
    el: '#app',
    data: {
        title: '',
        todos: [],
        setID: 0,
        lastID: 0,
        setAlias: '',
        dropdownKey: 0,
        sets: [{
            todo: [],
            setID: 0,
            setAlias: 'init'
        }]
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
                this.sets[this.setID] = { todo: memory, setID: this.setID, setAlias: this.sets[this.setID].setAlias }
            }
            this.title = ""
            document.getElementsByClassName(this.setID.toString().concat(' setNum')).value = this.setAlias
        },
        deleteToDo: function(set, todo) {
            const i = set.todo.indexOf(todo)
            set.todo.splice(i, 1)
            this.title = '.'
            this.title = ''
        },
        createSet: function() {
            if (document.querySelector('.newSetInput').style.display === '' || document.querySelector('.newSetInput').style.display === 'none') {
                document.querySelector('.newSetInput').style.display = 'unset'
                document.querySelector('.newSetInput').focus()
            } else {
                document.querySelector('.newSetInput').style.display = 'none'
                if (document.querySelector('.newSetInput').value !== '') {
                    this.sets.push({
                        todo: [],
                        setID: this.lastID + 1,
                        setAlias: document.querySelector('.newSetInput').value
                    })
                    this.lastID = this.lastID + 1
                    document.querySelector('.newSetInput').value = ''
                }
            }
        },
        updateAlias: function(set) {
            set.setAlias = document.getElementsByClassName(this.setID.toString().concat(' setNum')).value
            this.forceDropdownRender()
        },
        forceDropdownRender: function() {
            this.dropdownKey = !this.dropdownKey
        }
    }
})
(function (window) {
	"use strict";

	let filterTodo = {
		all(todos) {
			return todos;
		},
		active(todos) {
			return todos.filter((todo) => !todo.isComplete);
		},
		complete(todos) {
			return todos.filter((todo) => todo.isComplete);
		},
	};

	// 将数据存储本地
	const TODOS_KEY = "todos_vue";
	let todoStorage = {
		get() {
			return JSON.parse(localStorage.getItem(TODOS_KEY)) || [];
		},
		set(todos) {
			localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
		},
	};

	new Vue({
		el: "#todo",
		data: {
			// todoList: [
			// 	{ id: 1, content: "代办1", isComplete: true },
			// 	{ id: 2, content: "代办2", isComplete: false },
			// 	{ id: 3, content: "代办3", isComplete: false },
			// 	{ id: 4, content: "代办4", isComplete: true },
			// ],
			todoList: todoStorage.get(),
			filterType: "all",
			newTodoContent: "",
			editingTodo: null,
			editBeforeContent: "",
		},
		watch: {
			todoList: {
				deep: true,
				handler: todoStorage.set,
			},
		},
		methods: {
			changeStuatus(todo) {
				todo.isComplete = !todo.isComplete;
			},
			removeTodo(todo) {
				let index = this.todoList.indexOf(todo);
				this.todoList.splice(index, 1);
			},
			removeDone() {
				this.todoList = filterTodo.active(this.todoList);
			},
			addTodo() {
				if (this.newTodoContent.trim() === "") return;
				this.todoList.push({
					id:
						this.todoNum === 0
							? 0
							: this.todoList[this.todoList.length - 1].id + 1,
					content: this.newTodoContent,
					isComplete: false,
				});
				this.newTodoContent = "";
			},
			completeAll() {
				if (this.completedNum === 0) {
					this.todoList.forEach((todo) => (todo.isComplete = false));
				} else {
					this.todoList.forEach((todo) => (todo.isComplete = true));
				}
			},
			editTodo(todo) {
				this.editingTodo = todo;
				this.editBeforeContent = todo.content;
			},
			cancelEdit(todo) {
				this.editingTodo = null;
				todo.content = this.editBeforeContent;
			},
			completeEdit(todo) {
				this.editingTodo = null;
				if (todo.content.trim() === "") {
					this.removeTodo(todo);
				} else {
					todo.content = todo.content.trim();
				}
			},
			changeFilterType(type) {
				this.filterType = type;
			},
		},
		computed: {
			filterTodoList() {
				return filterTodo[this.filterType](this.todoList);
			},
			completedNum() {
				return filterTodo.active(this.todoList).length;
			},
			todoNum() {
				return this.todoList.length;
			},
		},
		directives: {
			"todo-focus"(el, binding) {
				// binding.value 是指自定义指令后的表达式
				if (binding.value) {
					el.focus();
				}
			},
		},
	});
})(window);

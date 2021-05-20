import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
	id: number;
	title: string;
	completed: boolean;
}

axios.get(url).then((r) => {
	const todo = r.data as Todo;

	const id = todo.id;
	const title = todo.title;
	const completed = todo.completed;

	console.log(`
        The Todo with ID: ${id}
        Has a title of: ${title}
        Is it finished? ${completed}
    `);
});

class Todo {
    static fetchTodoPromise() {
        return fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Request failed.");
                }
                return response.json();  // Якщо статус успішний, обробляємо json
            })
            .catch(error => console.error("Error:", error));
    }

    static async fetchTodoAsync() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
            if (!response.ok) {
                throw new Error("Request failed.");
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("An error occured: ", error);
            throw error;
        }
    }
}

export default Todo;

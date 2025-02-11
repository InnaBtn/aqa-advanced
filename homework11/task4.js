import DelayedText from "./task1.js";
import Todo from "./Todo.js";
import User from "./User.js";

DelayedText.timeFuction("Some random text.", 2000);

Promise.all([Todo.fetchTodoPromise(), User.fetchUserPromise()])
    .then(data => console.log(data))
    .catch(error => {
        console.error("Error in Promise.all:", error);
    });

Promise.race([Todo.fetchTodoPromise(), User.fetchUserPromise()])
    .then(data => console.log(data))
    .catch(error => {
        console.error("Error in Promise.race:", error);
    });




Promise.all([Todo.fetchTodoAsync(), User.fetchUserAsync()])
    .then(data => console.log(data))
    .catch(error => {
        console.error("Error in Promise.all:", error);
    });

Promise.race([Todo.fetchTodoAsync(), User.fetchUserAsync()])
    .then(data => console.log(data))
    .catch(error => {
        console.error("Error in Promise.race:", error);
    });

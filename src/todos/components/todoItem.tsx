import { ITodo } from '../../models/todos';
import { Button } from '../../shared-components/button/button';


const TodoItem = (props: ITodo) => {
    // id for update later
    const changeTodoStatus = (completed: boolean) => {
        console.log("Before change: ", completed);

        props.completed = (completed) ? false : true;
        
        console.log("After change: ", props.completed);
    }

    // Status for add class
    return (
        <div className={`todo-item ${props.completed ? 'completed' : 'not-completed'}`}>
            <p onDoubleClick={(e) => changeTodoStatus(props.completed)}> {props.title} <span><Button color="danger" text="Delete" /></span></p>
        </div>
    );
}

export default TodoItem;
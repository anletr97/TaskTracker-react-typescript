import React from 'react';
import TodoComponent from '.';
import { ITodo } from '../models/todos'
import { URL } from '../constants/constant'

// State
interface TodoState {
    todos: ITodo[];
}

class Todos extends React.Component<{}, TodoState> {

    constructor(props: any) {
        super(props);
        // Set state
        this.state = {
            todos: [],
        }
    }

    componentDidMount() {
        fetch(URL.API).then((res) => res.json()).then((todos) => {
            this.setState({
                todos
            })
        })
    }

    editTodosProps = () => {

    }

    render() {
        const Todo = TodoComponent;

        return (
            <div className="card-container">
                <div className="card-header">
                    <Todo.Form />
                </div>
                <div className="card-content">
                    {this.state.todos.map((todo) => (
                        <Todo.Item {...todo} />
                    ))}
                </div>
            </div>
        );
    }
}

export default Todos;
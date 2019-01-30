import React from 'react';
import {Todo} from './Todo'

export class TodoList extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const  values = this.props.items;
                const listitems = values.map((item) =>
                    <Todo
                    text={"Task: "+item.text}
                    priority={"Priority: "+item.priority}
                    dueDate={"dueDate: "+item.dueDate} />
                );
         return(<div>{listitems}</div>);


    }

}
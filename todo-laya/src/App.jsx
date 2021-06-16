import * as styles from './App.module.css';
import React, { useState } from 'react';
import TodoList from './components/TodoList/TodoList';
import ColumnContainer from './containers/ColumnContainer/ColumnContainer';
import RowContainer from './containers/RowContainer/RowContainer';
import { removeItemFromArray } from './utils/Utils';

const App = () => {
    const [todoLists, setTodoLists] = useState([]);

    const createTodoListHandler = () => {
        setTodoLists([...todoLists, { id: Math.random().toString() }]);
    };

    const onRemoveList = (todoListId) => {
        setTodoLists(removeItemFromArray(todoLists, todoListId));
    };

    return ( <
        div className = { styles.app } >

        <
        ColumnContainer >
        <
        button title = { '+ Add todo list' }
        className = { styles['todo-list-creation-button'] }
        onClick = { createTodoListHandler } >
        +Add todo list <
        /button> <
        RowContainer flexWrap > {
            todoLists.map((list) => ( <
                TodoList key = { list.id }
                listId = { list.id }
                onRemoveList = { onRemoveList }
                />
            ))
        } < /RowContainer> < /
        ColumnContainer > <
        /div>
    );
};


export default App;
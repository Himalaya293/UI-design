import React, { useState } from 'react';
import InputTextValidation from '../InputTextValidation/InputTextValidation';
import TodoItem from '../TodoItem/TodoItem';
import { formatTitle } from '../../utils/Utils';
import ColumnContainer from '../../containers/ColumnContainer/ColumnContainer';
import { FaTimes } from 'react-icons/fa';
import RowContainer from '../../containers/RowContainer/RowContainer';
import { PropTypes } from 'prop-types';

const TodoList = (props) => {
    const [title, setTitle] = useState('');
    const [items, setItems] = useState([]);
    const [isListCreated, setIsListCreated] = useState(false);

    const onTodoItemCreation = (description) => {
        if (description) {
            setItems([
                ...items,
                {
                    description,
                },
            ]);
        }
    };

    const onListCreation = (text) => {
        if (text) {
            setTitle(formatTitle(text));
            setIsListCreated(true);
        }
    };
    const colors = {
        themeColor: "#4263ec",
        white: "#eee",
        background: "#f4f6fc"
    }
    let list = null;
    let inputTextComponent = ( <
        InputTextValidation placeholder = { '+ Add another card' }
        onValidation = { onListCreation }
        />
    );
    if (isListCreated) {
        list = ( <
                div style = {
                    {
                        flexDirection: "row",
                        justifyContent: "flex-end",
                        backgroundColor: colors.white,
                        margin: 10,
                        padding: 1,
                        borderRadius: 5,

                    }
                } >
                <
                h3 style = {
                    {
                        margin: 19,
                    }
                } > { title } < /h3>  {
                items.map((item) => ( <
                    TodoItem key = { item.description }
                    description = { item.description } >
                    <
                    /TodoItem>
                ))
            } <
            TodoItem editionMode onTodoItemCreation = { onTodoItemCreation } >
            <
            /TodoItem> < /
        div >

    );
    inputTextComponent = null;
}

return ( <
    ColumnContainer addBorder >
    <
    RowContainer justifyContent = { 'flex-end' } >
    <
    button style = {
        { visibility: "hidden" }
    }
    title = { 'Remove todo list' }
    onClick = {
        () => props.onRemoveList(props.listId)
    } >
    <
    FaTimes color = { 'black' }
    /> < /button > <
    /RowContainer>{ list } { inputTextComponent }  < /
    ColumnContainer >
);
};

TodoList.propTypes = {
    listId: PropTypes.string.isRequired,
    onRemoveList: PropTypes.func.isRequired,
};

export default TodoList;
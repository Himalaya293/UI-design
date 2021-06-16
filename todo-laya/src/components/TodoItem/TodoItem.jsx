import PropTypes from 'prop-types';
import React, { useState } from 'react';
import InputTextValidation from '../InputTextValidation/InputTextValidation';
import * as styles from './TodoItem.module.css';

const TodoItem = (props) => {
        const [completed, setCompleted] = useState(false);


        const todoItemTextClass = completed ? styles.line : '';

        const colors = {
            themeColor: "#4263ec",
            white: "#fff",
            background: "#f4f6fc"
        }

        let item = ( <
            div className = { styles['todo-item'] } >
            <
            span className = { todoItemTextClass } > { props.description } < /span>  < /
            div >
        );
        if (props.editionMode) {
            item = ( <
                InputTextValidation placeholder = { '+Add another card' }
                onValidation = { props.onTodoItemCreation }
                /> 
            );
        }

        return ( < div style = {
                {
                    flexDirection: "row",
                    justifyContent: "flex-end",
                    borderRadius: 20,
                    marginVertical: 20,
                    margin: 20

                }
            } > { item } < /div>);
        };

        TodoItem.propTypes = {
            description: PropTypes.string,
            onTodoItemCreation: PropTypes.func,
            editionMode: PropTypes.bool,
        };

        TodoItem.defaultProps = {
            description: '',
            onTodoItemCreation: () => null,
            editionMode: false,
        };

        export default TodoItem;
import React, { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import * as styles from './InputTextValidation.module.css';
import { PropTypes } from 'prop-types';
import RowContainer from '../../containers/RowContainer/RowContainer';

const InputTextValidation = (props) => {
    const [text, setText] = useState('');

    const onValidation = () => {
        setText('');
        return props.onValidation(text);
    };

    const onValidationKeyPress = (event) => {
        if (event.key === 'Enter' || event.key === 13) {
            return onValidation();
        }
    };

    const colors = {
        themeColor: "#4263ec",
        white: "#eee",
        background: "#f4f6fc"
    }

    return (

        <
        RowContainer style = {
            {
                color: colors.themeColor,
                backgroundColor: colors.white,
                justifyContent: "flex-end"
            }
        } >
        <
        label >
        <
        input className = { styles['input-text'] }
        type = 'text'
        placeholder = { props.placeholder }
        onChange = {
            (event) => {
                setText(event.target.value);
                return props.onInputChange;
            }
        }
        onKeyPress = { onValidationKeyPress }
        value = { text }
        /> < /
        label > < button style = {
            { visibility: "hidden" }
        }
        onClick = { onValidation } >
        <
        FaCheck color = 'green' / >
        <
        /button > < /
        RowContainer >
    );
};

InputTextValidation.propTypes = {
    placeholder: PropTypes.string,
    onInputChange: PropTypes.func,
    onValidation: PropTypes.func.isRequired,
};

InputTextValidation.defaultProps = {
    placeholder: '',
    onInputChange: () => null,
};

export default InputTextValidation;
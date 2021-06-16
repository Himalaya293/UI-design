import styled from 'styled-components';
import { PropTypes } from 'prop-types';

const RowContainer = styled.div `
  margin-top: -1%;
  display: flex;
  justify-content: ${(props) => props.justifyContent};
  align-items: left;
  flex-wrap: ${(props) => (props.flexWrap ? 'wrap' : 'nowrap')};
`;


export default RowContainer;
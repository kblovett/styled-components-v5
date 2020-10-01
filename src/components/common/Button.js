import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const sizeStyles = ({ size }) => {
  if (size === 'large') {
    return css`
      padding: 10px;
      border-radius: 5px;
      font-size: 1.5em;
    `;
  } else {
    return css`
      padding: 8px;
      border-radius: 4px;
      font-size: 1em;
    `;
  }
};
const buttonClass = (props) => {
  if (props.secondary) {
    return css`
      color: ${(p) => p.theme.bodyFontColor};
      background: ${(p) => p.theme.secondaryColor};
    `;
  } else {
    return css`
      color: ${(p) => p.theme.bodyFontColor};
      background: ${(p) => p.theme.primaryColor};
    `;
  }
};

const Button = styled.button`
  ${buttonClass};
  ${sizeStyles};
  color: ${(p) => p.theme.bodyFontColor};
  font-weight: bold;
  box-shadow: none;
  border: none;
  width: 100%;
  display: block;
  white-space: none;

  &:disabled {
    background: #eee;
    color: #666;
  }
`;

Button.propTypes = {
  size: PropTypes.string,
  secondary: PropTypes.bool,
};

export { Button };

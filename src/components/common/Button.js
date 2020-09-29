import styled, { css } from 'styled-components';

const Button = styled.button`
  ${(props) =>
    props.secondary
      ? css`
          color: white;
          background: black;
        `
      : css`
          color: black;
          background: #f8049c;
        `}
  ${(props) => {
    if (props.size === 'large') {
      return css`
        background: red;
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
  }}
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

export { Button };

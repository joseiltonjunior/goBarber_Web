import styled from 'styled-components';

export const Container = styled.div`
  background: #373737;
  border-radius: 10px;
  border: 2px solid #373737;
  padding: 16px;
  width: 100%;
  color: #9099a2;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 10px;
  }

  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #f4ede8;

    &::placeholder {
      color: #9099a2;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

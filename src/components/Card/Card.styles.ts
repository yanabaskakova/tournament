import styled from 'styled-components';

export const Card = styled.div`
  border-radius: 4px;
  background-color: #1f1f1f;
  padding: 20px;
`;

export const Text = styled.div`
  font-size: 14px;
  color: #fff;
`;

export const Actions = styled.div`
  margin-top: 8px;
  display: flex;
  & > * {
    margin-right: 8px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

import styled from 'styled-components';

import Button from '../../components/Button';

export const Cards = styled.div`
  display: grid;
  grid-gap: 24px;
  grid-template-columns: repeat(3, 1fr);
`;

export const PageActions = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const Info = styled.div`
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const RetryButton = styled(Button)`
  width: max-content;
`;

export const InfoText = styled.p`
  text-align: center;
  font-size: 14px;
`;

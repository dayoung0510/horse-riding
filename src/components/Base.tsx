import React from 'react';
import styled from 'styled-components';
import Board from 'components/Board';
import Ground from 'components/Ground';

const Div = styled.div`
  background-color: #d6eaf1;
  width: 100vw;
  height: 100vh;
`;
const HalfDiv = styled.div`
  width: 50%;
  height: 100%;
`;
const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

const Base: React.FC = () => {
  return (
    <Div>
      <FlexDiv>
        <HalfDiv>
          <Board />
        </HalfDiv>
        <HalfDiv>
          <Ground />
        </HalfDiv>
      </FlexDiv>
    </Div>
  );
};

export default Base;

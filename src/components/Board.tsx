import React from 'react';
import styled from 'styled-components';
import Participants from 'components/Participants';
import Assets from 'components/Assets';

const TopSection = styled.div`
  width: 100%;
  height: 50%;
  background-color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const BottomSection = styled.div`
  width: 100%;
  height: 50%;
  background-color: gainsboro;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Board: React.FC = () => {
  return (
    <>
      <TopSection>
        <Participants />
      </TopSection>
      <BottomSection>
        <Assets />
      </BottomSection>
    </>
  );
};

export default Board;

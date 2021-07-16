import React, { useContext } from 'react';
import { Title, Div, Line, Btn, GreenTxt, RedTxt } from 'components/styles';
import { GameContext } from 'App/context';

const defaultMoney = 100000;

const Assets: React.FC = () => {
  const { participants } = useContext(GameContext);

  return (
    <>
      <Div>
        <Title>내 지갑</Title>

        {participants.map((person) => {
          const difference = defaultMoney - person.assets;
          return (
            <Line key={person.id}>
              {person.name} {person.assets.toLocaleString('ko-KR')}원 (
              {difference < 0 ? (
                <GreenTxt>+{Math.abs(difference)}원</GreenTxt>
              ) : (
                <>
                  <RedTxt>-{Math.abs(difference)}원</RedTxt>
                </>
              )}
              )
            </Line>
          );
        })}
      </Div>
      <Btn>초기화</Btn>
    </>
  );
};

export default Assets;

import React from 'react';
import { people } from 'App/datas';
import { Title, Div, Line, Btn, GreenTxt, RedTxt } from 'components/styles';

const defaultMoney = 100000;

const Assets: React.FC = () => {
  return (
    <>
      <Div>
        <Title>재산현황</Title>

        {people.map((person) => {
          const difference = defaultMoney - person.assets;
          return (
            <Line key={person.id}>
              {person.name} {person.assets.toLocaleString('ko-KR')}원 (
              {difference <= defaultMoney ? (
                <GreenTxt>+{difference}원</GreenTxt>
              ) : (
                <>
                  <RedTxt>-{difference}원</RedTxt>
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

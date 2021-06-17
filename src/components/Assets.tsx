import React from 'react';
import { people, horses } from 'App/datas';
import { Title, Div, Line, ResetBtn } from 'components/styles';

const Assets: React.FC = () => {
  return (
    <>
      <Div>
        <Title>재산현황</Title>

        {people.map((person) => {
          return (
            <Line>
              {person.name} {person.assets.toLocaleString('ko-KR')}원
            </Line>
          );
        })}
      </Div>
      <ResetBtn>초기화</ResetBtn>
    </>
  );
};

export default Assets;

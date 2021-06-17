import React from 'react';
import { people, horses } from 'App/datas';
import { Title, Div, Line } from 'components/styles';

const Participants: React.FC = () => {
  return (
    <>
      <Div>
        <Title>참가자</Title>

        {people.map((person) => {
          return (
            <Line key={person.id}>
              {person.name}
              <select>
                <option value="">말을 선택하세요</option>
                {horses.map((horse) => {
                  return (
                    <>
                      <option key={horse.id} value={horse.id}>
                        {horse.name}
                      </option>
                    </>
                  );
                })}
              </select>
              <input type="text" placeholder="금액을 입력하세요" required />
            </Line>
          );
        })}
      </Div>
    </>
  );
};

export default Participants;

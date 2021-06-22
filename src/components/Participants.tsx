import React, { useContext } from 'react';
import { people, horses } from 'App/datas';
import { Title, Div, Line, Btn } from 'components/styles';
import { GameContext } from 'App/context';

const Participants: React.FC = () => {
  const { state, setState, SpeedShuffle } = useContext(GameContext);

  console.log(state);
  return (
    <>
      <Div>
        <Title>참가자</Title>

        {people.map((person) => {
          return (
            <Line key={person.id}>
              {person.name}
              <select
                onChange={(e) => {
                  setState((prevState) => ({
                    ...prevState,
                    bettingPerson: person.name,
                    bettingHorse: e.target.value,
                  }));
                }}
              >
                <option value="">말을 선택하세요</option>
                {horses.map((horse) => {
                  return (
                    <>
                      <option key={horse.id} value={horse.name}>
                        {horse.name}
                      </option>
                    </>
                  );
                })}
              </select>
              <input
                placeholder="금액을 입력하세요"
                onChange={(e) => {
                  setState((prevState) => ({
                    ...prevState,
                    bettingMoney: Number(e.target.value),
                  }));
                }}
                required
              />
            </Line>
          );
        })}
        <Btn onClick={() => SpeedShuffle()}>시작</Btn>
      </Div>
    </>
  );
};

export default Participants;

import React, { useContext } from 'react';
import { people, horses } from 'App/datas';
import { Title, Div, Line, Btn } from 'components/styles';
import { GameContext } from 'App/context';

type Type = {
  horse: string;
  person: string;
};

const Participants: React.FC = () => {
  const { state, setState, SpeedShuffle } = useContext(GameContext);

  const betting =
    ({ horse, person }: Type) =>
    () => {
      setState((prevState) => ({
        ...prevState,
        bettingPerson: person,
        bettingHorse: horse,
      }));
    };

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
                  betting({
                    person: person.name,
                    horse: e.target.value,
                  });
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
              <input type="text" placeholder="금액을 입력하세요" required />
            </Line>
          );
        })}
        <Btn onClick={() => SpeedShuffle()}>시작</Btn>
      </Div>
    </>
  );
};

export default Participants;

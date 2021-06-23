import React, { ChangeEvent, useCallback, useContext } from 'react';
import { people, horses } from 'App/datas';
import { Title, Div, Line, Btn } from 'components/styles';
import { GameContext } from 'App/context';

const Participants: React.FC = () => {
  const { setBet, ClickStart } = useContext(GameContext);

  const handleChange = useCallback(
    (idx: number) =>
      (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        setBet((prev) => {
          return [
            ...prev.slice(0, idx),
            {
              ...prev[idx],
              bettingPerson: people[idx].name,
              [name]: value,
            },
            ...prev.slice(idx + 1),
          ];
        });
      },
    [setBet],
  );

  return (
    <>
      <Div>
        <Title>참가자</Title>

        {people.map((person, idx) => {
          return (
            <Line key={idx}>
              {person.name}
              <select onChange={handleChange(idx)} name="bettingHorse">
                <option value="">말을 선택하세요</option>
                {horses.map((horse) => {
                  return (
                    <option key={horse.id} value={horse.id}>
                      {horse.name}
                    </option>
                  );
                })}
              </select>
              <input
                name="bettingMoney"
                placeholder="금액을 입력하세요"
                onChange={handleChange(idx)}
                required
              />
            </Line>
          );
        })}
        <Btn onClick={() => ClickStart()}>시작</Btn>
      </Div>
    </>
  );
};

export default Participants;

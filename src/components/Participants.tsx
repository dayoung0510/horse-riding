import React, { ChangeEvent, useCallback, useContext } from 'react';
import { people, horses } from 'App/datas';
import { Title, Div, Line, Btn } from 'components/styles';
import { GameContext } from 'App/context';

const Participants: React.FC = () => {
  const { bet, setBet, SpeedShuffle } = useContext(GameContext);

  const handleChange = useCallback(
    (idx: number) => (e: ChangeEvent<HTMLSelectElement>) => {
      setBet((prev) => {
        return [
          ...prev.slice(0, idx),
          {
            ...prev[idx],
            bettingHorse: e.target.value,
          },
          ...prev.slice(idx + 1),
        ];
      });
    },
    [setBet],
  );

  console.log('bet', bet);

  return (
    <>
      <Div>
        <Title>참가자</Title>

        {people.map((person, idx) => {
          return (
            <Line key={idx}>
              {person.name}
              <select onChange={handleChange(idx)}>
                <option value="">말을 선택하세요</option>
                {horses.map((horse) => {
                  return (
                    <option key={horse.name} value={horse.name}>
                      {horse.name}
                    </option>
                  );
                })}
              </select>
              <input
                placeholder="금액을 입력하세요"
                onChange={(e) => {
                  // handleChange(idx, { m: Number(e.target.value) });
                  setBet((prevState) => ({
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

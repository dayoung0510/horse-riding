import React, { ChangeEvent, useContext } from 'react';
import { people, horses } from 'App/datas';
import { Title, Div, Line, Btn } from 'components/styles';
import { GameContext, BettingInfoType } from 'App/context';

type A = {
  p: string;
  h: string;
  m: number;
};

const Participants: React.FC = () => {
  const { bet, setBet, SpeedShuffle } = useContext(GameContext);

  const handleChange = (idx: number, { p, h, m }: A): void => {
    setBet((prevState) => {
      return [
        ...prevState.slice(0, idx),
        {
          ...prevState,
          bettingMoney: m,
          bettingPerson: p,
          bettingHorse: h,
        },
        ...prevState.slice(idx + 1, prevState.length),
      ];
    });
  };

  console.log('bet', bet);

  return (
    <>
      <Div>
        <Title>참가자</Title>

        {people.map((person, idx) => {
          return (
            <Line key={idx}>
              {person.name}
              <select
                onChange={(e) =>
                  handleChange(idx, {
                    p: person.name,
                    h: e.target.value,
                    m: 345345,
                  })
                }
              >
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

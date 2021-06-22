import React, { useContext } from 'react';
import { people, horses } from 'App/datas';
import { Title, Div, Line, Btn } from 'components/styles';
import { GameContext } from 'App/context';

const Participants: React.FC = () => {
  const { bet, setBet, SpeedShuffle } = useContext(GameContext);

  const handleChange = (idx: number) => () => {
    // const bettingMap = new Map(bet.map((a) => []));
    setBet((prevState) => [
      {
        ...prevState,
        bettingMoney: 0,
        bettingPerson: '김김김',
        bettingHorse: '쪼랑말',
      },
    ]);
    console.log('!');
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
                  // setBet((prevState) => ({
                  //   ...prevState,
                  //   bettingMoney: Number(e.target.value),
                  // }));
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

import React, { createContext } from 'react';

export type BettingType = {
  bettingPerson: string;
  bettingHorse: string;
  bettingMoney: number;
  speedDistribution: number[];
};

export type GameContextProps = {
  state: BettingType;
  setState: React.Dispatch<React.SetStateAction<BettingType>>;
  speedShuffle: () => void;
};

export const defaultValues = {
  bettingPerson: '',
  bettingHorse: '',
  bettingMoney: 0,
  speedDistribution: [],
};

export const GameContext = createContext<GameContextProps>({
  state: defaultValues,
  setState: () => {},
  speedShuffle: () => {},
});

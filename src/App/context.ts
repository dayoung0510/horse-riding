import React, { createContext } from 'react';

export type BettingType = [
  {
    bettingPerson: string;
    bettingHorse: string;
    bettingMoney: number;
  },
  {
    bettingPerson: string;
    bettingHorse: string;
    bettingMoney: number;
  },
  {
    bettingPerson: string;
    bettingHorse: string;
    bettingMoney: number;
  },
];

export type GameStateType = {
  speedDistribution: number[];
  isOngoing: boolean;
};

export type GameContextProps = {
  bet: BettingType;
  setBet: React.Dispatch<React.SetStateAction<BettingType>>;
  state: GameStateType;
  setState: React.Dispatch<React.SetStateAction<GameStateType>>;
  SpeedShuffle: () => void;
  position: number;
  setPosition: (position: number) => void;
};

export const defaultValues = {
  speedDistribution: [],
  isOngoing: false,
};

export const bettingValues = {
  bettingPerson: '',
  bettingHorse: '',
  bettingMoney: 0,
};

export const GameContext = createContext<GameContextProps>({
  bet: [
    {
      bettingPerson: '',
      bettingHorse: '',
      bettingMoney: 0,
    },
    {
      bettingPerson: '',
      bettingHorse: '',
      bettingMoney: 0,
    },
    {
      bettingPerson: '',
      bettingHorse: '',
      bettingMoney: 0,
    },
  ],
  setBet: () => {},
  state: defaultValues,
  setState: () => {},
  SpeedShuffle: () => {},
  position: 0,
  setPosition: () => {},
});

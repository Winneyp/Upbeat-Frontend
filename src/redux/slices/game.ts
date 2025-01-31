import { GameInfo } from "../../model/game";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

const initialState: GameInfo = {
  config: {
    m: 0, 
    n: 0,
    initPlanMin: 0,
    initPlanSec: 0,
    initBudget: 0,
    initCenterDep: 0,
    planRevMin: 0,
    planRevSec: 0,
    revCost: 0,
    maxDep: 0,
    interestPct: 0,
  },
  players: {
    list: [],
    turn: 0,
  },
  gameMap: {
    regions: [],
  },
  // gameState: {
  //   isBegin: false,
  //   isOver: false,
  //   isPaused: false,
  //   turnCount: 0,
  // }
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
      setGameInfo: (state , action: PayloadAction<GameInfo>) => {
          state.config = action.payload.config;
          state.players = action.payload.players;
          state.gameMap = action.payload.gameMap;
      },
  },
});

export const {setGameInfo} = gameSlice.actions;
export const selectGame = (state: RootState) => state.game
export default gameSlice.reducer;
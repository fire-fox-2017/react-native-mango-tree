import {
  GAME_START,
} from './constants'

export const gameStart = (data) => {
  return {
    type: GAME_START,
    data
  }
}

import * as actionType from './constants'

export const newTree = (details) => ({
  type: actionType.NEW_TREE,
  details,
})

export const growTree = (tree) => ({
  type: actionType.GROW_TREE,
  tree,
})

export const harvestTree = (tree) => ({
  type: actionType.HARVEST_TREE,
  tree,
})
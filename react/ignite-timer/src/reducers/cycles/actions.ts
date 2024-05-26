import { Cycle } from '../../@types/global'

export enum CyclesActionsTypes {
  addNewCycle = 'ADD_NEW_CYCLE',
  markCurrentCycleAsFinished = 'MARK_CURRENT_CYCLE_AS_FINISHED',
  interruptCurrentCycle = 'INTERRUPT_CURRENT_CYCLE',
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: CyclesActionsTypes.addNewCycle,
    payload: { data: newCycle },
  }
}

export function markCurrentCycleAsFinishedAction() {
  return { type: CyclesActionsTypes.markCurrentCycleAsFinished }
}

export function interruptCurrentCycleAction() {
  return { type: CyclesActionsTypes.interruptCurrentCycle }
}

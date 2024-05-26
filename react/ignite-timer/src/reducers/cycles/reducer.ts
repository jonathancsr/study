import { produce } from "immer";
import { Cycle } from "../../@types/global";
import { CyclesActionsTypes } from "./actions";

type CyclesState = {
  cycles: Cycle[];
  activeCycleId: string | null;
};

export function cyclesReducer(state: CyclesState, action: any) {
  switch (action.type) {
    case CyclesActionsTypes.addNewCycle:
      return produce(state, (draft) => {
        draft.cycles.push(action.payload.data);
        draft.activeCycleId = action.payload.data.id;
      });
    case CyclesActionsTypes.markCurrentCycleAsFinished: {
      const currentCycleIndex = state.cycles.findIndex(
        (cycle) => cycle.id === state.activeCycleId
      );

      if (currentCycleIndex < 0) return state;
      return produce(state, (draft) => {
        draft.activeCycleId = null;
        draft.cycles[currentCycleIndex].finishedDate = new Date();
      });
    }
    case CyclesActionsTypes.interruptCurrentCycle: {
      const currentCycleIndex = state.cycles.findIndex(
        (cycle) => cycle.id === state.activeCycleId
      );

      if (currentCycleIndex < 0) return state;
      return produce(state, (draft) => {
        draft.activeCycleId = null;
        draft.cycles[currentCycleIndex].interruptedDate = new Date();
      });
    }
    default:
      return state;
  }
}

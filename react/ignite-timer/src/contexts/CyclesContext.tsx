import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { Cycle } from "../@types/global";
type CreateCycleData = {
  task: string;
  minutesAmount: number;
};

type CyclesContextType = {
  cycles: Cycle[];
  activeCycle: Cycle | undefined;
  activeCycleId: string | null;
  amountSecondsPassed: number;
  markCurrentCycleAsFinished: () => void;
  setSecondsPassed: (seconds: number) => void;
  createNewCycle: (data: CreateCycleData) => void;
  interruptCurrentCycle: () => void;
};

export const CyclesContext = createContext({} as CyclesContextType);

type CyclesState = {
  cycles: Cycle[];
  activeCycleId: string | null;
};

const cycleActions = {
  addNewCycle: "ADD_NEW_CYCLE",
  markCurrentCycleAsFinished: "MARK_CURRENT_CYCLE_AS_FINISHED",
  interruptCurrentCycle: "INTERRUPT_CURRENT_CYCLE",
};

export function CyclesContextProvider({
  children,
}: {
  children: React.ReactElement;
}) {
  const [cyclesState, dispatch] = useReducer(
    (state: CyclesState, action: any) => {
      switch (action.type) {
        case cycleActions.addNewCycle:
          return {
            ...state,
            cycles: [...state.cycles, action.payload.data],
            activeCycleId: action.payload.data.id,
          };
        case cycleActions.markCurrentCycleAsFinished:
          return {
            ...state,
            activeCycleId: null,
            cycles: state.cycles.map((cycle) => {
              if (cycle.id === state.activeCycleId) {
                return { ...cycle, finishedDate: new Date() };
              } else {
                return cycle;
              }
            }),
          };
        case cycleActions.interruptCurrentCycle:
          return {
            ...state,
            activeCycleId: null,
            cycles: state.cycles.map((cycle) => {
              if (cycle.id === state.activeCycleId) {
                return { ...cycle, interruptedDate: new Date() };
              } else {
                return cycle;
              }
            }),
          };
        default:
          return state;
      }
    },
    {
      cycles: [],
      activeCycleId: null,
    },
    (state) => {
      const savedCycles = localStorage.getItem("cycles");
      if (savedCycles !== null) {
        return { ...state, cycles: JSON.parse(savedCycles) };
      }
      return state;
    }
  );

  const { cycles, activeCycleId } = cyclesState;
  const [amountSecondsPassed, setAmountSecondsPassed] = useState<number>(0);

  const activeCycle = cycles.find((c) => c.id === activeCycleId);

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds);
  }

  function createNewCycle(data: CreateCycleData) {
    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    };

    dispatch({ type: cycleActions.addNewCycle, payload: { data: newCycle } });
    setAmountSecondsPassed(0);
  }

  function interruptCurrentCycle() {
    dispatch({ type: cycleActions.interruptCurrentCycle });
  }

  function markCurrentCycleAsFinished() {
    dispatch({ type: cycleActions.markCurrentCycleAsFinished });
  }

  useEffect(() => {
    localStorage.setItem("cycles", JSON.stringify(cycles));
  }, [cycles]);

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        amountSecondsPassed,
        markCurrentCycleAsFinished,
        setSecondsPassed,
        createNewCycle,
        interruptCurrentCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  );
}

export function useCyclesContext() {
  const values = useContext(CyclesContext);

  return { ...values };
}

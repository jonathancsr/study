import { useFormContext } from "react-hook-form";
import { useCyclesContext } from "../../../../contexts/CyclesContext";
import { FormContainer, MinutesAmountInput, TaskInput } from "./styles";

export function NewCycleForm() {
  const { register } = useFormContext();
  const { activeCycle } = useCyclesContext();
  return (
    <FormContainer>
      <label htmlFor="">I will work on</label>
      <TaskInput
        id="task"
        type="text"
        placeholder="Give a name for you work"
        disabled={!!activeCycle}
        {...register("task")}
      />

      <label htmlFor="">during</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={0}
        min={0}
        disabled={!!activeCycle}
        {...register("minutesAmount", { valueAsNumber: true })}
      />
      <label htmlFor="">minutes.</label>
    </FormContainer>
  );
}

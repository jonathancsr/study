import { zodResolver } from "@hookform/resolvers/zod";
import { Play } from "phosphor-react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from "./styles";

const newCycleFormValidationSchema = z.object({
  task: z.string().min(1, "Insert the task name"),
  minutesAmount: z.number().min(5),
});

type NewCycleFormData = z.infer<typeof newCycleFormValidationSchema>;

export default function Home() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: "",
      minutesAmount: 0,
    },
  });

  const task = watch("task");
  const isSubmitDisabled = !task;

  function handleCreateNewCycle(data: NewCycleFormData) {
    console.log(data);
    reset();
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} action="">
        <FormContainer>
          <label htmlFor="">I will work on</label>
          <TaskInput
            id="task"
            type="text"
            placeholder="Give a name for you work"
            {...register("task")}
          />

          <label htmlFor="">during</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={0}
            {...register("minutesAmount", { valueAsNumber: true })}
          />
          <label htmlFor="">minutes.</label>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>
        <StartCountdownButton disabled={isSubmitDisabled} type="submit">
          <Play size={24} /> Start
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}

import { Play } from "phosphor-react";
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from "./styles";

export default function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="">I will work on</label>
          <TaskInput type="text" id="task" placeholder="name" />
          <label htmlFor="">during</label>
          <MinutesAmountInput type="number" id="minutesAmount" />
          <label htmlFor="">minutes.</label>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>
        <StartCountdownButton type="submit">
          <Play size={24} /> Start
        </StartCountdownButton>
      </form>
    </HomeContainer>
  );
}

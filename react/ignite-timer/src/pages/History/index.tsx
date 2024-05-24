import { HistoryContainer, HistoryList, Status } from "./styles";

export default function History() {
  return (
    <HistoryContainer>
      <h1>My History</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duration</th>
              <th>Start</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Teste</td>
              <td>20 minutes</td>
              <td>Há 2 dias</td>
              <td>
                <Status status="green">Done</Status>
              </td>
            </tr>
            <tr>
              <td>Teste</td>
              <td>20 minutes</td>
              <td>Há 2 dias</td>
              <td>
                <Status status="red">Suspended</Status>
              </td>
            </tr>
            <tr>
              <td>Teste</td>
              <td>20 minutes</td>
              <td>Há 2 dias</td>
              <td>
                <Status status="yellow">In Progress</Status>
              </td>
            </tr>
            <tr>
              <td>Teste</td>
              <td>20 minutes</td>
              <td>Há 2 dias</td>
              <td>
                <Status status="yellow">In Progress</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  );
}

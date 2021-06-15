type State = {
  channel: string | null | undefined;
}

type ChatContext = [
  State,
  Dispatch<ActionTypes>
]

interface CheckInAction {
  type: 'checkIn';
  payload: string;
}

interface CheckOutAction {
    type: 'checkOut';
    payload?: null;
}

type ActionTypes = CheckInAction | CheckOutAction

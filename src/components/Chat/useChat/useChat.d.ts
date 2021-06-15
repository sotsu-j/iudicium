 interface channel {
    id: string;
    name: string;
}

type State = {
  channel: channel | null | undefined;
}

type ChatContext = [
  State,
  Dispatch<ActionTypes>
]

interface CheckInAction {
  type: 'checkIn';
  payload: channel;
}

interface CheckOutAction {
    type: 'checkOut';
    payload?: null;
}

type ActionTypes = CheckInAction | CheckOutAction
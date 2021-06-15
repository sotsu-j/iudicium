type State = {
  channel: string | null | undefined;
}

interface CheckInAction {
  type: 'checkIn';
  payload: string;
}

interface CheckOutAction {
    type: 'checkOut';
    payload?: null;
}

type ActionTypes = CheckInAction | CheckOutAction

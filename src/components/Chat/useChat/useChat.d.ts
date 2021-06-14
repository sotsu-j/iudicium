type State = {
  channel: string | null;
}

interface CheckInAction {
  type: 'checkIn';
  payload: string;
}

interface CheckOutAction {
    type: 'checkOut';
    payload?: null;
}

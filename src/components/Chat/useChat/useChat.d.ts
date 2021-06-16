interface Channel {
  id: string;
  name: string;
}

interface Message {
  id: string;
  message: string;
  user: User;
  timestamp: number;
}

type User = {
  id: string;
  name: string;
  photoURL: string;
}

type State = {
  user: User | null | undefined;
  channel: Channel | null | undefined;
}

type ChatContext = [
  State,
  Dispatch<ActionTypes>
]

type payload = Channel & string & User | null

interface SetActiveUser {
  type: 'setActiveUser';
  payload: payload;
}

interface CheckInAction {
  type: 'checkIn';
  payload: payload;
}

interface CheckOutAction {
    type: 'checkOut';
    payload?: null;
}

interface SendMessageAction {
    type: 'sendMessage';
    payload: payload;
}

type ActionTypes = SetActiveUser | CheckInAction | CheckOutAction | SendMessageAction
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
  tabID: string | null;
}

type ChatContext = [
  State,
  Dispatch<ActionTypes>
]

type payload = Channel & string & User | null

type ActionTypes =
  {
    type: 'setActive';
    payload: payload;
  } | {
    type: 'inActive';
    payload?: null;
  } | {
    type: 'checkIn';
    payload: payload;
  } | {
    type: 'checkOut';
    payload?: null;
  } | {
    type: 'sendMessage';
    payload: payload;
  }

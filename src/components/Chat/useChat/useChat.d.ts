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
  sessionID: string | null;
}

type ChatContext = [
  State,
  Dispatch<ActionTypes>
]

type Payload = Channel & string & User | null | undefined

type ActionTypes =
  {
    type: 'setActive';
    payload: Payload;
  } | {
    type: 'inActive';
    payload?: null;
  } | {
    type: 'checkIn';
    payload: Payload;
  } | {
    type: 'checkOut';
    payload?: null;
  } | {
    type: 'sendMessage';
    payload: Payload;
  }

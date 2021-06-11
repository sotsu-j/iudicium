## データベース構造 at Realtime database

{
    users: {
        [id]: {
            name: str
            connected: {
                [channel_id]: bool
            }
        }
    }
    channels: {
        [id]: {
            name: str
            private: bool
            members: {
                [id]: {
                    name
                }
            }
            messages: {
                [id] {
                    message: str
                    user: str
                    timestamp: int
                }
            }
        }
    }
}
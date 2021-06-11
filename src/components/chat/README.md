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
            last_update: int
            members: {
                [id]: {
                    name
                }
            }
        }
    }
    messages: {
        [channel_id] {
            [id]: {
                message: str
                user: str
                timestamp: int
                reactions: {
                    [user_id]: {
                        name: str
                        reaction: str
                    }
                }
            }
        }
    }
}
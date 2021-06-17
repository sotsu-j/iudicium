## データベース構造 at Realtime database

{
    users: {
        [id]: {
            name: str
            photoURL: str
            status: {
                isActive: bool
                description: str
            }
            contacts: { 
                [uuser_id]: bool
            }
            connectedChannels: {
                [channel_id]: {
                    [tab_id_token]: bool
                }
            }
        }
    }
    channels: {
        [id]: {
            name: str
            private: bool
            updatedAt: int
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
                user: {
                    id: str
                    name: str
                }
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
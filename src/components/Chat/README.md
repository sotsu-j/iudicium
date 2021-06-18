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
        }
    }
    sessions: {
        [id]: {
            user: [user{id, name, photoURL}]
            connectedChannnelID: [channnel_id] | null
        }
    }
    channels: {
        [id]: {
            name: str
            private: bool
            updatedAt: int
            members: {
                [user_id]: bool
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
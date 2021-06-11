import { useState, useEffect } from 'react'

import firebase from '../../Firebase'

const SelectChannel = () => {
    const [channels, setChannels] = useState([])
    const database = firebase.database()

    useEffect(() => {
            database.ref(`channels`).on('value', (snapshot) => {
                const data = snapshot.val()
                setChannels(data)
            })
                //.get().then((snapshot) => console.log(snapshot.val()))
    }, [])

    console.log(channels)
    return (
        <div>test</div>
    )
}

export default SelectChannel
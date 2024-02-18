import { combineReducers } from "redux"

const songReducer = () => {
    return[
        {
            title: 'Aayat',
            duration: '4:05'
        },
        {
            title: 'Nights',
            duration: '4:35'
        },
        {
            title: 'Good things fall apart',
            duration: '5:05'
        },
        {
            title: 'Lover',
            duration: '4:45'
        }
    ]
}

const selectedSongReducer = (selectedSong = null,action) => {
    if (action.type=="SONG_SELECTED"){
        return action.payload
    }

    return selectedSong;
}

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
})
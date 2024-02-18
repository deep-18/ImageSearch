import React, { Fragment } from "react";
import selectSong from "../actions";
import SongList from "./SongList";
import SongDetail from "./SongDetail";

const Index = () => {
    return(
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <SongList />
                </div>
                <div className="column eight wide">
                    <SongDetail />
                </div>
            </div>
        </div>
    )
}

export default Index;
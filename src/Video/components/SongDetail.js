import React, { Fragment } from "react";
import { connect } from "react-redux";

const SongDetail = (props)=> {
    if(!props.song){
        return(
            <div>Select a song</div>
        )
    }
    return(
        <Fragment>
            <div>Song Details</div>
            <div>
                <div><label>Name </label>{props.song.title}</div>
                <div><label>Time:  </label>{props.song.duration}</div>
            </div>
            {/* <div>{props.song}</div> */}
        </Fragment>
    )
}

const mapStateToProps = (state) => {
    return {song:state.selectedSong}
}

export default connect(mapStateToProps)(SongDetail);
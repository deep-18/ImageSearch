import React, { Fragment } from "react";
import Header from "./Header";

const Landing = () => {
    let auth = true;
    return(
        <Fragment>
            <Header isAuth={auth}/>
            <div className="hero">
                <h1>Burger World For You</h1>
            </div>
        </Fragment>
    )
}

export default Landing;
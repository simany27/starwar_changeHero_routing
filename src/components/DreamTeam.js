import React from 'react';
import {friends} from "../utils/Constants";
import Friend from "./Friend";

const DreamTeam = (props) => {

    return (
        <section className="float-right w-50 row no-gutters border">
            <h2 className="col-12 text-center">Dream Team</h2>
            {friends.filter(item => item !== props.hero)
                .map((item, index) => <Friend picture={item} key={index} pos={index + 1}/>)}
        </section>
    );
};

export default DreamTeam;
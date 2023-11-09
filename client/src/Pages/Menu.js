import React, {useContext} from 'react';
import SinglePageUserData from "./SinglePage/SinglePageUserData";
import {AuthContext} from '../context/AuthContext'

const Menu = () => {
    const {userId} = useContext(AuthContext)

    return (
        <div>
            <SinglePageUserData userId={userId}/>
        </div>
    );
};

export default Menu;
import React from 'react';

const Privateroute = ({ children }) => {
    const token = localStorage.getItem("token");

    if (!token) {
        return alert("You are not logged in!")
       }

    return children
}

export default Privateroute;

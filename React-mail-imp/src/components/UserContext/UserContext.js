import React, { useState, createContext } from "react";

export const UserContext = createContext();

export const UserProvider = (props) => {

    const [users, setUsers] = useState([
        { name: "Jack Nowak", message: "Aldus PageMaker including versions of Loreum Ipsum" },
        { name: "Facebook", message: "Many Desktop Publishing Packages and web page editors" },
        { name: "Mailchip", message: "There are many variations of passages of Loreum Ipsum" },
        { name: "Alex T.", message: "Loreum Ipsum dolor noretek imit set" },
        { name: "Monica Ryther", message: "The Standard chunk of Loreum Ipsum" },
        { name: "Sandra Derick", message: "Contrary to popular belief" },
        { name: "Patrick Pertners", message: "If you are going to use a passage of Lorem" },
        { name: "Michael Fox", message: "Humour, or non-characteristic words etc." },
        { name: "Damien Ritz", message: "Oor Lorem Ipsum is that it has a more-or-less normal." },
        { name: "Anna Smith", message: "Lorem Ipsum dolor noretek imit set." },
        { name: "Jack Nowak", message: "Aldus Pagemaker including versions of Lorem Ipsum" },

    ]);

    return ( <
        UserContext.Provider value = {
            [users, setUsers] } > { props.children } <
        /UserContext.Provider>
    );
};
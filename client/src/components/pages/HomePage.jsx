import React, {useEffect, useState} from "react";
// import MentorCard from "../MentorCard";
import Main from "../Main";
import Header from "../Header";
import Footer from "../Footer";
import {Link} from "react-router-dom";


export default function HomePage({port}) {
    const [mentors, setMentors] = useState([]);
    console.log(port);
    useEffect(() => {
        fetch(`http://localhost:${port}/teachers`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setMentors(data);
            })
            .catch((error) => {
                console.error("error fatching data: ", error);
            });
    }, [])

    return(
        <div>
            <Header />
            <Main teachersList={mentors}/>
            <Footer/>
            {/*<MentorCard mentorsList={mentors}/>*/}

        {/*    add your components here :) */}
        </div>
    )
}
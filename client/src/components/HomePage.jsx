import React, {useEffect, useState} from "react";
import MentorCard from "./MentorCard";


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
            <MentorCard mentorsList={mentors}/>

        {/*    add your components here :) */}
        </div>
    )
}
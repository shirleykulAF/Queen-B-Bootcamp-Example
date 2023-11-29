import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import MentorCard from "./MentorCard";
import axios from "axios";
import ImageList from "@mui/material/ImageList";
const port = process.env.PORT || 5001;

function AllMentors(){
    const [allMentors, setAllMentors] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:${port}/students`)
            .then(response => setAllMentors(response.data))
            .catch(error => console.error(`There was an error retrieving the message: ${error}`))
    }, [])

    return (
        <>
            <ImageList rowHeight={400} gap={20} cols={3}>
                {allMentors?.map((item) => (
                    <MentorCard key={item.id} mentor={item} />
                ))}
            </ImageList>

        </>
        );
}


export default AllMentors;
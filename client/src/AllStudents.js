import React, {useEffect, useState} from "react";
import {Link} from 'react-router-dom';
import MentorCard from "./MentorCard";
import axios from "axios";
import ImageList from "@mui/material/ImageList";
const port = process.env.PORT || 5001;

function AllStudents(){
    const [allMentors, setMentors] = useState(null);

    useEffect(() => {
        axios.get(`http://localhost:${port}/students`)
            .then(response => setMentors(response.data))
            .catch(error => console.error(`There was an error retrieving the message: ${error}`))
    }, [])

    return (
        <>
            <ImageList rowHeight={400} gap={20} cols={4}>
                {allMentors?.map((item) => (
                    <MentorCard key={item.id} student={item} />
                ))}
            </ImageList>

            <Link to="/students/:id">
                    <button>View</button>
                </Link>
        </>
        );
}


export default AllStudents;
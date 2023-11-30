import React, {useEffect, useState} from "react";
import MentorCard from "./MentorCard";
import axios from "axios";
import ImageList from "@mui/material/ImageList";
import NavbarSearch from "./NavbarSearch";


function AllMentors(){
    const [allMentors, setAllMentors] = useState(null);
    const [filteredMentors, setFilteredMentors] = useState(null);

    useEffect(() => {
        axios.get(`/api/mentors`)
            .then(response => {
                setAllMentors(response.data);
                setFilteredMentors(response.data);
            })
            .catch(error => console.error(`There was an error retrieving the message: ${error}`))
    }, [])

    return (
        <>
            <NavbarSearch setFilteredMentors={setFilteredMentors} OriginalMentors={allMentors} />
            <ImageList style={{marginTop: "60px"}} rowHeight={400} gap={20} cols={3}>
                {filteredMentors?.map((item) => (
                    <MentorCard key={item.id} mentor={item} />
                ))}
            </ImageList>

        </>
    );
}


export default AllMentors;
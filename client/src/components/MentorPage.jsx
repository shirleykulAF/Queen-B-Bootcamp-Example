import React, {useEffect, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {type} from "@testing-library/user-event/dist/type";
import {Button} from "react-bootstrap";



export default function MentorPage({port}) {
    const [mentorData, setMentorData] = useState(null);
    const [id, setId] = useState(0);
    const location = useLocation();
    const check_null = location.state === null;
    let {from} = (check_null === true) ? null : location.state;

    useEffect(() => {
        setId(from);
        console.log("from: ", from, typeof (from))
        console.log("id: ", id, typeof (id))
    }, [check_null, from]);

    // useEffect(() => {
    //     fetch(`http://localhost:${port}/teachers/:${from}`)
    //         .then(response => {
    //              return response.json()
    //         })
    //         .then(data => {
    //             setMentorData(data);
    //         })
    //         .catch((error) => {
    //             console.error("error fatching data: ", error);
    //         });
    // }, [])
    useEffect(() => {
        console.log('Fetching data from:', `http://localhost:${port}/teachers/${id}`);
        fetch(`http://localhost:${port}/teachers/${from}`)
            .then(response => response.json())
            .then(data => {
                setMentorData(JSON.stringify(data));
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, [from, port]);

    console.log(mentorData.type)
    return(
        <div>
            {(from == null) ? (<h1>the mentor is not exist</h1> ):
                (<div>
                    <h1>this is the mentor page!</h1>
                    <h4>mentor data: {mentorData}</h4>
                    <h4>mentor data type: {typeof (mentorData)}</h4>
                    <h4>mentor id: {id}</h4>
                </div>)
            }
            <Link style={{fontSize: '2rem'}} to="/">To Home Page</Link>
            {/*    add your components here :) */}
        </div>
    )
}
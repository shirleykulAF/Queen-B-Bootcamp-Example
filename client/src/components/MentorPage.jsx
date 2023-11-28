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

    console.log(port);
    useEffect(() => {
        // setId(from);
        // console.log(id);
        // console.log(`http://localhost:${port}/teachers/:${id}`)
        fetch(`http://localhost:${port}/teachers/:${from}`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setMentorData(data);
                console.log(data);
            })
            .catch((error) => {
                console.error("error fatching data: ", error);
            });
    }, [])

    return(
        <div>
            {(id == 0) ? (<h1>the mentor is not exist</h1> ):
                (<div>
                    <h1>this is the mentor page!</h1>
                    <h4>mentor data: {mentorData}</h4>
                    <h4>mentor id: {id}</h4>
                </div>)
            }
            <Link style={{fontSize: '2rem'}} to="/">To Home Page</Link>
            {/*    add your components here :) */}
        </div>
    )
}
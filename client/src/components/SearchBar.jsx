import React from "react";
import Col from 'react-bootstrap/Col';
import {useEffect, useState} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "./Card";
import {Link} from "react-router-dom";


function SearchBar({teachers}) {

    // const [mentors, setMentors] = useState([]);
    // console.log(port);
    // useEffect(() => {
    //     fetch(http://localhost:${port}/teachers)
    // .then(response => {
    //         return response.json()
    //     })
    //         .then(data => {
    //             setMentors(data);
    //         })
    //         .catch((error) => {
    //             console.error("error fatching data: ", error);
    //         });
    // }, [])
    // // const MentorsInfo = [{name: "Noa", profession: "HTML", img: person1}, {name: "Agam", profession: "JAVA", img: person2}, {name: "Noga", profession: "Python", img: person3}, {name: "Ninet", profession: "JavaScript", img: person4}, {name: "Noa", profession: "HTML", img: person5}, {name: "Agam", profession: "JAVA", img: person6}, {name: "Noga", profession: "Python", img: person7}, {name: "Ninet", profession: "JavaScript", img: person4}, {name: "Noa", profession: "HTML", img: person1}, {name: "Agam", profession: "JAVA", img: person2}, {name: "Noga", profession: "Python", img: person3}, {name: "Ninet", profession: "JavaScript", img: person4}, {name: "Noa", profession: "HTML", img: person5}, {name: "Agam", profession: "JAVA", img: person6}, {name: "Noga", profession: "Python", img: person7}, {name: "Ninet", profession: "JavaScript", img: person4}]
    const [SearchTerm, SetSearchTerm] = useState('')
    return (
        <Container>
            <input
                type="text"
                placeholder="Search.."
                onChange={(event)=>{ SetSearchTerm(event.target.value); }}
            />

            <Row style={{flexWrap: "wrap"}}>
                {teachers.filter((value) => {
                    if (typeof value == 'string') {
                        if(SearchTerm === ""){
                            return value;
                        }else { if(value.name.toLowerCase().includes(SearchTerm.toLocaleLowerCase())){
                            return value;
                        }
                        else if(value.profession.toLowerCase().includes(SearchTerm.toLocaleLowerCase())){
                            return value;
                        }
                        }
                    }

                }).map(teacher =>
                        <Link to="../teachers" state={{from: teacher.id}}>
                            <li className={`teacher ${teacher.soldOut ? "unavalible" : ""}`}>
                                <img src={teacher.photoName} alt={teacher.name} />
                                <div>
                                    <h3>{teacher.name}</h3>
                                    <h4>{teacher.ingredients}</h4>
                                    <p>📍{teacher.location}</p>
                                    <span>
                                        {teacher.soldOut ? "Currently Unavailable" : teacher.price}
                                    </span>
                                </div>
                            </li>


                            {/*<Card teacherObj={teacher} key={teacher.id} />*/}
                        </Link>
                    // <Container style={{border: 3, borderColor: "black", background: "#FFE5D9", width: "28%", borderRadius: 10, padding: "0.5rem", margin: "0.5rem", display: "flex", justifyContent: "center"}}>
                    //     {/*<Col xs={6} md={4} style={{display: "flex", flexDirection: "column", alignItems: "center"}}>*/}
                    //     {/*    /!*<img src={mentor.image} rounded={true} height={'100rem'} width={'100rem'} style={{background: "#f8edeb", padding: "0.5rem"}} />*!/*/}
                    //     {/*    /!*<h3>{mentor.name}</h3>*!/*/}
                    //     {/*    /!*<h4>{mentor.profession}</h4>*!/*/}
                    //     {/*    */}
                    //     {/*</Col>*/}
                    // </Container>
                )}

            </Row>
        </Container>
    );
}

export default SearchBar;
// export default function SearchBar(){
//
//     return(
//         <div>
//
//         </div>
//     )
// }
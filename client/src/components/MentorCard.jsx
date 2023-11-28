import Col from 'react-bootstrap/Col';
import {useEffect, useState} from "react";
// import axios from "axios";
// import {response} from "express";
import Container from 'react-bootstrap/Container';
// import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
// import person1 from '../images/person1.svg';
// import person2 from '../images/person2.svg';
// import person3 from '../images/person3.svg';
// import person4 from '../images/person4.svg';
// import person5 from '../images/person5.svg';
// import person6 from '../images/person6.svg';
// import person7 from '../images/person7.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import MentorPage from "./MentorPage";



function MentorCard({mentorsList}) {

    // const [mentors, setMentors] = useState([]);
    // console.log(port);
    // useEffect(() => {
    //     fetch(`http://localhost:${port}/teachers`)
    //         .then(response => {
    //             return response.json()
    //         })
    //         .then(data => {
    //             setMentors(data);
    //         })
    //         .catch((error) => {
    //             console.error("error fatching data: ", error);
    //         });
    // }, [])
    // const MentorsInfo = [{name: "Noa", profession: "HTML", img: person1}, {name: "Agam", profession: "JAVA", img: person2}, {name: "Noga", profession: "Python", img: person3}, {name: "Ninet", profession: "JavaScript", img: person4}, {name: "Noa", profession: "HTML", img: person5}, {name: "Agam", profession: "JAVA", img: person6}, {name: "Noga", profession: "Python", img: person7}, {name: "Ninet", profession: "JavaScript", img: person4}, {name: "Noa", profession: "HTML", img: person1}, {name: "Agam", profession: "JAVA", img: person2}, {name: "Noga", profession: "Python", img: person3}, {name: "Ninet", profession: "JavaScript", img: person4}, {name: "Noa", profession: "HTML", img: person5}, {name: "Agam", profession: "JAVA", img: person6}, {name: "Noga", profession: "Python", img: person7}, {name: "Ninet", profession: "JavaScript", img: person4}]
    return (

        <Container>
            <Row style={{flexWrap: "wrap"}}>
                {mentorsList.map(mentor =>
                    <Link to="../teachers" state={{from: mentor.id}}>
                    <Container style={{border: 3, borderColor: "black", background: "#FFE5D9", width: "28%", borderRadius: 10, padding: "0.5rem", margin: "0.5rem", display: "flex", justifyContent: "center"}}>
                        <Col xs={6} md={4} style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                            {/*<Image src={mentor.img} rounded={true} height={'100rem'} width={'100rem'} style={{background: "#f8edeb", padding: "0.5rem"}} />*/}
                            <h3>{mentor.name}</h3>
                            <h4>{mentor.profession}</h4>
                        </Col>
                    </Container>
                    </Link>
                )}

            </Row>
        </Container>
    );
}

export default MentorCard;
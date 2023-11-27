import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import person1 from '../images/person1.svg';
import person2 from '../images/person2.svg';
import person3 from '../images/person3.svg';
import person4 from '../images/person4.svg';
import person5 from '../images/person5.svg';
import person6 from '../images/person6.svg';
import person7 from '../images/person7.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useState} from "react";
import axios from "axios";


function MentorCard() {
    const [mentors, setMentors] = useState('');
    console.log("mentors: " + mentors)
    const url = window.location.href;
    console.log(url)

    // useEffect(() => {
    //     console.log('1'+mentors)
    //     axios.get(`${url}teachers`)
    //         .then(response => setMentors(response.data))
    //         .catch(error => console.error(`There was an error retrieving the message: ${error}`))
    // }, [])
    const MentorsInfo = [{name: "Noa", profession: "HTML", img: person1}, {name: "Agam", profession: "JAVA", img: person2}, {name: "Noga", profession: "Python", img: person3}, {name: "Ninet", profession: "JavaScript", img: person4}, {name: "Noa", profession: "HTML", img: person5}, {name: "Agam", profession: "JAVA", img: person6}, {name: "Noga", profession: "Python", img: person7}, {name: "Ninet", profession: "JavaScript", img: person4}, {name: "Noa", profession: "HTML", img: person1}, {name: "Agam", profession: "JAVA", img: person2}, {name: "Noga", profession: "Python", img: person3}, {name: "Ninet", profession: "JavaScript", img: person4}, {name: "Noa", profession: "HTML", img: person5}, {name: "Agam", profession: "JAVA", img: person6}, {name: "Noga", profession: "Python", img: person7}, {name: "Ninet", profession: "JavaScript", img: person4}]
    // const MentorsInfo = [{name: "Noa", profession: "HTML", img: person1}]
    console.log("mentors: " + mentors)
    return (
        <Container>
            <Row style={{flexWrap: "wrap"}}>
                {MentorsInfo.map(mentor =>
                    <Container style={{border: 3, borderColor: "black", background: "#FFE5D9", width: "28%", borderRadius: 10, padding: "0.5rem", margin: "0.5rem", display: "flex", justifyContent: "center"}}>
                        <Col xs={6} md={4} style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                            <Image src={mentor.img} rounded={true} height={'100rem'} width={'100rem'} style={{background: "#f8edeb", padding: "0.5rem"}} />
                            <h3>{mentor.name}</h3>
                            <h4>{mentor.profession}</h4>
                        </Col>
                    </Container>
                )}

            </Row>
        </Container>
    );
}

export default MentorCard;
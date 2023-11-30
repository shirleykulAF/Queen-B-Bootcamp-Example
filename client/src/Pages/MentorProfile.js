import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import React, {useEffect, useState} from 'react';
import axios from "axios";
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import { TiSocialGithub, TiSocialLinkedin} from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { useParams } from 'react-router-dom';
import NavbarSearch from "./NavbarSearch";


function MentorProfile(){
    const [Mentor, setMentor] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`/api/mentors/${id}`)
            .then(response => setMentor(response.data))
            .catch(error => console.error(`There was an error retrieving the message: ${error}`))
    }, [id])

    return (
        <div className="vh-100" >
            <NavbarSearch />

            <MDBContainer className="container py-5 h-100">
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol md="12" xl="4">
                        <MDBCard style={{ borderRadius: '15px' }}>
                            <MDBCardBody className="text-center">
                                <div className="mt-3 mb-4">
                                    <MDBCardImage src={Mentor ? require('../images/'+Mentor?.img) : ''}
                                                  className="rounded-circle" fluid style={{ width: '75px' }} />
                                </div>
                                <MDBTypography tag="h4">{Mentor?.name}</MDBTypography>
                                <MDBCardText className="text-muted mb-4">
                                    {Mentor?.interest} <span className="mx-2">|</span> Student @ TAU
                                </MDBCardText>
                                <p>{Mentor?.about}</p>
                                <div className="mb-4 pb-2">
                                    <a href={Mentor?.github} target="_blank" rel="noopener noreferrer">
                                        <TiSocialGithub size={37} />
                                    </a>
                                    <a href={Mentor?.linkedin} target="_blank" rel="noopener noreferrer">
                                        <TiSocialLinkedin size={37} />
                                    </a>
                                    <a href={"https://wa.me/"+Mentor?.phone} target="_blank" rel="noopener noreferrer">
                                        <FaWhatsapp size={30} />
                                    </a>
                                    <> </>
                                    <a href={"mailto:"+Mentor?.gmail} target="_blank" rel="noopener noreferrer">
                                        <SiGmail size={30}/>
                                    </a>
                                </div>
                                <MDBBtn rounded size="lg">
                                    Message now
                                </MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
}

export default MentorProfile;
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import firstPerson from './images/person1.svg';
import { TiSocialGithub, TiSocialLinkedin} from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import QueenbLogo from './images/QueenbLogo.png;

function StudentProfile(){
    return (
        <div className="vh-100" style={{ backgroundColor: 'pink' }}>
            <MDBContainer className="container py-5 h-100">
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol md="12" xl="4">
                        <MDBCard style={{ borderRadius: '15px' }}>
                            <MDBCardBody className="text-center">
                                <div className="mt-3 mb-4">
                                    <MDBCardImage src={firstPerson}
                                                  className="rounded-circle" fluid style={{ width: '100px' }} />
                                </div>
                                <MDBTypography tag="h4">Julie L. Arsenault</MDBTypography>
                                <MDBCardText className="text-muted mb-4">
                                    Computer Science <span className="mx-2">|</span> Student @ TAU
                                </MDBCardText>
                                <div className="mb-4 pb-2">
                                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                        <TiSocialGithub size={37} />
                                    </a>
                                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                        <TiSocialLinkedin size={37} />
                                    </a>
                                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                        <FaWhatsapp size={30} />
                                    </a>
                                    <> </>
                                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                        <SiGmail size={30}/>
                                    </a>
                                </div>
                                <MDBBtn rounded size="lg">
                                    Message now
                                </MDBBtn>
                                <div className="d-flex justify-content-between text-center mt-5 mb-2">
                                    <div>
                                        <MDBCardText className="mb-1 h5">8471</MDBCardText>
                                        <MDBCardText className="small text-muted mb-0">Wallets Balance</MDBCardText>
                                    </div>
                                    <div className="px-3">
                                        <MDBCardText className="mb-1 h5">8512</MDBCardText>
                                        <MDBCardText className="small text-muted mb-0">Followers</MDBCardText>
                                    </div>
                                    <div>
                                        <MDBCardText className="mb-1 h5">4751</MDBCardText>
                                        <MDBCardText className="small text-muted mb-0">Total Transactions</MDBCardText>
                                    </div>
                                </div>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <img alt={} src={QueenbLogo}/>
        </div>
    );
}

export default StudentProfile;
import * as React from 'react';
import { Link } from 'react-router-dom';
import { CCard, CCardImage, CCardTitle, CCardBody, CCardText, CButton } from '@coreui/react';

export default function MentorCard({mentor}) {
    document.body.style.backgroundColor = "#FABEBD4D";

    return (
        <CCard style={{ width: '18rem', marginLeft: '100px' }}>
            <CCardImage orientation="top" src={require('../images/'+mentor?.img)} width={288} height={162} style={{ backgroundColor: "#FABEBD4D"}}/>
            <CCardBody>
                <CCardTitle>{mentor?.name}</CCardTitle>
                <CCardText>
                    {mentor?.interest}
                </CCardText>
                <Link to={`/mentors/${mentor?.id}`} key={mentor?.id}>
                    <CButton style={{ backgroundColor: "darkgrey"}}>See Profile and More!</CButton>
                </Link>

            </CCardBody>
        </CCard>
    );
}

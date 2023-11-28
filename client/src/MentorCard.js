import * as React from 'react';
import { Link } from 'react-router-dom';
import { CCard, CCardImage, CCardTitle, CCardBody, CCardText, CButton } from '@coreui/react';

export default function MentorCard({student}) {
    document.body.style.backgroundColor = "#FABEBD";

    return (
    <CCard style={{ width: '18rem', marginLeft: '30px' }}>
        <CCardImage orientation="top" src={require('./images/'+student?.img)} width={288} height={162} style={{ backgroundColor: "#FABEBD4D"}}/>
        <CCardBody>
            <CCardTitle>{student?.title}</CCardTitle>
            <CCardText>
                {student?.author}
            </CCardText>
            <Link to="/students/:id" key={student?.id}>
                <CButton>Go somewhere</CButton>
            </Link>

        </CCardBody>
    </CCard>
    );
}

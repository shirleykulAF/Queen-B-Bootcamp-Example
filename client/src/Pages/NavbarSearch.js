import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import QueenbLogo from "../images/QueenbLogo.png";
import React, {useState} from "react";

function NavbarSearch({ setFilteredMentors, OriginalMentors }) {
    const [searchQuery, setSearchQuery] = useState("");

    const handleInputChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handleSearch = () => {
        searchQuery === "" ? setFilteredMentors(OriginalMentors) :
        setFilteredMentors(OriginalMentors.filter(mentor =>
            mentor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            mentor.interest.toLowerCase().includes(searchQuery.toLowerCase())
        ));
    };

    return (
        <Navbar expand="lg" style={{ backgroundColor: "#FABEBD"}}>
            <Container fluid>
                <Navbar.Brand href="https://queenb.org.il/" target="_blank" rel="noopener noreferrer"><img src={QueenbLogo} width={90} height={50}/></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/" style={{fontWeight: "bold"}}>Home</Nav.Link>
                        <Nav.Link href="/mentors" style={{fontWeight: "bold"}}>All Mentors</Nav.Link>
                        <Nav.Link href="/about" style={{fontWeight: "bold"}}>About us :)</Nav.Link>
                        <Nav.Link style={{fontWeight: "bold"}} disabled={true}>Coming Soon!</Nav.Link>

                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            value={searchQuery}
                            onChange={handleInputChange}
                        />
                        <Button style={{ backgroundColor: "darkgrey"}} onClick={handleSearch}>Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarSearch;
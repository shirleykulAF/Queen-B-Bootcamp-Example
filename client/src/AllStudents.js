import React from "react";
import {BrowserRouter as Router, BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import StudentProfile from "./StudentProfile";

function AllStudents(){
    return (
        <>
            <>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/products">Products</Link>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<AllStudentsContent />} />
                    <Route path=":id" element={<StudentProfile />} />
                </Routes>

                <Link to="/products/1">
                    <button>View</button>
                </Link>
            </>
        </>
        );
}

function AllStudentsContent() {
    return (
        <div>
            {/* Your content for AllStudents goes here */}
        </div>
    );
}

export default AllStudents;
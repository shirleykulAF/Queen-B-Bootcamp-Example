import React from "react";
// import teachersData from "../teachers.js";
import Card from "./Card.jsx";
import {Link} from "react-router-dom";

export default function Main({teachersList}) {
  // const teachers = teachersData;
  const numTeachers = teachersList.length;

  return (
    <main className="main">
      <h2>Our teachers:</h2>

      {numTeachers > 0 ? (
        <>
          <p>
            view our amazing teachers, each with their own unique style, for
            more details click on the teacher.
          </p>

          <ul className="teachers">
            {teachersList.map((teacher) => (
                <Link to="../teachers" state={{from: teacher.id}}>
                  <Card teacherObj={teacher} key={teacher.id} />
                </Link>
            ))}
          </ul>
        </>
      ) : (
        <p>We're still recruiting. Please come back later :)</p>
      )}
    </main>
  );
}

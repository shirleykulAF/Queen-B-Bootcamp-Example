

import React from "react";
import "./MiniMentor.css";
import person1 from '../../images/person1.svg';
import person2 from '../../images/person2.svg';
import person3 from '../../images/person3.svg';
import person4 from '../../images/person4.svg';
import person5 from '../../images/person5.svg';
import person6 from '../../images/person6.svg';
import person7 from '../../images/person7.svg';

const imageMapper={
  person1,
  person2,
  person3,
  person4,
  person5,
  person6,
  person7,
}

function MiniMentor({users}){
  
  const miniCardArray = users.map?.(user=>
    <a className="link-MiniMentor" href={`mentor/${user.id}`}>
    <div className="MiniMentor" key={user.id}>
      <img className="img-MiniMentor" src={imageMapper[user.image]} alt= {user.image}/>
      <h1 className="h1-MiniMentor">{user.name}</h1>
      <p className="p-MiniMentor">{user.skill}</p>
    </div>
    </a>
  )
  return(
  <div className="grid">
  {miniCardArray}
  </div>
  );
}

export default MiniMentor;


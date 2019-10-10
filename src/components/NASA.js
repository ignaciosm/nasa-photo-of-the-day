import React, { useEffect, useState } from "react";
import axios from "axios";
import "./NASA.css";
import { Button, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import styled from 'styled-components'

const Title = styled.h1 `
  color: blue;
`;

const Mynav = styled.nav `
  width: 100% !important;
`;

const Imgtitle = styled.h2 `
  font-size: 20px;
  font-weight: bold;

  &:hover {
  ${props => (props.type === "hovered" ? `background: black; color: white` : null )}
  }
`;

export default function NASA() {

// date variables for random
let randomDays = Math.random()*365;
let today = new Date();
let showDate = new Date();
showDate.setDate( today.getDate() - randomDays);

let dateDropdownArray = [];
for(let i = 0; i < 365; i++) {
  let dateDropdown = new Date();
  dateDropdown.setDate(dateDropdown.getDate()-i);
  // console.log('test', dateDropdown);
  dateDropdownArray.push(dateDropdown.toISOString().substr(0, 10))
}

console.log('test', dateDropdownArray);


const [image, setImage] = useState({ 
  date: '',
  explanation: '',
  hdurl: '',
  media_type: 'image',
  service_version: '',
  title: '',
  url: ''
});

const [day, setDay] = useState(today.toISOString().substr(0, 10));
// console.log('day:', day);
// console.log('random # of days', randomDays);
// console.log('today ', showDate.toISOString().substr(0, 10));

useEffect(() => {
  axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=GuAFz5FsJdXMVKqEmLqlmcb3Pv9RW19JNcDovlG9&date=${day}`)
    .then(response => {
      console.log("NASA:", response.data);
      setImage(response.data);
      // console.log(image);
    })
    .catch(error => {
      console.log("The data was not returned", error);
    });
}, [day]);

return (
<>
<Mynav>
  
  <Navbar color="light" light expand="md">
    <NavbarBrand href="/"><Title>🚀NASA's photo of the day</Title></NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink>
            <Button color="warning" onClick={() => setDay(showDate.toISOString().substr(0, 10))}>Random Image</Button>
          </NavLink>
        </NavItem>
      </Nav>
  </Navbar>
  
  
  {/* <form id="dropdown">
    <select id="selectNumber">
      <option>Choose a number</option>
    </select>
  </form> */}

</Mynav>
<div class='container'>
  
  <Card>
    <CardImg top width="100%" src={image.url} alt={image.title} />
    <CardBody>
      <Imgtitle type="hovered">{image.title}</Imgtitle>
      <CardText>{image.explanation}</CardText>
      <CardSubtitle>{image.date}</CardSubtitle>
    </CardBody>
  </Card>
 
  
</div>
</>
);
}
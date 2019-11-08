import React, {useState} from 'react';
import { Card, CardTitle, CardText, CardImgOverlay, CardColumns, Collapse, Button, } from 'reactstrap';
import './StarWars.css';

const PersonCard = props => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen (!isOpen);

    return (
        <div className="person-data" key={props.id}> 
        <Button color="warning" onClick={toggle} style={{ marginBottom: '1rem'}}>See Here</Button>
        <Collapse isOpen={isOpen}>
         <CardColumns>
       <Card body inverse color="warning">
        <CardImgOverlay>
        
        <div className="cardInfo">
        <CardTitle>Name:{props.name}</CardTitle>
        <CardText>Hair Color:{props.hairColor}</CardText>
        <CardText> Birth Year:{props.birthYear}</CardText>
        </div>
        
       
      </CardImgOverlay>
      </Card>
      </CardColumns>
      </Collapse>
        </div>
      );
}
export default PersonCard;

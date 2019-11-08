import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

const PageTitle = (props) => {
    return (
      <div>
        <Jumbotron fluid>
          <Container fluid>
            <h1 className="display-3">Star React Warz</h1>
            <p className="lead">"Computers make excellent and efficient servants, but I have no wish to serve under them." -- Spock</p>
          </Container>
        </Jumbotron>
      </div>
    );
  };
  
  export default PageTitle;
import React from 'react';
import { Container, Header, Card, Image } from 'semantic-ui-react';

import './app.css';




function App() {
  const [photo, setPhoto] = React.useState();

  React.useEffect(() => {
    const fetchRandomPhoto = async () => {
      const response = await fetch("./.netlify/functions/images");
      if (response.ok) {
        const photo = await response.json();
        setPhoto(photo);
      }
    };
    fetchRandomPhoto();
  }, []);
  return (
    <div className="App">
      {
        photo &&
        <Container >
          <Header as='h1'>ASTROLabPix</Header>
          <Card centered >
            <Image alt={photo.alt_description} src={photo.url} circular wrapped ui={false}  />
            <Card.Content>
              <Card.Header as='h3'>{photo.title}</Card.Header>
              <Card.Meta>
                <span className='date'>{photo.date}</span>
              </Card.Meta>
              <Card.Header as='h3'>
                {photo.explanation}
              </Card.Header>
            </Card.Content>
          </Card>
        </Container>
      }
    </div>
  );
}

export default App;

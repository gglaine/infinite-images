import React from 'react';
import { Container, Grid, Header, Divider, Image } from 'semantic-ui-react';

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

      <React.Fragment>
        <React.Fragment>
          <Container className='apptitle'>
            <Header as='h1'>ASTROPIX</Header>
            <Header sub >NASA's Astronomy Picture Of The Day</Header>
            <span className='date'>{photo.date}</span>
            <Divider />
          </Container>
        </React.Fragment>

        <React.Fragment>

          <Grid stackable padded columns={2}>
            <Grid.Column>
              <Header as='h3'>{photo.title}</Header>

              <Image alt={photo.alt_description} src={photo.url} fluid />
              <div className='copyright'>{photo.copyright}</div>
            </Grid.Column>
            <Grid.Column>



                {photo.explanation}



            </Grid.Column>
          </Grid>
        </React.Fragment>
      </React.Fragment>
      }
    </div>
  );
}

export default App;

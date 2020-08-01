import React from 'react';


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
      {photo && <img alt={photo.alt_description} src={photo.url} />}
    </div>
  );
}

export default App;

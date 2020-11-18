import React from 'react';
import SpotLight from './SpotLight';


const ArtworksSpotLight = props => {
  if (!props.artworkId) return

  const itemInSpotlight = props.artworks.find(
    artwork => artwork._id === props.artworkId
  );

  const label = itemInSpotlight && itemInSpotlight.title;
  const imgUrl = `imgs/artworks/${itemInSpotlight && itemInSpotlight._id}.jpg`;
  return (
    <SpotLight {...{label, imgUrl}} imgBigSize={ true } />
  );
}

export default ArtworksSpotLight;
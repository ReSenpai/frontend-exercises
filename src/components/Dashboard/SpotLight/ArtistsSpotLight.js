import React from 'react';
import SpotLight from './SpotLight';


const ArtistsSpotLight = props => {
  const selectedItemsId = props.match.params && props.match.params.itemId;
  if (!selectedItemsId) {
    return null;
  }

  const itemInSpotlight = props.artists.find(
    artist => artist._id === selectedItemsId
  );

  const label = itemInSpotlight && `${itemInSpotlight.firstName} ${itemInSpotlight.lastName}`;
  const imgUrl = `imgs/artists/${itemInSpotlight && itemInSpotlight._id}.png`;
  
    return (
      <SpotLight {...{label, imgUrl}} />
    );
}

export default ArtistsSpotLight;
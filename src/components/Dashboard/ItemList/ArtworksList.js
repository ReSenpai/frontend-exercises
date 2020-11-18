import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classname from 'classnames';

import styles from "./styles.module.css";

const ArtworksList = props => {

  const [activeId, setId] = useState(0);
  const setCurrentArtworkId = (itemId) => {
    props.setCurrentArtworkId(itemId)
    setId(itemId);
  }

  return props.artworks.map(artwork => (
      <NavLink
        key={artwork._id}
        to={`/artworks`}
        className={classname({
          [styles['active-items-row']] : activeId === artwork._id,
        }, styles['items-row'])}
        onClick={ () => setCurrentArtworkId(artwork._id) }
      >
        <div
          className={ styles['items-avatar'] }
          style={{
            backgroundImage: `url(/imgs/artworks/${artwork._id}.jpg)`
          }}
        />
        <span>{artwork.title}</span>
      </NavLink>
  ));
}

export default ArtworksList;
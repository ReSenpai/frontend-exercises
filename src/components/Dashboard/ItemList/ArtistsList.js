import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from "./styles.module.css";

const ArtistsList = props => {
  return props.artists.map(artist => (
      <NavLink
        key={artist._id}
        to={`/artists/${artist._id}`}
        className={styles['items-row']}
        activeClassName={styles['active-items-row']}
      >
        <div
          className={styles['items-avatar']}
          style={{
            backgroundImage: `url(/imgs/artists/${artist._id}.png)`
          }}
        />
        <span>{`${artist.firstName} ${artist.lastName}`}</span>
      </NavLink>
  ));
}

export default ArtistsList;
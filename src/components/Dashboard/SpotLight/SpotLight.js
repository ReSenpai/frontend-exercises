import React from 'react';

import styles from "./styles.module.css";

const SpotLight = props => {
    return (
      <div className={styles['spotlight']}>
        <div
          className={ props.imgBigSize ? styles['spotlight-img-bigsize'] : styles['spotlight-img']}
          style={{
            backgroundImage: `url(${props.imgUrl})`
          }}
        />
        <div className={styles['spotlight-label']}>{props.label}</div>
      </div>
    );
}

export default SpotLight;
import React from "react";
import { withRouter } from "react-router";
import ArtworksList from "./ItemList/ArtworksList";
import ArtistsList from "./ItemList/ArtistsList";
import ArtistsSpotLight from "./SpotLight/ArtistsSpotLight";
import ArtworksSpotLight from "./SpotLight/ArtworksSpotLight";

import styles from "./styles.module.css";

class Dashboard extends React.Component {
  render() {
    return (
      <div className={styles['dashboard']}>
        <div>
          <h3 className={styles['header']}>{ this.props.children }</h3>
            { this.props.artworkId
              ? <ArtworksList {...this.props}/>
              :  <ArtistsList {...this.props} />}
        </div>
          { this.props.artworkId
            ? <ArtworksSpotLight {...this.props} />
            : <ArtistsSpotLight {...this.props} />
          }
      </div>
    );
  }
}

export default withRouter(Dashboard);

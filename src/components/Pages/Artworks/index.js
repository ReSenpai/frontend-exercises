import React from "react";
import { connect } from "react-redux";
import Dashboard from "../../Dashboard";
import { setCurrentArtworkId } from '../../../redux/actions/notes';

import NavBar from "../../NavBar";

// consider this data arrived from the API
// <donotmodify>
const artworks = [
  { _id: "1", title: "In the event of sinking" },
  { _id: "2", title: "Refugees in a nutshell" },
  { _id: "3", title: "Solidarity" },
  { _id: "4", title: "The rehearsal" }
];
// </donotmodify>


const ArtworksPage = props => {
  return (
    <div>
      <NavBar />
      <Dashboard 
        artworks={ artworks } 
        {...props} >Artworks</Dashboard>
    </div>
  )
}

const mapStateToProps = (state) => ({
  artworkId: state.notesPage.artworkId
})

export default connect(mapStateToProps, {
  setCurrentArtworkId
})(ArtworksPage);
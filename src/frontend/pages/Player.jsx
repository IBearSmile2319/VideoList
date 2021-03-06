import NotFount from "./NotFount";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getVideoSource } from "../actions";
import '@css/components/Player.css'
import { useEffect } from "react";
const Player = (props) => {
    const { id } = props.match.params;
  const hasPlaying = Object.keys(props.playing).length > 0;
  useEffect(() => {
    props.getVideoSource(id);
  }, []);
    return !hasPlaying ? <NotFount /> :(
        <div className="Player">
        <video controls autoPlay>
          <source src={props.playing.source} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>
        <div className="Player-back">
          <button type="button" onClick={() => props.history.goBack()}>
            Regresar
          </button>
        </div>
      </div>
    )
}
Player.propTypes = {
    getVideoSource: PropTypes.func,
  };
  
  const mapStateToProps = state => {
    return {
      playing: state.playing,
    };
  };
  
  const mapDispatchToProps = {
    getVideoSource,
  };

export default connect(mapStateToProps, mapDispatchToProps)(Player)

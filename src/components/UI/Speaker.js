
import { onPlayAudio, onTextToSpeech } from 'helper/speaker.helper';
import useSpeaker from 'hooks/useSpeaker';
import PropTypes from 'prop-types';
import React from 'react';

import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';

function Speaker(props) {
  const { className, type, text, audioSrc, isWrap } = props;

  const { voice, speed, volume } = useSpeaker();

  const handleClick = () => {
    if (type) {
      onTextToSpeech(text, voice, speed, volume);
    } else {
      onPlayAudio(audioSrc);
    }
  };

  return (
    <>
      {isWrap ? (
        <div onClick={handleClick}>{props.children}</div>
      ) : (
        <RecordVoiceOverIcon
          className={`dyno-speaker ${className}`}
          onClick={handleClick}
          fontSizeLarge
        />
      )}
    </>
  );
}

Speaker.propTypes = {
  audioSrc: PropTypes.any,
  className: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.bool, // type = false: play audio, true: play text
  isWrap: PropTypes.bool,
  children: PropTypes.any,
};

Speaker.defaultProps = {
  audioSrc: '',
  className: '',
  text: '',
  type: true,
  isWrap: false,
};

export default Speaker;

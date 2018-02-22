import React from 'react';
import T from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Feather } from '@expo/vector-icons';
import { durationToStr } from '../../utils/dateHelper';
import { Icon, RootSpinner, Slider } from '../';
import styles from './styles';
import { colors, dimensions } from '../../styles';

const AudioPlayerView = ({
  title,
  isPlaying,
  position,
  duration,
  isLoading,
  onTogglePlaying,
  onCompleteSliding,
  onStartSliding,
}) => {
  if (isLoading) {
    return (
      <View style={styles.container}>
        <RootSpinner color={colors.white} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={onTogglePlaying}
      >
        <Icon
          size={28}
          IconSet={Feather}
          iconName={isPlaying ? 'pause' : 'play'}
          iconStyle={styles.playIcon}
          color={colors.white}
        />
      </TouchableOpacity>

      <View style={styles.mainContainer}>
        <Text style={styles.titleText}> {title} </Text>
        <View style={styles.sliderContainer}>
          <Slider
            disabled={isLoading}
            value={position}
            maximumValue={duration}
            onSlidingComplete={onCompleteSliding}
            onValueChange={onStartSliding}
            onSlidingStart={onStartSliding}
            width={dimensions.width / 1.35}
            thumbSize={18}
          />

          <Text style={styles.duration}>
            {durationToStr(position > duration ? 0 : position)}
          </Text>
        </View>
      </View>
    </View>
  );
};

AudioPlayerView.propTypes = {
  title: T.string,
  isPlaying: T.bool,
  position: T.number,
  duration: T.number,
  isLoading: T.bool,
  onTogglePlaying: T.func,
  onCompleteSliding: T.func,
  onStartSliding: T.func,
};

export default AudioPlayerView;

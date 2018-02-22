import React from 'react';
import T from 'prop-types';
import { Text, TouchableHighlight, View } from 'react-native';
import { compose, withHandlers, withProps, onlyUpdateForKeys } from 'recompose';
import moment from 'moment';
import SwipeOut from 'react-native-swipeout';
import { Feather } from '@expo/vector-icons';
import { Icon } from '../../../../components';
import { globalStyles } from '../../../../styles';
import { durationToStr } from '../../../../utils/dateHelper';
import { calendars } from '../../../../constants';
import s from './styles';

const AudioItem = ({
  item,
  onPress,
  isPlaying,
  removeAudio,
}) => {
  const {
    id,
    title,
    recordDate,
    duration,
  } = item;

  const Item = (
    <TouchableHighlight
      onPress={() => onPress && onPress()}
    >
      <View
        style={[
          globalStyles.withWhiteBackground,
          s.container,
        ]}
      >
        <View
          style={[
            globalStyles.alignedRow,
          ]}
        >
          <View style={s.left}>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={[s.title]}
            >
              {title}
            </Text>

            {!isPlaying &&
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={[s.dateText, s.secondaryText]}
            >
              {moment(recordDate).calendar(null, calendars.recordDate)}
            </Text>}
          </View>

          <View style={[s.right]}>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={[s.durationText, s.secondaryText]}
            >
              {durationToStr(duration)}
            </Text>

            <Icon
              size={28}
              IconSet={Feather}
              iconName={isPlaying ? 'stop-circle' : 'play'}
              iconStyle={s.playIcon}
              color="#00a086"
            />
          </View>

        </View>
      </View>
    </TouchableHighlight>
  );

  if (removeAudio) {
    return (
      <SwipeOut
        right={[
          {
            text: 'Delete',
            onPress: () => removeAudio(id),
            type: 'delete',
          },
        ]}
      >
        {Item}
      </SwipeOut>
    );
  }

  return Item;
};

AudioItem.propTypes = {
  item: T.object,
  onPress: T.func,
  isPlaying: T.bool,
  removeAudio: T.func,
};

const enhancer = compose(
  withProps(props => ({
    isPlaying: (props.playingAudioId === props.item.id),
  })),
  withHandlers({
    onPress: props => () => {
      props.stopPlayingAudio();
      if (!props.isPlaying) props.playAudio(props.item);
    },
  }),
  onlyUpdateForKeys(['isPlaying']),
);


export default enhancer(AudioItem);

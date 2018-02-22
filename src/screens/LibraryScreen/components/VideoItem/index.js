import React from 'react';
import T from 'prop-types';
import { Text, TouchableHighlight, View } from 'react-native';
import moment from 'moment';
import { Entypo } from '@expo/vector-icons';
import { Icon } from '../../../../components';
import { globalStyles } from '../../../../styles';
import { durationToStr } from '../../../../utils/dateHelper';
import { calendars } from '../../../../constants';
import s from './styles';

const VideoItem = ({
  item,
  onPress,
}) => {
  const {
    title,
    recordDate,
    duration,
  } = item;

  return (
    <TouchableHighlight
      onPress={() => onPress && onPress(item)}
      style={[
        globalStyles.withWhiteBackground,
        s.container,
      ]}
    >
      <View style={[
          globalStyles.withWhiteBackground,
          s.contentContainer,
        ]}
      >
        <View style={s.header}>
          <Icon
            size={70}
            IconSet={Entypo}
            iconName="video"
            color="#00a086"
          />
        </View>

        <View style={[globalStyles.alignedRow, s.footer]} >
          <View style={s.left}>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={[s.title]}
            >
              {title}
            </Text>

            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={[s.dateText, s.secondaryText]}
            >
              {moment(recordDate).calendar(null, calendars.recordDate)}
            </Text>
          </View>

          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={[s.durationText, s.secondaryText, s.right]}
          >
            {durationToStr(duration)}
          </Text>
        </View>

      </View>
    </TouchableHighlight>
  );
};

VideoItem.propTypes = {
  item: T.object,
  onPress: T.func,
};

export default VideoItem;

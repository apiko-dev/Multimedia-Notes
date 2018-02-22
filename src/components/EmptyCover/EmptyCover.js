import React from 'react';
import T from 'prop-types';
import {
  StyleSheet,
  Text,
  View,
  ViewPropTypes,
  Dimensions,
  Button,
} from 'react-native';
import { globalStyles, colors, fontSizes } from '../../styles';

const { height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 32,
    flexGrow: 1,
  },
  title: {
    color: colors.empty.title,
    fontSize: fontSizes.big,
    fontWeight: '700',
    textAlign: 'center',
  },
  center: {
    marginTop: (height - 180) / 2,
  },
  caption: {
    marginTop: 8,
    color: colors.empty.caption,
    fontSize: fontSizes.medium,
    textAlign: 'center',
  },
});

const EmptyCover = (props) => {
  const {
    containerStyle,
    title,
    titleStyle,
    caption,
    captionStyle,
    center = false,
    buttonTitle,
    onPress,
    icon,
  } = props;

  return (
    <View
      style={[
        styles.container,
        globalStyles.fillAll,
        containerStyle,
        globalStyles.withWhiteBackground,
      ]}
    >
      {icon && icon}
      <Text style={[styles.title, center && styles.center, titleStyle]}>
        {title}
      </Text>
      {caption && (
        <Text style={[styles.caption, captionStyle]}>
          {caption}
        </Text>
      )}
      {buttonTitle && (
        <Button
          title={buttonTitle}
          onPress={onPress}
        />
      )}
    </View>
  );
};

EmptyCover.propTypes = {
  containerStyle: ViewPropTypes.style,
  captionStyle: Text.propTypes.style,
  titleStyle: Text.propTypes.style,
  title: T.string,
  caption: T.string,
  center: T.bool,
  buttonTitle: T.string,
  onPress: T.func,
  icon: T.func,
};

export default EmptyCover;

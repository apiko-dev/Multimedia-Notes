import React from 'react';
import T from 'prop-types';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Button } from 'react-native-elements';
import { Ionicons, MaterialIcons } from '@expo/vector-icons/index';
import { Icon } from '../../components';
import { durationToStr } from '../../utils/dateHelper';
import s from './styles';
import { colors } from '../../styles';

const RecordAudioScreen = ({
  isRecording,
  durationMillis,
  isDoneRecording,
  onStartRecording,
  onEndRecording,
  onSubmit,
  audioName,
  setAudioName,
  onCancelSave,
}) => {
  if (isDoneRecording) {
    return (
      <View style={s.inputContainer}>
        <TouchableOpacity
          onPress={onCancelSave}
          style={s.cancelCross}
        >
          <Icon
            size={36}
            color={colors.red}
            IconSet={Ionicons}
            iconName="md-close"
          />
        </TouchableOpacity>

        <TextInput
          style={s.inputStyle}
          placeholder="Give a name for your audio"
          value={audioName}
          onChangeText={setAudioName}
          underlineColorAndroid={colors.transparent}
          autoCorrect={false}
          onSubmitEditing={onSubmit}
          returnKeyType="done"
          autoFocus
        />

        <Button
          textStyle={s.submitText}
          buttonStyle={s.submitButton}
          title="Continue"
          onPress={onSubmit}
          disabled={!audioName}
        />
      </View>
    );
  } else if (isRecording) {
    return (
      <View style={s.container}>

        <View style={s.durationContainer}>
          <Text style={s.recordingText}>Recording Audio</Text>
          <Text style={s.durationText}>
            {durationToStr(durationMillis)}
          </Text>
        </View>

        <TouchableOpacity
          style={[s.recordButton, s.recordingBackground]}
          onPress={onEndRecording}
        >
          <Icon
            size={100}
            color={colors.audio.recording}
            IconSet={MaterialIcons}
            iconName="stop"
            iconStyle={[s.recordIcon]}
          />
        </TouchableOpacity>

      </View>
    );
  }

  return (
    <View style={s.container}>
      <TouchableOpacity
        style={[s.recordButton, s.startRecordButton]}
        onPress={onStartRecording}
      >
        <Icon
          size={50}
          color={colors.audio.startRecordingIcon}
          IconSet={MaterialIcons}
          iconName="keyboard-voice"
          iconStyle={[s.recordIcon]}
        />
      </TouchableOpacity>
    </View>
  );
};

RecordAudioScreen.navigationOptions = () => ({
  header: null,
});

RecordAudioScreen.propTypes = {
  isRecording: T.bool,
  durationMillis: T.number,
  isDoneRecording: T.bool,
  onStartRecording: T.func,
  onEndRecording: T.func,
  onSubmit: T.func,
  audioName: T.string,
  setAudioName: T.func,
  onCancelSave: T.func,
};

export default RecordAudioScreen;

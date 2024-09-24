import {View, Text, Pressable} from 'react-native';
import React from 'react';
import {globalStyles} from '../../themes/theme';
interface Props {
  label: String;
  onPress: () => void;
}

const PrimaryButton = ({label, onPress}: Props) => {
  return (
    <Pressable onPress={onPress} style={globalStyles.primaryButton}>
      <Text style={globalStyles.buttonText}>{label}</Text>
    </Pressable>
  );
};

export default PrimaryButton;

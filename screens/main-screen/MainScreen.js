import {
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Text,
  View,
} from 'react-native';
import React, {useCallback} from 'react';

const {width: screenWidth} = Dimensions.get('screen');
const roundButtonWidth = screenWidth * 0.2;

const Button = ({value, onPress}) => (
  <TouchableOpacity>
    <View style={buttonStyles.container}>
      <Text style={buttonStyles.text}>{value}</Text>
    </View>
  </TouchableOpacity>
);

const buttonStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: roundButtonWidth,
    width: roundButtonWidth,
    borderRadius: 35,
    flex: 1,
  },
  text: {
    fontSize: 18,
    fontWeight: '600',
  },
});

export default function MainScreen() {
  const onButtonPress = useCallback(() => {}, []);
  const onEqualPress = useCallback(() => {}, []);
  const onCalculationPress = useCallback(() => {}, []);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.digitsSection}>
          <View style={styles.row}>
            <Button onPress={onButtonPress} value={1} />
            <Button onPress={onButtonPress} value={2} />
            <Button onPress={onButtonPress} value={3} />
          </View>
          <View style={styles.row}>
            <Button onPress={onButtonPress} value={4} />
            <Button onPress={onButtonPress} value={5} />
            <Button onPress={onButtonPress} value={6} />
          </View>
          <View style={styles.row}>
            <Button onPress={onButtonPress} value={7} />
            <Button onPress={onButtonPress} value={8} />
            <Button onPress={onButtonPress} value={9} />
          </View>

          <View style={styles.row}>
            <Button onPress={onButtonPress} value={0} />
            <Button onPress={onButtonPress} value={'.'} />
          </View>
        </View>

        <View style={styles.operatorSection}>
          <Button onPress={onButtonPress} value={'÷'} />
          <Button onPress={onButtonPress} value={'*'} />
          <Button onPress={onButtonPress} value={'+'} />
          <Button onPress={onButtonPress} value={'-'} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    flexDirection: 'row',
  },
  digitsSection: {
    flex: 3,
  },
  operatorSection: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
  },
});

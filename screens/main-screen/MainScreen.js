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

const Button = ({value, onPress, style, textStyle}) => (
  <TouchableOpacity>
    <View style={[buttonStyles.container, style]}>
      <Text style={[buttonStyles.text, textStyle]}>{value}</Text>
    </View>
  </TouchableOpacity>
);

const buttonStyles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: roundButtonWidth,
    width: roundButtonWidth,
    borderRadius: roundButtonWidth / 2,
    backgroundColor: '#232429',
    marginHorizontal: 5,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
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
            <Button
              onPress={onButtonPress}
              value={'='}
              style={{width: roundButtonWidth * 2}}
              textStyle={styles.operatorText}
            />
          </View>
        </View>

        <View style={styles.operatorSection}>
          <Button
            style={styles.operatorItem}
            textStyle={styles.operatorText}
            onPress={onButtonPress}
            value={'÷'}
          />
          <Button
            style={styles.operatorItem}
            textStyle={styles.operatorText}
            onPress={onButtonPress}
            value={'x'}
          />
          <Button
            style={styles.operatorItem}
            textStyle={styles.operatorText}
            onPress={onButtonPress}
            value={'+'}
          />
          <Button
            style={styles.operatorItem}
            textStyle={styles.operatorText}
            onPress={onButtonPress}
            value={'-'}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  contentContainer: {
    flexDirection: 'row',
  },
  digitsSection: {
    flex: 3,
  },
  operatorSection: {
    flex: 1,
    alignItems: 'center',
  },
  operatorItem: {
    marginBottom: 15,
    backgroundColor: '#ec9832',
  },
  operatorText: {
    fontSize: 25,
  },
  row: {
    marginBottom: 15,
    flexDirection: 'row',
  },
});

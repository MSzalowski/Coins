import React from 'react'
import { Text, TouchableWithoutFeedback, StyleSheet, View } from 'react-native'

export interface ButtonProps {
  label: string
  iconName?: string
  onPress: () => void
}

export default React.memo<ButtonProps>(({ label, onPress }) => (
  <TouchableWithoutFeedback onPress={onPress}>
    <View style={styles.container}>
      <Text style={styles.label}>{label.toUpperCase()}</Text>
    </View>
  </TouchableWithoutFeedback>
))

const styles = StyleSheet.create({
  container: {
    height: 32,
    backgroundColor: '#2c2c2e',
    borderRadius: 16,
    marginHorizontal: 4,
    paddingHorizontal: 4,
    justifyContent: 'center',
  },
  label: {
    margin: 4,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '600',
    color: '#0a84ff',
  },
})

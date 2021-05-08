import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Button, { ButtonProps } from './Button'

export const HEADER_HEIGHT = 125

interface Props {
  title: string
  actions?: ButtonProps[]
}

export default React.memo<Props>(({ title, actions }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    {actions && (
      <View style={styles.actionsContainer}>
        {actions.map((action, index) => (
          <Button key={`${action.label}-${index}`} {...action} />
        ))}
      </View>
    )}
  </View>
))

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 10,
    padding: 16,
    height: HEADER_HEIGHT,
    borderBottomColor: 'red',
    borderBottomWidth: 2,
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    color: '#fff',
  },
  actionsContainer: {
    marginTop: 16,
    flexDirection: 'row',
    flex: 1,
  },
})

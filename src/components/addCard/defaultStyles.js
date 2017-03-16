import { StyleSheet } from 'react-native'
import { bold, grey, pressableColor, red, touchableOpacityContainer, innerTouchableOpacityContainer } from '../../common/styles'

const textInput = {
  paddingLeft: 12,
  paddingRight: 12,
  height: 44,
  backgroundColor: 'white',
  flex: 1,
}

const cardImage = {
  height: 20,
  width: 40,
  marginLeft: 10,
}
const cardFieldContainer = {
  flexDirection: 'row',
  alignItems: 'center',
  flex: 1,
  backgroundColor: 'white',
}
const button = {
  ...touchableOpacityContainer,
  marginTop: 20,
  marginBottom: 20,
  borderBottomWidth: 1,
  borderTopWidth: 1,
  borderColor: grey,
}

const buttonText = {
  color: pressableColor,
  fontWeight: bold,
  textAlign: 'center',
}

export default ({
  activityIndicator: {
  },
  activityIndicatorContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  addButton: button,
  addButtonText: buttonText,
  addCardContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#F2F2F5',
  },
  cardExpiryImage: {
    ...cardImage
  },
  cardNumberContainer: {
    flexDirection: 'column',
    flex: 0,
    height: 205,
    backgroundColor: 'transparent',
    alignItems: 'flex-start',
    borderColor: '#C8C7CC',
    borderBottomWidth: 1,
  },
  cardNumberImage: {
    height: 100,
    marginBottom: 20,
    marginTop: 30,
  },
  cardNumberInput: {
    ...textInput,
    paddingLeft: 17,
  },
  cvcContainer: {
    ...cardFieldContainer,
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderLeftColor: grey,
  },
  cvcImage: {
    ...cardImage
  },
  cvcInput: {
    ...textInput,
  },
  errorTextContainer: {
    height: 71,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
  },
  innerTouchableOpacityContainer: innerTouchableOpacityContainer,
  invalid: {
    borderColor: red,
    borderBottomWidth: StyleSheet.hairlineWidth, 
    borderWidth: 0,
  },
  monthYearContainer: {
    ...cardFieldContainer,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderColor: grey,
  },
  monthYearCvcContainer: {
    flexDirection: 'row',
  },
  monthYearTextInput: {
    ...textInput,
  },
  scanCardButton: button,
  scanCardButtonText: buttonText,
  textInput: textInput,
})

import React from 'react'
import {View, StyleSheet} from 'react-native'
import CustomButton from './src/components/customButton'
import CustomTextInput from './src/components/customTextInput'

const App = () => {
	return (
		<View>
			<CustomButton
				backgroundColor="#dddddd"
				color="#3949f"
				text="Custom Button"
				width="100%"
				onPress={() => {}}
			/>
			<CustomTextInput
				label="Custom Text"
				multiline
				numberOfLines={2}
				onChange={() => {}}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
		padding: 40,
	},
})

export default App

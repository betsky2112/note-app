import React from 'react'
import {TextInput, Text, StyleSheet, View} from 'react-native'

const CustomTextInput = ({text, onChange, label, multiline, numberOfLines}) => {
	const styles = StyleSheet.create({
		textInputWrapper: {
			marginTop: 20,
		},
		input: {
			borderWidth: 2,
			borderColor: '#DDD',
			padding: 10,
		},
	})
	return (
		<View style={styles.textInputWrapper}>
			<Text>{label}</Text>
			<TextInput
				multiline={multiline}
				numberOfLines={numberOfLines}
				onChangeText={onChange}
				defaultValue={text}
				style={styles.input}
				placeholder={label}
			/>
		</View>
	)
}

export default CustomTextInput

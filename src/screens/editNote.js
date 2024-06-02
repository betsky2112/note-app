import React, {useState} from 'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'
import CustomButton from '../components/customButton'
import CustomTextInput from '../components/customTextInput'

const EditNote = ({note, updateNote, setCurrentPage}) => {
	const [title, setTitle] = useState(note.title)
	const [desc, setDesc] = useState(note.desc)

	const handleUpdateNote = () => {
		updateNote(note.id, title, desc)
		setCurrentPage('home')
	}

	return (
		<View style={styles.container}>
			<Text style={styles.pageTitle}>Edit Note</Text>
			<CustomTextInput
				placeholder="Title"
				text={title}
				onChange={setTitle}
				multiline={false}
				numberOfLines={1}
			/>
			<CustomTextInput
				placeholder="Description"
				text={desc}
				onChange={setDesc}
				multiline
				numberOfLines={4}
			/>

			<View style={styles.spacerTop}>
				<CustomButton
					backgroundColor="#247881"
					color="#fff"
					text="Save"
					width="100%"
					onPress={handleUpdateNote}
				/>
			</View>

			<View style={styles.spacerTop}>
				<CustomButton
					backgroundColor="#DD2C00"
					color="#fff"
					text="Cancel"
					width="100%"
					onPress={() => setCurrentPage('home')}
				/>
			</View>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		padding: 20,
	},
	pageTitle: {
		marginTop: 20,
		fontSize: 20,
		fontWeight: '700',
		textAlign: 'center',
		color: '#203239',
	},
	spacerTop: {
		marginTop: 30,
	},
})

export default EditNote

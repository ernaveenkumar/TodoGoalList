import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from 'react-native';
function GoalInputandButton({
  addGoalHandler,
  goalInputHandler,
  enteredtext,
  modalIsVisible,
  cancelGoalHandler,
}) {
  return (
    <Modal visible={modalIsVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require('../goal-app/assets/images/goal.png')}
        />
        <TextInput
          style={styles.textInput}
          placeholder="add a course goal..."
          onChangeText={goalInputHandler}
          value={enteredtext}
        />
        <View style={styles.inputButtonsContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} color="#0000cd" />
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={cancelGoalHandler}
              color="#ff1493"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInputandButton;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    //justifyContent: 'space-between',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ff7f50',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#a9a9a9',
    width: '80%',
    marginRight: 8,
    padding: 8,
    color: 'white',
  },
  inputButtonsContainer: {
    flexDirection: 'row',
    margin: 10,
  },
  button: {
    width: '30%',
    margin: 8,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';
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
        <TextInput
          style={styles.textInput}
          placeholder="add a course goal..."
          onChangeText={goalInputHandler}
          value={enteredtext}
        />
        <View style={styles.inputButtonsContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={addGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={cancelGoalHandler} />
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
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#ff7f50',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#a9a9a9',
    width: '80%',
    marginRight: 8,
    padding: 8,
  },
  inputButtonsContainer: {
    flexDirection: 'row',
    margin: 10,
  },
  button: {
    width: '30%',
    margin: 8,
  },
});

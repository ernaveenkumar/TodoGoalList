import { View, TextInput, Button, StyleSheet } from 'react-native';
function GoalInputandButton({ addGoalHandler, goalInputHandler, enteredtext }) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your course goal..."
        onChangeText={goalInputHandler}
        value={enteredtext}
      />
      <Button title="Add Goal" onPress={addGoalHandler} />
    </View>
  );
}

export default GoalInputandButton;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
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
});

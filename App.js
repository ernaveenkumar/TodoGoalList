import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import GoalItems from './GoalItems';
import GoalInputandButton from './GoalInputandButton';

export default function App() {
  const [enteredtext, setEnteredText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function goalInputHandler(enteredtext) {
    console.log(enteredtext);
    setEnteredText(enteredtext);
  }

  function addGoalHandler() {
    /*  setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      enteredtext,
    ]);
  */
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredtext, id: (Math.random() + 1).toString(36).substring(7) },
    ]);

    setEnteredText('');
    setModalIsVisible(!modalIsVisible);
  }

  function deleteGoalItem(id) {
    console.log('Delete Goal Item' + id);
    setCourseGoals((coursegoal) => {
      return coursegoal.filter((goal) => goal.id !== id);
    });
  }

  function makeModelVisibleHandler() {
    setModalIsVisible(!modalIsVisible);
  }
  function cancelGoalHandler() {
    setModalIsVisible(!modalIsVisible);
  }
  return (
    <View style={styles.appcontainer}>
      <Button
        title="Add a goal"
        onPress={makeModelVisibleHandler}
        color="#0000cd"
      />
      {modalIsVisible && (
        <GoalInputandButton
          addGoalHandler={addGoalHandler}
          goalInputHandler={goalInputHandler}
          enteredtext={enteredtext}
          modalIsVisible={modalIsVisible}
          cancelGoalHandler={cancelGoalHandler}
        />
      )}
      <View style={styles.goalListContainer}>
        <Text> List of Gaols! </Text>
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => {
            return (
              <GoalItems
                itemData={itemData}
                deleteGoalItem={deleteGoalItem}
                id={itemData.item.id}
              />
            );
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appcontainer: {
    flex: 1,
    padding: 50,
  },

  goalListContainer: {
    flex: 9,
  },
});

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
    console.log(courseGoals);
  }

  function deleteGoalItem(id) {
    console.log('Delete Goal Item' + id);
    setCourseGoals((coursegoal) => {
      return coursegoal.filter((goal) => goal.id !== id);
    });
  }

  return (
    <View style={styles.appcontainer}>
      <GoalInputandButton
        addGoalHandler={addGoalHandler}
        goalInputHandler={goalInputHandler}
        enteredtext={enteredtext}
      />
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

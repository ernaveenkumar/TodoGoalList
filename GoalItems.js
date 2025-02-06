import { StyleSheet, View, Text, Pressable, Modal } from 'react-native';

function GoalItems({ itemData, deleteGoalItem, id }) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        onPress={deleteGoalItem.bind(this, id)}
        android_ripple={{ color: '#ff6347' }}
      >
        <Text style={styles.goalItemText} id={id}>
          {itemData.item.text}
        </Text>
      </Pressable>
    </View>
  );
}

export default GoalItems;

const styles = StyleSheet.create({
  goalItem: {
    margin: 6,

    backgroundColor: '#663399',
    borderRadius: 6,
  },
  goalItemText: {
    color: 'white',
    padding: 8,
  },
});

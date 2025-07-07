import { View, Text, FlatList, StyleSheet, Pressable } from "react-native";
import { Link } from 'expo-router';
import { tasksData } from '../../../constants/data';

export default function TaskScreen(){
    const renderTask = ({ item }) => (
        <Link href={`/(tareas)/${item.id}`} asChild>
            <Pressable style={styles.taskItem}>
                <Text style={styles.taskTitle}>{item.title}</Text>
            </Pressable>
        </Link>
    );

    return(
        <View style={styles.container}>
            <FlatList
                data={tasksData}
                renderItem={renderTask}
                keyExtractor={item => item.id}
                style={styles.list}
            />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    flex: 1,
  },
  taskItem: {
    backgroundColor: '#fff',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  taskTitle: {
    fontSize: 18,
  },
});
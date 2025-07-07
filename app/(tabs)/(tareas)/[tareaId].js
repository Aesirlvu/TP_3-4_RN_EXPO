import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import { useLocalSearchParams, Link, Stack } from 'expo-router';
import { tasksData } from '../../../constants/data';

export default function TaskDetailScreen() {
  const { tareaId } = useLocalSearchParams();

  const task = tasksData.find(t => t.id === tareaId);

  if (!task) {
    return (
      <View style={styles.container}>
        <Text>Tarea no encontrada.</Text>
      </View>
    );
  }

  const renderSubtask = ({ item }) => (
    <Link href={`/subtarea/${item.id}`} asChild>
        <Pressable style={styles.subtaskItem}>
            <Text style={styles.subtaskTitle}>{item.title}</Text>
        </Pressable>
    </Link>
  );

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: task.title }} />

      <Text style={styles.description}>{task.description}</Text>

      <Text style={styles.header}>Subtareas</Text>
      <FlatList
        data={task.subtasks}
        renderItem={renderSubtask}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  description: {
    fontSize: 16,
    marginBottom: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtaskItem: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  subtaskTitle: {
    fontSize: 16,
  },
});

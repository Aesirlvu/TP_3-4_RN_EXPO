import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { tasksData } from '../../../../constants/data';

export default function SubtaskDetailScreen() {
  const { subtareaId } = useLocalSearchParams();

  const subtask = tasksData
    .flatMap(task => task.subtasks)
    .find(st => st.id === subtareaId);

  if (!subtask) {
    return (
      <View style={styles.container}>
        <Text>Subtarea no encontrada.</Text>
      </View>
    );
  }

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Completado':
        return { backgroundColor: '#d4edda', color: '#155724' };
      case 'En progreso':
        return { backgroundColor: '#fff3cd', color: '#856404' };
      case 'Pendiente':
        return { backgroundColor: '#f8d7da', color: '#721c24' }; 
      default:
        return { backgroundColor: '#e2e3e5', color: '#383d41' }; 
    }
  };

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: subtask.title }} />
      <Text style={styles.title}>Detalles:</Text>
      <Text style={styles.details}>{subtask.details}</Text>
      <View style={styles.statusContainer}>
        <Text style={styles.statusTitle}>Estado:</Text>
        <Text style={[styles.status, getStatusStyle(subtask.status)]}>{subtask.status}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  details: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  status: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
    overflow: 'hidden', 
  },
});

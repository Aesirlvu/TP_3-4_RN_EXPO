import { Stack } from 'expo-router';

export default function TareasLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: 'Mis Tareas' }} />
      <Stack.Screen name="[tareaId]" options={{ title: 'Detalle de Tarea' }} />
      <Stack.Screen name="subtarea/[subtareaId]" options={{ title: 'Detalle de Subtarea' }} />
    </Stack>
  );
}

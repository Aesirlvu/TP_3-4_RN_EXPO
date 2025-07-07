import { Tabs } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs>
       <Tabs.Screen
        name="(home)/index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
          headerShown: true,
        }} />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Ajustes',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
        }} />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
        }} />
      <Tabs.Screen
        name="(tareas)"
        options={{
          title: 'Tareas',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="list-alt" color={color} />,
          headerShown: false,
        }} />
    </Tabs>
  );
}

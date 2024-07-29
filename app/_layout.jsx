import React from 'react';
import { Stack } from 'expo-router';


const RootLayout = () => {
  return (
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="EventListScreen" options={{ headerShown: false }} />
        <Stack.Screen name="TicketDetails" options={{ headerShown: false }} />
      </Stack>
 
  );
};

export default RootLayout;


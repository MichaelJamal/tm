// import React, { useState, useEffect } from 'react';
// import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { Link } from 'expo-router';

// const Dashboard = () => {
//   const [showEventForm, setShowEventForm] = useState(false);
//   const [eventDetails, setEventDetails] = useState({
//     artistName: '',
//     event: '',
//     date: '',
//     venue: '',
//     numberOfTickets: '',
//   });

//   const [slideForms, setSlideForms] = useState([]);
//   const [savedEvent, setSavedEvent] = useState(null);



//   useEffect(() => {
//     const loadEvent = async () => {
//       try {
//         const storedEvent = await AsyncStorage.getItem('event');
//         if (storedEvent) {
//           setSavedEvent(JSON.parse(storedEvent));
//         }
//       } catch (error) {
//         console.error('Failed to load event from storage', error);
//       }
    
//     };
//     loadEvent();
//   }, []);



//   const handleEventDetailChange = (name, value) => {
//     setEventDetails({
//       ...eventDetails,
//       [name]: value,
//     });

//     if (name === 'numberOfTickets') {
//       const numTickets = parseInt(value);
//       if (!isNaN(numTickets)) {
//         setSlideForms(Array.from({ length: numTickets }, (_, i) => ({
//           sec: '',
//           row: '',
//           seat: '',
//           numberOfSections: '',
//           isOpen: false,
//         })));
//       } else {
//         setSlideForms([]);
//       } 
//     }
//   };




//   const handleSlideFormChange = (index, name, value) => {
//     const newSlideForms = [...slideForms];
//     newSlideForms[index][name] = value;
//     setSlideForms(newSlideForms);
//   };



//   const handleSubmit = async () => {
//     try {
//       const eventToSave = {
//         ...eventDetails,
//         slideForms,
//       };
//       await AsyncStorage.setItem('event', JSON.stringify(eventToSave));
//       setSavedEvent(eventToSave);
//       setShowEventForm(false);
//     } catch (error) {
//       console.error('Failed to save event to storage', error);
//     }
//   };



//   const handleDelete = async () => {
//     try {
//       await AsyncStorage.removeItem('event');
//       setSavedEvent(null);
//       setShowEventForm(false);
//     } catch (error) {
//       console.error('Failed to delete event from storage', error);
//     }
//   };

//   console.log(savedEvent);

//   return (
//     <ScrollView contentContainerStyle={styles.container}>
//       {!savedEvent ? (
//         <Button title="Create Event" onPress={() => setShowEventForm(true)} />
//       ) : (
//         <View style={styles.savedEventContainer}>
//           <Text style={styles.savedEventText}>{`Event by ${savedEvent.artistName}`}</Text>
//           <View style={styles.buttonContainer}>
//             <Button title="Delete Event" onPress={handleDelete} color="red" />
//             <Link href="/EventListScreen">
//         <View style={styles.button}>
//       <Text style={styles.buttonText}>Back</Text>
//     </View>
//       </Link>
//           </View>
//         </View>
//       )}
//       {showEventForm && (
//         <View style={styles.formContainer}>
//           <Text style={styles.label}>Artist Name</Text>
//           <TextInput
//             style={styles.input}
//             value={eventDetails.artistName}
//             onChangeText={(text) => handleEventDetailChange('artistName', text)}
//           />
//           <Text style={styles.label}>Event</Text>
//           <TextInput
//             style={styles.input}
//             value={eventDetails.event}
//             onChangeText={(text) => handleEventDetailChange('event', text)}
//           />
//           <Text style={styles.label}>Date</Text>
//           <TextInput
//             style={styles.input}
//             value={eventDetails.date}
//             onChangeText={(text) => handleEventDetailChange('date', text)}
//           />
//           <Text style={styles.label}>Venue</Text>
//           <TextInput
//             style={styles.input}
//             value={eventDetails.venue}
//             onChangeText={(text) => handleEventDetailChange('venue', text)}
//           />
//           <Text style={styles.label}>Number of Tickets</Text>
//           <TextInput
//             style={styles.input}
//             value={eventDetails.numberOfTickets}
//             onChangeText={(text) => handleEventDetailChange('numberOfTickets', text)}
//             keyboardType="numeric"
//           />
//           {slideForms.map((slideForm, index) => (
//             <View key={index} style={styles.slideContainer}>
//               <TouchableOpacity onPress={() => handleSlideFormChange(index, 'isOpen', !slideForm.isOpen)}>
//                 <Text style={styles.slideButton}>{`${index + 1} Slide`}</Text>
//               </TouchableOpacity>
//               {slideForm.isOpen && (
//                 <View style={styles.slideFormContainer}>
//                   <Text style={styles.label}>Sec</Text>
//                   <TextInput
//                     style={styles.input}
//                     value={slideForm.sec}
//                     onChangeText={(text) => handleSlideFormChange(index, 'sec', text)}
//                   />
//                   <Text style={styles.label}>Row</Text>
//                   <TextInput
//                     style={styles.input}
//                     value={slideForm.row}
//                     onChangeText={(text) => handleSlideFormChange(index, 'row', text)}
//                   />
//                   <Text style={styles.label}>Seat</Text>
//                   <TextInput
//                     style={styles.input}
//                     value={slideForm.seat}
//                     onChangeText={(text) => handleSlideFormChange(index, 'seat', text)}
//                   />
//                   <Text style={styles.label}>Number of Sections</Text>
//                   <TextInput
//                     style={styles.input}
//                     value={slideForm.numberOfSections}
//                     onChangeText={(text) => handleSlideFormChange(index, 'numberOfSections', text)}
//                     keyboardType="numeric"
//                   />
//                 </View>
//               )}
//             </View>
//           ))}
//           <Button title="Submit" onPress={handleSubmit} />
//         </View>
//       )}
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flexGrow: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   formContainer: {
//     width: '100%',
//     marginTop: 20,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
//   slideContainer: {
//     marginTop: 10,
//   },
//   slideButton: {
//     color: 'blue',
//     textDecorationLine: 'underline',
//     marginBottom: 5,
//   },
//   slideFormContainer: {
//     width: '100%',
//     marginTop: 10,
//   },
//   savedEventContainer: {
//     marginTop: 20,
//     alignItems: 'center',
//   },
//   savedEventText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     width: '60%',
//   },
//   label: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
//   button: {
//     backgroundColor: '#007bff', // Example background color
//     padding: 10,
//     borderRadius: 5,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   buttonText: {
//     color: '#fff', // Example text color
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
// });

// export default Dashboard;
















// Old App 




// import { Link } from 'expo-router';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';


// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Aora!</Text>
//       <StatusBar style="auto" />
//       <Link href="/profile" style={{ color: 'blue' }}>Go to Profile</Link>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });


// import { Link } from 'expo-router';
// import { StatusBar } from 'expo-status-bar';
// import { Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View className="flex-1 items-center justify-center bg-white">
//       <Text className="text-3xl">Chidelum!</Text>
//       <StatusBar style="auto" />
//     <Link href="/EventListScreen" style={{ color: 'blue' }}>Go to EventListScreen</Link>
//     </View>
//   );
// }








// The Main One

// import { Link } from 'expo-router';
// import { StatusBar } from 'expo-status-bar';
// import { Text, View } from 'react-native';
// import React from 'react';
// import { StyleSheet } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Chidelum!</Text>
//       <StatusBar style="auto" />
//       <Link href="/EventListScreen" style={styles.link}>Go to EventListScreen</Link>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: 'white',
//   },
//   title: {
//     fontSize: 36,
//   },
//   link: {
//     color: 'blue',
//     marginTop: 20,
//   },
// });















// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Dashboard from './Dashboard';
// import EventListScreen from './EventListScreen'; // Ensure this screen exists

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Dashboard">
//         <Stack.Screen name="Dashboard" component={Dashboard} />
//         <Stack.Screen name="EventListScreen" component={EventListScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;


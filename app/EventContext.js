// import { React } from 'react';


// const EventInfoContext = React.createContext(defaultValue)

// const EventInfoProvider = ({children}) => {
//  return(
//     <EventInfoContext.Provider value={{

//     }}>
//          {children}
//     </EventInfoContext.Provider>
//  )
// } 


// export {EventInfoContext, EventInfoProvider }





// import React, { createContext, useState, useEffect } from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// const EventContext = createContext();

// const EventProvider = ({ children }) => {
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

//   const saveEvent = async (event) => {
//     try {
//       await AsyncStorage.setItem('event', JSON.stringify(event));
//       setSavedEvent(event);
//     } catch (error) {
//       console.error('Failed to save event to storage', error);
//     }
//   };

//   const deleteEvent = async () => {
//     try {
//       await AsyncStorage.removeItem('event');
//       setSavedEvent(null);
//     } catch (error) {
//       console.error('Failed to delete event from storage', error);
//     }
//   };

//   return (
//     <EventContext.Provider value={{ savedEvent, saveEvent, deleteEvent }}>
//       {children}
//     </EventContext.Provider>
//   );
// };

// export { EventContext, EventProvider };

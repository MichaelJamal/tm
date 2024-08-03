import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link } from 'expo-router';
// import { v4 as uuidv4 } from 'uuid';



const App = () => {

  const generateId = () => {
    return 'id-' + Math.random().toString(36).substr(2, 9) + '-' + Date.now();
  };

  const [showEventForm, setShowEventForm] = useState(false);
  const [eventDetails, setEventDetails] = useState({
    id: generateId(),
    artistName: '',
    event: '',
    date: '',
    venue: '',
    numberOfTickets: '',
  });

  const [slideForms, setSlideForms] = useState([]);
  const [savedEvent, setSavedEvent] = useState(null);



  useEffect(() => {
    const loadEvent = async () => {
      try {
        const storedEvent = await AsyncStorage.getItem('event');
        if (storedEvent) {
          setSavedEvent(JSON.parse(storedEvent));
        }
      } catch (error) {
        console.error('Failed to load event from storage', error);
      }
    
    };
    loadEvent();
  }, []);



  const handleEventDetailChange = (name, value) => {
    setEventDetails({
      ...eventDetails,
      [name]: value,
    });

    if (name === 'numberOfTickets') {
      const numTickets = parseInt(value);
      if (!isNaN(numTickets)) {
        setSlideForms(Array.from({ length: numTickets }, (_, i) => ({
          sec: '',
          row: '',
          seat: '',
          numberOfSections: '',
          isOpen: false,
          id: generateId(),
        })));
      } else {
        setSlideForms([]);
      } 
    }
  };




  const handleSlideFormChange = (index, name, value) => {
    const newSlideForms = [...slideForms];
    newSlideForms[index][name] = value;
    setSlideForms(newSlideForms);
  };



  const handleSubmit = async () => {
    try {
      const eventToSave = {
        ...eventDetails,
        slideForms,
      };
      await AsyncStorage.setItem('event', JSON.stringify(eventToSave));
      setSavedEvent(eventToSave);
      setShowEventForm(false);
    } catch (error) {
      console.error('Failed to save event to storage', error);
    }
  };


  
  const handleDelete = async () => {
    try {
      await AsyncStorage.removeItem('event');
      setSavedEvent(null);
      setShowEventForm(false);
    } catch (error) {
      console.error('Failed to delete event from storage', error);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {!savedEvent ? (
        <Button title="Create Event" onPress={() => setShowEventForm(true)} />
      ) : (
        <View style={styles.savedEventContainer}>
          <Text style={styles.savedEventText}>{`Event by ${savedEvent.artistName}`}</Text>
          <View style={styles.buttonContainer}>
            <Button title="Delete Event" onPress={handleDelete} color="red" />
            <Link href="/EventListScreen">
        <View style={styles.button}>
      <Text style={styles.buttonText}>Open App</Text>
    </View>
      </Link>
          </View>
        </View>
      )}
      {showEventForm && (
        <View style={styles.formContainer}>
          <Text style={styles.label}>Artist Name</Text>
          <TextInput
            style={styles.input}
            value={eventDetails.artistName}
            onChangeText={(text) => handleEventDetailChange('artistName', text)}
          />
          <Text style={styles.label}>Event</Text>
          <TextInput
            style={styles.input}
            value={eventDetails.event}
            onChangeText={(text) => handleEventDetailChange('event', text)}
          />
          <Text style={styles.label}>Date</Text>
          <TextInput
            style={styles.input}
            value={eventDetails.date}
            onChangeText={(text) => handleEventDetailChange('date', text)}
          />
          <Text style={styles.label}>Venue</Text>
          <TextInput
            style={styles.input}
            value={eventDetails.venue}
            onChangeText={(text) => handleEventDetailChange('venue', text)}
          />
          <Text style={styles.label}>Number of Tickets</Text>
          <TextInput
            style={styles.input}
            value={eventDetails.numberOfTickets}
            onChangeText={(text) => handleEventDetailChange('numberOfTickets', text)}
            keyboardType="numeric"
          />
          {slideForms.map((slideForm, index) => (
            <View key={index} style={styles.slideContainer}>
              <TouchableOpacity onPress={() => handleSlideFormChange(index, 'isOpen', !slideForm.isOpen)}>
                <Text style={styles.slideButton}>{`${index + 1} Slide`}</Text>
              </TouchableOpacity>
              {slideForm.isOpen && (
                <View style={styles.slideFormContainer}>
                  <Text style={styles.label}>Sec</Text>
                  <TextInput
                    style={styles.input}
                    value={slideForm.sec}
                    onChangeText={(text) => handleSlideFormChange(index, 'sec', text)}
                  />
                  <Text style={styles.label}>Row</Text>
                  <TextInput
                    style={styles.input}
                    value={slideForm.row}
                    onChangeText={(text) => handleSlideFormChange(index, 'row', text)}
                  />
                  <Text style={styles.label}>Seat</Text>
                  <TextInput
                    style={styles.input}
                    value={slideForm.seat}
                    onChangeText={(text) => handleSlideFormChange(index, 'seat', text)}
                  />
                  <Text style={styles.label}>Number of Sections</Text>
                  <TextInput
                    style={styles.input}
                    value={slideForm.numberOfSections}
                    onChangeText={(text) => handleSlideFormChange(index, 'numberOfSections', text)}
                    // keyboardType="numeric"
                  />
                </View>
              )}
            </View>
          ))}
          <Button title="Submit" onPress={handleSubmit} />
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  formContainer: {
    width: '100%',
    marginTop: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  slideContainer: {
    marginTop: 10,
  },
  slideButton: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginBottom: 5,
  },
  slideFormContainer: {
    width: '100%',
    marginTop: 10,
  },
  savedEventContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  savedEventText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#007bff', // Example background color
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff', // Example text color
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;



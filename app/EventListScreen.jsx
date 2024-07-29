import { Link } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ImageBackground, Image, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Icon } from 'react-native-elements';


const { height: screenHeight } = Dimensions.get('window');

// const GradientOverlay = () => (
//   <LinearGradient
//     colors={['black', 'transparent']}
//     style={styles.gradientOverlay}
//     start={{ x: 0.5, y: 1 }}
//     end={{ x: 0.5, y: 0 }}
//   />
// );

const EventListScreen = () => {
  const [selectedTab, setSelectedTab] = useState('Upcoming');
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await AsyncStorage.getItem('event');
        if (result) {
          const parsedResult = JSON.parse(result);
          setEventData(parsedResult);
        }
      } catch (error) {
        console.error('Failed to fetch event data from storage', error);
      }
    };
    getData();
  }, []);
  

  return (
    <>
      <StatusBar
        barStyle="dark-content" // options: 'default', 'light-content', 'dark-content'
        backgroundColor="#333" // works on Android
        hidden={false} // true to hide the status bar
        translucent={false} // true to allow content to render under the status bar
      />
      <View style={styles.container}>


        <View style={styles.header}>
          <Text style={styles.headerText}></Text>
          <Text style={styles.headerText}>My Events</Text>
          <Link href='/'>
            <Text style={styles.headerText3}>Help</Text>
          </Link>
        </View>
        
        <View style={styles.tabContainer}>
          <TouchableOpacity
            style={[styles.tab, selectedTab === 'Upcoming' && styles.selectedTab]}
            onPress={() => setSelectedTab('Upcoming')}
          >
            <Text style={[styles.tabText, selectedTab === 'Upcoming' && styles.selectedTabText]}>
              Upcoming (1)
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, selectedTab === 'Past' && styles.selectedTab]}
            onPress={() => setSelectedTab('Past')}
          >
            <Text style={[styles.tabText, selectedTab === 'Past' && styles.selectedTabText]}>
              Past (4)
            </Text>
          </TouchableOpacity>
        </View>




        <ScrollView 
        style={styles.contentContainer}

        >
          <Link href="/TicketDetails" asChild>
            <TouchableOpacity style={styles.eventCard}>
              <ImageBackground
                source={require('../assets/taylor.jpg')}
                style={styles.imageBackground}
                resizeMode="cover"
              >
                  <View style={styles.overlay} />
            
                <View style={{position: 'absolute', padding: 8, bottom: 0,}}>
                  {eventData ? (
                    <>
                    
                      <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff',}}>
                        {eventData.artistName} | {eventData.event}
                        </Text>

                      <Text style={styles.eventDetails}>{eventData.date} • {eventData.venue}</Text>


                      <Text style={{color: '#fff', }}>
                      {/* here */}
                        <Image
                        source={require('../assets/ttttt.png')}
                        style={{width: 18, height: 18, marginRight: 4}}
                        // resizeMode="contain"
                        />  <Text>{eventData.numberOfTickets} </Text> 
                        <Text>tickets</Text>
                        </Text>



                    </>
                  ) : (
                    <Text style={styles.eventTitle}>No event data</Text>
                  )}
                </View>
              </ImageBackground>
            </TouchableOpacity>
          </Link>
</ScrollView>






        <View style={styles.footer}>
          <Image  source={require('../assets/footerImage.jpg')} 
          style={{width: '100%' }}
          resizeMode="contain" // or "contain" depending on your preference
          />
        </View>


      </View>
    </>
  );
};

export default EventListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#333',
  },
  headerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold'
  },
  headerText3: {
    color: '#fff',
    fontSize: 16,
    // fontWeight: 'bold'
  },
  
  tabContainer: {
    flexDirection: 'row',
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    backgroundColor: '#007BFF',
    alignItems: 'center',
  },
  selectedTab: {
    borderBottomWidth: 4,
    borderBottomColor: '#fff',
  },
  tabText: {
    color: '#fff',
    fontSize: 16,
  },
  selectedTabText: {
    fontWeight: 'bold',
  },


  contentContainer: {
    paddingVertical: 16,
    marginHorizontal: 8,
  },


  eventCard: {
    backgroundColor: '#fff',
    overflow: 'hidden',
    position: 'relative',
    marginBottom: 16,
  },
  // gradientOverlay: {
  //   position: 'absolute',
  //   top: 0,
  //   right: 0,
  //   bottom: 0,
  //   left: 0,
  //   opacity: 0.75,
  // },
  eventInfo: {
    position: 'absolute',
    padding: 8,
    bottom: 0,
    
  },
  eventTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  eventDetails: {
    color: '#fff',
    marginTop: 4,
  },
  // eventTickets: {
  //   // marginBotto: 4,
  //   // padding: 8,
  //   color: '#fff',
  // },



  imageBackground: {
    width: '100%',
    height: 250,
  },
  // overlay: {
  //   ...StyleSheet.absoluteFillObject,
  //   backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity as needed
  // },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: screenHeight / 2, // Covering half of the screen height
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Adjust the opacity as needed
  },

  footer: {
   
  },
 
});



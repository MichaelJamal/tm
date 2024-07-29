// import { StatusBar } from 'expo-status-bar';
// import React, { useEffect, useRef, useState } from 'react';
// import { View, Text, TouchableOpacity, ScrollView, ImageBackground, StyleSheet,  Dimensions, Button, Image  } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import Swiper from 'react-native-swiper';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import { ActivityIndicator } from 'react-native';
// import { Icon } from 'react-native-elements';
// const { height: screenHeight } = Dimensions.get('window');
// import BottomSheet from 'react-native-simple-bottom-sheet';



// const TicketDetails = () => {
//   const navigation = useNavigation();
//   const [eventData, setEventData] = useState('');
//   const screenHeight = Dimensions.get('window').height;
//   const panelRef = useRef(null);
  
 


//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const result = await AsyncStorage.getItem('event');
//         if (result) {
//           const parsedResult = JSON.parse(result);
//           // console.log('Event Data Retrieved:', parsedResult);
//           setEventData(parsedResult);
//         } else {
//           console.log('No event data found');
//         }
//       } catch (error) {
//         console.error('Failed to fetch event data from storage', error);
//       }
//     };
//     getData();
//   }, []);



//   // Render slides based on slideForms
//   const renderSlides = () => {
//     if (!eventData.slideForms || eventData.slideForms.length === 0) {
//       return (
//         <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
//          <ActivityIndicator size="large" color="#007BFF" />
//          <Text style={{ marginTop: 16, fontSize: 16, color: '#007BFF' }}>Loading tickets...</Text>
//         </View>
//       );
//     } 

//     return eventData.slideForms.map((slideForm, index) => (
//       <View 
//       key={index} 
//       style={{  justifyContent: 'center', marginHorizontal: 34 }}
//       >
// <View style={{ backgroundColor: '#007BFF', 
//   padding: 12, 
//   borderTopLeftRadius: 8,
//   borderTopRightRadius: 8,
  
//   }}>
// <Text style={{ color: '#fff', textAlign: 'center', marginBottom: 34 }}>Verified Fan Offer</Text>
// <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 8, paddingHorizontal: 16}}>
//     <View style={{ alignItems: 'center' }}>
//     <Text style={{ color: '#fff' }}>SEC</Text>
//     <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold' }}>{slideForm.sec}</Text>
//     </View>
//     <View style={{ alignItems: 'center' }}>
//     <Text style={{ color: '#fff' }}>ROW</Text>
//     <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold' }}>{slideForm.row}</Text>
//     </View>
//     <View style={{ alignItems: 'center' }}>
//     <Text style={{ color: '#fff' }}>SEAT</Text>
//     <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold' }}>{slideForm.seat}</Text>
//     </View>
// </View>
// </View>

// <View style={{ marginVertical: 4}} >

//       <ImageBackground
//         source={require('../assets/taylor.jpg')}
//         style={{  justifyContent: 'center', alignItems: 'center', width: '100%', height: 240, }}
//         resizeMode="cover"
//       >
//         <View style={styles.overlay} />
        
//         <View style={{ alignItems: 'center', position: 'absolute', padding: 16, bottom: 0 }}>
//           <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 4, color: '#fff'}}>
//           {eventData.artistName}  |  {eventData.event}
//           </Text>
//           <Text style={{ fontSize: 18, color: '#fff', marginBottom: 16}}>
//           {eventData.date} • {eventData.venue}
//           </Text>
//         </View>
//       </ImageBackground>

//     </View>


// <View style={{paddingVertical: 30}}>
// <Text style={{ fontSize: 18, marginBottom: 16, textAlign: 'center' }}>{slideForm.numberOfSections}</Text>

// </View>

// <View style={{ }}>
// <TouchableOpacity style={{ backgroundColor: '#000', padding: 12, flexDirection: 'row', 
// alignItems: 'center', justifyContent: 'center', 
// marginBottom: 30,
// borderRadius: 2
//  }}>
 
//  <Image
//           style={{ width: 40, borderRadius: 4, height: 24, marginRight: 16 }} 
//           source={require('../assets/images.jpeg')}
//         />
//     <Text style={{ color: '#fff' }}>Add to Apple Wallet</Text>
// </TouchableOpacity>
// </View>

// <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 36}}>
//     <TouchableOpacity>
//     <Text style={{ color: '#6c757d', fontSize: 12 }}>View Barcode</Text>
//     </TouchableOpacity>
//     <TouchableOpacity>
//     <Text style={{ color: '#6c757d', fontSize: 12 }}>Ticket Details</Text>
//     </TouchableOpacity>
// </View>

//     <View style={{height: 44, backgroundColor: '#007BFF', borderBottomRightRadius: 8, borderBottomLeftRadius: 8,  }}></View>
//       </View>
//     ));
//   };



//   const togglePanel = () => {
//     if (panelRef.current) {
//       panelRef.current.togglePanel();
//     } else {
//       console.error('panelRef.current is null');
//     }
//   };


// return (
// <>
// <StatusBar
// barStyle="dark-content" // options: 'default', 'light-content', 'dark-content'
// backgroundColor="#333" // works on Android
// hidden={false} // true to hide the status bar
// translucent={false} // true to allow content to render under the status bar
// />
// <View style={{ flex: 1, backgroundColor: '#fff'}}>

// <View style={{textAlign: 'center'}}>
// <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 16, alignItems: 'center', backgroundColor: '#333', }}>
// <TouchableOpacity>
   
//     <Text onPress={() => navigation.goBack()} style={{ fontSize: 16, color: '#fff' }} ><Icon
//   name="close"
//   type="EvilIcons"
//   color="#fff"
// /></Text>
  
// </TouchableOpacity>
// <Text style={{ fontSize: 16, color: '#fff', fontWeight: 'bold'}}>My Tickets</Text>
// <TouchableOpacity>
//     <Text style={{ fontSize: 16, color: '#fff' }}>Help</Text>
// </TouchableOpacity>
// </View>

// <View style={{ marginVertical: 8 }}>
// <ScrollView>
// <Swiper
//           // style={{ height: '100%' }}  // Set your desired height
//           showsPagination={true}  // Shows dots pagination
//           dotStyle={{ backgroundColor: 'rgba(0,0,0,.2)', width: 8, height: 8, }}  // Style for dots
//           activeDotStyle={{ backgroundColor: '#000', width: 8, height: 8 }}  // Style for active dot
//           style={{ height: screenHeight - 144 }}
//         >
//           {renderSlides()}
//  </Swiper>
       
//  </ScrollView>






// <View style={{Flex: 3, flexDirection: 'row', justifyContent: 'space-between', margin: 8, marginHorizontal: 12 }}>
//     <TouchableOpacity style={{ backgroundColor: '#007BFF', padding: 16, borderRadius: 12, flex: 1, marginRight: 8, alignItems: 'center' }} onPress={togglePanel}>
//     <Text style={{ color: '#fff', fontWeight: 'bold' }}  >Transfer</Text>
   
//     </TouchableOpacity>
//     <TouchableOpacity style={{ backgroundColor: '#E0E0E0', padding: 16, borderRadius: 12, flex: 1, marginLeft: 8, alignItems: 'center' }}>
//     <Text style={{ color: '#fff', fontWeight: 'bold' }}>Sell</Text>
//     </TouchableOpacity>
// </View>

// </View>


//       </View>


//   <BottomSheet
//    ref={panelRef}
//    isOpen={false}
  
//   lineContainerStyle={{ display: 'none' }}
//    >
//           <Text style={{paddingVertical: 80}}>
//             Some random content
//           </Text>
//         </BottomSheet>
     

// </View>
// </>
// );
// };

// export default TicketDetails;




// const styles = StyleSheet.create({
//     eventImage: {
//         width: '100%',
//         height: 250,
//       },
//       // overlay: {
//       //   position: 'absolute',
//       //   top: 0,
//       //   left: 0,
//       //   width: '100%',
//       //   height: screenHeight / 3, // Covering half of the screen height
//       //   backgroundColor: 'rgba(0, 0, 0, 0.3)', // Adjust the opacity as needed
//       // },
//       overlay: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity as needed
//   },
// })

























import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, ImageBackground, StyleSheet, Dimensions, Image, TouchableWithoutFeedback, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Swiper from 'react-native-swiper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from 'react-native';
import { Divider, Icon } from 'react-native-elements';
import BottomSheet from 'react-native-simple-bottom-sheet';
import BouncyCheckbox from "react-native-bouncy-checkbox";

const { height: screenHeight } = Dimensions.get('window');

const TicketDetails = () => {
  const navigation = useNavigation();
  const [eventData, setEventData] = useState({});
  // const panelRef = useRef(null);
  const [isPanelVisible, setIsPanelVisible] = useState(false);
  const [isPanelVisible2, setIsPanel2Visible2] = useState(false);
  const [activeSlideForm, setActiveSlideForm] = useState(eventData.slideForms ? eventData.slideForms[0] : null);
  // const [activeSlideForm, setActiveSlideForm] = useState(null);
  // const [selectedSeat, setSelectedSeat] = useState(null);
  const [checked, setChecked] = useState(false);
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  
  
  const toggleCheckbox = () => setChecked(!checked);
  
  useEffect(() => {
    const getData = async () => {
      try {
        const result = await AsyncStorage.getItem('event');
        if (result) {
          const parsedResult = JSON.parse(result);
          setEventData(parsedResult);
        } else {
          console.log('No event data found');
        }
      } catch (error) {
        console.error('Failed to fetch event data from storage', error);
      }
    };
    getData();
  }, []);



  // const renderSlides = () => {
  //   if (!eventData.slideForms || eventData.slideForms.length === 0) {
  //     return (
  //       <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
  //         <ActivityIndicator size="large" color="#007BFF" />
  //         <Text style={{ marginTop: 16, fontSize: 16, color: '#007BFF' }}>Loading tickets...</Text>
  //       </View>
  //     );
  //   }
  
  //   return eventData.slideForms.map((slideForm) => (
  //     <View 
  //     key={slideForm.id} 
  //     style={{ justifyContent: 'center', marginHorizontal: 34 }}>
  //       <View style={{ backgroundColor: '#007BFF', padding: 12, borderTopLeftRadius: 8, borderTopRightRadius: 8 }}>
  //         <Text style={{ color: '#fff', textAlign: 'center', marginBottom: 34 }}>Verified Fan Offer</Text>
  //         <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 8, paddingHorizontal: 16 }}>
  //           <View style={{ alignItems: 'center' }}>
  //             <Text style={{ color: '#fff' }}>SEC</Text>
  //             <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold' }}>{slideForm.sec}</Text>
  //           </View>
  //           <View style={{ alignItems: 'center' }}>
  //             <Text style={{ color: '#fff' }}>ROW</Text>
  //             <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold' }}>{slideForm.row}</Text>
  //           </View>
  //           <View style={{ alignItems: 'center' }}>
  //             <Text style={{ color: '#fff' }}>SEAT</Text>
  //             <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold' }}>{slideForm.seat}</Text>
  //           </View>
  //         </View>
  //       </View>
  
  //       <View style={{ marginVertical: 4 }}>
  //         <ImageBackground
  //           source={require('../assets/taylor.jpg')}
  //           style={{ justifyContent: 'center', alignItems: 'center', width: '100%', height: 240 }}
  //           resizeMode="cover"
  //         >
  //           <View style={styles.overlay} />
  //           <View style={{ alignItems: 'center', position: 'absolute', padding: 16, bottom: 0 }}>
  //             <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 4, color: '#fff' }}>
  //               {eventData.artistName} | {eventData.event}
  //             </Text>
  //             <Text style={{ fontSize: 18, color: '#fff', marginBottom: 16 }}>
  //               {eventData.date} • {eventData.venue}
  //             </Text>
  //           </View>
  //         </ImageBackground>
  //       </View>
  
  //       <View style={{ paddingVertical: 30 }}>
  //         <Text style={{ fontSize: 18, marginBottom: 16, textAlign: 'center' }}>{slideForm.numberOfSections}</Text>
  //       </View>
  
  //       <View>
  //         <TouchableOpacity style={{ backgroundColor: '#000', padding: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 30, borderRadius: 2 }}>
  //           <Image style={{ width: 40, borderRadius: 4, height: 24, marginRight: 16 }} source={require('../assets/images.jpeg')} />
  //           <Text style={{ color: '#fff' }}>Add to Apple Wallet</Text>
  //         </TouchableOpacity>
  //       </View>
  
  //       <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 36 }}>
  //         <TouchableOpacity>
  //           <Text style={{ color: '#6c757d', fontSize: 12 }}>View Barcode</Text>
  //         </TouchableOpacity>
  //         <TouchableOpacity>
  //           <Text style={{ color: '#6c757d', fontSize: 12 }}>Ticket Details</Text>
  //         </TouchableOpacity>
  //       </View>
  
  //       <View style={{ height: 44, backgroundColor: '#007BFF', borderBottomRightRadius: 8, borderBottomLeftRadius: 8 }}></View>
  //     </View>
  //   ));
  // };
  
  useEffect(() => {
    if (eventData.slideForms && eventData.slideForms.length > 0) {
      setActiveSlideForm(eventData.slideForms[activeSlideIndex]);
    }
  }, [activeSlideIndex, eventData.slideForms]);

  

  const renderSlides = () => {
    if (!eventData.slideForms || eventData.slideForms.length === 0) {
      return (
        <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
          <ActivityIndicator size="large" color="#007BFF" />
          <Text style={{ marginTop: 16, fontSize: 16, color: '#007BFF' }}>Loading tickets...</Text>
        </View>
      );
    }

    return eventData.slideForms.map((slideForm, index) => (
      <View 
        key={slideForm.id} 
        style={{ justifyContent: 'center', marginHorizontal: 34 }}
      >
        {/* padding should be 12 */}
        <View style={{ backgroundColor: '#007BFF', padding: 12, borderTopLeftRadius: 8, borderTopRightRadius: 8 }}>
        {/* marginBottom should be 34 */}
          <Text style={{ color: '#fff', textAlign: 'center', marginBottom: 0 }}>Verified Fan Offer</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 8, paddingHorizontal: 16 }}>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ color: '#fff' }}>SEC</Text>
              <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold' }}>{slideForm.sec}</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ color: '#fff' }}>ROW</Text>
              <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold' }}>{slideForm.row}</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ color: '#fff' }}>SEAT</Text>
              <Text style={{ color: '#fff', fontSize: 24, fontWeight: 'bold' }}>{slideForm.seat}</Text>
            </View>
          </View>
        </View>

        <View style={{ marginVertical: 4 }}>
          <ImageBackground
            source={require('../assets/taylor.jpg')}
            style={{ justifyContent: 'center', alignItems: 'center', width: '100%', height: 240 }}
            resizeMode="cover"
          >
            <View style={styles.overlay} />
            <View style={{ alignItems: 'center', position: 'absolute', padding: 16, bottom: 0 }}>
              <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 4, color: '#fff' }}>
                {eventData.artistName} | {eventData.event}
              </Text>
              <Text style={{ fontSize: 18, color: '#fff', marginBottom: 16 }}>
                {eventData.date} • {eventData.venue}
              </Text>
            </View>
          </ImageBackground>
        </View>


        {/* paddingVertical should be 30 */}
        <View style={{ paddingVertical: 2 }}>
          <Text style={{ fontSize: 18, marginBottom: 16, textAlign: 'center' }}>{slideForm.numberOfSections}</Text>
        </View>

        <View>
          <TouchableOpacity style={{ backgroundColor: '#000', padding: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginBottom: 30, borderRadius: 2 }}>
            <Image style={{ width: 40, borderRadius: 4, height: 24, marginRight: 16 }} source={require('../assets/images.jpeg')} />
            <Text style={{ color: '#fff' }}>Add to Apple Wallet</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 36 }}>
          <TouchableOpacity>
            <Text style={{ color: '#6c757d', fontSize: 12 }}>View Barcode</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ color: '#6c757d', fontSize: 12 }}>Ticket Details</Text>
          </TouchableOpacity>
        </View>

        <View style={{ height: 44, backgroundColor: '#007BFF', borderBottomRightRadius: 8, borderBottomLeftRadius: 8 }}></View>
      </View>
    ));
  };

  // // Access the active slideForm outside of renderSlides
  // const activeSlideForm = eventData.slideForms && eventData.slideForms[activeSlideIndex];


  const togglePanel = () => {
    // isPanelVisibleRef.current = !isPanelVisibleRef.current;
    setIsPanelVisible(prev => !prev);
  };

  const handleBackgroundPress = () => {
    if (isPanelVisible) {
      togglePanel();
    }
  };

  const togglePanel2 = () => {
    setIsPanel2Visible2(prev => !prev);
  };

  const handleBackgroundPress2 = () => {
    if (isPanelVisible2) {
      togglePanel2();
    }
  };


  // const activeSlideData = eventData.slideForms ? eventData.slideForms[activeSlideIndex] : null;



  console.log("eventData", eventData)

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="#333"
        hidden={false}
        translucent={false}
      />
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <View style={{ textAlign: 'center' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 16, alignItems: 'center', backgroundColor: '#333' }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={{ fontSize: 16, color: '#fff' }}>
                <Icon name="close" type="EvilIcons" color="#fff" />
              </Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 16, color: '#fff', fontWeight: 'bold' }}>My Tickets</Text>
            <TouchableOpacity>
              <Text style={{ fontSize: 16, color: '#fff' }}>Help</Text>
            </TouchableOpacity>
          </View>


          {/* HERE */}
            {/* The marginVertical should be 8 */}
          <View style={{ marginVertical: 0 }}>



            <ScrollView>
            <Swiper
        showsPagination={true}
        dotStyle={{ backgroundColor: 'rgba(0,0,0,.2)', width: 8, height: 8 }}
        activeDotStyle={{ backgroundColor: '#000', width: 8, height: 8 }}
        style={{ height: screenHeight - 144 }}
        onIndexChanged={(index) => {
          setActiveSlideIndex(index);
          setActiveSlideForm(eventData.slideForms[index]); // Immediate update
          if (eventData.slideForms && eventData.slideForms.length > 0) {
            setActiveSlideForm(eventData.slideForms[index]); // Optimistic update
          }
        }}
      >
        {renderSlides()}
      </Swiper>
            </ScrollView>


    {/* END */}




            <View style={{ flexDirection: 'row', justifyContent: 'space-between', margin: 8, marginHorizontal: 12 }}>
              <TouchableOpacity style={{ backgroundColor: '#007BFF', padding: 16, borderRadius: 12, flex: 1, marginRight: 8, alignItems: 'center' }} 
              
              onPress={togglePanel}
              >
                <Text style={{ color: '#fff', fontWeight: 'bold' }}>Transfer</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{ backgroundColor: '#E0E0E0', padding: 16, borderRadius: 12, flex: 1, marginLeft: 8, alignItems: 'center' }}>
                <Text style={{ color: '#fff', fontWeight: 'bold' }}>Sell</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>




        {/* {isPanelVisibleRef.current && ( */}
        { activeSlideForm && isPanelVisible && (
          //  eventData.slideForms.map((slideForm) => (
          <TouchableWithoutFeedback onPress={handleBackgroundPress}>
            <View style={styles.overlay}>
              <BottomSheet
                // ref={panelRef}
                isOpen={isPanelVisible}
                // key={slideForm.id} 
                sliderMaxHeight={Dimensions.get('window').height * 4} 
              wrapperStyle={{ borderTopRightRadius: 0, borderTopLeftRadius: 0 }}
                lineContainerStyle={{ display: 'none' }}
              >



              <View style={{ paddingVertical: 14 }}>
              <Text style={{
              fontSize: 14,
           
              marginBottom: 10,
              color: 'gray',
              textAlign: 'center'
              }}>SELECT TICKETS TO TRANSFER</Text>
              <Divider />
              
              <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 20,
          marginTop: 20
        }}>


       

        <View>
  
    <Text style={{
      fontSize: 16,
      marginBottom: 4,
    }}>
      Sec {activeSlideForm.sec}, Row {activeSlideForm.row}
    </Text>

</View>



        <View>
        <Text style={{color: 'gray', }}>
       
        <Image
        source={require('../assets/ttttt.png')}
        style={{width: 18, height: 18, marginRight: 4}}
       
        />  <Text>{eventData.numberOfTickets} </Text> 
        <Text>tickets</Text>
        </Text>
</View>
        
        </View>




       <View style={{
      flexDirection: 'row',
      gap: 20,
    }}>
      
        
        <View
          // key={seat.id}
          
          style={{
            backgroundColor: '#fff', 
            borderRadius: 10, 
            borderWidth: 1, 
            borderColor: '#D1D5DB',
            // Shadow properties for iOS
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,
            // Elevation for Android
            elevation: 2,
            // display: 'flex',
            alignItems: 'center',
            // justifyContent: 'center',
            width: 100,
          }}
          // onPress={() => setSelectedSeat(seat.id)}
        >
          <Text style={{
            backgroundColor:'#007bff',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            paddingVertical: 10,
            fontSize: 16,
            // fontWeight: 'bold',
            color: "#fff",
            width: '100%',
            textAlign: 'center',
            marginBottom: 14,
            // color: seat.isSelected ? '#fff' : '#333',
          }}>
            SEAT {activeSlideForm.seat}
          </Text>
         
         <View 
  style={{ 
    display: 'flex', 
    position: 'relative' 
  }}
>


  <BouncyCheckbox
    size={25}
    fillColor="#007bff"
    unFillColor="#FFFFFF"
    innerIconStyle={{
      borderWidth: 2, 
      borderColor: 'gray',
    }}
    onPress={toggleCheckbox}
    style={{
      marginBottom: 14,
      marginLeft: '18%',
      // marginRight: '50%'
    }}
  />
</View>
</View>
    </View>
 </View>

   
<Divider />
  <View style={{marginBottom: 200}}>
</View>



              <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 8,
        paddingBottom: 28,
        backgroundColor: '#fff', // Adjust for dark mode if needed
        borderTopWidth: 1,
        borderTopColor: '#e0e0e0', // Adjust for dark mode if needed
      }}
    >
      <Text
        style={{
          color: '#000', // Adjust for dark mode if needed
          fontSize: 14,
        }}
      >
       {checked ? '1 Selected' : '0 Selected'}
      </Text>

      <TouchableOpacity
        style={{ }}
        // onPress={togglePanel2}
      >
        <Text
          style={{
            color: '#007bff',
            fontSize: 14,
          }}
        >
          TRANSFER TO {'>'}
        </Text>
      </TouchableOpacity>
    </View>


              </BottomSheet>
            </View>




          </TouchableWithoutFeedback>
        // ))
        )}


        {/* {isPanelVisible2 && (
          <TouchableWithoutFeedback onPress={handleBackgroundPress2}>
             <View style={styles.overlay2}>
              <BottomSheet
                ref={panelRef}
                isOpen={isPanelVisible}
                // sliderMinHeight={80}
                sliderMaxHeight={Dimensions.get('window').height * 4} 
                
              wrapperStyle={{ borderTopRightRadius: 0, borderTopLeftRadius: 0 }}
                lineContainerStyle={{ display: 'none' }}
              >
          <View
      style={{
        // padding: 20,
        backgroundColor: '#fff',
      }}
    >
      <Text
        style={{
          fontSize: 20,
          fontWeight: 'bold',
          marginBottom: 10,
          marginTop: 10,
          color: 'black',
          textAlign: 'center'
        }}
      >
        Transfer Ticket
      </Text>

      <Divider />

      <Text
        style={{
          fontSize: 16,
          marginTop: 6,
          marginBottom: 30,
          fontWeight: 'bold',
        }}
      >
        1 Tickets Selected
      </Text>

      <View style={{ marginBottom: 15 }}>
        <Text style={{ marginBottom: 5,  fontWeight: 'bold', color: 'black'  }}>First Name</Text>
        <TextInput 
          style={{
            height: 40,
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 5,
            paddingHorizontal: 10,
          }} 
        />
      </View>

      <View style={{ marginBottom: 15 }}>
        <Text style={{ marginBottom: 5,  fontWeight: 'bold', color: 'black'  }}>Last Name</Text>
        <TextInput 
          style={{
            height: 40,
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 5,
            paddingHorizontal: 10,
          }} 
        />
      </View>

       <View style={{ marginBottom: 15 }}>
        <Text style={{ marginBottom: 5,  fontWeight: 'bold', color: 'black'  }}>Email or Phone number</Text>
        <TextInput 
          style={{
            height: 40,
            borderColor: 'black',
            borderWidth: 1,
            borderRadius: 5,
            paddingHorizontal: 10,
            color: '#007BFF',
          }} 
        />
      </View>


       <View style={{ marginBottom: 15 }}>
        <Text style={{ marginBottom: 5,  fontWeight: 'bold', color: 'black' }}>Note</Text>
        <TextInput 
          style={{
            height: 80,
            borderColor: 'black',
            // fontWeight: 'bold',
            borderWidth: 1,
            borderRadius: 5,
            paddingHorizontal: 10,
            paddingTop: 0,
            paddingBottom: 0,
          }} 
          multiline 
        />
      </View>


      <View
      style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}
      >
        <TouchableOpacity
        style={{
          // marginBottom: 10,
        }}
        >
        <Text
          style={{
            color: '#007BFF',
            textAlign: 'center',
            fontSize: 20,
          }}
        >
          {'< BACK'}
        </Text>
        
      </TouchableOpacity>


      <TouchableOpacity
        style={{
          backgroundColor: '#007BFF',
          padding: 15,
          borderRadius: 2,
          alignItems: 'center',
          marginBottom: 10,
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <Text
          style={{
            fontSize: 20,
            color: '#fff',
            // fontWeight: 'bold',
          }}
        >
          Transfer 1 Ticket
        </Text>
      </TouchableOpacity>

      

      </View>


    </View>
    </BottomSheet>
        </View>
          </TouchableWithoutFeedback>
        )} */}

        
      </View>
    </>
  );
};



const styles = StyleSheet.create({
  eventImage: {
    width: '100%',
    height: 250,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    justifyContent: 'flex-end', // Position the BottomSheet at the bottom
  },
  overlay2: {
    ...StyleSheet.absoluteFillObject,
    // backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    justifyContent: 'flex-end', // Position the BottomSheet at the bottom
  },
});

export default TicketDetails;













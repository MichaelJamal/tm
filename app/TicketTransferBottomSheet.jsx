import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal } from 'react-native';

const TicketTransferBottomSheet = () => {
  const [selectedSeat, setSelectedSeat] = useState(null);
  const totalTickets = 2;

  return (
    <Modal
      transparent={true}
      animationType="slide"
      visible={true}
    >
      <View style={{
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        justifyContent: 'center',
      }}>
        <Text style={{
          fontSize: 18,
          fontWeight: 'bold',
          marginBottom: 10,
        }}>SELECT TICKETS TO TRANSFER</Text>
        <Text style={{
          fontSize: 16,
          marginBottom: 20,
        }}>Sec 151, Row 15</Text>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 20,
        }}>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: '#007BFF',
              borderRadius: 5,
              padding: 10,
              alignItems: 'center',
              width: '48%',
              backgroundColor: selectedSeat === 'seat11' ? '#007BFF' : '#fff',
            }}
            onPress={() => setSelectedSeat('seat11')}
          >
            <Text style={{
              color: selectedSeat === 'seat11' ? '#fff' : '#007BFF',
            }}>SEAT 11</Text>
            {selectedSeat === 'seat11' && <Text style={{
              fontSize: 18,
              position: 'absolute',
              right: 10,
              top: 10,
            }}>✔️</Text>}
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: '#007BFF',
              borderRadius: 5,
              padding: 10,
              alignItems: 'center',
              width: '48%',
              backgroundColor: selectedSeat === 'seat12' ? '#007BFF' : '#fff',
            }}
            onPress={() => setSelectedSeat('seat12')}
          >
            <Text style={{
              color: selectedSeat === 'seat12' ? '#fff' : '#007BFF',
            }}>SEAT 12</Text>
            {selectedSeat === 'seat12' && <Text style={{
              fontSize: 18,
              position: 'absolute',
              right: 10,
              top: 10,
            }}>✔️</Text>}
          </TouchableOpacity>
        </View>
        <Text style={{
          textAlign: 'center',
          marginBottom: 20,
        }}>{totalTickets - (selectedSeat ? 1 : 0)} Selected</Text>
        <TouchableOpacity style={{
          backgroundColor: '#007BFF',
          padding: 15,
          borderRadius: 5,
          alignItems: 'center',
        }}>
          <Text style={{
            color: '#fff',
            fontWeight: 'bold',
          }}>TRANSFER TO</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default TicketTransferBottomSheet;

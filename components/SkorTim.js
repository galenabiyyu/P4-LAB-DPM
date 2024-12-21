import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const SkorTim = ({ namaTim, skor, onTambah, onKurang }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.namaTim}>{namaTim}</Text>
      <Text style={styles.skor}>{skor}</Text>
      <View style={styles.tombolContainer}>
        <TouchableOpacity style={styles.tombolTambah} onPress={onTambah}>
          <Text style={styles.teksTombol}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tombolKurang} onPress={onKurang}>
          <Text style={styles.teksTombol}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: 15,
    borderRadius: 10,
    margin: 10,
    width: 150,
  },
  namaTim: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFF',
    textAlign: 'center',
  },
  skor: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#FFD700',
  },
  tombolContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  tombolTambah: {
    backgroundColor: '#4CAF50',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  tombolKurang: {
    backgroundColor: '#FF6347',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  teksTombol: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default SkorTim;


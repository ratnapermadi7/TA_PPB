import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function Cat({ navigation }) {
  return (
    <View style={{ flex: 1, paddingTop: 20 }}>
      <TouchableOpacity onPress={() => navigation.navigate('Oren', { msg: null })}>
        <View style={styles.oddItemListContainer}>
          <Image source={require('../assets/orange.jpg')} style={styles.ImageMovie} />
          <View style={styles.itemListContent}>
            <Text style={styles.itemListText}>Oren</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('White', { msg: null })}>
        <View style={styles.oddItemListContainer}>
          <Image source={require('../assets/white.jpg')} style={styles.ImageMovie} />
          <View style={styles.itemListContent}>
            <Text style={styles.itemListText}>White</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Grey', { msg: null })}>
        <View style={styles.oddItemListContainer}>
          <Image source={require('../assets/grey.jpg')} style={styles.ImageMovie} />
          <View style={styles.itemListContent}>
            <Text style={styles.itemListText}>Grey</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Brown', { msg: null })}>
        <View style={styles.oddItemListContainer}>
          <Image source={require('../assets/brown.jpeg')} style={styles.ImageMovie} />
          <View style={styles.itemListContent}>
            <Text style={styles.itemListText}>Brown</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Devon', { msg: null })}>
      <View style={styles.oddItemListContainer}>
        <Image source={require('../assets/brown.jpeg')} style={styles.ImageMovie} />
        <View style={styles.itemListContent}>
          <Text style={styles.itemListText}>Brown</Text>
        </View>
      </View>
    </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  flatlist: {
    flex: 1,
    marginHorizontal: 10,
  },
  oddItemListContainer: {
    marginHorizontal: 20,
    height: 100,
    backgroundColor: '#FFFFFF',
    marginVertical: 5,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    shadowRadius: 5,
    shadowOpacity: 0.4,
    shadowColor: '#000000',
  },
  ImageMovie: {
    height: 70,
    width: 70,
    borderRadius: 60,
    marginVertical: 10,
  },
  itemListContent: {
    marginLeft: 10,
  },
  itemListText: {
    color: '#000000',
    marginVertical: -4,
    fontWeight: 'bold',
    fontSize: 21,
  },
});

export default Cat;

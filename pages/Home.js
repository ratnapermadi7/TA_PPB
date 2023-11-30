import { View, Text, Image, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

function Home({ navigation }) {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground source={require('../assets/bgcat.jpg')} resizeMode="cover" style={styles.image}>
        <View style={styles.card}>
          <Text style={styles.text1}>Looking for a cat!</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('AllCats', { msg: null })}
            style={{
              backgroundColor: '#434655',
              paddingVertical: 20,
              marginBottom: 10,
              borderRadius: 10,
              elevation: 2,
              marginHorizontal: 10,
            }}
          >
            <Text style={{ color: '#FFF8EA', textAlign: 'center', fontWeight: 'bold', fontSize: 28 }}>GO!</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text1: { color: '#434655', textAlign: 'center', fontWeight: '500', fontSize: 26, marginBottom: 20 },
  headerContainer: {
    backgroundColor: '#344E41',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 15,
    alignItems: 'center',
    paddingBottom: 10,
  },
  headerImage: {
    height: 120,
    width: 100,
  },
  headerText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  flatlist: {
    flex: 1,
    marginHorizontal: 10,
  },
  oddItemListContainer: {
    height: 100,
    backgroundColor: '#588157',
    marginVertical: 5,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#F2F2F2',
    borderRadius: 24,
    marginTop: 250,
    marginHorizontal: 35,
    padding: 30,
    borderWidth: 1,
    borderColor: '#434655',
  },
});

export default Home;

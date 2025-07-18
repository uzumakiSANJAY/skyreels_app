import { StyleSheet } from 'react-native';

const HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: '#222',
  },
  navItem: {
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 14,
  },
  hero: {
    height: 350,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
  },
  heroHeading: {
    color: '#fff',
    fontSize: 22,
    fontStyle: 'italic',
  },
  heroSubheading: {
    color: 'gold',
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 8,
    textTransform: 'uppercase',
  },
  button: {
    backgroundColor: '#8B4513',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  sectionTitle: {
    textAlign: 'center',
    backgroundColor: '#FFA500',
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 10,
    textTransform: 'uppercase',
  },
  contentBlock: {
    padding: 20,
    alignItems: 'center',
  },
  contentImage: {
    width: 300,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 15,
  },
  description: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
    lineHeight: 20,
  },
  logoInline: {
    width: 40,
    height: 30,
    resizeMode: 'contain',
    marginRight: 10,
  },
  
  navLinks: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 40,
  },
});

export default HomeStyles;
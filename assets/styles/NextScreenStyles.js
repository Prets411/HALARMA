import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#E0E1E0',
    paddingHorizontal: 20,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  
  },
 
  logoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 150,
    
  },
  image: {
    width: 300,
    height:200,
    
    marginBottom: 10,
  },
  subtitleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  subtitle: {
    fontSize: 15,
    color: '#4A4A4A', // Darker gray for better contrast
    textAlign: 'center',
    paddingHorizontal: 22,
    fontWeight: 'bold', 
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 40,
  },
  button: {
    backgroundColor: '#8B0000', // Primary color for buttons
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderRadius: 50,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF', // White text for contrast
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;

// // SplashScreen.js
// import React, { useEffect } from "react";
// import { View, StyleSheet } from "react-native";
// // import FastImage from "react-native-fast-image";

// const SplashScreen = ({ navigation }) => {
//   useEffect(() => {
//     const splashTimer = setTimeout(() => {
//       navigation.replace("MainScreen"); // Replace with the name of your main screen
//     }, 3000); // Adjust the duration (in milliseconds) as needed

//     return () => clearTimeout(splashTimer);
//   }, [navigation]);

//   return (
//     <View style={styles.container}>
//       <FastImage
//         source={{
//           uri: require("../assets/splashScreen.gif"),
//           priority: FastImage.priority.normal,
//         }}
//         style={styles.gif}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "white",
//   },
//   gif: {
//     width: "100%",
//     height: "100%",
//   },
// });

// export default SplashScreen;

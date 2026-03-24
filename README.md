# Mobile
sudo apt update
sudo apt install -y nodejs npm
npm install --global expo-cli
npx create-expo-app projetoMobile --template blank@sdk-54

cd projeto
npx expo install react-dom react-native-web
npx expo start -c --tunnel


# Dependencias
npx expo install @react-navigation/native @react-navigation/bottom-tabs react-native-screens react-native-safe-area-context
npm install @react-navigation/native @react-navigation/bottom-tabs @react-navigation/drawer
npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated

# Pacote expo
npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated
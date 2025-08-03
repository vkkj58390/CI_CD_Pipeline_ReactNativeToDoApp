import '@testing-library/jest-native/extend-expect';

console.log('jest-setup.js loaded');

// Mock AsyncStorage
jest.mock('@react-native-async-storage/async-storage', () => ({
  getItem: jest.fn(() => Promise.resolve(null)),
  setItem: jest.fn(() => Promise.resolve()),
  removeItem: jest.fn(() => Promise.resolve()),
}));

// Mock useColorScheme hook
jest.mock('react-native/Libraries/Utilities/useColorScheme', () => ({
  __esModule: true,
  default: () => 'light',  // eller 'dark', alt efter hvad du foretrækker
}));

// Import jest-native matcher (det kan du også have med øverst)
require('@testing-library/jest-native/extend-expect');

jest.mock('@expo-google-fonts/inter', () => ({
  Inter_500Medium: 'Inter_500Medium',
  useFonts: () => [true, false],  // fonts loaded, no error
}));

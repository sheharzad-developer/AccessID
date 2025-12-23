# AccessID – Digital Disability Certificate Wallet

> A React Native mobile application that enables users to securely store, view, and manage their disability certificates offline with accessibility-first design principles.

## 📱 Project Overview

AccessID is a portfolio project demonstrating modern React Native development practices with a focus on accessibility, security, and user experience. The app allows users to upload PDF certificates, store them locally on their device, and access them securely with biometric authentication. Built with TypeScript and Expo, it showcases clean architecture, proper state management, and inclusive design.

## ✨ Key Features

| Feature | Description |
|---------|-------------|
| **📄 PDF Certificate Management** | Upload and store disability certificates as PDF files with offline access |
| **🔒 Biometric Authentication** | Secure access using Face ID, Touch ID, or fingerprint recognition |
| **📱 Offline-First Storage** | Certificates stored locally on device using Expo File System |
| **♿ Accessibility Features** | Large text mode and high contrast settings for inclusive design |
| **📊 QR Code Verification** | Generate QR codes for certificate verification (demo feature) |
| **🎨 Clean Architecture** | Well-organized folder structure with separation of concerns |
| **🔐 Type-Safe Navigation** | TypeScript navigation types for safe routing |
| **🎯 Context-Based State** | React Context API for global accessibility settings |

## 🛠 Tech Stack

### Core Technologies
- **React Native** (0.81.5) with **Expo** (~54.0.30)
- **TypeScript** (5.9.2)
- **React Navigation** (v7) - Native Stack Navigator

### Key Libraries
- `expo-local-authentication` - Biometric authentication
- `expo-file-system` - Local file storage
- `expo-document-picker` - PDF file selection
- `expo-barcode-generator` - QR code generation
- `react-native-safe-area-context` - Safe area handling
- `react-native-screens` - Native screen optimization

### Development Tools
- TypeScript for type safety
- Expo development build support

## 📸 Screenshots

_Coming soon - Screenshots of key screens and features_

<!-- Add screenshots here:
- Dashboard screen
- Certificate viewer with biometric prompt
- QR verification screen
- Accessibility settings
-->

## 🚀 Installation & Running

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- iOS Simulator (Mac) or Android Emulator / Physical device

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd AccessID
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   # or
   expo start
   ```

4. **Run on device/simulator**
   ```bash
   # iOS
   npm run ios
   
   # Android
   npm run android
   
   # Web (limited functionality)
   npm run web
   ```

### Building for Production

For iOS/Android builds, use Expo's build service or create a development build:

```bash
# Development build
npx expo run:ios
npx expo run:android
```

## 📁 Project Structure

```
AccessID/
├── src/
│   ├── assets/              # Images, icons, and static assets
│   ├── components/          # Reusable UI components
│   │   ├── AppText.tsx      # Accessible text component
│   │   ├── CertificateCard.tsx
│   │   └── PrimaryButton.tsx
│   ├── context/             # React Context providers
│   │   └── AccessibilityContext.tsx
│   ├── data/                # Mock data and constants
│   │   └── mockCertificate.ts
│   ├── navigation/          # Navigation configuration
│   │   └── AppNavigator.tsx
│   ├── screens/             # Screen components
│   │   ├── DashboardScreen.tsx
│   │   ├── CertificateViewerScreen.tsx
│   │   ├── CertificateWalletScreen.tsx
│   │   ├── QRVerificationScreen.tsx
│   │   ├── LoginScreen.tsx
│   │   └── SettingsScreen.tsx
│   ├── theme/               # Design system
│   │   ├── colors.ts
│   │   └── typography.ts
│   ├── types/               # TypeScript type definitions
│   │   ├── certificate.ts
│   │   └── navigation.ts
│   └── utils/               # Utility functions
│       └── storage.ts
├── assets/                  # App icons and splash screens
├── App.tsx                  # Root component
├── app.json                 # Expo configuration
└── package.json
```

## 💼 Notes for Recruiters

This project demonstrates several important software engineering principles and React Native best practices:

### 🏗 Architecture & Code Quality
- **Clean folder structure** - Organized by feature with clear separation of concerns
- **TypeScript throughout** - Type-safe code with proper interfaces and types
- **Scalable navigation** - Type-safe navigation with React Navigation v7
- **Reusable components** - Custom components following DRY principles

### ♿ Accessibility Excellence
- **WCAG-compliant design** - Large text and high contrast modes
- **Context-based state management** - Global accessibility settings
- **Accessible components** - Proper `accessibilityLabel` usage and minimum touch targets
- **User preference persistence** - Settings that persist across app sessions

### 🔐 Security Best Practices
- **Biometric authentication** - Secure access using device-native biometrics
- **Offline-first storage** - Sensitive data stored locally, not in cloud
- **Type-safe code** - Reduced runtime errors through TypeScript

### 📱 Modern React Native Development
- **Expo SDK 54** - Latest stable Expo features
- **React 19** - Modern React patterns
- **Native modules** - Integration with device capabilities (biometrics, file system)

### 🎨 User Experience
- **Offline functionality** - Works without internet connection
- **Intuitive navigation** - Clear user flow and navigation structure
- **Professional UI** - Clean, modern interface with consistent styling

## 🔮 Future Enhancements

Potential improvements and features for future iterations:

- [ ] Cloud backup and sync functionality
- [ ] Multiple certificate management
- [ ] Certificate expiration reminders
- [ ] Dark mode support
- [ ] Certificate sharing capabilities
- [ ] Advanced search and filtering
- [ ] Certificate validation with backend API
- [ ] Multi-language support (i18n)
- [ ] Unit and integration tests
- [ ] Performance optimizations for large PDFs
- [ ] Certificate categories and tags
- [ ] Export functionality (email, print)

## ⚠️ Important Notice

**QR verification is a demo feature and does not represent an official government verification system.**

This is a portfolio/demo project created to showcase React Native development skills and accessibility practices. It is not affiliated with any government agency or official disability certification system.

## 📄 License

This project is created for portfolio/demonstration purposes. Please respect the intellectual property and do not use for commercial purposes without proper authorization.

---

**Built with ❤️ using React Native and Expo**

_For questions or feedback, please open an issue or contact the repository owner._

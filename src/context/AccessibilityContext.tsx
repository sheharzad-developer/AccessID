import { createContext, useContext, useState } from 'react';

interface AccessibilityContextType {
  largeText: boolean;
  highContrast: boolean;
  toggleLargeText: () => void;
  toggleHighContrast: () => void;
}

const AccessibilityContext = createContext<AccessibilityContextType>(
  {} as AccessibilityContextType
);

export const AccessibilityProvider = ({ children }: any) => {
  const [largeText, setLargeText] = useState(false);
  const [highContrast, setHighContrast] = useState(false);

  return (
    <AccessibilityContext.Provider
      value={{
        largeText,
        highContrast,
        toggleLargeText: () => setLargeText(!largeText),
        toggleHighContrast: () => setHighContrast(!highContrast),
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};

export const useAccessibility = () => useContext(AccessibilityContext);
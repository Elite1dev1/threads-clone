import { createContext, useContext } from 'react';
import { useToast } from '@chakra-ui/react';

const ShowToastContext = createContext();

export const ShowToastProvider = ({ children }) => {
  const toast = useToast();

  const showToast = (title, description, status) => {
    toast({
      title,
      description,
      status,
      duration: 3000,
      isClosable: true,
      position: "top-right"
    });
  };

  return (
    <ShowToastContext.Provider value={showToast}>
      {children}
    </ShowToastContext.Provider>
  );
};

export const useShowToast = () => {
  const context = useContext(ShowToastContext);
  if (context === undefined) {
    throw new Error('useShowToast must be used within a ShowToastProvider');
  }
  return context;
}; 
const swRegister = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
      .then((registration) => {
        console.log(`Sw registered: ${registration}`);
      })
      .catch((error) => {
        console.log(`RegistrationError: ${error}`);
      });
  } else {
    console.log('Service worker not supported in this browser');
  }
};

export default swRegister;

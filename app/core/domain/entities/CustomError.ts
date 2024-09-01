export default class CustomError extends Error {
    message: string;
  
    constructor(message: string) {
      super();
      this.message = message;
    }
  
    getErrorMessage() {
      return this.message;
    }
  
    setErrorMessage(newMessage: string) {
      this.message = newMessage;
    }
  
    async logError() {
        //Here we can log errors in an external tool if we want
    }
  
    generateError() {
      throw new CustomError(this.message);
    }
  }
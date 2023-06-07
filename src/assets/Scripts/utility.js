import NotFound from "../../pages/ErrorPages/NotFound/NotFound";

const validateMobileNumber = (number) => {
    const regex = /^(?:\+88)?01[3-9][0-9]{8}$/;

    // Remove "+88" if it exists
    const formattedNumber = number.replace(/^\+88/, '');

    // Check if the formatted number matches the regex pattern
    return regex.test(formattedNumber);
};

const validateEmail = (email) => {
    const regex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    return regex.test(email);
};

const fetchJson = async (path) =>{

    try {
        const response = await fetch(path);
        
        if (response.ok) {
          const data = await response.json();
          return data;
        } else {
          // If the response is not successful, return an empty array
          return false;
        }
      } catch (error) {
        // console.error('Error fetching data:', error);
        // Return an empty array in case of an error
        return false;
      }

}


export {
    validateMobileNumber,
    validateEmail,
    fetchJson
}
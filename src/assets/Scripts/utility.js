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

const validateImage = (file) => {
  if (file && file[0]) {
    const supportedFormats = ['image/jpeg', 'image/png', 'image/gif'];
    const { type, size } = file[0];

    if (!supportedFormats.includes(type)) {
      return 'Only JPEG, PNG, and GIF images are allowed.';
    }

    if (size > 3 * 1024 * 1024) {
      return 'Image size should not exceed 3MB.';
    }
  }

  return true;
};


export {
    validateMobileNumber,
    validateEmail,
    fetchJson,
    validateImage
}
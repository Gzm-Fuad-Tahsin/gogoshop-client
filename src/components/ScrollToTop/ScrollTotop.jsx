import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

function ScrollToTop() {
  // const {loading,setLoading} = useContext(AuthContext); 
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  return null;
}

export default ScrollToTop;

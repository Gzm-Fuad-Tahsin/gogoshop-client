import React from 'react';
import ScrollToTop from '../../../components/ScrollToTop/ScrollTotop';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <ScrollToTop />
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <svg
                    className="w-48 h-48 text-gray-400 mb-8"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Error 404</h1>
                <p className="text-xl text-gray-600 mb-8">Oops! The page you&apos;re looking for is not found.</p>
                <Link to='/' className="bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600">
                    Go Back
                </Link>
            </div>
        </div>
    );
};

export default NotFound;
import React from 'react';

export const Spinner: React.FC<{ size?: number }> = ({ size = 24 }) => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-white/75 z-50">
      <svg
        className="animate-spin text-blue-600"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        aria-label="Loading"
        role="img"
      >
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
      </svg>
    </div>
  );
};

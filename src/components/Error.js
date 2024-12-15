import React from 'react';

const Error = ({ error }) => {
  return (
    <div className="flex flex-col  w-2/6 h-64 items-center justify-center bg-white p-4 rounded shadow-md">
      <h2 className="text-red-600 text-xl font-bold">Došlo k chybě</h2>
      {error && <p className="text-red-500 mt-2">{error.message || error}</p>}
      <p className="text-gray-500 text-sm mt-1">Zkuste to prosím později.</p>
    </div>
  );
};

export default Error;

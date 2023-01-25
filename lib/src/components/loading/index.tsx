import React from 'react';
import ReactLoading from 'react-loading';

const Loading = () => {
  return (
    <div className="w-screen h-screen grid place-content-center bg-opacity-60">
      <ReactLoading type="spinningBubbles" color="#4895ef" />
    </div>
  );
};

export default Loading;

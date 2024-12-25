import React from 'react';
import { PropagateLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <PropagateLoader color="#1ad570" loading={true} size={15} />
    </div>
  );
};

export default Loading;



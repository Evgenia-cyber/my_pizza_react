import React from 'react';
import ContentLoader from 'react-content-loader';

const PizzaLoader = () => {
  return (
    <ContentLoader
      speed={2}
      width={320}
      height={527}
      viewBox="0 0 320 527"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      // {...props}
    >
      <circle cx="145" cy="130" r="130" />
      <rect x="20" y="403" rx="5" ry="5" width="80" height="30" />
      <rect x="59" y="311" rx="5" ry="5" width="183" height="75" />
      <rect x="38" y="274" rx="5" ry="5" width="216" height="24" />
      <rect x="115" y="399" rx="20" ry="20" width="170" height="40" />
    </ContentLoader>
  );
};

export default PizzaLoader;

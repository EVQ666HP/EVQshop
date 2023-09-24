import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={330}
    height={480}
    viewBox="0 0 330 480"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="1" rx="44" ry="44" width="325" height="360" />
    <rect x="1" y="370" rx="17" ry="17" width="320" height="74" />
  </ContentLoader>
);

export default Skeleton;

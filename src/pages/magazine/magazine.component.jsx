import React from 'react';

import './magazine.styles.css';
import Card from '../../components/card/card.component';

const Magazine = ({ title , imageUrl , ...otherSectionProps }) => {
  return (
    <div className="magazine">
      <Card title={title} imageUrl={imageUrl} {...otherSectionProps} />
    </div>
  );
};

export default Magazine;
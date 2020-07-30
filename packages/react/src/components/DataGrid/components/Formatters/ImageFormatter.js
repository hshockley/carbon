import React from 'react';

export function ImageFormatter({ value }) {
  return (
    <div className="rdg-image-cell-wrapper">
      <div
        className="rdg-image-cell"
        style={{ backgroundImage: `url(${value})` }}
      />
    </div>
  );
}

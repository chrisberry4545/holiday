import * as React from 'react';

export const TEST_ICON = () => {
  return (
    <svg
        width='100%'
        height='100%'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
    >
        <defs>
            <g id='Port'>
                <circle style={{fill: 'inherit'}} r='10'/>
            </g>
        </defs>

        <use x='70' y='10' xlinkHref='#Port' />
    </svg>
  );
};

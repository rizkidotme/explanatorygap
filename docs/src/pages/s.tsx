import React from 'react';
import Link from '@docusaurus/Link';

/* rewrite the code:
root/docs/src/pages/s.tsx
const React = require('react');
const Redirect = () => <div>
  <meta httpEquiv="refresh" content="0; url=https://www.google.com/search?q=rizkidotme" />
</div>

module.exports = Redirect;

to match docusaurus typescript templete */ 

// update s.tsx file: 
// const React = require('react');
// const Redirect = () => <div>
//   <meta httpEquiv="refresh" content="0; url=https://www.google.com/search?q=rizkidotme" />
// </div>

// module.exports = Redirect;

// to match docusaurus typescript templete

const Redirect = () => <div>
  <meta httpEquiv="refresh" content="0; url=https://www.google.com/search?q=rizkidotme" />
</div>

export default Redirect;
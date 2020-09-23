import React from 'react';

function Footer() {
  return (
    <div className="footer">
      <hr />

      <div
        className="copyright"
        style={{ display: 'flex', alignItems: 'center' }}
      >
        <img
          src={require('assets/images/red-panda.svg')}
          alt="Red panda"
          style={{ height: '2rem', paddingRight: '15px' }}
        />
        Made with love &hearts; by Ruaridh James 2020 &copy;
      </div>
    </div>
  );
}

export default Footer;

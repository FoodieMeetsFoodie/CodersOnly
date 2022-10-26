import React from 'react';
import HTMLReactParser from 'html-react-parser';
import '../stylesheets/CodingCollab.css';

const CodingCollab = (props) => {
  return (
    <div className="codepen">
      <iframe
        className="codepen"
        src="https://codesandbox.io/embed/purple-cherry-h88tul?autoresize=1&expanddevtools=1&fontsize=14&hidenavigation=1&theme=dark"
        title="Vanilla"
        allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
        sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
      ></iframe>
    </div>
  );
};

export default CodingCollab;

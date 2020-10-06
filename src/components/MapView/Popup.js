import React from 'react';

const Popup = ({ feature }) => {
    const { id, name, description } = feature.properties;

    return (
        <div id={`popup-${id}`} className="popupdiv">
            <h3>{name}</h3>
            {description}
        </div>
    );
};

export default Popup;
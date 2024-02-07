import React from 'react';

export default function LinkedButton({props}) {
    const handleClick = () => {
        window.open(props.url, "_blank", "noopener", "noreferrer");
    };

    return (
        <>
            <button onClick={handleClick}>
                {props.name}
            </button>
        </>
    );
}
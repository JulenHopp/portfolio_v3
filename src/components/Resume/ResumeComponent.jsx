import React from "react";
import './ResumeComponent.css';

export default function ResumeComponent({props}) {
    return(
        <>
            <iframe src={props.resumePath} width="100%" height="100%" title="Resume"/>
            <p>If you can't view the document, <a className="download-link" href={props.resumePath} target="_blank" rel="noopener noreferrer">click here</a> to download or view it in a new tab.</p>
        </>
    )
}

import React from 'react'

function Project(props) {
    return (
        <div class="">
            <p>{props.name}</p>
            <a
                href={props.link}
                target="_blank"
                without
                rel="noreferrer"
            >
                <img src={props.img} id="projImg" alt={props.alt} />
            </a>
            <p>
                <a
                    href={props.link}
                    target="_blank"
                    without
                    rel="noreferrer"
                >
                    deployed app
                </a>
                ||
                <a
                    href={props.git}
                    target="_blank"
                    without
                    rel="noreferrer"
                >
                    repo
                </a>
            </p>
        </div>
    )
}

export default Project
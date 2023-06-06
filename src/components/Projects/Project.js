import React from 'react'

function Project(props) {
    return (
        <div className="">
            <p>{props.name}</p>
            <a
                href={props.link}
                target="_blank"

                rel="noreferrer"
            >
                <img src={props.img} id="projImg" alt={props.alt} />
            </a>
            <p>
                <a
                    href={props.link}
                    target="_blank"

                    rel="noreferrer"
                >
                    deployed app
                </a>
                ||
                <a
                    href={props.git}
                    target="_blank"

                    rel="noreferrer"
                >
                    repo
                </a>
            </p>
        </div>
    )
}

export default Project
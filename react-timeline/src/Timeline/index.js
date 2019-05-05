import React from 'react'
import './style.css'

const Timeline = ({ data }) => {
    return (
        <div className="timeline-container">
            {
                data.map((timeline, index) => (
                    <div className="timeline-item">
                        <div key={index} className="timeline-item-content">
                            <span
                                className="tag"
                                style={{ background: timeline.category.color }}>
                                {timeline.category.tag}
                            </span>
                            <time>{timeline.date}</time>
                            <p>{timeline.text}</p>
                            <a
                                href={timeline.link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {timeline.link.text}
                            </a>
                            <span className="circle" />
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Timeline
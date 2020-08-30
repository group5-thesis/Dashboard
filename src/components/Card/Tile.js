import React from 'react';
import Icon from '@mdi/react';

export default function Tile({ ...content }) {
    return (
        <div className="tile is-parent">
            <div className="card tile is-child" style={{
                boxShadow: "5px 6px 5px -0.125em rgba(10, 10, 10, 0.1)"
            }}>
                <div className="card-content">
                    <div className="level is-mobile">
                        <div className="level-item">
                            <div className="is-widget-label"><h3 className="subtitle is-spaced">
                                {content.title}
                            </h3>
                                <h1 className="title">
                                    {content.subtitle}
                                </h1>
                            </div>
                        </div>
                        <div className="level-item has-widget-icon">
                            <div className="is-widget-icon">
                                <span className="icon has-text-primary is-large">
                                    <Icon {...content.icon} />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
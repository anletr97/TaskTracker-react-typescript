import React, { Component } from 'react';
import './style.css';

type CardProps = {
    hasHeader: boolean;
}

export class Card extends Component<CardProps, {}> {
    public static defaultProps = {
        hasHeader: false,
    }

    render() {
        return(
            <div className="card-container">
            </div>
        );
    }
}
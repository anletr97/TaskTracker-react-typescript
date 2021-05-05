import React from 'react';
import { CardContent } from './card-content';
import { CardEmpty } from './card-empty';
import { CardHeader } from './card-header';
import './style.css';

type CardProps = {
    hasHeader: boolean
}

export class Card extends React.Component<CardProps> {

    getCardTemplate() {
        if (!this.props.hasHeader) {
            return <CardEmpty />
        } else {
            return (
                <div className="card-container">
                    <CardHeader />
                    <CardContent />
                </div>
            );
        }
    }
    /** Main render */
    render() {
        return (
            this.getCardTemplate()
        );
    }
}
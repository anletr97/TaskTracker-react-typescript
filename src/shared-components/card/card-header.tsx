import React from "react";

type CardHeaderProps = {
    text: string,
}

export class CardHeader extends React.Component<CardHeaderProps> {
    render() {
        return(
            <div className="card-header">
                <h3>{this.props.text}</h3>
            </div>
        );
    }
}
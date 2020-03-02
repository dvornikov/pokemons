import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

export const Pokemon = (props) => {
    const { sprites: { front_default: cover = '' }} = props;

    return (
        <Card
            hoverable
            cover={cover && <img alt={props.name} src={cover} />}
        >
            <Meta title={props.name} />
        </Card>
    );
};

export default Pokemon;
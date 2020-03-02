import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { DeleteOutlined, EllipsisOutlined } from '@ant-design/icons';

const { Meta } = Card;

export const Pokemon = (props) => {
    const { sprites: { front_default: cover = '' }} = props;

    return (
        <Card
            cover={
                cover &&
                <img alt={props.name} src={cover} />
            }
            actions={[
                <DeleteOutlined key="delete" onClick={() => props.onDelete(props.name)} />,
                <Link key="ellipsis" to={ROUTES.POKEMON.replace(':name', props.name)}>
                    <EllipsisOutlined />
                </Link>
            ]}
        >
            <Meta title={props.name} />
        </Card>
    );
};

export default Pokemon;
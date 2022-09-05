import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [item, setItem] = useState();

    useEffect(() => {
        const getItem = new Promise ((resolve, reject) => {
            setTimeout(() => {
                resolve([
                    {id: 'mouse_7B', type: 'Mouse', title: 'Gaming Mouse', description: '7 button gaming mouse', regularPrice: 220, picture1Url: 'img/mouse2.jpeg'}
                ]);
            }, 2000);
        });

        getItem
            .then((result) => {
                setItem(result[0]);
            });
    }, [])

    return (
        <>
            {item ? <ItemDetail item={item} /> : console.log('item undefined') }
        </ >
    )
}

export default ItemDetailContainer
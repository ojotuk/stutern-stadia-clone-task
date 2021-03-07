import React from 'react'

export default function CardComponent({item}) {
    return (
        <>
        <a href='/#'>
        <div className='game-card'>
            <img src={item.imageUrl} width='200px' alt='game'/>
            <p>{item.name}</p>
        </div>
        </a>
        </>
    )
}

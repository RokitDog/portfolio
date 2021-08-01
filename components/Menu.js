import React from 'react'
import Image from 'next/image'

export const Menu = ({menuItem}) => {
    return (
        <div className="menuItemStyled">
            {
                menuItem.map((item) =>{
                    return <div className="grid-item" key={item.id}>
                        <div className="portfolio-content">
                            <div className="portfolio-image">
                                <a href={item.link} target="_blank" rel="noreferrer">
                                    
                                    <Image className="pimg" 
                                    src={item.image} alt=""
                                    />
                                </a>
                            </div>
                            <h6>{item.title}</h6>
                            <p>{item.text}</p>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

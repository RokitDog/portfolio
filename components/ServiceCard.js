import Image from 'next/image'
import React from 'react'


export const ServiceCard = ({image, title, paragraph}) => {
    return (
        <div className="service-card">
            <div className="container">
                <Image src={image} 
                    width={85}
                    height={85}
                    alt="image"
                />
                <h4>{title}</h4>
                <p>{paragraph}</p>
            </div>
        </div>
    )
}

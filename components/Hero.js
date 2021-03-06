import React from 'react'
import styles from "../styles/Main.module.css";
import Particlee from './Particles';
import Image from 'next/image';
import avatar from '../public/avar.jpg'
import { Background } from './Background';


export const Hero = () => {


    return (
        <div className={styles.mainContent} id="home">
            

            <div className={styles.hero}>
                <Background />
                <div className={styles.typography}>
                    <Image 
                    className={styles.avatarImage}
                    src={avatar}
                    alt="Author"
                    width={250}
                    height={250}
                    objectFit='cover'
                    />
                    <h1>Hi I'm <span>Bojan!</span></h1>
                    <p>
                        I'm a self-taught Front End Web Developer with a Computer Science background. In other
                        words, I tried to mess with the hardware and ended up doing software instead. I'm trying to 
                        be on the edge when it comes to using new technology such as React JS, Next JS, Tailwind etc..
                    </p>
                </div>
            </div>
            
        </div>
    )
}

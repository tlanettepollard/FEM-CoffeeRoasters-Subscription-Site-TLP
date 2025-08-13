import React from "react";
import { useNavigate } from "react-router";


export default function SharedHero(props) {
    let navigate = useNavigate();
    const changeRoute = () => {
        let path = '/subscribe';
        navigate(path);
    }

    return (
        <section className={`hero container ${props.class}`}>
            <div className='hero__content'>
                <h2 className='hero__title'>
                    {props.title}
                </h2>
                <p className='hero__text'>
                    {props.desc}
                </p>
                <button onClick={changeRoute} className='btn btn-hero'>
                    {props.button}
                </button>
            </div>
        </section>
    );
};
import React from "react";
import SharedHero from "../components/Shared/SharedHero";
import { WorksItems } from "../components/Shared/WorksItems";
import dividerImg from '../assets/home/desktop/Divider.png';
import { Plans } from "../components/Subscribe/Plans";


export function Subscribe() {
    return (
        <main className='main__subscribe container'>
            <SharedHero class='subscribe' title='Create a plan' desc='Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.' />
            <section className="work">
                <div>
                    <img className='divider' src={dividerImg} alt="decorative divider" />
                </div>
                <div className="work__container">
                    <WorksItems />
                </div>

            </section>
            <Plans />


        </main>
    );
}
import React from "react";
import SharedHero from "../components/Shared/SharedHero";
import { WorkList } from "../components/Shared/WorkList";


export function Subscribe() {
    return (
        <main className='main__subscribe'>
            <SharedHero class='subscribe' title='Create a plan' desc='Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.' />
            <WorkList />

        </main>
    )
}
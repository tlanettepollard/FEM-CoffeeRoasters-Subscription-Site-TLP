import React from 'react';
import SharedHero from '../components/Shared/SharedHero';


export function Home() {
    return (
        <main className='main__home'>
            <SharedHero
                className='home'
                title='Great coffee made simple'
                desc='Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.'
                button='Create your plan'/>
        </main>
    )
}
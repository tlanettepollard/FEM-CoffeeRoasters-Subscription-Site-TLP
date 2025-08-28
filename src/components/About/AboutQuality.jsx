import { Quality } from "../planData";



export function AboutQuality() {
    return (
        <section className='quality container'>
            {Quality.map(qualityItem => {
                return <div key={qualityItem.id} className='quality__content'>
                    <div className='quality__details'>
                        <h2 className='quality__details__title'>{qualityItem.title}</h2>
                        <p className='quality__details__summary'>{qualityItem.summary}</p>
                    </div>
                    <div className='quality__img--container'>
                        <div className='quality__img'></div>

                    </div>
                </div>
            })}
        </section>
    );
}

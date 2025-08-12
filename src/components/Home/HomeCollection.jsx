import { Collections } from "../planData";

export function HomeCollection() {
    return (
        <section className='collection container'>
            <h2 className='collection__title'>Our collection</h2>
            <ul className='collection__list container'>
                {Collections.map(item => {
                    return <li className='collection__item' key={item.id}>
                        <div className='collection__img__container'>
                            <img className='collection__img' src={item.imgUrl} width={item.width} height={item.height} alt={`enjoy our ${item.title}`} />
                        </div>
                        <div className='collection__summary'>
                            <h3 className='collection__subtitle'>
                                {item.title}
                            </h3>
                            <p className='collection__details'>
                                {item.summary}
                            </p>
                        </div>
                    </li>
                })}
            </ul>
        </section>
    )
}
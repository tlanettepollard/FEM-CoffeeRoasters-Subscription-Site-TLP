import { Collections } from "../planData";

export function HomeCollection() {
    return (
        <section className='collection container'>
            <h2 className='collection__title'> Our collection</h2>
            <div className="collection__list container">
                {Collections.map(item => {
                    return <> <div className='collection__card' key={item.card}>
                        <img className='collection__img' src={item.imgUrl} width={item.width} height={item.height} alt={`enjoy our ${item.title}`} />

                        <div className="collection__content">
                            <h3 className="collection__subtitle">
                                {item.title}
                            </h3>
                            <p className="collections__details">
                                {item.summary}
                            </p>
                        </div>
                    </div>
                    </>
                })}
            </div>
        </section>
    )
}
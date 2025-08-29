import { Countries } from "../planData";

export function AboutLocation() {
    return (
        <section className='location container'>
            <h2 className='location__main__title'>Our headquarters</h2>
            <ul className='location__content'>
                {Countries.map(site => {
                    return <li key={site.id} className='location__list'>
                        <div className='location__img__container'>
                            <img className='location__img' src={site.imgUrl} width={site.width} height={site.height} alt={site.alt} />
                        </div>
                        <div className='location__details'>
                            <address>
                                <span className='location__title'>{site.country}</span>
                                <p className='location__address'>
                                    {site.street} <br />
                                    {site.city} <br />
                                    {site.postcode} <br />
                                    {site.phone} <br />
                                </p>
                            </address>
                        </div>
                    </li>
                })}
            </ul>
        </section>
    );
}
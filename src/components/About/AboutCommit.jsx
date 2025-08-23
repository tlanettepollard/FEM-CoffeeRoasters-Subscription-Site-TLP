import { Commitment } from "../planData";

export function AboutCommitment() {
    return (
        <section className='commit container'>
            {Commitment.map(commitItem => {
                return <div key={commitItem.id} className='commit__item'>
                    <>
                        <div className="commit__img"></div>
                    </>

                    <div className='commit__details'>
                        <h2 className='commit__details__title'>{commitItem.title}</h2>
                        <p className='commit__details__summary'>{commitItem.summary}</p>
                    </div>
                </div>
            })}

        </section>
    );
}
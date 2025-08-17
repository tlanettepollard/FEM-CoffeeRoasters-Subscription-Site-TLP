import { useNavigate } from "react-router";
import { WorksItems } from "./WorksItems";
import dividerImg from '../../assets/home/desktop/Divider.png';

export function WorkList() {
    let navigate = useNavigate();
    const changeRoute = () => {
        let path = '/subscribe';
        navigate(path);
    }

    return (
        <section className='work container'>
            <h2 className='work__title'>How it works</h2>
            <div className='work__container'>
                <img className='divider' src={dividerImg} alt="decorative divider" />
                <WorksItems />
                <div className='btn__container'>
                    <button onClick={changeRoute} className='btn btn-works'>
                        Create your plan
                    </button>
                </div>
            </div>
        </section>
    )
}
import { Info } from "../../utils/Interfaces";

const Header: React.FC<Info> = ({title, description}) => {
    return(
        <>
            <div className='col_full center-text top_sec'>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </>
    )
}

export default Header;
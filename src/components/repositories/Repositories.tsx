import React, { useEffect, useState } from 'react';
import Header from '../header/Header';
import Navbaricon from '../header/NavBar';
import RepositoriesList from './RepositoriesList';
import Url from '../../config/Url';
import Loading from '../../utils/Loading';
import { Info } from '../../utils/Interfaces';

const Repos: React.FC<Info> = ({ title, description }) => {
    const [dev, setDev] = useState({ devapi: [] });
    const [loading, setLoading] = useState(false);
    const { devapi: listingData } = dev;

    useEffect(() => {
        devApiData();
    }, [])

    const devApiData = async () => {
        setLoading(true)
        const response = await fetch(`${Url.REPO_LISTING_URL}`)
            .then(resp => resp.json())
            .then(data => {
                setDev({ devapi: data })
                setLoading(false)
            })
            .catch(error => console.log("Error:" + error));

        return response;
    }

    return (
        <>
            <Header title={title} description={description} />
            <div className="container">
                <div className="row">
                    <div className="col_full">
                        <div className="con_outer">
                            <Navbaricon />
                            {/* Repos listing section start here */}
                            {loading ? <Loading /> : <RepositoriesList listingData={listingData} />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Repos;
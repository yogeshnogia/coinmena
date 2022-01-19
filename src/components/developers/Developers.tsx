import React, { useEffect, useState } from 'react';
import Header from '../header/Header';
import Developerslist from './DevelopersList';
import Navbarcon from '../header/NavBar';
import AppUrl from '../../config/Url';
import Loading from '../../utils/Loading';
import { Info } from '../../utils/Interfaces';

const Developers: React.FC<Info> = ({ title, description }) => {

    const [dev, setDev] = useState({ devapi: [] });
    const [loading, setLoading] = useState(false);
    const { devapi: listingData } = dev

    useEffect(() => {
        devApiData();
    }, [])

    const devApiData = async () => {
        setLoading(true)
        const response = await new Promise((resolve, reject) => {
            fetch(`${AppUrl.DEVELOPER_LISTING_URL}`)
                .then(resp => resp.json())
                .then(data => {
                    setDev({ devapi: data })
                    setLoading(false)
                })
                .catch(error => {
                    console.log("Error:" + error)
                });
        })
        return response;
    }
    return (
        <>
            <Header title={title} description={description} />
            <div className="container">
                <div className="row">
                    <div className="col_full">
                        <div className="con_outer">
                            <Navbarcon />
                            {/* Developers listing section start here */}
                            {loading ? <Loading /> : <Developerslist listingData={listingData} />}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Developers;
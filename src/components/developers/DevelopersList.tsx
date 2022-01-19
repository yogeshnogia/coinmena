import React from 'react';

interface Props {
    listingData: any
}

const Developerslist: React.FC<Props> = ({ listingData }) => {
    console.log(listingData)
    return (
        <div className="">
            <table className="table">
                <tbody>
                    {listingData.map((data: any) =>
                        <tr id={data.rank} key={data.rank}>
                            <td>{data.rank}</td>
                            <td>
                                <div className="user_detail">
                                    <a href={data.url} target="_blank" className="user_avatar" style={{ background: `url(${data.avatar})` }} rel="noreferrer">
                                    </a>
                                    <div className="user_d_inner">
                                        <h6><a href={data.url} target="_blank" rel="noreferrer">{data.name}</a></h6>
                                        <span>{data.username}</span>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <p className="repo_title"><i className="p_fire icon_data"></i> POPULAR REPO</p>
                                {data.popularRepository.repositoryName !== "" && data.popularRepository.repositoryName !== null && <a href={data.popularRepository.url} target="_blank" rel="noreferrer" className="repo_name"><i className="p_repo icon_data"></i> {data.popularRepository.repositoryName}</a>
                                }
                                {data.popularRepository.description !== "" && data.popularRepository.description !== null && <p className="repo_description">{data?.popularRepository?.description}</p>
                                }
                            </td>
                            <td>
                                <div className="btn_m_con">
                                    <a href={`https://github.com/sponsors/${data.username}`} target="_blank" rel="noreferrer" className="btn_con"><i className="p_heart icon_data"></i>Sponsor</a>
                                    <a href="/" target="_blank" rel="noreferrer" className="btn_con">Follow</a>
                                </div>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Developerslist;
import React from 'react';
import uniqid from 'uniqid';

interface Props {
    listingData: any
}

const Repolist: React.FC<Props> = ({ listingData }) => {
    return (
        <div className="">
            <table className="table">
                <tbody>
                    {listingData.map((data:any) =>
                        <tr id={data.rank} key={data.rank}>
                            <td>
                                <div className="repo_s_con">
                                    <div className="user_detail repoContainer">
                                        <div className="user_d_inner">
                                            <h6><a href={data.url} target="_blank" rel="noreferrer">{data.repositoryName}</a></h6>
                                            <span>{data.description}</span>
                                        </div>
                                    </div>

                                    <div className="btn_m_con">
                                        <a href={`https://github.com/sponsors/${data.username}`} target="_blank" rel="noreferrer" className="btn_con"><i className="p_heart icon_data"></i>Sponsor</a>
                                        <a href="/repos" className="btn_con"><i className="p_heart_white icon_data"></i>Star</a>
                                    </div>
                                </div>

                                <div className="col_f_con">
                                    <div className="p_left_con">
                                        <ul>
                                            {data.language !== null && data.language !== "" && <li>{data.language}</li>}
                                            <li><div className="p_con">
                                                <p><i className="p_star_white icon_data"></i> {data.totalStars}</p>
                                            </div></li>
                                            <li><div className="p_con">
                                                <p><i className="p_fork_white icon_data"></i> {data.forks}</p>
                                            </div></li>

                                            <li>Build by :{data.builtBy.length !== 0 && data.builtBy.map((iconData:any) =>
                                                <span className="avatar_img" key={uniqid()}><img src={iconData.avatar} alt="" /></span>
                                            )}
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="p_con">
                                        <p><i className="p_star_white icon_data"></i> {data.starsSince} Stars Today</p>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
}

export default Repolist;
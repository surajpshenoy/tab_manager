import React, {useState} from 'react';
import { FaAngleDoubleRight } from 'react-icons/fa';

const  UserInfo = ({userInfo}) => {

    const [value, setValue] = useState(0);
    const {company, dates, duties, title} = userInfo[value];
    
    return (
    <section className="section">
        <div className="title">
            <h3>Work Experience</h3>
            <div className="underline"></div>
        </div>
        <div className="job-center">
            <div className="btn-container">
              {userInfo.map((item, index)=>{
                  return <button key={item.id} onClick={()=> {
                      setValue(index)
                  }}>{item.company}</button>
              })} 
            </div>
            <article className="job-info">
               <h3>{title}</h3> 
                <h4>{company}</h4>
                <p className="job-date">{dates}</p>
                {duties.map((duty, index)=>{
                return (
                    <div key={index} className="job-desc">
                        <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                        <p>{duty}</p>
                    </div>
                );
                })}
            </article>
        </div>

    </section>
);
}

export default UserInfo;
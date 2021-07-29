import React from 'react';

const  UserInfo = ({userInfo, value}) => {

    const {company, dates, duties, title} = userInfo[value];
    console.log(company, dates)
    return (
    <section className="section">
        <div className="title">
            <h3>Work Experience</h3>
            <div className="underline"></div>
        </div>

    </section>
);
}

export default UserInfo;
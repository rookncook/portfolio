import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="internship">

                <div className="row work">
            <div className="three columns header-col">
               <h1><span>INTERNSHIPS</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((item) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.CompanyName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                          <div className="stack">
                          <strong>
                          {item.stack}
                          </strong>

                          </div>
                       </div>

                    </div>

                  )
                })
              }
            </div>
         </div>









      </section>
    );
  }
}

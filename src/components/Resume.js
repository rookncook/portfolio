import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

         <div className="row education">

            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.college && resumeData.college.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }



            </div>






            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                          <p>
                          {item.Achievements}
                          </p>
                       </div>
                    </div>
                  )
                })
              }



            </div>


         </div>
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>INTERNSHIP</span></h1>
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
                       </div>

                    </div>

                  )
                })
              }
            </div>
         </div>

         <div className="row education">
             <div className="three columns header-col">
                <h1><span>CERTIFICATIONS</span></h1>
             </div>

             <div className="nine columns main-col">
               {
                 resumeData.cert && resumeData.cert.map((item) => {
                   return(
                     <div className="row item">
                        <div className="twelve columns">
                        <hr/>
                           <h3>{item.certName}</h3>
                           <p className="info">
                           {item.domain}
                           <br/>
                           {item.score}

                           </p>

                           <a target="_blank" rel="noreferrer" class="button" href={item.drivelink}><i class="fa fa-eye"></i>View Certificate</a>

                        </div>

                     </div>

                   )
                 })
               }
             </div>
          </div>


          <div className="row education">
              <div className="three columns header-col">
                 <h1><span>COURSES COMPLETED</span></h1>
              </div>

              <div className="nine columns main-col">
                {
                  resumeData.courses && resumeData.courses.map((item) => {
                    return(
                      <div className="row item">
                         <div className="twelve columns">
                         <hr/>
                            <h3>{item.courseName}</h3>

                            <p className="info">
                            {item.domain}
                            <br/>

                            </p>


                            <p className="info">
                            {item.learning1}
                            <br/>

                            </p>





                         </div>

                      </div>

                    )
                  })
                }
              </div>
           </div>



         <div className="row skill">

            <div className="three columns header-col">
               <h1><span>SKILLS</span></h1>
            </div>

            <div className="nine columns main-col">

               <p>
               {resumeData.skillsDescription}
               </p>

   				<div className="bars">

   				   <ul className="skills">
                {
                  resumeData.skills && resumeData.skills.map((item) => {
                    return(
                      <li>
                      <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                      </span><em>{item.skillname}</em>
                      </li>
                    )
                  })
                }

   					</ul>

   				</div>

   			</div>

         </div>

      </section>
    );
  }
}

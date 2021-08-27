import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>

      <header id="home">
         <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">HOME</a></li>
               <li><a className="smoothscroll" href="#about">About</a></li>
             <li><a className="smoothscroll" href="#resume">Resume</a></li>
               <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
               <li><a className="smoothscroll" href="#skills">Skills</a></li>
            {/*<li><a className="smoothscroll" href="#todo">Goals</a></li>*/}
               <li><a className="smoothscroll" href="#courses"> Courses</a></li>




            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline"> {resumeData.name}</h1>
               <h3 style={{color:'#fff', fontFamily:'sans-serif '}}> {resumeData.role} {resumeData.roleDescription}
               </h3>

               <em>
               <h3 style={{color:'#ffd700', fontFamily:'sans-serif '}}> {resumeData.certs1}
               </h3>
               </em>
               
                <em>
               <h3 style={{color:'#ffd700', fontFamily:'sans-serif '}}> {resumeData.certs2}
               </h3>
               </em>


               <hr/>
               <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                      return(
                              <li key={item.name}>
                                <a href={item.url} target="_blank"><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
               </ul>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle blink"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }
}

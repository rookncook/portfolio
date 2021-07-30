import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="todo">
          <div className="row education">
              <div className="three columns header-col">
                 <h1><span>GOALS (BY 2022)</span></h1>
              </div>



              <div className="nine columns main-col">
                {
                  resumeData.todo && resumeData.todo.map((item) => {
                    return(
                      <div className="row item">
                         <div className="twelve columns">
                         <hr/>
                            <h3>{item.name}</h3>

                            <p className="info">
                            {item.one}
                            <br/>

                            </p>

                            <p className="info">
                            {item.two}
                            <br/>

                            </p>

                            <p className="info">
                            {item.three}
                            <br/>

                            </p>







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

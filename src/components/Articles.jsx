import React, { Component } from 'react'
import styled from "styled-components";
import FadeIn from 'react-fade-in';

export default class Articles extends Component {
  render() {
    return (
      <Wrapper>
          <FadeIn>
        <div className="inside_text">
    <tbody>
                <p>
                    <h2>Summary</h2>
                </p>
                <br/>
                <p>
                    BCIT Diploma in Digital Design and Development with
                skills in responsive front-end development,
                    UX/UI design,and graphic design.</p>
                <br/>
                <h2>
                    EXPERIENCE
                </h2>
                <br/>
                <h4>
                    Wildcat INC —
                    Content Producer<em></em>
                </h4>
                <h4>
                    OCT 2017 – Apr 2021 (Full-time)
                </h4>
                <br/>
                <p>
                    ● animating, color correcting, subtitling, and audio engineering
                </p>
                <p>
                    ● Commonly provided daily turnarounds with limited time
                </p>
                <p>
                    ● Creating graphics using the Adobe suite
                </p>
                <p>
                    ● Working in a team
                </p>
                <br/>
                <h2>
                    Technical Skills
                </h2>
                <br/>
                <p>
                    <strong>FRONT-END</strong>
                </p>
                <br/>
                <p>
                    ● Responsive front-end design
                </p>
                <p>
                    ● Proficient in the React library
                </p>
                <p>
                    ● Converting prototypes to responsive applications
                </p>
                <p>
                    ● Connecting front-end to back-end
                </p>
                <p>
                    ● Familiar with MySQL Database service navigation
                </p>
                <p>
                    ● Ability to navigate and collaborate using Git
                </p>
                <br/>
          
                <p>
                    <strong>Design and UX/UI</strong>
                </p>
                <br/>
                <p>
                    ● Industry standard interfaces in the Adobe suite, InDesign, or Sketch
                </p>
                <p>
                    ● Experience in conducting proper user research
                </p>
                <p>
                    ● Creating user testable prototypes
                </p>
                <p>
                    ● Creating industry competitive user persona for prototypes
                </p>
            <br/>
                <h2>
                    Education
                </h2>
                <br/>
                <h4>
                    BCIT
                    <br/>
                    Burnaby, BC — <em>Diploma</em>
                </h4>
                <br/>
                <p>
                    Digital Design and Development in Business Media
                </p><br/>
                <p>
                    ● Industry competitive front-end design skills across
                    various digital platforms
                </p>
                <p>
                    ● Industry competitive UX/UI skills
                </p>
                <p>
                    ● Hands on experiences through real projects
                </p>
                <p>
                    ● Numerous team exercises conducting UX/UI practices
                </p>
                <p>
                    ● Small classes taught by industry experienced instructors
                </p>
                <br/>
                <h2>
                    LANGUAGES
                </h2>
                <br/>
                <p>
                    English (fluent), Farsi (native)
                </p>
                <br/>
                <h2>
                    Soft Skills
                </h2>
                <br/>
                   <p>
                    ● Collaborating
                 </p>
                 <p>
                    ● Listening
                    </p>
                    <p>
                    ● Problem solving
                    </p>
                    <p>
                    ● Communication
                    </p>
                    <p>
                    ● Time management
                    </p>
                    <br></br>
                    <br></br>
                    <a
                className="hire-span"
                href="https://drive.google.com/uc?export=download&id=10Q62YoYQ71DhRrbe-cp_yeiqSNA6iaIF"
              >
                Download
              </a>
        <br></br><br></br>
    </tbody><br></br><br></br><br></br><br></br>

</div>
</FadeIn>
      </Wrapper>
    );
  }
}



const Wrapper = styled.div`
 overflow-y: auto;
 display: flex;  
    font-size: 16px;
   justify-content: center;
   margin-left: auto;
  margin-right: auto;
  width: 80%;
   

td{
    padding: 10px;
}
  h2{
      color: #fa7249;
    }
    .inside_text{
      width: 90%;
      height: 80vh;
      padding: 20px;
    }

    .hire-span {
          background-color: #fa7249;
          border-radius: 50px;
          padding: 15px 40px;
          color: #fff;
          margin-right: 30px;
          margin-bottom: 30px;
          border: 1px solid transparent;
          transition: all .2s ;

          &:hover {
            background-color: #ededed;;
            border: 1px solid #fa7249;
            color: #fa7249;
            transform: scale(1.1);
            transition: all .2s ;
          }
    }
`

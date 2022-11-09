import { 
  VerticalTimeline, 
  VerticalTimelineElement 
}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export const Experience = () => {
  return(
    <>
      <div className='text-center my-10'>
        <h1 className='text-3xl font-extrabold text-red-500'>Experience and Education Timeline</h1>
      </div>
      <VerticalTimeline lineColor='#7f1d1d'>
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#dc2626', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid  #dc2626' }}
          date="2022 - present"
          iconStyle={{ background: '#dc2626', color: '#000' }}
        >
          <h3 className="vertical-timeline-element-title">FrontEnd Developer</h3>
          <h4 className="vertical-timeline-element-subtitle">Davao City, Philippines</h4>
          <p>
            As a Main Developer, My Role is to Create and Maintain fully deployed Web Application Using ReactJs and C#
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#dc2626', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid  #dc2626' }}
          date="2021 - 2022"
          iconStyle={{ background: '#dc2626', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">The Complete 2022 Web Development Bootcamp</h3>
          <h4 className="vertical-timeline-element-subtitle">Udemy</h4>
          <p>
            Learn the Concept of Web Development and stacks such as Html, Css, Javascript, Jquery, Node, and Reactjs
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#dc2626', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid  #dc2626' }}
          date="2020 - present"
          iconStyle={{ background: '#dc2626', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Bachelor of Science in Computer Engineering</h3>
          <h4 className="vertical-timeline-element-subtitle">University of Mindanao, Davao City</h4>
          <p>
            Learn the fundamentals of programming Languages such as Java, C++ and Visual Basic.
            Also Learn the concept of Hardware technologies and application.
          </p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#dc2626', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid  #dc2626' }}
          date="2020 - 2020"
          iconStyle={{ background: '#dc2626', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">Engineering Intern</h3>
          <h4 className="vertical-timeline-element-subtitle">Bayugan, Agusan Del Sur</h4>
          <p>
            Assisting PaperWorks and able to grasp a basic understanding when working on a professional setting.
          </p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className='vertical-timeline-element--work'
          contentStyle={{ background: '#dc2626', color: '#000' }}
          contentArrowStyle={{ borderRight: '7px solid  #dc2626' }}
          date="2018 - 2020"
          iconStyle={{ background: '#dc2626', color: '#fff' }}
        >
          <h3 className="vertical-timeline-element-title">HighSchool Graduate</h3>
          <h4 className="vertical-timeline-element-subtitle">Bayugan National Comprehensive HighSchool (STEM)</h4>
          <p>
            Activities and societies: Join A Science Investigatory Project - Robotics fields
            Join A Game development Competition in Davao City
            Participated in Film Competition
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </>
  )
}
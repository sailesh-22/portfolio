import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Backbutton from './Backbutton';

const Timeline = () => {
  return (
    <>
    <div className="timeline-wrapper">
       <h1>Career Journey</h1>
    <VerticalTimeline>
    <VerticalTimelineElement
        date="Present"
        dateClassName ='date'
        contentArrowStyle={{ borderRight: '7px solid  white' }}
        iconStyle={{ background: 'lime', color: '#fff',border: "4px solid white",boxShadow:'1px 3px 1px 1px rgba(0,0,0,0.5),2px 5px 2px 2px rgba(0,0,0,0.3)' }}
      >
        <h3 className="" >Engaged in Continuous Learning</h3>
        <br />

      </VerticalTimelineElement>
      
      <VerticalTimelineElement
        date="2020-2024"
        dateClassName ='date'
        contentArrowStyle={{ borderRight: '7px solid  white' }}
        iconStyle={{ background: 'cyan', color: '#fff',border: "4px solid white",boxShadow:'1px 3px 1px 1px rgba(0,0,0,0.5),2px 5px 2px 2px rgba(0,0,0,0.3)' }}
      >
        <h3 className="" >BE CSE at Anjalai Ammal Mahalingam Engineering College</h3>
        <p>CGPA: 8.58 / 10.00</p><br />
      </VerticalTimelineElement>

      <VerticalTimelineElement
        date="Jun 2023 - Jul 2023 "
        dateClassName ='date'
        iconStyle={{ background: 'cyan', color: '#fff',border: "4px solid white",boxShadow:'1px 3px 1px 1px rgba(0,0,0,0.5),2px 5px 2px 2px rgba(0,0,0,0.3)' }}
      >
        <h3 className="vertical-timeline-element-title">Full-Stack Developer Internship at Logritha Technologies</h3>
        <br />
      </VerticalTimelineElement>

<VerticalTimelineElement
        date="2019 - 2020"
        dateClassName ='date'
        iconStyle={{ background: 'cyan', color: '#fff',border: "4px solid white",boxShadow:'1px 3px 1px 1px rgba(0,0,0,0.5),2px 5px 2px 2px rgba(0,0,0,0.3)' }}
      >
        <h3 className="vertical-timeline-element-title">12th Standard at Sri Shanmuka Matric Higher Secondary School</h3>
        <p>Percentage: 81.5 / 100 | Centum in Computer Science</p><br />
      </VerticalTimelineElement>
      <VerticalTimelineElement
        date="2017 - 2018"
        dateClassName ='date'
        iconStyle={{ background: 'cyan', color: '#fff',border: "4px solid white",boxShadow:'1px 3px 1px 1px rgba(0,0,0,0.5),2px 5px 2px 2px rgba(0,0,0,0.3)' }}
      >
        <h3 className="vertical-timeline-element-title">10th Standard at Subash Chandra Bose Matric School</h3>
        <p>Percentage: 88.8 / 100</p> <br />
      </VerticalTimelineElement>
    </VerticalTimeline>
    </div>
    <Backbutton/>
  </>
  );
};

export default Timeline;

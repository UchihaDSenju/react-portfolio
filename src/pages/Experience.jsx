import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {MdWorkOutline, MdSchool, MdOutlineStar} from 'react-icons/md'
import React from 'react'

function Experience() {
  return (
    <>
        <VerticalTimeline
         lineColor='black'>
            <VerticalTimelineElement
            className='vertical-timeline-element--work'
             contentStyle={{ background: 'red'}}
             contentArrowStyle={{borderRight: '7px solid  red'}}
             date='2023 - present'
             icon={<MdWorkOutline />}
             iconStyle={{background: 'Yellow', color: '#fff'}}
             >
                <h3 className='vertical-timeline-element-title'>Flypat Solutions</h3>
                <h4 style={{margin: '0'}}>Intern</h4>
                <p>Front-End Intern working on Next.js</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
             className='vertical-timeline-element--work'
             contentStyle={{ background: 'red'}}
             contentArrowStyle={{borderRight: '7px solid  red'}}
             date='2022'
             icon={<MdWorkOutline />}
             iconStyle={{background: 'yellow', color: '#fff'}}
             >
                <h3 className='vertical-timeline-element-title'>Engineering Monk</h3>
                <h4 style={{margin: '0'}}>Intern</h4>
                <p>Built a E-Commerce site by integrating XAMPP server</p>
            </VerticalTimelineElement>

             <VerticalTimelineElement
            className='vertical-timeline-element--school'
             contentStyle={{ background: 'red'}}
             contentArrowStyle={{borderRight: '7px solid  red'}}
             date='2021'
             icon={<MdSchool />}
             iconStyle={{background: 'green', color: '#fff'}}
             >
                <h3 className='vertical-timeline-element-title'>Responsive Web Design</h3>
                <h4 style={{margin: '0'}}>Certification</h4>
                <p>FreeCodeCamp Certification</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement
            className='vertical-timeline-element--school'
             contentStyle={{ background: 'red'}}
             contentArrowStyle={{borderRight: '7px solid  red'}}
             date='2020 - 2024 (pursuing)'
             icon={<MdSchool />}
             iconStyle={{background: 'green', color: '#fff'}}
             >
                <h3 className='vertical-timeline-element-title'>Veltech Multitech Engineering College</h3>
                <p>Bachelor of Engineering</p>
                <p style={{margin: '0'}}>Computer Science and Engineering</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
             icon={<MdOutlineStar />}
             iconStyle={{background: 'orange', color: '#fff'}}
             >
            </VerticalTimelineElement>
        </VerticalTimeline>
    </>
  )
}

export default Experience
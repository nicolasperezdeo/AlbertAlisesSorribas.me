import { TimelineDataObject, EducationData } from "@/types";
import * as React from "react";

const UPF_DEGREE : EducationData = {
    headingIcon: 'fa-university', 
    period: 'September 2013 - June 2017', 
    iconURL: 'UPF_LOGO.png', 
    place: 'Barcelona, Spain',
    university: 'Universitat Pompeu Fabra (UPF)', 
    GPA: '7.6 / 10 (5th of promotion)', 
    degree: 'Telecommunication Engineering, Computer Sciences', 
    specialization: [
        <div>Non Linear Time-Series Analysis</div>,
        <div>Sound and Signal Processing</div>,
        <div>Wireless Communications</div>
    ], 
    courses: [
        <div>Computer Sciences Courses on Fundamentals</div>,
        <div>Advanced Analysis of Neuronal Signals</div>,
        <div>Fundamental Courses on Mathemathics and Physics</div>
    ],
    additional_content: <div className="column is-full">
        <figure className="image">
            <img src={`assets/img/graduated.jpeg`} />
            <figcaption>We were pretty happy when graduating.</figcaption>
        </figure>
    </div>
}

const RMIT_DEGREE : EducationData = {
    headingIcon: 'fa-user-graduate', 
    period: 'February 2016 - July 2016', 
    iconURL: 'FCT_LOGO.jpg', 
    place: 'Lisbon, Portugal',
    university: 'Universidade Nova de Lisboa (UNL)', 
    GPA: '7.6 / 10', 
    degree: 'Computer Sciences', 
    specialization: [
        <div>Artificial Intelligence and Neural Networks</div>
    ], 
    courses: [
        <div>Applications of Neural Networks</div>,
        <div>Distributed Systems</div>,
        <div>Project Management</div>
    ],
    additional_content: <div className="column is-full">
    <figure className="image">
        <img src={`assets/img/lisbon.jpg`} />
        <figcaption>I also found some time for running.</figcaption>
    </figure>
    </div>
}

const UPF_MASTER : EducationData = {
    headingIcon: 'fa-robot', 
    period: 'September 2017 - Present', 
    iconURL: 'UHH_LOGO.png', 
    university: 'Universität Hamburg', 
    place: 'Hamburg, Germany',
    GPA: '2.2', 
    degree: 'Msc. in Intelligent Adaptive Systems', 
    specialization: [
        <div>Signal Processing</div>,
        <div>Computer Vision</div>,
    ]
    courses: [
        <div>Machine Learning</div>,
        <div>Neural Networks</div>,
        <div>Bio-Inspired Artificial Intelligence</div>,
        <div>Intelligent Robotics</div>,
        <div>Speech Signal Processing</div>,
        <div>Research Methods</div>,
        <div>Software Architecture</div>,
        <div>Databases and Information Systems</div>
    ]
}
const dataObject : TimelineDataObject[] = [
    {id: 'header', medium: true, data: 'Now'},
    {id: 'item', data: UPF_MASTER},
    {id: 'item', data: RMIT_DEGREE},
    {id: 'item', data: UPF_DEGREE},
    {id: 'header', medium: true, data: '2013'}
] ;

//Data object
export default dataObject
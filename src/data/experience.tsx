
import * as React from "react";
import { TimelineDataObject, ExperienceData } from "@/types";

const SP : ExperienceData = {
    period: 'Dec 2017 - Now',
    title: 'Student Assistant',
    headingIcon: 'fa-signal',
    place: 'Hamburg, Germany',
    company: 'Univeristät Hamburg (Signal Processing Group)',
    iconURL: 'SP_LOGO.png',
    responsabilities: [
    <div>Helping with Undergraduate course 'Multidimensionale und Multimodale Signale' material</div>,
    <div>Research group code maintainance and developing</div>,
    <div>Research group team <a href="https://www.inf.uni-hamburg.de/en/inst/ab/sp/people.html" target="_blank">here</a></div>
    ],
    technologies: [
        <div><b>Python</b></div>,
        <div><b>LaTeX Beamer</b></div>,
        <div>Git (GitLab)</div>,
    ],
    accomplishments: [
    ]
}

const ZBH : ExperienceData = {
    period: 'Feb 2018 - Now',
    title: 'IT Student Assistant',
    headingIcon: 'fa-terminal',
    place: 'Hamburg, Germany',
    company: 'Univeristät Hamburg (Bioinformatics Department)',
    iconURL: 'UHH_LOGO.png',
    responsabilities: [
    <div>Assesment of the computational resources of the department</div>,
    <div>Performance testing of a XEN and KVM hypervisor scenario</div>,
    <div>Basic hardware maintainance and checking</div>,
    <div>Software troubleshooting</div>
    ],
    technologies: [
        <div><b>Shell scripting</b> for performance testing</div>,
        <div><b>MATLAB</b> for plotting results</div>,
        <div><b>XEN</b> and <b>KVM</b> architectures</div>,
        <div><b>Open Suse</b> Linux distribution</div>
    ],
    accomplishments: [
    ]
}

const NTSA: ExperienceData = {
    period: 'September 2016 - June 2017',
    title: 'Group Member',
    headingIcon: 'fa-heart',
    place: 'Barcelona, Spain',
    company: "Universitat Pompeu Fabra (UPF), (Nonlinear Time Series Analysis Group).",
    iconURL: 'UPF_LOGO.png',
    responsabilities: [
    <div>Writing Bachelor thesis inside the research group.</div>,
    <div>Being involved in all research meetings and research seminars.</div>,
    ],
    technologies: [
        <div><b>MATLAB</b></div>,
        <div><b>Documentation:</b> LaTeX</div>,
        <div><b>High Performance Cluster (HPC):</b> for simulations</div>,
    ],
    accomplishments: [
        <div>Wrote my Bachelor's thesis on Chimera states, a particularly interesting state of simple coupled oscillator networks.</div>,
        <div>First publication in the XXXVII Dynamics Days Europe Book of Abstracts, can be found <a href="http://static.akcongress.com/downloads/ddays/dynamics-days2017-book-of-abstracts.pdf" target="_blank">here</a>, page 53.</div>

    ],
    additional_content: <div className="columns">
        <div className="column is-two-thirds no-padding">
            <figure className="image">
                <img src={`assets/img/chimera.gif`} />
                <figcaption>Chimera state phase representation over time.</figcaption>
            </figure>
        </div>
    </div>
}

const MWC: ExperienceData = {
    period: 'February 2017 - March 2017',
    title: 'Information Technology Engineer',
    headingIcon: 'fa-network-wired',
    place: 'Barcelona, Spain',
    company: "Fira Barcelona, Mobile World Congress.",
    iconURL: 'MWC_LOGO_D.png',
    responsabilities: [
    <div>Configuring Internet services to the different areas of GSMA.</div>,
    <div>Presenting the services to the responsibles to show the proper use.</div>,
    <div>Troubleshooting different goods.</div>
    ],
    technologies: [
        <div><b>Cisco</b></div>,
        <div><b>Fluke networks</b></div>
    ],
    accomplishments: [
    ],
    additional_content: <div className="columns">
        <div className="column is-full">
            <figure className="image">
                <img src={`assets/img/mwc_1.png`} />
                <figcaption>First day of congress.</figcaption>
            </figure>
        </div>
    </div>
}
const MHH: ExperienceData = {
    period: 'July 2016 - September 2016',
    title: 'Research trainee',
    headingIcon: 'fa-brain',
    place: 'Hannover, Germany',
    company: "Deutsches HörZentrum Hannover, Medizinische Hochschule Hannover",
    iconURL: 'DHZMHH.png',
    responsabilities: [
    <div>Developing a method for a longer recording of neural response from a cochlear implant, following <a href="https://www.ncbi.nlm.nih.gov/pubmed/22328183" target="_blank">this</a> work .</div>,
    <div>Implementing couple of sections for Android App 'MusIC4all'</div>,
    ],
    technologies: [
        <div><b>Python</b> for the Cochlear Ltd. Nucleus API </div>,
        <div><b>Android Studio</b></div>
    ],
    accomplishments: [
        <div>Working protoype of the script tested on a patient.</div>,
    ],
    additional_content: <div className="columns">
        <div className="column is-full">
            <figure className="image">
                <img src={`assets/img/DHZ.jpg`} />
                <figcaption>**To be changed**.</figcaption>
            </figure>
        </div>
    </div>
}
const dataObject : TimelineDataObject[] = [
    {id: 'header', medium: true, data: 'Now'},
    {id: 'item', data: ZBH},
    {id: 'header', medium: true, data: '2018'},
    {id: 'item', data: SP},
    {id: 'item', data: MWC},
    {id: 'header', medium: true, data: '2017'},
    {id: 'item', data: NTSA},
    {id: 'item', data: MHH},
    {id: 'header', medium: true, data: '2016'}
];

//Data object
export default dataObject
import React from 'react'
import bussinessLogo from './imgs/business logo.jpeg'
import starLogo from './imgs/star logo.jpeg'
import smileLogo from './imgs/smile logo.jpeg'
import bg from './imgs/bg.png'
import Scrollspy from 'react-scrollspy';
import { TabTitle } from '../../Utillity';
import "./PSARA.css"


import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

const PSARA = () => {
    TabTitle('PSARA License - medsysconsultancy.com');

    return (
        <div className='font-serif'>
            <div className='h-[34rem] flex py-24 px-16 bg-cover didot' style={{ backgroundImage: `url(${bg})` }}>
                <div className='text-white flex flex-col justify-between' >
                    <h2 className='text-5xl font-bold '>PSARA License</h2>
                    <p className='text-lg mr-20'>Private security business is thriving rapidly. Connect with Medsys to know the legalities</p>
                    <div>
                        <div className='flex my-2'>
                            <img className='h-6 mr-2' src={bussinessLogo} alt="" />
                            <h2>Business Served</h2>
                        </div>
                        <div className='flex my-2'>
                            <img className='h-6 mr-2' src={starLogo} alt="" />
                            <h2> 9.6/10 Unfiltered Customer ratings</h2>
                        </div>
                        <div className='flex my-2'>
                            <img className='h-6 mr-2' src={smileLogo} alt="" />
                            <h2>Satisfaction or Money Back Guarntee</h2>
                        </div>
                    </div>
                </div>
                <div className='bg-white border rounded-3xl '>
                    <form className='flex flex-col  p-8 w-[30rem]' action="">
                        <input className='border-b text-black border-black my-2 px-2 py-1' placeholder='Full Name' type="text" />
                        <input className='border-b text-black border-black my-2 px-2 py-1' placeholder='Email ID' type="text" />
                        <input className='border-b text-black border-black my-2 px-2 py-1' placeholder='Phone No.' type="text" />
                        <div className='text-center my-12'>
                            <button className='border bg-[#560216] text-white px-2 py-2 rounded-lg'>Request a Callback</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='flex justify-between items-center px-16 bg-black text-white h-20'>
                <div className='text-2xl'>Get in touch with us acquire various licenses, registrations, and certifications</div>
                <div>
                    <button className='bg-[#560216] text-white px-3 py-1 rounded-lg text-lg hover:bg-green-600'>CALL NOW!</button>
                </div>
            </div>

            <div className='flex bg-[#f6d5dd] h-full w-full'>
                <div className='w-3/12'>
                    <div className='flex flex-col sticky top-20 '>
                        <div className='bg-white rounded-xl ml-12 my-12 p-2 '>
                            <h2 className='text-3xl text-[#560216] font-bold'>Table Of Contents</h2>
                            <hr className='bg-[#560216]' />
                            <Scrollspy items={[
                                'Overview',
                                'Role',
                                'Eligibility',
                                'Documents',
                                'Instruction',
                                'Faq'
                            ]} className="flex flex-col p-8" currentClassName="table-spy" >
                                <a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#Overview'>Overview</a>
                                <a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#Role'>Role of Private Security Agency</a>
                                <a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#Eligibility'>Eligibility Criteria</a>
                                <a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#Documents'>Documents Required</a>
                                <a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#Instructions'>Instructions</a>
                                <a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#fAQs'>FAQs</a>
                            </Scrollspy>
                        </div>
                        <button className='bg-[#560216] text-white m-12 text-center px-3 py-1 rounded-lg text-lg hover:bg-green-600'>CONTACT US</button>
                    </div>
                </div>
                <div className='bg-[#f6d5dd] h-full w-9/12 px-12 py-12 '>

                    <div className='my-12' id="Overview">
                        <h2 className='text-3xl text-[#560216] font-bold my-4'>Overview</h2>
                        <p>The ever-expanding business landscape in India has escalated the requirement of private security. From banks to lavish restaurants, car showrooms to highly-advanced factories, everyone seeks adequate protection to keep criminal elements out of the equation or to ensure proper upkeep of their fences. This growing safety concern has led to the birth of the Private Security Agencies (Regulation) Act, 2005 (PSARA). The said Act offers the leverage of establishing a legalized private security agency in India. Besides, this Act governs every aspect of private security agencies in India, be it securing registration or hiring candidates for security services.</p>

                    </div>

                    <div className='h-full'>
                        <iframe className='h-[32rem] w-full' title='bohemian' src="https://www.youtube.com/embed/tgbNymZ7vqY"> </iframe>
                    </div>

                    <div className='my-12' id="Role">
                        <h2 className='text-3xl text-[#560216] font-bold my-4'>Fundamental Role of Private Security Agency in India</h2>
                        <p>Private security agencies refer to a business entity that facilitates security services to businesses from different verticals. PSARA Act, 2005 came into effect to underpin a certain standard of professionalism in the regime of security services. PSARA license serves as a fundamental mandate for security agencies in India. Apart from facilitating security services, the security agencies offer adequate training to selected candidates for their security-centric careers.</p>

                    </div>

                    <div className='my-12' id="Eligibility">
                        <h2 className='text-3xl text-[#560216] font-bold my-8'>Eligibility Criteria for Obtaining PSARA License in India</h2>


                        <h2 className='text-lg font-bold my-2 text-[#9D3E55]'>1: In Terms Of The Type Of Business Organization</h2>
                        <h2 className='text-lg font-bold my-2 text-black'>The Following Business Structures Can Apply For PSARA License</h2>
                        <ul className=''>
                            <li className="my-4 arrow">Sole Proprietorship,</li>
                            <li className="my-4 arrow">One Person Company(OPC)</li>
                            <li className="my-4 arrow">Partnership Firm,</li>
                            <li className="my-4 arrow">LLP</li>
                            <li className="my-4 arrow">Association of Persons, and</li>
                            <li className="my-4 arrow">Private Limited Company.</li>
                        </ul>


                        <h2 className='text-lg font-bold my-2 text-[#9D3E55]'>2: In Terms Of The Role Of A Director/Principal Officer</h2>
                        <h2 className='text-lg font-bold my-2 text-black'>The PSARA Act Has Underpinned Specific Criteria For Individuals Intending To Serve The Position Of Director/Principal Officer</h2>
                        <ul className=''>
                            <li className="my-4 arrow">Individual must be an Indian national</li>
                            <li className="my-4 arrow">An individual should not be minor as far as age is concerned.</li>
                            <li className="my-4 arrow">Individual must have ample financial resources to cater to business expenses.</li>
                            <li className="my-4 arrow">Individual must have crime-free track records.</li>
                        </ul>


                        <h2 className='text-lg font-bold my-2 text-[#9D3E55]'>3: In Terms Of The Role Of A Security Guard</h2>
                        <h2 className='text-lg font-bold my-2 text-black'>Individuals intending to become security guards must fulfill the given conditions:</h2>
                        <ul className=''>
                            <li className="my-4 arrow">Individual must be an Indian national</li>
                            <li className="my-4 arrow">The person should not be a minor and neither over 65 years of age.</li>
                            <li className="my-4 arrow">The person ought to behave adequate training</li>
                            <li className="my-4 arrow">The person must have a seamless service track record without any termination</li>
                            <li className="my-4 arrow">The person should match the desired physical attributes.</li>
                            <li className="my-4 arrow">The person must secure character certificate from a previous firm</li>
                        </ul>

                    </div>


                    <div className='my-12' id="process">
                        <h2 className='text-3xl text-[#560216] font-bold my-8'>Documents Necessary for Obtaining a PSARA License</h2>
                        <ul className=''>
                            <li className="my-4 arrow">PAN</li>
                            <li className="my-4 arrow">GSTIN</li>
                            <li className="my-4 arrow">Provident Fund Registration</li>
                            <li className="my-4 arrow">ESIC ( i.e. Employees State Insurance Corporation) Registration</li>
                            <li className="my-4 arrow">Registration under Shops and Commercial Establishments Act</li>
                            <li className="my-4 arrow">Registration under the Labour Act</li>
                            <li className="my-4 arrow">Proof relating to the identity of the directors as well as employees</li>
                            <li className="my-4 arrow">Copies of the IT returns of the Directors</li>
                            <li className="my-4 arrow">Two passport size photos and PANs of the promoters</li>
                            <li className="my-4 arrow">Proof relating to the address of the Agency Office</li>
                            <li className="my-4 arrow">Affidavit as u/s 7 (2) of PSARA, 2005</li>
                            <li className="my-4 arrow">Security training affidavit</li>
                            <li className="my-4 arrow">Certificate of Incorporation (COI)</li>
                            <li className="my-4 arrow">Signed Memorandum of Understanding i.e. MOU with the authority-recommended training institute</li>
                        </ul>
                    </div>

                    <div className='my-12' id="process">
                        <h2 className='text-3xl text-[#560216] font-bold my-8'>Instructions for Securing PSARA License in India</h2>
                        <p>Follow the below-mentioned steps for obtaining PSARA license in India:</p>
                        <ul className=''>
                            <div className='my-4'>
                                <li className="text-lg font-bold my-2 arrow text-[#9D3E55]"> Step 1: Arrange the applicable documents</li>
                                <h2 className='mb-2'>The documents necessary for the application have to be collected and sorted accordingly to ensure quick and smooth processing of the application, which will, in turn, speed up the process of obtaining the license.</h2>
                                <h2 className='mb-2'>The documents related to the various registration and details of the directors and promoters have to be legit and in an acceptable format to avert any discrepancy.</h2>
                                <h2 className='mb-2'>Once the required documents are arranged, the application can be filed electronically on the official portal. The presence of the digital signature makes the registration process seamless and hassle-free</h2>
                            </div>
                            <div className='my-4'>
                                <li className="text-lg font-bold my-2 arrow text-[#9D3E55]">Step 2: Enter into a Memorandum of Understanding with a certified training institute</li>
                                <h2>The applicant must enter into <span className='text-lg font-bold text-black'> A Memorandum Of Understanding (MOU) </span> with a certified training institute. The list of the eligible institute is available on the government official portal. These institutes shall provide the required training to the selected candidates. Ex-servicemen have access to a certain degree of relaxation concerning the training aspects of the agency.</h2>
                            </div>
                            <div className='my-4'>
                                <li className="text-lg font-bold my-2 arrow text-[#9D3E55]">Step 3: File The Standard Application</li>
                                <h2>Once all the above steps are fulfilled, the applicant must file the application (Form-I) with the respective state authority. The said form must be attested with Form-II (application for verification of antecedents). Affidavit in Form-III must be accompanied by Form-I.</h2>
                            </div>
                            <div className='my-4'>
                                <li className="text-lg font-bold my-2 arrow text-[#9D3E55]">Step 4: Complete Formalities Regarding Police Verification</li>
                                <h2>In this step, the applicant is required to file form-I to initiate the Police verification. Where the agency is a company or a partnership, the proposed directors shall undergo Police verification without any exception.</h2>
                            </div>
                            <div className='my-4'>
                                <li className="text-lg font-bold my-2 arrow text-[#9D3E55]">Step 5: Grant Of PSARA License</li>
                                <h2>Where the application is attested with the NOC from the police after verification, the respective authority will scrutinize the same and then proceed to either accord the license in form-IV or reject the same in case of default.</h2>
                            </div>
                        </ul>
                        <h2><span className='text-lg font-bold text-[#9D3E55]'>Note: </span> Authority usually takes around 60 days to grant this license from the date of application submission. Following are the parameters that affect the timeline of granting the license</h2>

                        <ul>
                            <li className='text-lg font-bold my-2 text-black arrow'>Quantum Of Paperwork Compliance Level</li>
                            <li className='text-lg font-bold my-2 text-black arrow'>Type Of License</li>
                            <li className='text-lg font-bold my-2 text-black arrow'>Appointment Of Supervisors</li>

                            <p>Applicants must appoint the supervisors to stay in line with the provisions of the PSARA, 2005. The supervisors are obligated to administer the agency's operation in relation to the work of the security guards. The supervisors so appointed must have at least three years of experience in the defence services.</p>

                        </ul>
                    </div>



                    <div className='my-12' id="fAQs">
                        <h2 className='text-3xl text-[#560216] font-bold my-8'>FAQs</h2>
                        <Accordion>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    a. How do I apply for a Psara license?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    Steps for apply for Psara license First, arrange the required documentation. Second, Sign MoU with a certified training institute Third, file application in form 1 Fourth, complete the formalities regarding police verification
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    b. Who can apply for Psara?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    Indian national or citizen of such other nation as the Central Gov. may, by Official Gazette, specify; Individual who have attained 18 years of age but has not exceeded the age of 65 years; Individuals who duly satisfy the agency about his antecedents & character.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    c.Is Psara license mandatory for security agency?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    PSARA license is a legal mandate for conducting the business of private security in India. Such businesses facilitate trained security guards to various organizations across the country.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    d. What is the validity of the PSARA License?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    Typically, a PSARA license comes with a validity of 5 years which can be extended further by filing the relevant application online. However, in the states like Chhattisgarh & Uttarakhand, it is valid for one year only.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    e. What is the Government fee for PSARA Licence?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    The government fees payable can be divided into the given categories: For one district -- Rs. 5,000/- For 2 to 5 districts in a state -- Rs. 10,000/-. For the entire state -- Rs. 25,000/-.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    f.What is the role of Supervisor so appointed by the Private security agency in India?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    Supervisors are liable to administer the agency’s operation and all the affairs related to security guards.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    g. What are the provisions regarding the License renewal?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    The application pertaining to license renewal must be filed 45 days prior to the expiration date.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    h. Is the grant of PSARA license is done on the state-wise basis?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    Yes, the grant of PSARA license is done on the state-wise basis.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    i.List down some key documentations for obtaining PSARA license in India?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    MOA, GST registration, MoU with training institute, PF and ESIC Registration, so and so forth.
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            <AccordionItem>
                                <AccordionItemHeading>
                                    <AccordionItemButton>
                                    j. Still Confused?
                                    </AccordionItemButton>
                                </AccordionItemHeading>
                                <AccordionItemPanel>
                                    <p>
                                    Speak to our experts who shall solve all your doubts. Call us at +91 70204 38881 or Mail us at medsysconsultancy@gmail.com
                                    </p>
                                </AccordionItemPanel>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PSARA
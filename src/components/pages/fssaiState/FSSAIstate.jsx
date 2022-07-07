import React from 'react'
import bussinessLogo from './imgs/business logo.jpeg'
import starLogo from './imgs/star logo.jpeg'
import smileLogo from './imgs/smile logo.jpeg'
import bg from './imgs/bg.png'
import Scrollspy from 'react-scrollspy';
import { TabTitle } from '../../Utillity';
import "./FSSAIstate.css"


import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';

const FSSAIstate = () => {
  TabTitle('FSSAI State License - medsysconsultancy.com');

  return (
    <div className='font-serif'>
      <div className='h-[34rem] flex py-24 px-16 bg-cover didot' style={{ backgroundImage: `url(${bg})` }}>
        <div className='text-white flex flex-col justify-between' >
          <h2 className='text-5xl font-bold '>FSSAI State License</h2>
          <p className='text-lg mr-20'>Food license is a mandatory compliance for the manufacturers dealing in the food business and restaurant business that certifies the safety of food products supplied or manufactured by various organizations in India. Get your food business registered by availing of our premium offers at the least cost, certifying the successful completion of the process.</p>
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
                'overview',
                'advantages',
                'importance',
                'process',
                'documents',
                'faq'
              ]} className="flex flex-col p-8" currentClassName="table-spy" >
                <a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#overview'>Overview</a>
                <a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#role'>Role of FSSAI</a>
                <a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#advantages'>Advantages</a>
                <a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#who'>Who Needs State FSSAI</a>
                <a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#documents'>Documents Required</a>
                <a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#fee'>Fee Structure</a>
                <a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#process'>Process Flow</a>
                <a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#penalties'>Penalties</a>
                <a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#fAQs'>FAQs</a>
              </Scrollspy>
            </div>
            <button className='bg-[#560216] text-white m-12 text-center px-3 py-1 rounded-lg text-lg hover:bg-green-600'>CONTACT US</button>
          </div>
        </div>
        <div className='bg-[#f6d5dd] h-full w-9/12 px-12 py-12 '>

          <div className='my-12' id="Overview">
            <h2 className='text-3xl text-[#560216] font-bold my-4'>Overview</h2>
          <p>FSSAI (Food Safety Standard Authority of India) is a prominent government-backed entity that regulates the food sector in India. It has outlined countless guidelines and provisions to foster food safety across the nation. Presently, every food business in India is mandated to secure an applicable food license to conduct its business operation. Functioning without a valid food license is a punishable offence for FBOs as per FSS Act, 2006. FSSAI conducts all its operations in view of the said Act and also follows the direction of the Ministry of Health and Family Welfare.</p>
          </div>
          
          


          <div className='my-12' id="process">
            <h2 className='text-3xl text-[#560216] font-bold my-8'>Role of Food Safety Standard Authority of India</h2>
            <ul className=''>
              <li className="my-4 arrow">Formulating guidelines and norms for the food sector</li>
              <li className="my-4 arrow">Introducing initiatives related to food safety awareness</li>
              <li className="my-4 arrow">Releasing directions for food business operators</li>
              <li className="my-4 arrow">Setting out norms and rules for food testing labs</li>
              <li className="my-4 arrow">Accumulating Data pertaining to contaminants in food articles</li>
              <li className="my-4 arrow">To facilitate recommendation to Indian Government for formulating new provisions</li>
              <li className="my-4 arrow">Utilizing rapid alert system for prompt identification of issues in food articles available to the public</li>
            </ul>
            <p className='my-4'>FSSAI has underpinned stringent norms for proprietary food units as the majority of them conduct their operation without any norms. FSSAI has mandated these facilities to secure FSSAI licenses without any exception. As per the FSSAI, unregistered proprietary food units are not allowed to continue their business operation without a valid food license.</p>
            <p>FSSAI has rolled the mandatory provisions for FBO and regulation of manufacturing, storage, sale, & distribution process to ensure utmost food safety and hygiene. The authority has also set up a legitimate information network for the awareness of the masses to secure valid information related to food safety and hygiene.</p>

          </div>


          <div className='my-12' id="process">
            <h2 className='text-3xl text-[#560216] font-bold my-8'>Benefits of FSSAI State License</h2>
            <p className='my-4'>Despite being a legal compulsion the FSSAI Basic Registration renders dozens of benefits to the Food business operators. The common benefits of securing FSSAI Basic Registration include</p>
            <ul className=''>
              <li className="my-4 arrow">Creates strong brand recognition among the target end-users and public at large</li>
              <li className="my-4 arrow">Improves creditability of the business</li>
              <li className="my-4 arrow">Enables businesses to attract more customers</li>
              <li className="my-4 arrow">Offers legal stability that otherwise is lacking in unregistered counterparts</li>
              <li className="my-4 arrow">Facilitates best practices to the business owner to ensure food safety</li>
            </ul>
          </div>

          <div className='my-12' id="process">
            <h2 className='text-3xl text-[#560216] font-bold my-8'>Who needs a State FSSAI License?</h2>
            <ul className=''>
              <li className="my-4 arrow">Facility dealing with Proprietary foods</li>
              <li className="my-4 arrow">Vegetable oil production & processing facility using the process of solvent extraction meeting above turnover criteria.</li>
              <li className="my-4 arrow">Hotels having 4-star rating or less</li>
              <li className="my-4 arrow">Facilities dealing with dairy products, Milk Chilling Units having production capacity ranging from 500 to 50000 lit</li>
              <li className="my-4 arrow">A slaughterhouse having capacity of more than 2 & up to 50 large animals. Or the handling capacity of more than 10 & up to 150 small animals. Or per day capacity of more than 50 to up to 1000 poultry birds.</li>
              <li className="my-4 arrow">All food processing facilities, including re-packing units, with a per-day capacity of not less than 100kg/l to up to 2 metric tons</li>
            </ul>
          </div>

          <div className='my-12' id="process">
            <h2 className='text-3xl text-[#560216] font-bold my-8'>Fundamental documents required for securing State FSSAI License</h2>
            <h2 className='text-lg font-bold my-2 text-[#9D3E55]'>Following Are The Documents That One To Arrange To Apply For A State FSSAI License:</h2>
            <p>Details of key management personal such as Directors, Partners, proprietors, & Executive Members of Society with real address & contact particulars.</p>
            <ul className=''>
              <li className="my-4 arrow">Passport–sized photos of the individual seeking the license</li>
              <li className="my-4 arrow">Identification as well as address proof of the individual seeking the license</li>
              <li className="my-4 arrow">Applicant’s PAN card</li>
              <li className="my-4 arrow">A copy of property documents (if the business place is owned by the applicant)</li>
              <li className="my-4 arrow">A copy of the rent agreement & NOC granted by the landlord ( in case of rented property)</li>
              <li className="my-4 arrow">Particulars on Raw material suppliers</li>
              <li className="my-4 arrow">Form B Duly completed and authenticated by the applicant.</li>
              <li className="my-4 arrow">List of machinery installed at the facility</li>
              <li className="my-4 arrow">NOC accorded by the local Municipality</li>
              <li className="my-4 arrow">Form IX</li>
              <li className="my-4 arrow">Particulars of food category and proposed food articles to be produced at the plant</li>
              <li className="my-4 arrow">Import Export Code rendered by Directorate General of Foreign Trade.</li>
              <li className="my-4 arrow">Authorization letter enclosing the name as well as the address of the liable individual</li>
              <li className="my-4 arrow">Food safety management system (FSMS)</li>
            </ul>
          </div>

          <div className='my-12' id="process">
            <h2 className='text-3xl text-[#560216] font-bold my-8'>FSSAI State License (Fee Structure)</h2>
            <p>The requisite fees must be paid by an applicant seeking State Food license via:</p>
            <ul className=''>
              <li className="my-4 arrow">Demand Draft (DD)</li>
              <li className="my-4 arrow">Treasury Challan, or</li>
              <li className="my-4 arrow">Cash</li>
            </ul>
            <p>The requisite fees must be paid by an applicant seeking State Food license via:</p>

            <div className='flex '>
              <div className='w-4/6 flex flex-col '>
                <div className='border border-[#560216] h-16 pl-2 pt-2 bg-[#560216] text-white'>Manufacturer (Production Capacity)</div>
                <h2 className=' border border-[#560216] h-16 pl-2 pt-2 ' >More than One million tons/day 10001 to 50,000 L/day of milk or 501 to 2500 Million tons of milk solids/annum.</h2>
                <h2 className=' border border-[#560216] h-16 pl-2 pt-2 ' >More than One million tons/day 10001 to 50,000 L/day of milk or 501 to 2500 Million tons of milk solids/annum.</h2>
                <h2 className=' border border-[#560216] h-16 pl-2 pt-2 ' >Hotels having 4 stars rating</h2>
                <h2 className=' border border-[#560216] h-16 pl-2 pt-2 ' >All Food Service providers (including restaurants, Canteens, clubs, caterers, Banquet halls offering food catering services, Dabbawalla system, & other FBOs.</h2>
                <h2 className=' border border-[#560216] h-16 pl-2 pt-2 ' >Slaughtering capacity</h2>
              </div>
              <div className='w-2/6 flex flex-col '>
                <div className='border h-16 border-[#560216] pl-2 pt-2 bg-[#560216] text-white'>License Fees/year (INR)</div>
                <h2 className=' border h-16 border-[#560216] pl-2 pt-2 '>5000/-</h2>
                <h2 className=' border h-16 border-[#560216] pl-2 pt-2 '>3000/-</h2>
                <h2 className=' border h-16 border-[#560216] pl-2 pt-2 '>5000/-</h2>
                <h2 className=' border h-16 border-[#560216] pl-2 pt-2 '>2000/-</h2>
                <h2 className=' border h-16 border-[#560216] pl-2 pt-2 '>Less than 2 large animals or 10 small animals or 50 poultry birds per day.</h2>
              </div>
            </div>

          </div>

          <div className='my-12' id="process">
            <h2 className='text-3xl text-[#560216] font-bold my-8'>Process for Getting FSSAI State License from Licensing Authority</h2>
            <p>The FSSAI License is primarily granted based on the scope of operation and production volume. The typical steps involved in securing a State Food license include</p>
            <ul className='list-disc'>
              <li className='my-4'><span className='text-[#560216] mr-2 arrow'>  Step:1</span>Arranging the aforesaid document and Filing of application via Form B</li>
              <li className='my-4'><span className='text-[#560216] mr-2 arrow'>  Step:2</span>Submission of form to licensing authority via online portal FOSCOS. The filing process ends with the submission of standard fees.</li>
              <li className='my-4'><span className='text-[#560216] mr-2 arrow'>  Step:3</span>In-depth scrutiny of application and document by FSSAI’s officials.</li>
              <li className='my-4'><span className='text-[#560216] mr-2 arrow'>  Step:4</span> If needed, an on-site inspection will be conducted by FSSAI’s officials to determine the level of compliance at business premises.</li>
              <li className='my-4'><span className='text-[#560216] mr-2 arrow'>  Step:5</span>Grant of State FSSAI License by the licensing authority (Note: the application may be revoked by the licensing authority in case of non-compliant.</li>
              <li className='my-4'><span className='text-[#560216] mr-2 arrow'>  Step:6</span>after securing the license, the business owner can commence their business operation. Note: The license holder needs to display the license at their business premises at the time.</li>
            </ul>
          </div>


          <div className='my-12' id="advantages">
            <h2 className='text-3xl text-[#560216] font-bold my-8'>
            Penalties
            </h2>
            <p className='my-4' >In general, the penalties for FBOs in India are pretty stringent, and they are bound to face severe consequences in case of non-compliance.</p>
            <p className='my-4' >FSSAI officials can conduct a surprise audit of the business premises without informing the owner. If they find some loopholes on account of compliance management, the concerned entity has to face penalties as cited in FSS Act, 2006. The table below manifests the type of penalties imposed in case of non-compliance;</p>

            <div className='flex '>

              <div className='w-1/12 flex flex-col '>
              <div className='border border-[#560216] h-16 pl-2 pt-2 bg-[#560216] text-white'>S.No</div>
              <div className='border border-[#560216] h-16 pl-2 pt-2'>1</div>
              <div className='border border-[#560216] h-16 pl-2 pt-2'>2</div>
              <div className='border border-[#560216] h-16 pl-2 pt-2'>3</div>
              <div className='border border-[#560216] h-16 pl-2 pt-2'>4</div>
              <div className='border border-[#560216] h-16 pl-2 pt-2'>5</div>
              <div className='border border-[#560216] h-16 pl-2 pt-2'>6</div>
              <div className='border border-[#560216] h-16 pl-2 pt-2'>7</div>
              </div>
              <div className='w-6/12 flex flex-col '>
                <div className='border border-[#560216] h-16 pl-2 pt-2 bg-[#560216] text-white'>Particulars</div>
                <h2 className=' border border-[#560216] h-16 pl-2 pt-2 ' >Food quality breaches the compliance given in the ac</h2>
                <h2 className=' border border-[#560216] h-16 pl-2 pt-2 ' >Sub-standard food</h2>
                <h2 className=' border border-[#560216] h-16 pl-2 pt-2 ' >Misbranded Food</h2>
                <h2 className=' border border-[#560216] h-16 pl-2 pt-2 ' >Falsified advertisement or invalid description</h2>
                <h2 className=' border border-[#560216] h-16 pl-2 pt-2 ' >Extraneous matter in food</h2>
                <h2 className=' border border-[#560216] h-16 pl-2 pt-2 ' >Manifesting non-corporation with Food safety officer direction</h2>
                <h2 className=' border border-[#560216] h-16 pl-2 pt-2 ' >Unhygienic processing or manufacture</h2>
              </div>
              <div className='w-5/12 flex flex-col '>
                <div className='border border-[#560216] h-16 pl-2 pt-2 bg-[#560216] text-white'>Fine(Rs)</div>
                <h2 className=' border border-[#560216] h-16 pl-2 pt-2 '>2 Lakh Petty manufacturer – 25,000/-</h2>
                <h2 className=' border border-[#560216] h-16 pl-2 pt-2 '>5 Lakh</h2>
                <h2 className=' border border-[#560216] h-16 pl-2 pt-2 '>3 Lakh</h2>
                <h2 className=' border border-[#560216] h-16 pl-2 pt-2 '>10 Lakh</h2>
                <h2 className=' border border-[#560216] h-16 pl-2 pt-2 '>1 Lakh</h2>
                <h2 className=' border border-[#560216] h-16 pl-2 pt-2 '>2 Lakh</h2>
                <h2 className=' border border-[#560216] h-16 pl-2 pt-2 '>1 Lakh</h2>
              </div>
            </div>
          </div>

          

          <div className='my-12' id="fAQs">
            <h2 className='text-3xl text-[#560216] font-bold my-8'>FAQs</h2>
            <Accordion>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                  a. What is an FSSAI state license?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                  A state license is granted by the State Authorities functioning in each state. This is in accordance with the FSS Regulations, 2011. Based on the eligibility, food business operators may fall under State License or Registration. Generally, FBOs with annual turnover ranging from 12 lakhs-20 crores is required to get this license.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                  b. How can I get FSSAI state license?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                  Application for State FSSAI license is supposed to be filed in form B as per prevailing Act. The application is available on the concerned authority's portal.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                  c. Who all required FSSAI license?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                  Every food business operator is liable to obtain an applicable food license based on underlying criteria underpinned by FSSAI, the apex food regulator of India. This even include exporter and importer of food items.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                  d. What is central and state Fssai Licence?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                  Central FSSAI license is obtained by more prominent businesses; meanwhile, a state license is supposed to be secured by business earning within the specified threshold limit, set at 12 lakh-20 crores.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                  e. Can FSSAI impose a penalty?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>If FBOs operate a food establishment with a valid food license, then FSSAI can impose a penalty of up to rupees 5 lakhs. The jail term could be slapped on the defaulter in a worst-case scenario. A penalty of one lakh rupees could come into effect if the FBO is found guilty of producing food items under unsanitary conditions.</p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                  f.What happens if the FSSAI license expires?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>The license holder must renew the license 30 days before the expiration of the food license to avert a late fine. FSSAI charges Rs 100/day fine for renewing the license after the expiration date.</p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                  g. What is the Importance of FSSAI License?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>Maintaining the food quality level to ensure safety & facilitating satisfaction to every customer is the aim of FBOs. FSSAI plays a vital role in formulating the controlling procedure. FBOs with the FSSAI license are bound to comply with food safety norms to avert significant penalities.</p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                  h. Name the Act considered by FSSAI for formulating guidelines for FBOs?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>FSS, Act 2006.</p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                  i. Is it possible for the FBOs to conduct food business without FSSAI License?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>Conducting food business without FSSAI license is a punishable offense as per FSS Act, 2006</p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                  j. What happens after the submission of food license application?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>The authority will conduct the thorough scrutiny of the submitted documentation and may arrange an on-site inspection of the business place.</p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                  k. Still Confused?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>Speak to our experts who shall solve all your doubts. Call us at +91 70204 38881 or Mail us at medsysconsultancy@gmail.com</p>
                </AccordionItemPanel>
              </AccordionItem>    
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FSSAIstate
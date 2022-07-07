import React from 'react'
import bussinessLogo from './imgs/business logo.jpeg'
import starLogo from './imgs/star logo.jpeg'
import smileLogo from './imgs/smile logo.jpeg'
import bg from './imgs/bg.png'
import Scrollspy from 'react-scrollspy';
import fssaiPageImage from './imgs/FSSAI Page Image.png'
import { TabTitle } from '../../Utillity';
import "./FSSAIannual.css"


import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';
const FSSAIannual = () => {

  TabTitle('FSSAI State License - medsysconsultancy.com');

  return (
    <div className='font-serif'>
      <div className='h-[34rem] flex py-24 px-16 bg-cover didot' style={{ backgroundImage: `url(${bg})` }}>
        <div className='text-white flex flex-col justify-between' >
          <h2 className='text-5xl font-bold '>FSSAI Annual Return</h2>
          <p className='text-lg mr-20'>Every Food Business operator having an FSSAI license shall file FSSAI Annual Return once a year. Non-compliances of the same can be burdensome. Hurry up, what are you waiting for? Get your FSSAI return file in a hassle-free manner. Medsys can make your way of filing FSSAI Returns very easy by ensuring the successful completion of the process.</p>
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
                <a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#role'>Kinds of Annual Return</a>
                <a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#advantages'>Features</a>
                <a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#who'>Who Should File</a>
                <a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#documents'>Benefits</a>
                <a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#fee'>Details Required</a>
                <a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#process'>How to File</a>
                <a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#penalties'>Due Dates</a>
                <a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#penalties'>Who are Exempted</a>
                <a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#penalties'>Penalties</a>
                <a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#penalties'>Additional Regulations</a>
                <a className=' text-gray-500 hover:text-[#560216] hover:underline hover:font-bold my-1 ' href='#fAQs'>FAQs</a>
              </Scrollspy>
            </div>
            <button className='bg-[#560216] text-white m-12 text-center px-3 py-1 rounded-lg text-lg hover:bg-green-600'>CONTACT US</button>
          </div>
        </div>
        <div className='bg-[#f6d5dd] h-full w-9/12 px-12 py-12 '>

          <div className='my-12' id="Overview">
            <h2 className='text-3xl text-[#560216] font-bold my-4'>Overview on FSSAI Annual Return</h2>
            <p>The Government of India has introduced the Food Safety and Standards Act, 2006 with the motive to regulate and prevent the food industry. The Food Safety and Standard Act, 2006, consist of laws that direct the sale, manufacturing, storage, distribution, and import of food items within the country. However, it would be good to ensure that all the proper criteria and compliances are duly fulfilled by the food business operator.
              The term food safety guarantees that food is healthy and clean and is free from diseases like stomach aches, poisoning, etc. To ensure the purity of food and packed food items the Food Safety and Standard Act, 2006 was enacted. It has framed the food safety laws and regulates the food industry relating to manufacturing, sale, storage, distribution, and import.</p>
          </div>




          <div className='my-12' id="process">
            <h2 className='text-3xl text-[#560216] font-bold my-8'>What are the Kinds of Annual Return?</h2>
            <p className='my-4'>The kinds of FSSAI Annual Return laid down under the FSSAI Act are-</p>

            <img src={fssaiPageImage} alt="" />
            <ul className=''>
              <div className='my-4'>
                <li className=" arrow">FSSAI Form D1</li>
                <p className='my-2'>Food business units involved in manufacturing, importing, labeling, packing, re-labeling, and re-packing needs to file FSSAI Form D1 which is mandatory for them. The form is prescribed by the Food Safety Commissioner and is a mandatory for the FBOs irrespective of the production they are involved in.</p>
                <p className='my-2'>The FSSAI annual return-Form D1 should be filed on or before 31st May of every fiscal year. The form is filed with the Licensing Authority depending upon the type of food products sold by the FBO in the preceding financial year.</p>
              </div>
              <div className='my-4'>
                <li className=" arrow">FSSAI Form D2</li>
                <p className='my-2'>Form D2 is filed half-yearly and not every food business operator is eligible to file Form D2. Instead, FSSAI license holders who are involved in the manufacturing and distribution of milk or milk products can file Form D2. Form D2 is filled from 1st April to 30th September and from 1st October to 31st March of every financial year.</p>
              </div>

            </ul>

          </div>


          <div className='my-12' id="process">
            <h2 className='text-3xl text-[#560216] font-bold my-8'>What are the Essentials that are required to be kept in Mind while Preparing the Food Products?</h2>
            <p className='my-4'>Following are the key essential that the Food Inspection authority shall confirm for every food Article:-</p>
            <ul className=''>
              <li className="my-4 arrow">All Food substance or processing aid should be in line with the Act and regulations.</li>
              <li className="my-4 arrow">Any harmful substances, pollutants,or any toxin that may cause harm to human health is present in the food product.</li>
              <li className="my-4 arrow">Avoidance of any insecticides or pesticides in an article.</li>
              <li className="my-4 arrow">Also,the food item should be marked and labeled properly.</li>
            </ul>
            <p className="my-2">The food authority needs to observe the Food Safety Control System. The Commissioner appointed by a state government is responsible for the successful application of food safety and standards.</p>
          </div>

          <div className='my-12' id="process">
            <h2 className='text-3xl text-[#560216] font-bold my-8'>Who Should File the FSSAI Annual Return?</h2>
            <ul className=''>
              <li className="my-4 arrow">Every FBO who has a business turnover similar to or more than Rs. 12 Lakhs</li>
              <li className="my-4 arrow">Every business operator selling, importing, exporting, manufacturing, distributing, storing, handling/transporting any type of food product has to file FSSAI Annual return</li>
              <li className="my-4 arrow">The business operator involved in the distribution and manufacturing of milk has to file half yearly returns.</li>
            </ul>
          </div>
          <div className='my-12' id="process">
            <h2 className='text-3xl text-[#560216] font-bold my-8'>Benefits of Complying with FSSAI Annual Return in India</h2>
            <p className="my-2">There are numerous benefits of complying with FSSAI Annual Returns in India, few of them are given below:-</p>
            <ul className=''>
              <div className='my-4'>
                <li className=" arrow">Sustain Reputation</li>
                <p className='my-2'>Annual Compliance by an establishment or individual which is registered under the requirements of FSSAI would sustain as well as comparatively increases the overall reputation of the company/entity. It will enable the public to trust an entity which complies with the obligations related to annual compliance as prescribed by the Government of India.</p>
              </div>
              <div className='my-4'>
                <li className=" arrow">Increase In Brand Value</li>
                <p className='my-2'>Any company will concede more reputation in the eyes of consumers that has FSSAI license and complies with the rest of the compliances. Along with such benefits, the value derived by the entity would be more in comparative to the Non complaint entities in the market.</p>
              </div>
              <div className='my-4'>
                <li className=" arrow">Gets Government Support.</li>
                <p className='my-2'>Another benefit from this form of annual compliance enables more government support for the entities that comply with the FSSAI requirements.</p>
              </div>
            </ul>
          </div>

          <div className='my-12' id="process">
            <h2 className='text-3xl text-[#560216] font-bold my-8'>Details required for Filing FSSAI Annual Return</h2>
            <p>The below-mentioned details are required to be included in the FSSAI Annual Return Form, which are as Follows:-</p>
            <ul className=''>
              <li className="my-2 arrow">Food product name which is being manufactured, exported, imported, or handled.</li>
              <li className="my-2 arrow">Bottle size, can size or size of any other package,</li>
              <li className="my-2 arrow">Quantity in the metric ton,</li>
              <li className="my-2 arrow">Value of Food product</li>
              <li className="my-2 arrow">Quantity in Kgs which is being exported or imported,</li>
              <li className="my-2 arrow">Selling price per unit of packaging or per kg</li>
              <li className="my-2 arrow">Name of the countries where food products are exported,</li>
              <li className="my-2 arrow">Rate per unit or kg of packaging CIF/FOB</li>
              <li className="my-2 arrow">Mandatory Last FSSAI Annual Returns</li>
              
            </ul>
          </div>

          <div className='my-12' id="process">
            <h2 className='text-3xl text-[#560216] font-bold my-8'>How to file FSSAI Annual Return in India?</h2>
            <p>The food Business operator can file for FSSAI annual return as per their convenience. They can opt for the below-mentioned process-</p>
            <ul className=''>
              <li className="my-2 arrow">The Only Merchant can opt for an online system for Quarterly annual report.</li>
              <li className="my-2 arrow">The Food business operator processing milk or milk products shall file half yearly return in Form D-2. Subsequently, the food business operator shall submit it physically to the respective Central or State Licensing Authority for the period startsfrom 1st April to 30th September and 1st October to 31st March of every financial year in a month from the end of the period.</li>
              <li className="my-2 arrow">Manufacturers and Importers dealing in the food business have to file an annual return (Form D-1). Subsequently, they shall submit it physically to the respective Central or state licensing Authority on or before the starting of 31st May of every year for every food class operated by him during the previous financial year.</li>
            </ul>

          </div>


          <div className='my-12' id="advantages">
            <h2 className='text-3xl text-[#560216] font-bold my-8'>
            Due Date for Filing the FSSAI Annual Return?
            </h2>
            <p className='my-4' >The due date for filing the FSSAI Annual Return are given below, which are as follows:-.</p>

            <div className='flex '>

              <div className='w-4/12 flex flex-col '>
                <div className='border border-[#560216] h-16 pl-2 pt-2 bg-[#560216] text-white'>FSSAI Returns</div>
                <h2 className='border border-[#560216] h-16 pl-2 pt-2'>Form D1</h2>
                <h2 className='border border-[#560216] h-16 pl-2 pt-2'>Form D2 (Half-Yearly Return)</h2>
                
              </div>
              <div className='w-4/12 flex flex-col '>
                <div className='border border-[#560216] h-16 pl-2 pt-2 bg-[#560216] text-white'>Due Dates</div>
                <h2 className=' border border-[#560216] h-16 pl-2 pt-2 ' >31st May</h2>
                <h2 className=' border border-[#560216] h-16 pl-2 pt-2 ' >30th September/30th March	</h2>
                
              </div>
              <div className='w-4/12 flex flex-col '>
                <div className='border h-16 border-[#560216] pl-2 pt-2 bg-[#560216] text-white'>To Be Filed By</div>
                <h2 className=' border h-16 border-[#560216] pl-2 pt-2 '>Every food manufacturer, importer etc.</h2>
                <h2 className=' border h-16 border-[#560216] pl-2 pt-2 '>Manufacturer of milk/milk products</h2>
                
              </div>
            </div>
            <p className='my-4' >Note-All food business operators shall file a separate return for every license issued under the regulations, regardless of whether the same food business operator carries more than 1 food license.</p>
          </div>

          
          <div className='my-12' id="process">
            <h2 className='text-3xl text-[#560216] font-bold my-8'>Who all are Exempted from Filling FSSAI Annual Return?</h2>
            <p>Below- mentioned categories are exempted from filing the FSSAI Annual Return-</p>
          </div>
          <div className='my-12' id="process">
            <h2 className='text-3xl text-[#560216] font-bold my-8'>Penalty for Late filing of FSSAI Annual Return</h2>
            <p>According to Section 2.1.13 (3) of FSS (Licensing and Registration) Regulations, 2011, if the food business administrators don't record the return within the prescribed period, at that point a fine of Rs 100 will be forced on them consistently and will continue expanding if the default proceeds.</p>
          </div>

          <div className='my-12' id="process">
            <h2 className='text-3xl text-[#560216] font-bold my-8'>Additional Regulations under the FSSAI Act</h2>
            <p>A food business must comply with the given mentioned compliances:</p>
            <ul className=''>
              <li className="my-2 arrow">FSSAI rules state factory’s sanitary and hygiene and also keep a record of worker’s hygiene.</li>
              <li className="my-2 arrow">Keep up day by day records of creation, crude materials, use, and sales independently.</li>
              <li className="my-2 arrow">Guarantee that the source and norms of raw material utilized are of ideal quality.</li>
              <li className="my-2 arrow">Not to produce, store or expose for sale, any article of food in any premises that is close by or part of any privy, urinal, sullage, channel, or spot of the capacity of waste issue.</li>
              <li className="my-2 arrow">Daily, clean the machines and other equipment.</li>
              <li className="my-2 arrow">Guarantee testing of pertinent synthetic as well as microbiological contaminants in food items, at any rate once in a half year.</li>
              <li className="my-2 arrow">Guarantees that the temperature is exact all through the store network from the spot of obtainment or sourcing until it arrives at the end buyer.</li>
      
            </ul>
          </div>


          <div className='my-12' id="fAQs">
            <h2 className='text-3xl text-[#560216] font-bold my-8'>FAQs</h2>
            <Accordion>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                  a. What is FSSAI Return?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p >Every Business involved in food manufacturing, import, and export of food products or selling is required to file for the FSSAI annual return.
				  Also, those who are involved in the manufacturing and distribution of dairy products should file for a half-yearly return.</p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                  b. How can a person file FSSAI Return?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p> All food business operators are required to obtain the FSSAI License and
				  file the FSSAI return either electronically or Physically as may be prescribed by the concerned Food Safety Commissioner, in Form D-1. It should be done on/or before 31st May of each year to
				  the Licensing Authority concerning the classification of food items manufactured or sold by him during the previous financial year.</p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                  c.What details are required for FSSAI Return?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p >Details of the food items manufactured, produced, or sell.
							Description of the Size of a bottle or any other package and Quantity in Metric Ton.
							Value of the products and the selling price per Kg item or unit of packing
							Details of the Exported or imported quantity in Kgs and the list of details of countries or ports where they are imported and exported.
							Rate of Carriage In freight and Freight on Board.</p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                  d. Elucidate the persons exempted from filing FSSAI Annual Return.
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p >Fast food joints, Restaurants, Grocery stores, and Canteens are exempted from filing FSSAI Annual Returns.</p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                  e. What are the consequences if a person fails to file FSSAI Return on time?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>If a person fails to file FSSAI Return on time, he will be liable for a penalty of Rs. 100 which will be charged every day for the time for which the delay continues.</p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                  f. What are the types of FSSAI Returns?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p> The Below-mentioned forms are used for filing FSSAI returns-

						Form D1 -For other manufacturing units and importer
						Form D2 -For Milk processing units with half-year returns</p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                  g. What is FORM-D 1 in FSSAI Return?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p> Irrespective of the previous year’s production, all the Food Business operators need to file FSSAI Form D-1. FORM D-1 is an 
				  annual return, which can either be filed electronically or in the physical form specified by the Food Safety Commissioner.</p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                  h.What is FORM-D 2 in FSSAI Return?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p> Every Food Business Operator engaged in Manufacturing milk or dairy products needs to file a Half-yearly return in FORM D-2. 
				  This return is for a period starting from 1st April to 30th September and 1st October to 31st March of every financial year.</p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                  i. How can a person download the list of the supporting documents?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p> A person can download the list of the supporting documents by clicking on the login page and by selecting the “Supporting Documents”. 
				  However, you can also look into the above mentioned context - list of documents for your better understanding.</p>
                </AccordionItemPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                  j. What is the last date for filing FSSAI Return?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                <p> The last date for filing the FSSAI Return is 31st May of every financial year.</p>
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

export default FSSAIannual
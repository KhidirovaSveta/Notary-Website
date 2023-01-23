import React from 'react'
import Homeimg from "../../img/hero_bg_1.jpg"
import "./index.scss"
import { Card } from 'antd';
import bank from "../../img/bank.png"
import business from "../../img/Business.png"
import rights from "../../img/rights.png"
import crim from "../../img/crim.png"
import plain from "../../img/plain.png"
import family from "../../img/family.png"
import woman from "../../img/atty_1.jpg"
import man from "../../img/atty_2.jpg"
import Cards from '../../components/cards';
import {Helmet} from "react-helmet";
import { Collapse } from 'antd';
const { Panel } = Collapse;
const Home = () => {
  const text = (
    <p
      style={{
        paddingLeft: 24,
      }}
    >
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. 
      Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
    </p>
  );

  return (
    <div id='Home'>
       <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
            </Helmet>
        <img src={Homeimg} alt="" className='bg'/>
        <div className="container">
            <div className="home">
                <div className="headText">
                    <h1 className='mainText'>Notary Public & Legal Solutions</h1>
                    <p className='subText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis cupiditate deserunt placeat necessitatibus a aliquam corrupti nisi odio aliquid, accusamus.</p>
                </div>

              {/* Second Section */}

                <div className="practice-section">
                    <div className="practice-txt">
                    <h2>Practice <span>Areas</span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>

                    <div className="cards">

                        <div className="card">
                          <Card
                         style={{
                          width: 300,
                         }}>
                         <img src={bank} alt="" />
                        <p className='cardTitle'>Bankruptcy Law </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
                         </Card>
                        </div>
 
                        <div className="card">
                         <Card
                         style={{
                          width: 300,
                         }}>
                         <img src={business} alt="" />
                        <p className='cardTitle'>Business Law</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
                         </Card>
                         </div>

                         <div className="card">
                         <Card
                         style={{
                          width: 300,
                         }}>
                         <img src={rights} alt="" />
                        <p className='cardTitle'>Civil Rights Law</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
                         </Card>
                         </div>

                         <div className="card">
                         <Card
                         style={{
                          width: 300,
                         }}>
                         <img src={crim} alt="" />
                        <p className='cardTitle'>Criminal Law</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
                         </Card>
                         </div>


                         <div className="card">
                         <Card
                         style={{
                          width: 300,
                         }}>
                         <img src={plain} alt="" />
                        <p className='cardTitle'>Immigration Law</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
                         </Card>
                         </div>

                         <div className="card">
                         <Card
                         style={{
                          width: 300,
                         }}>
                         <img src={family} alt="" />
                        <p className='cardTitle'>Family Law</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, laboriosam!</p>
                         </Card>
                         </div>
                    </div>
                </div>

                <div className="solution-section">
                    <div className="img-section">
                       <img src={woman} alt="" />
                       <img src={man} alt="" />
                    </div>

                       <div className="solution-text">
                        <h2 className='solution-main-txt'>We Provide Highly Reliable & Effective Legal Solutions</h2>
                        <p className='solution-sub'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, explicabo iste a labore id est quas, doloremque veritatis! Provident odit pariatur dolorem quisquam, voluptatibus voluptates optio accusamus, vel quasi quidem!</p>
                        <button className='solutionBtn'>Book an appointment</button>
                       </div>
                </div>

            {/* Happy Customers */}
              <div className="happy-customers">
                <Cards/>
              </div>


            {/* Last section */}
              <div className="lastSection">
                <div className="img">
                    <img src={man} alt="" className='lastImg'/>
                </div>
                <div className="legal-solution">
                     <p className='lastSectionMainTxt'>We Have <strong>Legal Solutions</strong></p>
                     <p className='restTxt'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam reprehenderit perspiciatis iste culpa consequuntur consequatur eum, voluptatum, quod deserunt maiores?</p><br/>
                     <p className='restTxt'>Modi perferendis ipsa ducimus consequuntur excepturi autem, numquam facere aperiam iste nam molestias provident consectetur molestiae voluptatibus ipsum. Fugiat, quas.</p>
                      <div className="check">
                   <p><i className="fa-solid fa-check"></i>
                   Aperiam iste nam molestias</p>
                   <p><i className="fa-solid fa-check"></i>
                   Modi perferendis ipsa</p>
                   <p><i className="fa-solid fa-check"></i>
                   Perspic iste culpa</p>
              </div>
                </div>

                <div className="accor">
                <Collapse bordered={false} defaultActiveKey={['1']}>
                   <Panel header="How to download and register?" key="1">
                     {text}
                   </Panel>
                   <Panel header="How to create your paypal account?" key="2">
                     {text}
                   </Panel>
                   <Panel header="How to link your paypal and bank account?" key="3">
                     {text}
                   </Panel>
                 </Collapse>
                </div>


              </div>

            </div>
        </div>
    </div>
  )
}

export default Home
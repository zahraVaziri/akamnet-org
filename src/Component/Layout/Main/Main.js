import AOS from 'aos';
import React, { useEffect } from "react";
import './Main.css';
import 'aos/dist/aos.css';
import {Col, Nav, Row, Tab,Accordion } from 'react-bootstrap'
// svgs
import svg1 from './svg-1.svg';
import svg2 from './svg-2.svg';
import svg3 from './svg-3.svg';
import svg4 from './svg-4.svg';
import svg5 from './svg-5.svg';
import svg6 from './svg-6.svg';
import svg7 from './svg-7.svg';
import svg8 from './svg-8.svg';
import svg9 from './svg-9.svg';



export const Card = ({pic,text,title}) => {
     
     return(
        <div className='col-lg-4 parent-servises' data-aos="zoom-in" data-aos-delay="7000" data-aos-duration="2000">
            <div className={`services-card `}>
                <img src={pic}/>
                <div>
                    <h4>{title}</h4>
                    <p>طراحی و پیاده سازی وب سایتهای شخصی، کسب و کارها و سازمان ها بسته به سفارش مشتریان</p>
                </div>
            </div>
        </div>
)}
const serviseCard =[
    {
      pic: svg1,
      title:"مشاوره رایگان",
      text:'طراحی و پیاده سازی وب سایتهای شخصی، کسب و کارها و سازمان ها بسته به سفارش مشتریان'
    },
    {
      pic: svg2,
      title:"طراحی دیتای پروژه",
      text:'نیاز نیست شما یک رزومه یا برند قوی داشته باشید تا بتوانید به سرمایه‌گذاران و تولیدکنندگان تراز اول متصل شوید، تنها کافیست طرح یا ایده جذاب داشته باشید. همین! '
    },
    {
      pic: svg3, 
      title:"طراحی رابط کاربری",
      text:'ایده‌ها و طرح‌های ارسالی شما در صورت عدم وجود ملاک‌های لازم صرفا رد نمی‌شوند، بلکه از داوران برای بهبود کیفیت و ارائه مجدد بازخوردگیری می‌شود.'
    },
    {
      pic: svg4, 
      title:"برنامه نویسی",
      text:'ایده‌ها و طرح‌های ارسالی شما در صورت عدم وجود ملاک‌های لازم صرفا رد نمی‌شوند، بلکه از داوران برای بهبود کیفیت و ارائه مجدد بازخوردگیری می‌شود.'
    },
    {
      pic: svg5, 
      title:"مدیریت پروژه ها",
      text:'ایده‌ها و طرح‌های ارسالی شما در صورت عدم وجود ملاک‌های لازم صرفا رد نمی‌شوند، بلکه از داوران برای بهبود کیفیت و ارائه مجدد بازخوردگیری می‌شود.'
    },
    {
      pic: svg6, 
      title:"اسکرام مستر",
      text:'ایده‌ها و طرح‌های ارسالی شما در صورت عدم وجود ملاک‌های لازم صرفا رد نمی‌شوند، بلکه از داوران برای بهبود کیفیت و ارائه مجدد بازخوردگیری می‌شود.'
    },
    {
      pic: svg7, 
      title:"دیجیتال مارکتینگ",
      text:'ایده‌ها و طرح‌های ارسالی شما در صورت عدم وجود ملاک‌های لازم صرفا رد نمی‌شوند، بلکه از داوران برای بهبود کیفیت و ارائه مجدد بازخوردگیری می‌شود.'
    },
    {
      pic: svg8, 
      title:"اپلیکیشن اندروید و IOS",
      text:'ایده‌ها و طرح‌های ارسالی شما در صورت عدم وجود ملاک‌های لازم صرفا رد نمی‌شوند، بلکه از داوران برای بهبود کیفیت و ارائه مجدد بازخوردگیری می‌شود.'
    },
    {
      pic: svg9, 
      title:"خدمات سازمانی",
      text:'ایده‌ها و طرح‌های ارسالی شما در صورت عدم وجود ملاک‌های لازم صرفا رد نمی‌شوند، بلکه از داوران برای بهبود کیفیت و ارائه مجدد بازخوردگیری می‌شود.'
    },

]

export const CardSecound = ({img,name,text,num}) => {
     return(
        <div className="col-md-4  pt-2" data-aos="zoom-in" data-aos-delay={num} data-aos-duration="2000" style={{textAlign:'center'}} >
           <div className='how-box'>
                <img src={img}/>
                <h3 className={'beacuse-title'} >{name} </h3>
                <p>{text}</p>
            </div>
        </div>
)}
const author =[
    {
      img:'/images/moshavere.svg' ,
      name:'مشاوره و برنامه ریزی',
      text:'با کادری مجرب و حرفه ای بهترین راهکار برای اجرای ایده و پیشرفت شما',
      num:'9000'
    },
    {
      img:'/images/ejra.svg' ,
      name:'اجرای کامل پروژه',
      text:'از 0 تا 100 پروژه توسط با در شرکت و زیر نظر بهترین ها انجام می شود',
      num:'7000'
    },
    {
      img:'/images/test.svg' ,
      name:'تست و تحویل پروژه',
      text:'و در آخر پروژه کامل تست و تمام معایب رفع و سپس تحویل مشتری خواهیم داد',
      num:'5000'
    },

]

export const Project = ({img,name,link,bage}) => {
     return(
      <Col md={3} sm={6} className='col-project' data-aos="flip-right" data-aos-delay="9000" data-aos-duration="2000">
              <a href='#' >
              <div class="akamnet-p-box">
                <img src={img} alt={name}/>
                <h5>{name}</h5>
                <span>{link}</span>
                <div class="type-p-box">{bage}</div>
              </div>
            </a>
          </Col>
)}
const cardProject = [
    {
      img:'https://akamnet.com/wp-content/uploads/2021/07/balonet-1.png' ,
      name:'بالونت (IOS)',
      link:'بزودی ...',
      bage:'اپلیکیشن'
    },
    {
      img:'https://akamnet.com/wp-content/uploads/2021/07/NayebZ.png' ,
      name:'نائب الزیاره (اندروید)',
      link:'cafebazaar.ir',
      bage:'اپلیکیشن'
    },
    {
      img:'https://akamnet.com/wp-content/uploads/2021/07/hamsaz.png' ,
      name:'همساز',
      link:'بزودی ...',
      bage:'استارتاپ'
    },
    {
      img:'https://akamnet.com/wp-content/uploads/2021/07/karoya.png' ,
      name:'کارویا',
      link:'karoya.tv',
      bage:'وب سایت'
    },
    {
      img:'https://akamnet.com/wp-content/uploads/2021/07/iranzad.png' ,
      name:'ایران زاد',
      link:'iranzadmovie.com',
      bage:'وب سایت'
    },
    {
      img:'https://akamnet.com/wp-content/uploads/2021/07/khanemostanad.png' ,
      name:'خانه مستند',
      link:'khanemostanad.ir',
      bage:'وب سایت'
    },
    {
      img:'https://akamnet.com/wp-content/uploads/2021/07/khaneyema-s.png' ,
      name:'خانه ما',
      link:'khaneyema.tv',
      bage:'وب سایت'
    },
    {
      img:'https://akamnet.com/wp-content/uploads/2021/07/badban.png' ,
      name:'استودیو بادبان',
      link:'badbanfilm.com',
      bage:'اپلیکیشن'
    },
    {
      img:'https://akamnet.com/wp-content/uploads/2021/07/khaneyema-s.png' ,
      name:'ایران زاد',
      link:'5000',
      bage:'اپلیکیشن'
    }
]

const Slice = cardProject.slice(0,8)

const Web = Slice.filter(sli => sli.bage == 'وب سایت')

const App = Slice.filter(sli => sli.bage == 'اپلیکیشن')

const Start = Slice.filter(sli => sli.bage == 'استارتاپ')

const Main = () => {

  useEffect(() => {
    AOS.init({
      once: true,
    });
 
    const mouseTarget = document.getElementById('mouseTarget');
    const unorderedList = document.getElementById('unorderedList');

    const mouseTarget2 = document.getElementById('mouseTarget2');
    const unorderedList2 = document.getElementById('unorderedList2');

    const mouseTarget3 = document.getElementById('mouseTarget3');
    const unorderedList3 = document.getElementById('unorderedList3');


    //   service.addEventListener('mousemove', e => {
    //   circleOne.style.top = "100px";
    // });

    mouseTarget.addEventListener('mouseenter', e => {
      unorderedList.classList.add('on-mous')
    });
    
    
    mouseTarget.addEventListener('mouseleave', e => {
      unorderedList.classList.remove('on-mous')
    });

    mouseTarget2.addEventListener('mouseenter', e => {
      unorderedList2.classList.add('on-mous')
    });
    
    mouseTarget2.addEventListener('mouseleave', e => {
      unorderedList2.classList.remove('on-mous')
    });

     mouseTarget3.addEventListener('mouseenter', e => {
      unorderedList3.classList.add('on-mous')
    });
    
    mouseTarget3.addEventListener('mouseleave', e => {
      unorderedList3.classList.remove('on-mous')
    });

   

  })

useEffect(() => {

  
    const circleOne = document.getElementById('circleOne');
    const circleTwo = document.getElementById('circleTwo');
    const circleThree = document.getElementById('circleThree');
    const circleFour = document.getElementById('circleFour');
    const circleFive = document.getElementById('circleFive');
    const circleSix = document.getElementById('circleSix');
    const circleSeven = document.getElementById('circleSeven');
    const semi1 = document.getElementById('semi1');
     const semi2 = document.getElementById('semi2');
    let service = document.getElementById('service');
    let how = document.getElementById('how');
    let project = document.getElementById('project');


    if(service){
      service.addEventListener('mousemove' , (event)=>{
        mousemovent(event)
      })
    }
    
    if(how){
      how.addEventListener('mousemove' , (event)=>{
        mousemoventHow(event)
      })
    }

    if(project){
      project.addEventListener('mousemove' , (event)=>{
        mousemoventPro(event)
      })
    }

    function mousemovent(event){
      console.log(event)
      let moveX=Math.floor(-(event.offsetX - (service.offsetWidth / 2)) * (10 / service.offsetWidth));
      let moveY=Math.floor(-(event.offsetY - (service.offsetHeight / 2)) * (10 / service.offsetHeight));
   
      if(circleOne) circleOne.style.transform =`translate(${moveX}px ,${moveY}px )`;
      if(circleTwo) circleTwo.style.transform =`translate(${moveX}px ,${moveY}px )`;
      if(circleThree) circleThree.style.transform =`translate(${moveX}px ,${moveY}px )`;
      if(circleFour) circleFour.style.transform =`translate(${moveX}px ,${moveY}px )`;
    }

     function mousemoventHow(event){
      console.log(event)
      let moveX=Math.floor(-(event.offsetX - (how.offsetWidth / 2)) * (10 / how.offsetWidth));
      let moveY=Math.floor(-(event.offsetY - (how.offsetHeight / 2)) * (10 / how.offsetHeight));
   
      if(circleFive) circleFive.style.transform =`translate(${moveX}px ,${moveY}px )`;
      
    }
    function mousemoventPro(event){
      console.log(event)
      let moveX=Math.floor(-(event.offsetX - (project.offsetWidth / 2)) * (10 / project.offsetWidth));
      let moveY=Math.floor(-(event.offsetY - (project.offsetHeight / 2)) * (10 / project.offsetHeight));
   
      if(circleSix) circleSix.style.transform =`translate(${moveX}px ,${moveY}px )`;
      if(circleSeven) circleSeven.style.transform =`translate(${moveX}px ,${moveY}px )`;
       if(semi1) semi1.style.transform =`translate(0px ,${moveY}px)`;
        if(semi2) semi2.style.transform =`translate(0px ,${moveY}px)`;
      
    }
},[])

  return (
    <div>
      <div className='container pt-5' id='service'  >
        <div className=" pt-4 container-title1" >
          <div className='circle1' id='circleOne'> </div>
          <div className='circle2' id='circleTwo'> </div>
          <div className='circle3' id='circleThree'> </div>
          <div className='circle4' id='circleFour'> </div>
          <div className="row">
            <div className="col-12">
              <h3 className='font-titles' data-aos="fade-down" data-aos-delay="9000" data-aos-duration="2000">خدمات آکام</h3>
              <p data-aos="zoom-in" data-aos-delay="5000" data-aos-duration="2000" className='para-1'>
                <i class="fas fa-quote-right me-2"></i>
                  موفقیت شما از آکام شروع می شود
                <i class="fas fa-quote-left me-2"></i>
              </p>
              <p data-aos="zoom-in" data-aos-delay="5000" data-aos-duration="2000" className='para-2'>
                هدف ما این است که خدمات کامل و حرفه ای را برای موفقیت شما فراهم کنیم، تا بتوانید کسب و کارهای خود را در این بستر قرار دهید.
              </p>
            </div>
          </div>  
        </div>
        <div className='container'>
          <div className="row mb-5 parent-row">
            {serviseCard.map(item =>
              <Card  title={item.title} pic={item.pic}  />     
            )}        
          </div>
        </div>
      </div>
      <div className='customer-akam' id='custom' onClick={(e) => {console.log('Focused on input');}}>
        <div className='in-parent-customer'></div>
        <div className='container'>
          <div className='row py-4'>
            <div className='col-xl-4 my-auto'>
              <div className='custom-text' data-aos="fade-up" data-aos-delay="5000" data-aos-duration="2000">
                <h3 className='font-titles' data-aos="zoom-in-down" data-aos-delay="5000" data-aos-duration="2000">مشتریان ما</h3>
                <p  data-aos="fade-up" data-aos-delay="5000" data-aos-duration="2000">قدرت و اعتبار هر مجموعه ای وابسته به مشتریان و تداوم اعتماد آنها است و ما مفتخر هستیم که در طول چرخه حیات آکام توانسته ایم که به این اعتماد پاسخ مثبت دهیم و مشتریان وفادار و قدرتمندی که مشاهده می نمایید را با افتخار در کنار خود داشته باشیم.</p>
                <p></p>
                <button type="button" class="btn btn-outline button-about" data-aos="fade-up" data-aos-delay="5000" data-aos-duration="2000">مشاهده بیشتر…</button>
              </div>
            </div>
            <div className='col-xl-8'>
              <div className='akm-circle-atom'>
                <div className='center-atom'>
                  <img src='/images/logo.png'/>
                </div>
                <div className='one-line'>
                  <div className='one-line-section' id='unorderedList'>
                    <a href='#'>
                      <div className='oj' id='mouseTarget'>
                        <span>سازمان اوج</span>
                        <div className='img-custom'>
                          <img src='/images/owj.png'/>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className='two-line'>
                  <div className='two-line-section' id='unorderedList2'>
                     <a href='#'>
                      <div className='home' id='mouseTarget2'>
                        <span>خانه مستند</span>
                        <div className='img-custom'>
                          <img src='/images/home.png'/>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className='three-line'>
                  <div className='three-line-section' id='unorderedList3'>
                     <a href='#'>
                      <div className='kaman' id='mouseTarget3'>
                        <span>کمان</span>
                        <div className='img-custom'>
                          <img src='/images/kaman.png'/>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>    
      </div>
      <div className='how-akam pt-5' id='how'>
        <div className="container pt-4 container-title1">
          <div className='circle5' id='circleFive'></div>
          <div className="row">
            <div className="col-12">
              <h3 className='font-titles' data-aos="fade-down" data-aos-delay="9000" data-aos-duration="2000">آکام چگونه کار می کند</h3>
              <p data-aos="zoom-in" data-aos-delay="5000" data-aos-duration="2000" className='para-1'>
                <i class="fas fa-quote-right me-2"></i>
                  با ما حرفه ای و با تجربه ادامه دهید
                <i class="fas fa-quote-left me-2"></i>
              </p>
              <p data-aos="zoom-in" data-aos-delay="5000" data-aos-duration="2000" className='para-2 '>
                هدف ما این است که خدمات کامل و حرفه ای را برای موفقیت شما فراهم کنیم، تا بتوانید کسب و کارهای خود را در این بستر قرار دهید.


              </p>
            </div>
          </div>
        </div>
        <div className='card-how' >
          <div className="container pt-3">
            <div className='row how-row'>
              {author.map(item =>
                <CardSecound  name={item.name} img={item.img}  text={item.text} />     
              )}
            </div>
          </div> 
        </div>
      </div>
      <div style={{position: 'relative',zIndex: 88 ,paddingTop:'3rem'}} id='project'>
        <div className='semi-circle1' id='semi1'></div>
        <div className='semi-circle2' id='semi2'></div>
         <div className='circle6' id='circleSix'></div>
          <div className='circle7' id='circleSeven'></div>

        <div className="container pt-3 container-title1">
         
          <div className="row" >
            <div className="col-12 py-5">
              <h3 className='font-titles' data-aos="fade-down" data-aos-delay="9000" data-aos-duration="2000">پروژه های انجام شده</h3>  
            </div>
          </div>   
        </div>  
        <div className='container'>
          <Tab.Container id="left-tabs-example" defaultActiveKey="first">
            <Row className='mb-5'>
              <Col sm={12} className='fist-col'>
                <Nav variant="pills" className="flex-row nav-project-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="first">آخرین ها</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second"> وب سایت ها</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="three">استارتاپ ها</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="four">اپلیکیشن ها</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
    
              <Tab.Content className='pt-5'>
                <Tab.Pane eventKey="first">
                  <div className='row'>
                    {Slice.map(item =>
                      <Project  name={item.name} img={item.img}  bage={item.bage} link={item.link}/>     
                    )}
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <div className='row'>
                    {Web.map(item =>
                      <Project  name={item.name} img={item.img}  bage={item.bage} link={item.link}/>     
                    )}
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="three">
                  <div className='row'>
                    {Start.map(item =>
                      <Project  name={item.name} img={item.img}  bage={item.bage} link={item.link}/>     
                    )}
                  </div>
                </Tab.Pane>
                <Tab.Pane eventKey="four">
                  <div className='row'>
                    {App.map(item =>
                      <Project  name={item.name} img={item.img}  bage={item.bage} link={item.link}/>     
                    )}
                  </div>
                </Tab.Pane>
              </Tab.Content>
            </Row>
          </Tab.Container>
        </div>             
      </div>
      <div className='question pb-5'>
        
        <div className="container pt-3 container-title1">
          <div className='circle2'></div>
          <div className="row">
            <div className="col-12">
              <h3 className='font-titles' data-aos="fade-down" data-aos-delay="9000" data-aos-duration="2000">پرسش های بیشتر</h3>
              <p data-aos="zoom-in" data-aos-delay="5000" data-aos-duration="2000" className='para-1'>
                <i class="fas fa-quote-right me-2"></i>
                  هر آنچه نمی دانید از ما بپرسید
                <i class="fas fa-quote-left me-2"></i>
              </p>
              <p data-aos="zoom-in" data-aos-delay="5000" data-aos-duration="2000" className='para-2'>
                هدف ما این است که خدمات کامل و حرفه ای را برای موفقیت شما فراهم کنیم، تا بتوانید کسب و کارهای خود را در این بستر قرار دهید.
              </p>
            </div>
          </div>  
        </div>
        <div className="container pt-3 container-title1">
          <div className="row w-100">
          <Accordion defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>پرسش 1</Accordion.Header>
    <Accordion.Body>
      جواب 1
    </Accordion.Body>
  </Accordion.Item>
 
</Accordion>
</div>
</div>
      </div>
    </div>
  );
}

export default Main;

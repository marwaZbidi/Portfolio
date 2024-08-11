import React from 'react';
import photo from './images/about.jpg'
import contact from './images/contactme.jpg'

const About = () => {
  return (
    <div className='bg-gradient-to-br from-black from-50% to-white text-white '>
      <h2 className='text-center text-[50px]'>About Me</h2>
      <div className='flex flex-row gap-32'>
        <div className='flex-1 ml-40'>
      <p className='mt-20 text-[20px] '>Hello! I’m Marwa Zbidi, a passionate and detail-oriented full stack developer with a knack for building robust and scalable web applications. With a strong foundation in both front-end and back-end technologies, I thrive in environments where I can bring creative ideas to life through code.</p>
      <p className=' text-[20px]  mt-11  font-bold'>Why I Love What I Do</p>
      <p className='mt-5 text-[20px] '>Coding is not just a job for me; it's a passion. I love the process of transforming ideas into functional, user-friendly applications. Each project is an opportunity to learn something new and improve my skills.</p>
      </div>
      <div className='flex-1 '>
        <img className='h-[350px] mt-20 w-[300px]'
        src={photo} alt=''/>
      </div>
      </div>
      <h2 className='text-center text-[50px] mt-20'>Skills</h2>
      <div className='flex flex-row gap-6 mt-11 ml-40'>
        <div className='flex-1'>
          <h3 className='text-[30px]'>Front-End</h3>
          <ul className=''>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
          </ul>
        </div>
        <div className='flex-1'>
          <h3 className='text-[30px]'>Back-End</h3>
          <ul className=''>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>MongoDB</li>
            <li>MySQL</li>
          </ul>
        </div>
        <div className='flex-1'>
          <h3 className='text-[30px]'>Interpersonal</h3>
          <ul className=''>
            <li>Communication</li>
            <li>Team Work</li>
          </ul>
        </div>
        <div className='flex-1'>
          <h3 className='text-[30px]'>Intrapersonal</h3>
          <ul className=''>
            <li>Time Management</li>
            <li>Adaptability</li>
            <li>Creativity</li>
          </ul>
        </div>
      </div>
      <div>
      <h2 className='text-center text-[50px] text-white mt-11'>Contact Me</h2>
      <div className='flex flex-row gap-10'>
        <div className='flex-1 '>
        <img className='h-[300px] mt-10 ml-60' src={contact} alt=''/>
        </div>
        <div className='flex-1  mt-40 text-white font-bold text-[20px]'>
        <p>Phone: +216 29245704</p>
          <p>Email: zbidimarwa0@gmail.com</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;

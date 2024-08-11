import React from 'react';
import './css/projects.css'


const Projects = () => {
  return (
    <div className='bg-black text-white'>
     
<div>
  <h1 className='text-center text-[50px]'>My Projects</h1>
  <div class="flex flex-row gap-6 p-6 mt-32">
        <div class="flex-1">
            <a className="text-4xl ml-3 mt-20" href="https://github.com/marwaZbidi/Camp">1.Camp</a>
            <div class="border-t-2 border-white my-4"></div>
            <div>
                <p class="text-lg mt-4 ml-3">
                    Camp, an immersive web application designed to connect nature enthusiasts with the perfect outdoor getaway. This project is a culmination of my passion for web development and my love for the great outdoors.
                </p>
                <h4 class="mt-6 ml-3 text-2xl">Technologies Used</h4>
                <ul class="ml-3 mt-4 list-disc list-inside">
                    <li>Front-End: React, Tailwind CSS, JavaScript</li>
                    <li>Back-End: Node.js, Express.js</li>
                    <li>Database: Sequelize</li>
                </ul>
                
            </div>
        </div>
        <div class="flex-1 flex items-center justify-center">
            <img class="h-96 w-96 mt-11" src="https://i.pinimg.com/564x/21/ac/24/21ac24797923c362508e14515e928f42.jpg" alt="Camping Gear"/>
        </div>
    </div>

    <div class="flex flex-row gap-6 p-6 mt-32">
    <div class="flex-1 flex items-center justify-center">
            <img class="h-96 w-96 mt-11" src="https://i.pinimg.com/564x/7f/8f/5d/7f8f5d33486f42725e18724268f245bb.jpg" alt="Camping Gear"/>
        </div>
        <div class="flex-1">
            <a className="text-4xl ml-3 mt-20" href="https://github.com/marwaZbidi/swiftridess">2.Swift Rides</a>
            <div class="border-t-2 border-white my-4"></div>
            <div>
                <p class="text-lg mt-4 ml-3">
                The Car Rental Site is a comprehensive platform that allows users to search, compare, and book rental cars with ease. The application features a wide range of vehicles, from compact cars to luxury SUVs, and offers a user-friendly interface to streamline the rental process.
                </p>
                <h4 class="mt-6 ml-3 text-2xl">Technologies Used</h4>
                <ul class="ml-3 mt-4 list-disc list-inside">
                    <li>Front-End: Next.js, Tailwind CSS, TypeScript</li>
                    <li>Back-End: Node.js, Express.js</li>
                    <li>Database: Sequelize</li>
                </ul>
                
            </div>
        </div>
        
    </div>

    <div class="flex flex-row gap-6 p-6 mt-32">
        <div class="flex-1">
            <a className="text-4xl ml-3 mt-20" href="https://github.com/marwaZbidi/legacyProject">3.Camping Gear</a>
            <div class="border-t-2 border-white my-4"></div>
            <div>
                <p class="text-lg mt-4 ml-3">
                The Camping Gear Site is an all-in-one solution for discovering, reviewing, and purchasing camping equipment. Whether you're a seasoned adventurer or a casual camper, this site offers a comprehensive range of products, from tents and sleeping bags to cooking gear and hiking accessories.
                </p>
                <h4 class="mt-6 ml-3 text-2xl">Technologies Used</h4>
                <ul class="ml-3 mt-4 list-disc list-inside">
                    <li>Front-End: Next.js, Tailwind CSS, TypeScript</li>
                    <li>Back-End: Node.js, Express.js</li>
                    <li>Database: Sequelize</li>
                </ul>
                
            </div>
        </div>
        <div class="flex-1 flex items-center justify-center">
            <img class="h-96 w-96 mt-11" src="https://i.pinimg.com/564x/dd/fc/97/ddfc979ad394db751b50980788b2badd.jpg" alt="Camping Gear"/>
        </div>
    </div>
  
   

</div>
    </div>
  );
};

export default Projects;

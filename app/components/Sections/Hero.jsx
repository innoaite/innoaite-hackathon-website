'use client'; 
 
 import React, { useEffect, useState } from 'react'; 
 import { motion } from 'framer-motion'; 
 import { 
   Calendar, 
   MapPin, 
   ArrowRight, 
   Code2, 
   Sparkles, 
   Users 
 } from 
   'lucide-react'; 

 export default function Hero() { 
   const [timeLeft, setTimeLeft] = useState({ 
     days: 0, 
     hours: 0, 
     minutes: 0, 
     seconds: 0 
   }); 

   useEffect(() => { 
     const targetDate = new Date('2026-01-27T09:00:00+05:30').getTime(); 
     const interval = setInterval(() => { 
       const now = new Date().getTime(); 
       const distance = targetDate - now; 
       if (distance < 0) { 
         clearInterval(interval); 
         return; 
       } 
       setTimeLeft({ 
         days: Math.floor(distance / (1000 * 60 * 60 * 24)), 
         hours: Math.floor( 
           distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60) 
         ), 
         minutes: Math.floor(distance % (1000 * 60 * 60) / (1000 * 60)), 
         seconds: Math.floor(distance % (1000 * 60) / 1000) 
       }); 
     }, 1000); 
     return () => clearInterval(interval); 
   }, []); 

   const tags = [ 
     { 
       icon: <Code2 className="w-4 h-4" />, 
       text: '24-Hour Build' 
     }, 
     { 
       icon: <Sparkles className="w-4 h-4" />, 
       text: 'Gen-AI Native' 
     }, 
     { 
       icon: <Users className="w-4 h-4" />, 
       text: 'Beginner Friendly' 
     }]; 
 
   return ( 
     <section id="hero" className="relative min-h-screen flex items-center justify-center pt-32 md:pt-40 overflow-hidden"> 
       {/* Background Elements */} 
       <div className="absolute inset-0 bg-hero-pattern opacity-20 pointer-events-none" /> 
       <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-[100px] pointer-events-none" /> 
       <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[100px] pointer-events-none" /> 
 
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full"> 
         <div className="flex flex-col items-center text-center"> 
           {/* Tags */} 
           <motion.div 
             initial={{ 
               opacity: 0, 
               y: 20 
             }} 
             animate={{ 
               opacity: 1, 
               y: 0 
             }} 
             transition={{ 
               duration: 0.5 
             }} 
             className="flex flex-wrap justify-center gap-3 mb-8"> 
 
             {tags.map((tag, index) => 
               <div 
                 key={index} 
                 className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300 backdrop-blur-sm"> 
 
                 {tag.icon} 
                 <span>{tag.text}</span> 
               </div> 
             )} 
           </motion.div> 
 
           {/* Main Title */} 
           <motion.div 
             initial={{ 
               opacity: 0, 
               y: 30 
             }} 
             animate={{ 
               opacity: 1, 
               y: 0 
             }} 
             transition={{ 
               duration: 0.7, 
               delay: 0.1 
             }} 
             className="mb-6"> 
 
             <h2 className="text-sm md:text-base font-semibold tracking-[0.2em] text-violet-400 uppercase mb-4"> 
               Department of AI & ML Presents 
             </h2> 
             <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-2"> 
               YUKTHI{' '} 
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400"> 
                 2026 
               </span> 
             </h1> 
             <p className="text-xl md:text-2xl text-slate-400 font-light mt-4 max-w-2xl mx-auto"> 
               Where <span className="text-white font-medium">Innovation</span>{' '} 
               Meets <span className="text-white font-medium">Execution</span> 
             </p> 
           </motion.div> 
 
           {/* Countdown */} 
           <motion.div 
             initial={{ 
               opacity: 0, 
               scale: 0.9 
             }} 
             animate={{ 
               opacity: 1, 
               scale: 1 
             }} 
             transition={{ 
               duration: 0.5, 
               delay: 0.3 
             }} 
             className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12 w-full max-w-3xl"> 
 
             {[ 
               { 
                 label: 'Days', 
                 value: timeLeft.days 
               }, 
               { 
                 label: 'Hours', 
                 value: timeLeft.hours 
               }, 
               { 
                 label: 'Minutes', 
                 value: timeLeft.minutes 
               }, 
               { 
                 label: 'Seconds', 
                 value: timeLeft.seconds 
               }]. 
               map((item, index) => 
                 <div 
                   key={index} 
                   className="flex flex-col items-center p-4 rounded-2xl bg-slate-900/50 border border-white/10 backdrop-blur-md"> 
 
                   <span className="text-4xl md:text-5xl font-bold text-white tabular-nums"> 
                     {String(item.value).padStart(2, '0')} 
                   </span> 
                   <span className="text-xs md:text-sm text-slate-500 uppercase tracking-wider mt-2"> 
                     {item.label} 
                   </span> 
                 </div> 
               )} 
           </motion.div> 
 
           {/* Event Details */} 
           <motion.div 
             initial={{ 
               opacity: 0 
             }} 
             animate={{ 
               opacity: 1 
             }} 
             transition={{ 
               duration: 0.5, 
               delay: 0.4 
             }} 
             className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-slate-400 mb-8 md:mb-10"> 
             
             <div className="flex items-center gap-2">
               <Calendar className="w-5 h-5 text-violet-400" />
               <span>January 27-28, 2026</span>
             </div>
             
             <div className="hidden md:block w-px h-6 bg-white/10" />
             
             <div className="flex items-center gap-2">
               <MapPin className="w-5 h-5 text-cyan-400" />
               <span>CET Payyanur</span>
             </div>
           </motion.div>

           {/* CTA Buttons */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5, delay: 0.5 }}
             className="flex flex-col sm:flex-row gap-4"
           >
             <a
               href="#cta"
               className="group flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-semibold hover:shadow-[0_0_40px_rgba(124,58,237,0.5)] transition-all duration-300"
             >
               Apply Now
               <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
             </a>
             
             <a
               href="#about"
               className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all duration-300"
             >
               Learn More
             </a>
           </motion.div>
         </div> 
       </div> 
     </section> 
   ); 
 }

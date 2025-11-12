
'use client'
import { useAppContext } from "@/context/useContext";


export default function PurpleReadySection() {
    
  const {setDemoOpen} = useAppContext()

  return (
    <div className="relative min-h-screen bg-linear-to-br from-purple-900 via-violet-900 to-indigo-950 overflow-hidden">
      {/* Simplified background - single gradient mesh */}
      <div className="absolute inset-0 bg-linear-to-tr from-fuchsia-500/20 via-purple-500/10 to-cyan-500/20"></div>
      
      {/* Reduced glowing orbs - removed blur-3xl from some, reduced size */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-2xl opacity-60"></div>
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-indigo-500/15 rounded-full blur-2xl opacity-50"></div>
      
      {/* Simplified diamond crystals - kept only key ones */}
      <div className="absolute inset-0 opacity-20">
        {/* Large crystals */}
        <div className="absolute top-32 left-24 w-48 h-48 border-4 border-purple-300/40 transform rotate-45">
          <div className="absolute inset-4 border-2 border-purple-200/30 transform -rotate-12"></div>
        </div>
        <div className="absolute bottom-20 right-32 w-56 h-56 border-4 border-fuchsia-300/40 transform rotate-45">
          <div className="absolute inset-6 border-2 border-fuchsia-200/30"></div>
        </div>
        
        {/* Medium crystals - reduced from 3 to 2 */}
        <div className="absolute top-1/2 left-1/4 w-32 h-32 border-2 border-purple-200/50 transform rotate-45"></div>
        <div className="absolute top-20 right-1/4 w-40 h-40 border-2 border-violet-300/40 transform rotate-45"></div>
      </div>
      
      {/* Simplified light rays - reduced from 3 to 2 */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-1 h-full bg-linear-to-b from-transparent via-purple-300/50 to-transparent transform -rotate-12"></div>
        <div className="absolute top-0 right-1/3 w-1 h-full bg-linear-to-b from-transparent via-fuchsia-300/40 to-transparent transform rotate-6"></div>
      </div>
      
      {/* Simplified corner piece */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-60">
        <div className="absolute inset-0 bg-linear-to-bl from-purple-500/30 via-fuchsia-600/20 to-transparent transform rotate-12 translate-x-32 -translate-y-20"></div>
        <div className="absolute top-20 right-40 w-32 h-32 border-3 border-white/20 transform rotate-45"></div>
      </div>
      
      {/* Reduced floating particles - from 5 to 3 */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-purple-300 rounded-full"></div>
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-fuchsia-300 rounded-full"></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-violet-300 rounded-full"></div>
      </div>
      
      {/* Simplified grid - lighter and less opaque */}
      <div className="absolute inset-0 opacity-3" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
        backgroundSize: '100px 100px'
      }}></div>
      
      {/* Main content */}
      <div className="relative z-20 flex flex-col items-start justify-center min-h-screen px-8 md:px-16 lg:px-24">
        <div className="max-w-5xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-linear-to-r from-white via-purple-100 to-white mb-8 leading-tight">
            READY FOR YOUR<br />
            FREE TRIAL?
          </h1>
          
          <button className="group relative bg-white text-purple-900 font-bold text-lg px-10 py-5 mb-6 overflow-hidden transition-all duration-300 hover:scale-105">
            <span className="relative z-10">GET STARTED</span>
            <div className="absolute inset-0 bg-linear-to-r from-purple-100 to-fuchsia-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
          
          <p className="text-white text-lg">
            Want to see MachinoX Pro in action first?{' '}
           
              <span onClick={()=> setDemoOpen(true)} className="underline cursor-pointer">Book A Demo</span>
            
          </p>
        </div>
      </div>
      
      {/* Simplified corner accents - removed shadows */}
      <div className="absolute bottom-12 left-12 w-20 h-20 border-3 border-purple-300/40 transform rotate-45">
        <div className="absolute inset-2 border-2 border-purple-200/30"></div>
      </div>
      <div className="absolute top-12 right-12 w-16 h-16 border-3 border-fuchsia-300/50 transform rotate-45"></div>
    </div>
  );
}
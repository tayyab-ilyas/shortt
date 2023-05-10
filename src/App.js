import './App.css';

function App() {
  return (
   
    <div className="App h-screen flex flex-col justify-between">
      
      
        <div className=''>
        <nav className='p-4'>
          <ul className='flex justify-between'>
            <div>
            <li className='mt-1 font-[roboto] ml-5 text-5xl'>
             Shortt.
            </li>
            </div>
            <div className=''>
              <button className='bg-blue-700 hover:bg-[#0099ff] rounded-3xl text-white font-[Poppins] text-xl mt-2 mr-5 px-4 py-2'>
            <li className='' >
             Contact
            </li>
            </button>
            </div>
          </ul>
        </nav>
        </div>
      
      <div className='flex justify-center'>
        <div className=''>
          
        <div className='font-[roboto] flex justify-center'>
    <p className='mt-3 text-2xl'>Enter a URL</p>
    </div>
          <div className='font-[poppins] flex justify-center'>
    <input type="text" className='border border-gray-500 mt-3 rounded-lg'/>
    </div>
    
    <div className='flex font-[poppins] justify-center'>
    <button className='bg-blue-700 hover:bg-[#0099ff] text-white px-4 py-2 rounded-3xl mt-3'>Shorten</button>
    </div>
    </div>
    </div>
    
  
    <footer className=''>
      <div className=''>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#2962ff" fill-opacity="1" d="M0,160L60,170.7C120,181,240,203,360,186.7C480,171,600,117,720,128C840,139,960,213,1080,229.3C1200,245,1320,203,1380,181.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      </div>

    </footer>
    </div>
   
  );
}

export default App;

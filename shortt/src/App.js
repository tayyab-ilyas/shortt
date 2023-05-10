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
              <button className='bg-[#0099ff] hover:bg-blue-700 rounded-3xl text-white font-[Poppins] text-xl mt-2 mr-5 px-4 py-2'>
            <li className='' >
             Contact
            </li>
            </button>
            </div>
          </ul>
        </nav>
        </div>
      
      
        <div className='font-[poppins] p-4'>
        <div className='flex justify-center'>
    <p className='mt-3 text-lg'>Enter a URL</p>
    </div>
          <div className='flex justify-center'>
    <input type="text" className='border border-gray-500 mt-3 rounded-lg'/>
    </div>
    
    <div className='flex justify-center'>
    <button className='bg-blue-700 hover:bg-[#0099ff] text-white px-4 py-2 rounded-3xl mt-3'>Shorten</button>
    </div>
    </div>
  
    <footer className=''>
      <div className=''>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,128L48,117.3C96,107,192,85,288,80C384,75,480,85,576,128C672,171,768,245,864,277.3C960,309,1056,299,1152,256C1248,213,1344,139,1392,101.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
      </div>

    </footer>
    </div>
   
  );
}

export default App;

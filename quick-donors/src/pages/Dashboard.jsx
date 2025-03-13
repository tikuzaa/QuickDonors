import Navbar from "../components/Navigation";
const Dashboard = () => {
    return (
    <>
<Navbar></Navbar>
<div className="flex flex-col-3 justify-center items-center min-h-screen ">
  <div className="flex flex-row justify-center h-full w-full ">
    
    <div className="flex flex-col justify-center items-center mx-5 rounded-lg border bg-[#EEEEEE] px-5 pt-4 shadow-lg">
    <div className= "flex flex-row bg-[#EEEEEE] px-5">
      <div className="bg-[#EEEEEE] px-5">
        <div className="relative mx-auto w-70 pb-4 rounded-full">
        <span className="relative flex size-7 ml-auto">
        <span className="absolute right-0  m-11 h-5 w-5  animate-ping rounded-full bg-green-400 opacity-75 ring-2 ring-green-400 ring-offset-1"></span>
        <span className="absolute right-0 m-11 h-5 w-5 size-7 rounded-full bg-green-500 ring-2 ring-green-500 ring-offset-1"></span>
        </span>
          <img className="mx-auto h-auto w-full rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
        </div>
        <h1 className="my-1 text-center text-3xl font-bold leading-8 text-gray-900">User 1</h1>
        <ul className="mt-3 divide-y rounded bg-gray-100 py-2 px-5 text-gray-600 shadow-sm hover:text-[#8E1616] hover:shadow w-[300px]">
          <li className="flex items-center py-3 text-sm">
            <span>Blood Group</span>
            <span className="ml-auto"><span className="rounded-full bg-green-200 py-1 px-2 text-xs font-medium text-green-700">O+</span></span>
          </li>
          <li className="flex items-center py-3 text-sm">
            <span>Availability Status </span>
            <span className="ml-auto">Available</span>
          </li>
          <li className="flex items-center py-3 text-sm">
            <span>Phone </span>
            <span className="ml-auto">8965243189</span>
          </li>
          <li className="flex items-center py-3 text-sm">
            <span>Email </span>
            <span className="ml-auto">user1@yahoo.in</span>
          </li>
        </ul>
      </div>
    </div>
    </div>

    
    <div className="flex flex-col items-center max-w-3xl w-full">
      
      <div className="mb-5 w-full">
      <div className="flex flex-col items-center max-w-3xl w-full">
    <div className="mb-5 w-full">
        <div className="flex items-center">
        <select className="flex-grow rounded-l-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#8E1616] text-black">
            <option value="" disabled selected>Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
        </select>
        <input type="text" placeholder="Location" className="flex-grow border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#8E1616] text-black" />
        <button className="rounded-r-md bg-[#D84040] px-4 py-2 text-white font-semibold hover:bg-[#8E1616]">Search</button>
        </div>
    </div>
</div>
      </div>

      
      <div className="grid grid-cols-1 rows-6 gap-5 w-full">
        <div className="rounded-lg border bg-white p-4 shadow-lg">
        <div className="flex flex-row justify-center w-full"> 
          <div><h2 className="text-lg font-bold">Donor Name 1</h2>
          <p className="text-[#8E1616]">Distance: 2.5 km</p>
          <button className="mt-2 rounded-md bg-[#D84040] px-3 py-1 text-white font-semibold hover:bg-[#8E1616]">Contact</button>
          </div>
          <div className="relative ml-auto w-22 rounded-full">
          <img className="mx-auto h-auto w-full rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
        </div>
        </div>
        </div>
        <div className="rounded-lg border bg-white p-4 shadow-lg">
        <div className="flex flex-row justify-center w-full"> 
          <div className=""><h2 className="text-lg font-bold">Donor Name 2</h2>
          <p className="text-[#8E1616]">Distance: 2.5 km</p>
          <button className="mt-2 rounded-md bg-[#D84040] px-3 py-1 text-white font-semibold hover:bg-[#8E1616]">Contact</button>
          </div>
          <div className="relative ml-auto w-22 rounded-full">
          <img className="mx-auto h-auto w-full rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
        </div>
        </div>
        </div>
        <div className="rounded-lg border bg-white p-4 shadow-lg">
        <div className="flex flex-row justify-center w-full"> 
          <div className=""><h2 className="text-lg font-bold">Donor Name 3</h2>
          <p className="text-[#8E1616]">Distance: 2.5 km</p>
          <button className="mt-2 rounded-md bg-[#D84040] px-3 py-1 text-white font-semibold hover:bg-[#8E1616]">Contact</button>
          </div>
          <div className="relative ml-auto w-22 rounded-full">
          <img className="mx-auto h-auto w-full rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
        </div>
        </div>
        </div>
        <div className="rounded-lg border bg-white p-4 shadow-lg">
        <div className="flex flex-row justify-center w-full"> 
          <div className=""><h2 className="text-lg font-bold">Donor Name 4</h2>
          <p className="text-[#8E1616]">Distance: 2.5 km</p>
          <button className="mt-2 rounded-md bg-[#D84040] px-3 py-1 text-white font-semibold hover:bg-[#8E1616]">Contact</button>
          </div>
          <div className="relative ml-auto w-22 rounded-full">
          <img className="mx-auto h-auto w-full rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
        </div>
        </div>
        </div>
        <div className="rounded-lg border bg-white p-4 shadow-lg">
        <div className="flex flex-row justify-center w-full"> 
          <div className=""><h2 className="text-lg font-bold">Donor Name 5</h2>
          <p className="text-[#8E1616]">Distance: 2.5 km</p>
          <button className="mt-2 rounded-md bg-[#D84040] px-3 py-1 text-white font-semibold hover:bg-[#8E1616]">Contact</button>
          </div>
          <div className="relative ml-auto w-22 rounded-full">
          <img className="mx-auto h-auto w-full rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
        </div>
        </div>
        </div>
        <div className="rounded-lg border bg-white p-4 shadow-lg">
        <div className="flex flex-row justify-center w-full"> 
          <div className=""><h2 className="text-lg font-bold">Donor Name 6</h2>
          <p className="text-[#8E1616]">Distance: 2.5 km</p>
          <button className="mt-2 rounded-md bg-[#D84040] px-3 py-1 text-white font-semibold hover:bg-[#8E1616]">Contact</button>
          </div>
          <div className="relative ml-auto w-22 rounded-full">
          <img className="mx-auto h-auto w-full rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
        </div>
        </div>
        </div>
      </div>
    </div>
    <div className="flex flex-col w-full justify-center mx-5 ">
        <h2 className="text-xl font-bold mb-3">Live Map of Available Donors</h2>
        <div className="border rounded-lg h-full flex items-center justify-center bg-[#EEEEEE] shadow-lg">
          <p className="text-gray-500">Map will be displayed here</p>
          
        </div>
      </div>
  </div>
</div>


    </>
);
  };
  
  export default Dashboard;
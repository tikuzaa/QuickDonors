const Dashboard = () => {
    return (
    <>

<div class="flex flex-col justify-center items-center min-h-screen p-5">
  <div class="flex flex-row justify-center h-full w-full">
    <div class="flex flex-col justify-center items-center mx-5 rounded-lg border bg-[#EEEEEE] px-5 pt-4 shadow-lg">
    <div class= "flex flex-row bg-[#EEEEEE] px-5">
      <div class="bg-[#EEEEEE] px-5">
        <div class="relative mx-auto w-42 rounded-full">
          <span class="absolute right-0 m-3 h-3 w-3 rounded-full bg-[#8E1616] ring-2 ring-[#8E1616] ring-offset-2"></span>
          <img class="mx-auto h-auto w-full rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
        </div>
        <h1 class="my-1 text-center text-3xl font-bold leading-8 text-gray-900">User 1</h1>
        <ul class="mt-3 divide-y rounded bg-gray-100 py-2 px-5 text-gray-600 shadow-sm hover:text-[#8E1616] hover:shadow w-[300px]">
          <li class="flex items-center py-3 text-sm">
            <span>Blood Group</span>
            <span class="ml-auto"><span class="rounded-full bg-red-200 py-1 px-2 text-xs font-medium text-red-700">O+</span></span>
          </li>
          <li class="flex items-center py-3 text-sm">
            <span>Availability Status </span>
            <span class="ml-auto">Available</span>
          </li>
          <li class="flex items-center py-3 text-sm">
            <span>Phone </span>
            <span class="ml-auto">8965243189</span>
          </li>
          <li class="flex items-center py-3 text-sm">
            <span>Email </span>
            <span class="ml-auto">user1@yahoo.in</span>
          </li>
        </ul>
      </div>
    </div>
    </div>

    
    <div class="flex flex-col items-center max-w-3xl w-full">
      
      <div class="mb-5 w-full">
      <div class="flex flex-col items-center max-w-3xl w-full">
    <div class="mb-5 w-full">
        <div class="flex items-center">
        <select class="flex-grow rounded-l-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#8E1616] text-black">
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
        <input type="text" placeholder="Location" class="flex-grow border border-gray-300 px-3 py-2 focus:outline-none focus:ring-1 focus:ring-[#8E1616] text-black" />
        <button class="rounded-r-md bg-[#D84040] px-4 py-2 text-white font-semibold hover:bg-[#8E1616]">Search</button>
        </div>
    </div>
</div>
      </div>

      
      <div class="grid grid-cols-2 rows-3 gap-5 w-full">
        <div class="rounded-lg border bg-white p-4 shadow-lg">
        <div class="flex flex-row justify-center w-full"> 
          <div class="mr-15"><h2 class="text-lg font-bold">Donor Name 1</h2>
          <p class="text-[#8E1616]">Distance: 2.5 km</p>
          <button class="mt-2 rounded-md bg-[#D84040] px-3 py-1 text-white font-semibold hover:bg-[#8E1616]">Contact</button>
          </div>
          <div class="relative ml-auto w-22 rounded-full">
          <img class="mx-auto h-auto w-full rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
        </div>
        </div>
        </div>
        <div class="rounded-lg border bg-white p-4 shadow-lg">
        <div class="flex flex-row justify-center w-full"> 
          <div class="mr-15"><h2 class="text-lg font-bold">Donor Name 2</h2>
          <p class="text-[#8E1616]">Distance: 2.5 km</p>
          <button class="mt-2 rounded-md bg-[#D84040] px-3 py-1 text-white font-semibold hover:bg-[#8E1616]">Contact</button>
          </div>
          <div class="relative ml-auto w-22 rounded-full">
          <img class="mx-auto h-auto w-full rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
        </div>
        </div>
        </div>
        <div class="rounded-lg border bg-white p-4 shadow-lg">
        <div class="flex flex-row justify-center w-full"> 
          <div class="mr-15"><h2 class="text-lg font-bold">Donor Name 3</h2>
          <p class="text-[#8E1616]">Distance: 2.5 km</p>
          <button class="mt-2 rounded-md bg-[#D84040] px-3 py-1 text-white font-semibold hover:bg-[#8E1616]">Contact</button>
          </div>
          <div class="relative ml-auto w-22 rounded-full">
          <img class="mx-auto h-auto w-full rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
        </div>
        </div>
        </div>
        <div class="rounded-lg border bg-white p-4 shadow-lg">
        <div class="flex flex-row justify-center w-full"> 
          <div class="mr-15"><h2 class="text-lg font-bold">Donor Name 4</h2>
          <p class="text-[#8E1616]">Distance: 2.5 km</p>
          <button class="mt-2 rounded-md bg-[#D84040] px-3 py-1 text-white font-semibold hover:bg-[#8E1616]">Contact</button>
          </div>
          <div class="relative ml-auto w-22 rounded-full">
          <img class="mx-auto h-auto w-full rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
        </div>
        </div>
        </div>
        <div class="rounded-lg border bg-white p-4 shadow-lg">
        <div class="flex flex-row justify-center w-full"> 
          <div class="mr-15"><h2 class="text-lg font-bold">Donor Name 5</h2>
          <p class="text-[#8E1616]">Distance: 2.5 km</p>
          <button class="mt-2 rounded-md bg-[#D84040] px-3 py-1 text-white font-semibold hover:bg-[#8E1616]">Contact</button>
          </div>
          <div class="relative ml-auto w-22 rounded-full">
          <img class="mx-auto h-auto w-full rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
        </div>
        </div>
        </div>
        <div class="rounded-lg border bg-white p-4 shadow-lg">
        <div class="flex flex-row justify-center w-full"> 
          <div class="mr-15"><h2 class="text-lg font-bold">Donor Name 6</h2>
          <p class="text-[#8E1616]">Distance: 2.5 km</p>
          <button class="mt-2 rounded-md bg-[#D84040] px-3 py-1 text-white font-semibold hover:bg-[#8E1616]">Contact</button>
          </div>
          <div class="relative ml-auto w-22 rounded-full">
          <img class="mx-auto h-auto w-full rounded-full" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
        </div>
        </div>
        </div>
      </div>

   
      <div class="mt-5 h-full w-full">
        <h2 class="text-xl font-bold mb-3">Live Map of Available Donors</h2>
        <div class="border rounded-lg h-79 bg-[#EEEEEE] flex items-center justify-center shadow-lg">
          <p class="text-gray-500">Map will be displayed here</p>
          
        </div>
      </div>
    </div>
  </div>
</div>


    </>
);
  };
  
  export default Dashboard;
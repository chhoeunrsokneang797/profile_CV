import React from 'react'

const Contact = () => {
  return (
   <div className="bg-white p-4 md:p-8 min-h-screen flex items-center justify-center font-sans">

    <div className="max-w-6xl w-full mx-auto flex flex-col lg:flex-row gap-8">

        <div className="w-full lg:w-1/3 flex flex-col gap-6">
            
            <div className="flex items-center p-6 bg-white rounded-2xl border-[3px] border-blue-500 shadow-sm relative overflow-hidden">
                <div className="flex-shrink-0 p-3 rounded-full border-[3px] border-blue-500 text-blue-500 mr-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-8 h-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-900">Email:</h3>
                    <p className="text-teal-600 text-lg font-medium break-all">chhoeunrsokneang5@gmail.com</p>
                </div>
            </div>

             <div className="flex items-center p-6 bg-white rounded-2xl border-[3px] border-blue-500 shadow-sm">
                <div className="flex-shrink-0 p-3 rounded-full border-[3px] border-blue-500 text-blue-500 mr-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-8 h-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-1.335 1.335c-2.853-1.788-5.563-4.498-7.35-7.35l1.335-1.335c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>                      
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-900">Phone:</h3>
                    <p className="text-teal-600 text-lg font-medium">+855 962912796</p>
                </div>
            </div>

             <div className="flex items-center p-6 bg-white rounded-2xl border-[3px] border-blue-500 shadow-sm">
                <div className="flex-shrink-0 p-3 rounded-full border-[3px] border-blue-500 text-blue-500 mr-5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className="w-8 h-8">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>                      
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-900">Address:</h3>
                    <p className="text-teal-600 text-lg font-medium">Phnom Penh, Cambodia</p>
                </div>
            </div>
        </div>


        <div className="w-full lg:w-2/3 bg-gray-50 rounded-2xl border border-blue-500 p-8 lg:p-10 shadow-sm">      
       

            <form action="#" method="POST" className="space-y-6">
                
                <div>
                    <label for="name" className="block text-gray-800 font-bold mb-2 text-lg">Name</label>
                    <input type="text" id="name" name="name" placeholder="Enter name" className="w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-xl py-4 px-5 leading-tight focus:outline-none focus:bg-white focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition duration-200"/>
                </div>

                <div>
                    <label for="email" className="block text-gray-800 font-bold mb-2 text-lg">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter email" className="w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-xl py-4 px-5 leading-tight focus:outline-none focus:bg-white focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition duration-200"/>
                </div>

                <div>
                    <label for="message" className="block text-gray-800 font-bold mb-2 text-lg">Message</label>
                    <textarea id="message" name="message" rows="5" placeholder="Message" className="w-full bg-gray-100 text-gray-700 border border-gray-300 rounded-xl py-4 px-5 leading-tight resize-none focus:outline-none focus:bg-white focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition duration-200"></textarea>
                </div>

                <div>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
                        Submit
                    </button>
                </div>

            </form>
        </div>
    </div>
</div>
  )
}

export default Contact

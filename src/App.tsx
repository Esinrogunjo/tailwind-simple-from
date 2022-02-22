import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [name, setName] = useState("Kretes");
  return (
    <div className="min-h-screen bg-green-50 flex flex-col justify-center">
      <div className="max-w-md w-full mx-auto">
        <div className="text-center font-medium text-xl">somthing</div>
      </div>
      <div className="max-w-md w-full mx-auto mt-4 bg-white p-8 border broder-grey-300">
        <form action="" className="space-y-6">
          <div>
            <label htmlFor="" className="text-sm font-bold text-gray-600 block">
              Email
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label htmlFor="" className="text-sm font-bold text-gray-600 block">
              Password
            </label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
          </div>
          <div>
            <label htmlFor="" className="text-sm font-bold text-gray-600 block">
              Source
            </label>
            <select
              name=""
              id=""
              className="w-full p-2 border border-gray-300 rounded mt-1"
            >
              <option value="Youtube">Youtube</option>
              <option value="Website">Website</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 text-blue-300 rounded"
              />
              <label htmlFor="" className="ml-2 text-sm text-gray-600">
                Remeber me
              </label>
            </div>
            <div>
              <a href="" className="font-medium text-sm text-blue-500">
                Forget Password?
              </a>
            </div>
          </div>
          <div>
            <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;

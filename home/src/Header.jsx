import React from "react";



export default function Header({app}) {
  return (
    <div className="p-5 bg-blue-500 text-white text-3xl font-bold">
      <div className="flex">
        <div className="flex-grow flex">
          Fidget Spinner World | {app.name}
   
        </div>
        <div className="flex-end relative">
   
        </div>
      </div>
    </div>
  );
}

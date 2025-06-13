import TextField from "@mui/material/TextField";
import React from "react";


const text = {
  Console_Games: "Console Games",
  PC_Games: "PC Games",
  Mobile_Games: "Mobile Games",
  Top_Games_Year: "Top Video Games of the Year",
  Most_Popular_Games: "Most Popular Video Games",
  Users: "Users"
}


const Home = () => {
  return (
    <React.Fragment>
      <div className="flex justify-between items-center mb-3">
        <h1 className="text-titleHeader">MyGamesList</h1>
        <div className="">
          <button className="bg-gray-700 px-6 mr-3 rounded-sm">Login</button>
          <button className="bg-redTheme px-6 rounded-sm">Signup</button>
        </div>
      </div>
      <div>
        <nav className="flex justify-between items-center bg-redTheme p-2.5">
          <ul className="flex">
            <li className="pr-2 font-bold">{ text.Console_Games }</li>
            <li className="px-2 font-bold">{ text.PC_Games }</li>
            <li className="pl-2 font-bold">{ text.Mobile_Games }</li> 
          </ul>
          <TextField 
            label="Search Video Games..." 
            size="small" 
            sx={{ 
              input: { color: 'white' },
              backgroundColor: 'black',
              width: '25rem'
            }} 
            slotProps={{
              inputLabel: {
                style: { color: 'white' }
              }
            }}
          />
        </nav>
      </div>
    </React.Fragment>
  )
}

export default Home;

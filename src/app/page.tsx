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
      <h1>MyGamesList</h1>
      <div>
        <nav className="bg-redTheme w-3/4 p-2">
          <ul className="flex">
            <li className="pr-2">{ text.Console_Games }</li>
            <li className="px-2">{ text.PC_Games }</li>
            <li className="pl-2">{ text.Mobile_Games }</li>
          </ul>
        </nav>
      </div>
    </React.Fragment>
  )
}

export default Home;

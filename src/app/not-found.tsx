import React from "react";

const NotFoundPage: React.FC = () => {
  return (
    <div className="md:min-h-[80vh] flex justify-center items-center min-h-screen">
      <div>
        <h1 className="text-2xl md:text-4xl font-extrabold py-3">Oooops...</h1>
        <h2 className="text-xl md:text-2xl font-extrabold">
          Looks like the page could not be found!
        </h2>
        {/* <div className="relative inline-flex items-center gap-x-4 group"> */}
          <h2 className="text-xl md:text-2xl font-extrabold">Go back to</h2><br />
          <a href="/">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg">
              Homepage
            </button>
          </a>
        {/* </div> */}
      </div>
    </div>
  );
};

export default NotFoundPage;

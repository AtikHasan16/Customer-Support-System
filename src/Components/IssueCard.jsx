import React from "react";

const IssueCard = ({ data, handleCard }) => {
  const handleClick = () => {
    
    return handleCard(data);
  };

  return (
    <div>
      {/* card box */}
      <div
        onClick={handleClick}
        className="p-6 space-y-4 rounded-lg bg-white shadow-lg shadow-gray-500 h-fit"
      >
        <div className="flex justify-between items-center flex-wrap">
          <h1 className="font-semibold text-xl">{data.title}</h1>
          <label
            className={`  text-xs font-bold rounded-full p-2
             ${
               data.status === "New"
                 ? "bg-green-200 text-green-700 "
                 : "bg-yellow-100 text-yellow-500 "
             }
            `}
          >
            {data.status === "New" ? "🟢 New" : "🟡 In Progress"}
          </label>
        </div>
        <p className="text-gray-500">{data.description}</p>
        <div className="flex justify-between items-center text-gray-500 flex-wrap">
          <div className="flex justify-center gap-4">
            <p># {data.id}</p>
            <p
              className={` font-semibold
                ${data.priority === "High" ? "text-red-500" : "text-amber-300 "}
              `}
            >
              {data.priority}
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <p>{data.customer}</p>
            <p>🗓️ {data.createdAt}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueCard;

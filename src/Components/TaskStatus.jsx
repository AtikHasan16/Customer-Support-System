import React from "react";

const TaskStatus = ({ data, handleTask, customerIssue, setCustomerIssue }) => {
  return (
    <div className="">
      <div className="bg-white rounded-xl p-3">
        <h1 className="font-bold text-gray-600 text-lg py-3">{data.title}</h1>
        <p className="text-gray-500 text-[14px] p-1 font-semibold">
          {data.customer}
        </p>
        <p className="text-gray-500 text-[14px] p-1 font-semibold">
          {data.createdAt}
        </p>
        <button
          onClick={() => handleTask(data, customerIssue, setCustomerIssue)}
          className="py-3 w-full bg-green-600 rounded-xl text-white font-semibold"
        >
          Complete
        </button>
      </div>
    </div>
  );
};

export default TaskStatus;

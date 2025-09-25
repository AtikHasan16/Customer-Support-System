import React from "react";

const ResolveStatus = ({ res, resolveRemove }) => {
  return (
    <div className="bg-green-100 border-2 border-green-400 rounded-xl p-3">
      <h1 className="font-bold text-gray-600 text-lg py-3">{res.title}</h1>
      <div className="flex text-[14px] justify-between">
        <p className="text-green-600"> ✅ Task Resolved</p>
        <button onClick={() => resolveRemove(res)} className="text-gray-500">
          Click to remove
        </button>
      </div>
    </div>
  );
};

export default ResolveStatus;

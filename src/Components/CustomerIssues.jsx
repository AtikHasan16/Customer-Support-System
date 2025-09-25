import React, { use, useState } from "react";
import Container from "./Container";
import IssueCard from "./IssueCard";
import TaskStatus from "./TaskStatus";
import ResolveStatus from "./ResolveStatus";

const CustomerIssues = ({
  issuePromise,
  handleCard,
  issueCard,
  handleTask,
  resolve,
  resolveRemove,
}) => {
  const issueData = use(issuePromise);
  const [customerIssue, setCustomerIssue] = useState(issueData);

  return (
    <div className="bg-gray-100">
      <Container>
        <h1 className="text-xl text-center md:text-left font-bold text-gray-600 py-4">
          Customer Tickets
        </h1>
        <div className="grid md:grid-cols-3 gap-10 pb-10">
          <div className="md:col-span-2 grid md:grid-cols-2 order-last md:order-first  gap-6 pb-20">
            {customerIssue.length === 0 ? (
              <h1 className="flex items-center justify-center text-xl text-center text-gray-400">
                No Ticket Found
              </h1>
            ) : (
              ""
            )}

            {customerIssue.map((data) => (
              <IssueCard
                key={data.id}
                handleCard={handleCard}
                data={data}
              ></IssueCard>
            ))}
          </div>
          <div className="space-y-4 col-span-2 md:col-span-1 bg-gray-300 h-fit rounded-2xl p-4">
            <h1 className="text-xl font-bold text-gray-900 pb-4">
              Task Status
            </h1>
            {issueCard.length === 0 ? (
              <h1 className="text-gray-500 text-center">
                Select a ticket to add to Task Status
              </h1>
            ) : (
              ""
            )}
            {issueCard.map((data, i) => (
              <TaskStatus
                customerIssue={customerIssue}
                setCustomerIssue={setCustomerIssue}
                issuePromise={issuePromise}
                key={i}
                handleTask={handleTask}
                data={data}
              ></TaskStatus>
            ))}

            <div className="py-8 border-gray-400 space-y-4">
              <h1 className="text-xl font-bold text-gray-900 pb-4">
                Resolve Status
              </h1>

              {resolve.map((res, i) => {
                return (
                  <ResolveStatus
                    resolveRemove={resolveRemove}
                    key={i}
                    res={res}
                  ></ResolveStatus>
                );
              })}
              {resolve.length === 0 ? (
                <h1 className="text-gray-500 text-center">
                  No task have been resolved yet
                </h1>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CustomerIssues;

import { Suspense, useState } from "react";
import "./App.css";
import CustomerIssues from "./Components/CustomerIssues";
import Navbar from "./Components/Navbar";
import Progressbar from "./Components/Progressbar";
import Footer from "./Components/Footer";
import Loading from "./Components/Loading";
import { ToastContainer, toast } from "react-toastify";
function App() {
  const customerIssuePromise = async () => {
    const issuePromise = await fetch("/customersData.json");
    return issuePromise.json();
  };
  const issuePromise = customerIssuePromise();

  // const [issueData, setIssueData] = useState();
  // console.log(issueData);

  // Customer tickets setting to task status
  const [issueCard, setIssueCard] = useState([]);
  // console.log(issueCard);
  const dataLength = issueCard.length;
  // Task complete and transfer to the resolve status
  const [resolve, setResolve] = useState([]);
  // console.log(resolve);

  const resolveRemove = (res) => {
    toast("Resolved task removed from resolve status");
    const filteredResolve = resolve.filter((data) => data.id !== res.id);

    return setResolve(filteredResolve);
  };

  const resLength = resolve.length;
  // function for card handling
  const handleCard = (data) => {
    toast("Card added to the task status");
    return setIssueCard([...issueCard, data]);
  };
  // function for task status handling
  const handleTask = (data, customerIssue, setCustomerIssue) => {
    toast("Task is resolved");
    const removedTask = issueCard.filter((issue) => issue.id !== data.id);
    setIssueCard(removedTask);
    setResolve([...resolve, data]);
    const filterComplete = customerIssue.filter((card) => card.id !== data.id);
    setCustomerIssue(filterComplete);
  };

  return (
    <>
      <Navbar></Navbar>
      <Progressbar dataLength={dataLength} resLength={resLength}></Progressbar>
      <Suspense fallback={<Loading></Loading>}>
        <CustomerIssues
          issueCard={issueCard}
          handleCard={handleCard}
          handleTask={handleTask}
          issuePromise={issuePromise}
          resolve={resolve}
          resolveRemove={resolveRemove}
        ></CustomerIssues>
      </Suspense>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;

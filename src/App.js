import "./App.css";
import { Navbar } from "./components/Navbar";
import { Sidebar } from "./components/Sidebar";
import { Breadcrumb } from "./components/Breadcrumb";
import { EmployeeList } from "./components/List";
import { Footer } from "./components/Footer";
import { Card } from "./components/Card";
import { useState, useEffect } from "react";
import { Modal } from './components/Modal/Modal';
import axios from "axios";


function App() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    const promise = axios.get("https://jsonplaceholder.typicode.com/users");
    promise
        .then((response) => {
          setEmployees(response.data);
        })
        
  },[])

  const [sidebarClass, setSidebarClass] = useState("sb-nav-fixed");

  function toggleSidebarClass() {
    setSidebarClass(
      sidebarClass.includes("toggled")
        ? "sb-nav-fixed"
        : "sb-nav-fixed sb-sidenav-toggled"
    );
  }

  const [open, setOpen] = useState(false);

  return (
    <div className={sidebarClass}>
      {open && <Modal closeModal={setOpen} request={"Add"}/>}
      {open && <Modal closeModal={setOpen} request={"Update"}/>}
      <Navbar toggleSidebarClass={toggleSidebarClass} />
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <Sidebar />
        </div>
        <div id="layoutSidenav_content">
          <main>
            <div className="container-fluid px-4">
              <h1 className="mt-4">Tables</h1>
              
              <Breadcrumb />
              <Card>
                DataTables is a third party plugin that is used to generate the
                demo table below. For more information about DataTables, please
                visit the
                <a href="https://datatables.net/">
                  official DataTables documentation
                </a>
                .
              </Card>
              <button
               className="my-3 mx-3 btn btn-primary"
               onClick={() => {setOpen(true)}}>Add</button>
              <button 
               className="my-3 btn btn-primary"
               onClick={() => {setOpen(true)}}
               >Update</button>
              
              <Card title="DataTable Example">
                <EmployeeList items={employees} />
              </Card>
            </div>
          </main>
          <Footer />
        </div>
      </div>
      
      
    </div>
  );
}

export default App;

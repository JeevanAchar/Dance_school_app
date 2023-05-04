import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom';
import axiosInstance from './../helper/Axios';
import STYLE from './academy.module.css'

const ViewAcademyDashBoard = () => {
  const [state, setState] = useState([])
  // const {id} = useParams()
  
  useEffect(()=>{
    const token  = window.localStorage.getItem("token")
    const fetchData =  async()=>{
        try{
            const {data} =  await axiosInstance.get(`/academies/getall`, {headers:{Authorization:`Bearer ${token}`}})
            const finalData = data.data
            console.log(finalData);
            setState(finalData)
        }
        catch(err){
          console.log(err)
        }
    }
    fetchData()
  },[])

  return (
      <>
        <section id={STYLE.ViewAcademyDashBoardBlock}>
            <h3 id={STYLE.ViewAcademyDashBoardNumber}>No of Academy -<span>{state.length}</span></h3>
          <article id={STYLE.ViewAcademyDashBoardArticle}>
            {state.map((value, index)=>{
                return(
                  <>
                  <nav>
                    <ul>
                      <li>SL.No - {index+1}</li>
                      <li>Academy Name - {value.academyName}</li>
                      <li>Description -  {value.description}</li>
                      <li>Email - {value.email}</li>
                      <li>Contact Number - {value.contact}</li>
                      <div>
                        <button>Edit</button>
                        <button>Add branch</button>
                      </div>
                    </ul>
                  </nav>
                  </>
                )     
            })}
          </article>
        </section>
      </>
    )
}

export default ViewAcademyDashBoard
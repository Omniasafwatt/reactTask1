import React from 'react'
import"../body/Portfolio.css"
import { useState } from 'react'

export default function Contact() {
    const [label, setLabel] = useState('',false)
    function labelappear(){
        setLabel('userName :')

    }
    const [label2, setLabel2] = useState('',false)
    function labelappear2(){
        setLabel2('userAge :')

    }
    const [label3, setLabel3] = useState('',false)

    function labelappear3(){
        setLabel3('userEmail :')

    }
    const [label4, setLabel4] = useState('',false)

    function labelappear4(){
        setLabel4('userPassword :')

    }

    return (
    <>
    <div className="contact">
    <div className="container p-5 text-center">
    <h2>CONATCT SECTION</h2>
    <div className="linestarr mb-3">
    <div className="linee me-3"></div>
    <i className="fa-solid fa-star"></i>
    <div className="linee ms-3"></div>
    </div>
    <div className="row forms">
    <form noValidate action className="w-75 p-3 mx-auto mt-5 ng-valid ng-dirty ng-touched text-start">
        <label htmlFor="userName" className="position-relative top-0 __top">{label} </label>
        <input onChange={labelappear} id="userName" type="text" placeholder="userName" name="userName" className="w-100 border-0 border-bottom py-3 position-relative ng-valid ng-dirty ng-touched" fdprocessedid="fbfrpg" />
        <label htmlFor="userAge" className="position-relative top-0 __top">{label2} </label>
        <input onChange={labelappear2} id="userAge" type="text" placeholder="userAge" name="userName" className="w-100 border-0 border-bottom py-3 position-relative ng-valid ng-dirty ng-touched" fdprocessedid="xup6z4" />
        <label htmlFor="userEmail" className="position-relative top-0 __top">{label3} </label>
        <input onChange={labelappear3} id="userEmail" type="text" placeholder="userEmail" name="userName" className="w-100 border-0 border-bottom py-3 position-relative ng-valid ng-dirty ng-touched" fdprocessedid="jjsr48" />
        <label htmlFor="userPassword" className="position-relative top-0 __top">{label4} </label>
        <input onChange={labelappear4} id="userPassword" type="text" placeholder="userPassword" name="userName" className="w-100 border-0 border-bottom py-3 position-relative ng-valid ng-dirty ng-touched" fdprocessedid="0ibxqd" />
        <button className="btn mt-4 text-white" style={{backgroundColor: '#1abc9c'}} fdprocessedid="wvplog"> send Message </button>
    </form>
    </div>

    </div>

    </div>

    </>
  )
}

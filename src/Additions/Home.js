import React, { useEffect, useRef } from 'react'


const Home = (props) => {


    // The regex function helps to validate the input provided by the user, and it displays a message based on validity/invalidity of user's input

    const regex = () => {

        let numberinput3 = document.getElementById("numberinput3");
        let invalid = document.getElementById("invalid");
        let valid = document.getElementById("valid");
        numberinput3.addEventListener("blur", () => {

            let regex = /^([0-9]){10}$/
            let str = numberinput3.value;

            if (regex.test(str)) {
                invalid.style.display = "none"
                valid.style.display = "block"
            }
            else {
                invalid.style.display = "block"
                valid.style.display = "none"
            }
        })


    }




    // The active function indicates the active/inactive state of the contact input by displaying a box-shadow around it

    const active = (e) => {
        let contact3 = document.getElementById("contact3");
        contact3.classList.add("active")
    }
    // This UseRef is used for the active/inactive state of the contact input 

    let ActiveRef = useRef();

    // This UseEffect helps to change the active state of the contact input to inactive by clicking anywhere on the except input

    useEffect(() => {
        document.body.addEventListener("click", (e) => {
            let contact3 = document.getElementById("contact3");
            if (!ActiveRef.current.contains(e.target)) {
                contact3.classList.remove("active")
            }
        })
    })

    // The toggle function is used to control display of the dropdown and the arrow direction

    const toggle = () => {
        let dropdown = document.getElementById("dropdown");
        let arrowDown = document.getElementById("arrowDown");
        let arrowUp = document.getElementById("arrowUp");

        dropdown.classList.toggle("open")

        if (dropdown.classList.contains("open")) {
            arrowDown.style.display = "none";
            arrowUp.style.display = "block"
        }

        else {
            arrowDown.style.display = "block";
            arrowUp.style.display = "none"
        }

    }


    // This UseRef is used for the display of dropdown list 
    let menuRef = useRef()


    // This UseEffect helps to close the dropdown by clicking anywhere except the dropdown list, and it also changes the direction of arrow

    useEffect(() => {
        document.body.addEventListener("click", (event) => {
            let dropdown = document.getElementById("dropdown");
            let arrowDown = document.getElementById("arrowDown");
            let arrowUp = document.getElementById("arrowUp");

            if (!menuRef.current.contains(event.target)) {
                dropdown.classList.remove("open")
                arrowDown.style.display = "block"
                arrowUp.style.display = "none"
            }

            else {
            }
        })
    })


    return (
        <div>

            <div className='imgcontainer'>

                <div className='container'>

                    <h3 className='heading'>inactive</h3>

                    <div className='contact'>

                        <div className='tag'>Phone Number</div>

                        <div className='state'>
                            <div className='code'>
                                <ul className='stateul'>

                                    <li className='stateli select'><div className='flag' alt='...'></div>+91<span className='arrowDown'></span></li>

                                </ul>
                            </div>

                            <input className='numberinput' id='numberinput1' type={"text"}></input>

                        </div>

                    </div>


                    <h3 className='heading'>active</h3>

                    <div className='contact' id='contact2'>

                        <div className='tag'>Phone Number</div>

                        <div className='state'>

                            <div className='code'>

                                <ul className='stateul'>

                                    <li className='stateli select'><div className='flag' alt='...'></div>+91<span className='arrowDown'></span></li>

                                </ul>
                            </div>

                            <input className='numberinput' id='numberinput2' type={"text"}></input>
                        </div>

                    </div>




                    <h3 className='heading'>Active with Dropdown</h3>
                    <div className='contact' id='contact3' ref={ActiveRef}>

                        <div className='tag'>Phone Number</div>

                        <div className='state'>

                            <div className='code'>

                                <ul className='stateul'>

                                    <li className='stateli select' onClick={toggle} ref={menuRef} ><div className='flag' alt='...'></div>+91<span id='arrowDown' className='arrowDown'></span><span className='arrowUp' id='arrowUp'></span></li>

                                    <div className='dropdown' id='dropdown'>

                                        <li className='stateli options'><div className='flag optionsflag' alt='...'></div>+91</li>

                                        <li className='stateli options' ><div className='flag optionsflag' alt='...'></div>+91</li>

                                        <li className='stateli options'><div className='flag optionsflag' alt='...'></div>+91</li>

                                        <li className='stateli options'><div className='flag optionsflag' alt='...'></div>+91</li>

                                    </div>

                                </ul>
                            </div>

                            <small className='invalid' id='invalid'>Your Number is invalid. Please Enter a valid number</small>

                            <small className='valid' id='valid'>Your number is valid</small>

                            <input className='numberinput' id='numberinput3' onClick={active} onMouseDown={regex} type={"text"}></input>

                        </div>

                    </div>
                </div>

            </div>
        </div >
    )
}

export default Home

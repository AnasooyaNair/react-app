import React, { useEffect, useState } from 'react';
import './CompanyDetails.css';

const serviceData = [
    { name : 'Manufacturing' },
    { name : 'Outsourcing' },
    { name : 'Assembling' },
    { name : 'Imports' }
];

const CompanyDetails = (props) => {
    const [enteredOfficialComName , setEnteredOfficialComName] = useState('');
    const [enteredCommercialName , setEnteredCommercialName] = useState('');
    const [radio , setRadio] = useState('Private');
    const [checkboxes , setCheckBoxes] = useState([]);

    useEffect(() => {
        setCheckBoxes(serviceData)},
        []);

    const [filter,setFilter] = useState ('');

    const enterOfficialComNameHandler = (event) => {
        setEnteredOfficialComName(event.target.value);        
    }

    const enterCommercialNameHandler = (event) => {
        setEnteredCommercialName(event.target.value);
    }

    const companyTypeHandler = (event) => {
        setRadio(event.target.value);
    }

    const serviceAreaHandler = (event) => {
        const {name,checked } = event.target; 
        let tempService = checkboxes.map(service =>service.name === name? {...service, isChecked:checked}:service);
        setCheckBoxes(tempService);
        validateCheckBox();
        console.log(tempService); 
    }

    const dropDownChangeHandler = (event) =>{
        setFilter(event.target.value);
    }

    const removeValidation =()=>
    {
        console.log("removevalidation");
        let element1 = document.getElementsByName("Manufacturing")[0];
        let element2 = document.getElementsByName("Outsourcing")[0];
        let element3 = document.getElementsByName("Assembling")[0];
        let element4 = document.getElementsByName("Imports")[0];
        element1.removeAttribute("required");
        element2.removeAttribute("required");
        element3.removeAttribute("required");
        element4.removeAttribute("required");
    }

    const setValidation =()=>
    {
        console.log("setvalidation");
        let element1 = document.getElementsByName("Manufacturing")[0];
        let element2 = document.getElementsByName("Outsourcing")[0];
        let element3 = document.getElementsByName("Assembling")[0];
        let element4 = document.getElementsByName("Imports")[0];
        
        element1.setAttribute("required","");
        element2.setAttribute("required","");
        element3.setAttribute("required","");
        element4.setAttribute("required","");
    }

    const validateCheckBox =()=>
    {
        var checkedItemCount = document.querySelectorAll("input[id=checkbox]:checked").length;
        console.log(checkedItemCount);
        checkedItemCount === 0 ? setValidation() : removeValidation();   
    }

    const submitHandler = (event) =>{
        
        event.preventDefault();
        let services = [];
        checkboxes.filter(o => o.isChecked===true).forEach(s=> services.push(s.name))
        const companyDetails={
            officialComName:enteredOfficialComName,
            commercialName:enteredCommercialName,
            companyType: radio ,
            serviceArea: services ,
            countryOfOperation: filter
        };
        alert(JSON.stringify(companyDetails));
        props.onSaveCompanyDetails(companyDetails);   
    }
   
    return (
    <div>
        <aside id="input-form" className="container">
            <div>
                <form onSubmit={submitHandler}>
                    <div className="form-group">
                        <label htmlFor="name">Official Company Name :</label>
                        <input type="text" name="name" id="official-name" value={enteredOfficialComName} onChange={enterOfficialComNameHandler} required></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor ="name">Commercial Name :</label>
                        <input type="text" name="name" id="commercial-name" value={enteredCommercialName} onChange={enterCommercialNameHandler} maxLength="100" ></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">Type of Company:</label>
                        <input type="radio" name="company" id="company" checked={radio ==='Private'} value='Private' onChange={companyTypeHandler}/>Private
                        <input type="radio" name="company" id="company" value='Public' onChange={companyTypeHandler}/>Public
                    </div>
                    <div className="form-group">
                        <label htmlFor="services" >Service Areas:</label>
                        {
                            checkboxes.map((service)=>(
                            <div key={service.name}>
                                <input type="checkbox" id="checkbox" name={service.name} checked={service?.isChecked || false} onChange={serviceAreaHandler} required/>{service.name}
                            </div>
                        ))}
                    </div>
                    <div className="form-group">
                        <label htmlFor="country">Country of operation:</label>
                        <select name="country" id="country" value={filter} onChange={dropDownChangeHandler} required>
                        <option value="">Select</option>
                        <option value ="India">India</option>
                        <option value ="Canada">Canada</option>
                        <option value ="UAE">UAE</option>
                        <option value ="Japan">Japan</option>
                        <option value ="Australia">Australia</option>
                        <option value ="UK">UK</option>
                        <option value ="USA">USA</option>
                        <option value ="Bangladesh">Bangladesh</option>
                        <option value ="Malaysia">Malaysia</option>
                        <option value ="Thailand">Thailand</option>
                        </select>
				    </div>
                    <button type="submit" className='submit'>Submit</button>
                </form>
            </div>
        </aside>
    </div>
    )
}
export default CompanyDetails

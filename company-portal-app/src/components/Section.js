import React from 'react';
import './Section.css';
import image1 from '../img/image.jpg';
import image2 from  '../img/sample1.jpg';
import image3 from  '../img/sample4.jpg';
import image4 from '../img/sample5.jpg';

const Section = (props) =>{
    let officialName = props.datas[0].officialComName;
    let commercialName = props.datas[0].commercialName;
    let typeOfCompany = props.datas[0].companyType;
    let services = props.datas[0].serviceArea;
    let countryOfOperation = props.datas[0].countryOfOperation;
    
return(
<section className="home-info">
            <h3> About Company</h3>
            <br></br>
            <label>Official Company Name :</label>
            <p>{officialName}</p>
            <label> Commercial Name :</label>
            <p>{commercialName}</p>
            <label> Type of Company:</label>
            <p>{typeOfCompany}</p>
            <label> Service Areas:</label>
            <p>{services.toString()}</p>
            <label> Country of operation:</label>
            <p>{countryOfOperation}</p> 
            <img className='sample-img' src={image1} alt=""></img>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ab voluptate fugit nulla eveniet officia!</p>
            <br />
            <h4>More about company</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ab voluptate fugit nulla eveniet officia!adipisicing elit. Minus ab voluptate fugit nulla eveniet officia!adipisicing elit. Minus ab voluptate fugit nulla eveniet officia!</p>
            <img className='sample-img' src={image2} alt=""></img>
            <img className='sample-img' src={image3} alt=""></img>
            <img className='sample-img' src={image4} alt=""></img>
        </section>
        )


}
export default Section;

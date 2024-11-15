import React from 'react'
import './contact.css'
import msg from '../../assets/msg-icon.png'
import email from '../../assets/mail-icon.png'
import phone from '../../assets/phone-icon.png'
import arrow from '../../assets/white-arrow.png'
const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "7b0ae845-f6dc-428c-8b1f-babddf4454d7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }}
  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg} alt="" /></h3>
        <p>Don't hesitate to contact us, we will be happy to hear your opinions <br/>Your feedbacks and suggestions are important to us. </p>
        <ul>
          <li><img src={email} alt="" />hebaalkathiri9@gmail.com </li>
          <li><img src={phone} alt="" />+9665093836455 </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label htmlFor="">Your name</label>
            <br />
            <input type="text" name='name' placeholder='Enter your name'required /><br />
            <label htmlFor="">Phone number</label><br />
            <input type="text" name='phone' placeholder='Enter your phone number'required /><br />
            <label htmlFor="">Your message</label><br />
            <textarea name="message" cols='30' rows="6" id="" required ></textarea><br/>
            <button  type='submit' className='btn dark-btn'>Submit <img src={arrow} alt="" /></button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact

import "./Contacts.css";

function Contacts() {
  return (
    <>
      <form className="form">
        <h2 className="con">CONTACT US</h2>
        <p className="text" type="Name:">
          <input className="inas" placeholder="Write your name here.."></input>
        </p>
        <p className="text" type="Email:">
          <input
            className="inas"
            placeholder="Let us know how to contact you back.."
          ></input>
        </p>
        <p className="text" type="Message:">
          <input
            className="inas"
            placeholder="What would you like to tell us.."
          ></input>
        </p>
        <button className="but">Send Message</button>
        <div className="feet">_+996 990 171 169____ inter_Cars@gmail.com_</div>
      </form>
    </>
  );
}

export default Contacts;

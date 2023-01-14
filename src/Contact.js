const Contact = () => {
  return (
    <div className="contact">
      <h2>Want to know more? Find me here:</h2>
      <br></br>
      <a href="https://github.com/catherine-tao">
        <img src="/pics/git.png" className="git"></img>
      </a>
      <a href="https://www.linkedin.com/in/catherine-tao-/">
        <img src="/pics/linkedin.webp" className="linkedin"></img>
      </a>
      <a href="https://devpost.com/catherine-ttao?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav">
        <img src="/pics/devpost.webp" className="devpost"></img>
      </a>
      <br></br>

      <br></br>
      <div className="middle">
        <img src="/pics/mail.png" className="mail" align="left"></img>
      </div>
      <br></br>
      <h2>catherine.ttao@gmail.com</h2>

      <br></br>
      <br></br>
      <br></br>
      <h2>
        Here's my <a href="https://drive.google.com/file/d/1TH95TWLGZI7QqoPEBcnC2GjXf1Z8weQ1/view?usp=sharing">resume</a>.
      </h2>
    </div>
  );
};

export default Contact;

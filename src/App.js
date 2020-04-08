import React, {Component} from 'react';


// (npm audit fix), npm install, npm run build, npm start

class App extends Component {
    async postData() {                      // BOX 1
         try {
            let result = await fetch('https://webhook.site/f73f8817-30ff-46f6-bb82-157e06982f8e', {
                method: 'post',
                mode: 'no-cors',
                header: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    key1: 'myusername'
                }),       
            });
        }   catch(e) {
                console.log(e)
        }
    }

  render () {
      return (
    <div className="App">
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>CLOUD PILLAGER</title>
        {/* BODY BODY BODY BODY BODY +++++++++++++++++++++++++++++++ */}
        <title>.</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://www.w3schools.com/w3css/4/w3.css"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Raleway"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n        body,\n        h1,\n        h2,\n        h3,\n        h4,\n        h5,\n        h6 {\n          font-family: "Raleway", sans-serif;\n        }\n      '
          }}
        />
        {/* Sidebar/menu--------------------------------Sidebar/menu--------- */}
        <nav
          className="w3-sidebar w3-collapse w3-white w3-animate-left"
          style={{ zIndex: 3, width: "300px" }}
          id="mySidebar"
        >
          <br />
          <div className="w3-container">
            <a
              href="#singleBucket"
              onclick="w3_close()"
              className="w3-hide-large w3-right w3-jumbo w3-padding w3-hover-grey"
              title="close menu"
            >
              {/* <i className="fa fa-remove" /> */}
            </a>
            {/* TOP LEFT IMAGE ON BAR*/}
            <img
              src={require("./images/Secure_Cloud_logo.png")}
              style={{ width: "95%" }}
              className="w3-round"
            />
            <br />
            <br />

            <h2>
              <b>
                AWS SCANNER
                <i className="fa fa-superpowers" style={{ color: "teal" }} />
              </b>
            </h2>
            <p className="w3-text-grey">Choose a search type</p>
          </div>
          <div className="w3-bar-block">
            <a
              href="#countUrls"
              onclick="w3_close()"
              className="w3-bar-item w3-button w3-padding w3-text-teal"
            >
              <i className="fa fa-th-large fa-fw w3-margin-right" />
              <b>Count number of files / find total bucket size</b>
            </a>
            <a
              href="#singleBucketSearch"
              onclick="w3_close()"
              className="w3-bar-item w3-button w3-padding w3-text-teal"
            >
              <i className="fa fa-th-large fa-fw w3-margin-right" />
              <b>Search single bucket url for keyword</b>
            </a>
            <a
              href="#regexSearch"
              onclick="w3_close()"
              className="w3-bar-item w3-button w3-padding w3-text-teal"
            >
              <i className="fa fa-th-large fa-fw w3-margin-right" />
              <b>Regex Search</b>
            </a>
            <a
              href="#enumerate"
              onclick="w3_close()"
              className="w3-bar-item w3-button w3-padding w3-text-teal"
            >
              <i className="fa fa-th-large fa-fw w3-margin-right" />
              <b>Enumerate Buckets from keyword list</b>
            </a>
            <a
              href="#searchAll"
              onclick="w3_close()"
              className="w3-bar-item w3-button w3-padding w3-text-teal"
            >
              <i className="fa fa-th-large fa-fw w3-margin-right" />
              <b>Search all buckets for keyword</b>
            </a>
            <a
              href="#searchBB"
              onclick="w3_close()"
              className="w3-bar-item w3-button w3-padding w3-text-teal"
            >
              <i className="fa fa-th-large fa-fw w3-margin-right" />
              <b>search bug bounty programs for company</b>
            </a>
            <a
              href="#searchbugbounty"
              onclick="w3_close()"
              className="w3-bar-item w3-button w3-padding"
            >
              <i
                className="fa fa-exclamation-triangle fa-fw w3-margin-right"
                style={{ color: "red" }}
              />
              Databreach news
            </a>
            <div className="w3-panel w3-large">
              <p>
                <marquee
                  behavior="scroll"
                  direction="left"
                  style={{ color: "teal" }}
                >
                  <b>
                    300,000 buckets; unrestricted searches; AI searches; regex
                    content searches; keyword searches
                  </b>
                </marquee>
              </p>
              {/* <i   WHen I converted from html to react the twitter links etc stop working, so ignored for now
                className="fab fa-facebook w3-hover-opacity"
                style={{ color: "blue" }}
              />
              <i className="fab fa-instagram w3-hover-opacity" />
              <i className="fab fa-snapchat w3-hover-opacity" />
              <i className="fab fa-pinterest w3-hover-opacity" />
              <i
                className="fab fa-twitter w3-hover-opacity"
                style={{ color: "lightblue" }}
              />
              <i className="fab fa-linkedin w3-hover-opacity" /> */}
            </div>
          </div>
        </nav>
        {/* END OF SIDEBAR HERE, END OF SIDEBAR HERE---- ---- ---- ---- ---- --- --- --- */}
        {/* Overlay effect when opening sidebar on small screens */}
        <div
          className="w3-overlay w3-hide-large w3-animate-opacity"
          onclick="w3_close()"
          style={{ cursor: "pointer" }}
          title="close side menu"
          id="myOverlay"
        />
        {/* !PAGE CONTENT! */}
        <div className="w3-main" style={{ marginLeft: "300px" }}>
          {/* Header BAR AT TOP OF PAGE. */}
          <header id="headerz">
            <a href="#">
              {/* <img
                src={require("./images/Secure_Cloud_logo.png")}
                style={{ width: "65px" }}
                className="w3-circle w3-right w3-margin w3-hide-large w3-hover-opacity"
              /> */}
            </a>
            <span
              className="w3-button w3-hide-large w3-xxlarge w3-hover-text-grey"
              onclick="w3_open()"
            >
              <i className="fa fa-bars" />
            </span>
            <div className="w3-container" style={{ color: "light-grey" }}>
              <h1>
                <b>WELCOME TO CLOUD PILLAGER</b>
              </h1>
              {/* <img
                src={require("./images/Secure_Cloud_logo.png")}
                style={{ width: "10%" }}
                className="w3-round"
              />
              <img
                src={require("./images/Secure_Cloud_logo.png")}
                style={{ width: "10%" }}
                className="w3-round"
              /> */}
              <div className="w3-section w3-bottombar w3-padding-16">
                {/* <span class="w3-margin-right">Filter:</span> */}
                <button className="w3-button w3-black">About this site</button>
                <button className="w3-button w3-yellow">
                  <i
                    className="fas fa-cash-register w3-margin-right"
                    style={{ color: "green" }}
                  />
                  Pricing
                </button>
                <button className="w3-button w3-teal w3-border  w3-hide-small">
                  <i className="fas fa-dragon w3-margin-right" />
                  Log in
                </button>
                <button className="w3-button w3-green w3-hide-small">
                  <i className=" w3-margin-right" /> ethical disclosure practice
                </button>
              </div>
            </div>
          </header>
          {/* --------------------------end of header bar ----------------------------------------------------- */}

          {/* FIRST VIDEO Grid*/}
          <div className="w3-row-padding">
            <div className="w3-third w3-container w3-margin-bottom w3-row-padding">  {/* BOX1 */}
            {/* <img src={require("./images/SearchB.png")} /> */}
             
            <button onClick={ ()=> this.postData() }> Press to POST</button>    {/* BOX1 */}

              <div className="w3-container w3-white">
                <p>
                  <b>Enter a bucket address url </b>
                </p>
                <p>Count the number of files, sizes and types</p>
              </div>
            </div>
            <div className="w3-third w3-container w3-margin-bottom">    {/* BOX2 */}
              <img src={require("./images/SearchB.png")} />
              <div className="w3-container w3-white">
                <p>
                  <b>Enter a url (or put ALL) and a keyword</b>
                </p>
                <p>
                  Find all files with this keyword, ALL only works for
                  subscribers
                </p>
              </div>
            </div>
            <div className="w3-third w3-container w3-margin-bottom">   {/* BOX3 */}
              <img src={require("./images/SearchB.png")} />
              <div className="w3-container w3-white">
                <p>
                  <b>Enter a bucket url (or put ALL) and regex</b>
                </p>
                <p>
                  Find all files with this regex. ALL only works for subscribers
                </p>
              </div>
            </div>
          </div>
          {/* Second Photo Grid*/}
          <div className="w3-row-padding">
            <div className="w3-third w3-container w3-margin-bottom">
              <img src={require("./images/SearchB.png")} />
              <div className="w3-container w3-white">
                <p>
                  <b>Enumerate Buckets!</b>
                </p>
                <p>
                  link to your keyword or a url, and all those key words will be
                  iterated and paired to test for xxx.amazonaws.com subdomains,
                  which is where the buckets are located
                </p>
              </div>
            </div>
            <div className="w3-third w3-container w3-margin-bottom">
              <img src={require("./images/SearchB.png")} />
              <div className="w3-container w3-white">
                <p>
                  <b>Enter a bucket address</b>
                </p>
                <p>Count the number of files, sizes and types</p>
              </div>
            </div>
            <div className="w3-third w3-container w3-margin-bottom">
              <img src={require("./images/SearchB.png")} />
              <div className="w3-container w3-white">
                <p>
                  <b>Enter a bucket address</b>
                </p>
                <p>Count the number of files, sizes and types</p>
              </div>
            </div>
          </div>
          {/* Footer THANKS TO THE W3.CSS Template*/}
          <footer className="w3-container w3-padding-32 w3-dark-grey">
            <div className="w3-row-padding">
              <div className="w3-third" style={{ color: "sandybrown" }}>
                <h3>
                  <i className="fas fa-video" /> CONTACT
                </h3>
                <p>DONT GET CAUGHT WITH YOUR PANTS DOWN</p>
                <p>XXX</p>
                <p>pantsdown@cloudpillager.com</p>
                {/* <p>Powered by <a href="https://www.w3schools.com/w3css/default.asp" target="_blank">w3.css</a></p> */}
              </div>
              <div className="w3-third">
                <h3>
                  <i className="fas fa-globe-asia" /> Maps and Data
                </h3>
                <ul className="w3-ul w3-hoverable">
                  <li className="w3-padding-16">
                    <img
                      src="/w3images/workshop.jpg"
                      className="w3-left w3-margin-right"
                      style={{ width: "50px" }}
                    />
                    <span className="w3-large">Global Leaks Map</span>
                    <br />
                    <span>hi hi hi hi hi hi</span>
                  </li>
                  <li className="w3-padding-16">
                    <img
                      src="/w3images/gondol.jpg"
                      className="w3-left w3-margin-right"
                      style={{ width: "50px" }}
                    />
                    <span className="w3-large"> bye bye bye bye</span>
                    <br />
                    <span>placeholder</span>
                  </li>
                </ul>
              </div>
              <div className="w3-third">
                <h3>
                  <i className="fas fa-skull-crossbones" /> Popular tags
                </h3>
                <p>
                  <span className="w3-tag w3-black w3-margin-bottom">
                    hacking
                  </span>
                  <span className="w3-tag w3-yellow w3-small w3-margin-bottom">
                    amazon aws
                  </span>
                  <span className="w3-tag w3-grey w3-small w3-margin-bottom">
                    cloud
                  </span>
                  <span className="w3-tag w3-border w3-small w3-margin-bottom">
                    data leak
                  </span>
                  <span className="w3-tag w3-grey w3-small w3-margin-bottom">
                    confidential data
                  </span>
                  <span className="w3-tag w3-grey w3-small w3-margin-bottom">
                    Google Cloud Services
                  </span>
                  <span className="w3-tag w3-red w3-small w3-margin-bottom">
                    Azure
                  </span>
                  <span className="w3-tag w3-text-light-grey w3-small w3-margin-bottom">
                    Bug Bounty
                  </span>
                  <span className="w3-tag w3-blue w3-small w3-margin-bottom">
                    Pentesting
                  </span>
                  <span className="w3-tag w3-green w3-small w3-margin-bottom">
                    Heroku
                  </span>
                  <span className="w3-tag w3-grey w3-small w3-margin-bottom">
                    Server
                  </span>
                  <span className="w3-tag w3-orange w3-small w3-margin-bottom">
                    CLOUD
                  </span>
                  <span className="w3-tag w3-orange w3-small w3-margin-bottom">
                    <b>Penetration Testing</b>
                  </span>
                </p>
              </div>
            </div>
          </footer>
          <div className="w3-black w3-center w3-padding-24">
            Go visit Amazon
            <a
              href="https://amazonaws.com"
              title="AWS"
              target="_blank"
              className="w3-hover-opacity"
            >
              AWS
            </a>
          </div>
          {/* End page content */}
        </div>
        {/* Code injected by live-server */}
      </div>
      ); } });
    </div>
  );
  }     
}

export default App;

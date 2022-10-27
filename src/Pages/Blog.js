import React from 'react';

const Blog = () => {
    return (
        <div>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is CORS?
                </div>
                <div className="collapse-content">
                    <p>CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.                        In other words, CORS is a browser security feature that restricts cross-origin HTTP requests with other servers and specifies which domains access your resources.</p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    Why are you using firebase? What other options do you have to implement authentication?
                </div>
                <div className="collapse-content">
                    <p>Firebase is platfrom of Google that provides the backend benifits to a normal user.Its build for mainly authentication and hosting a simple website.But there are also many purpose of fireabse.
                        And its a verified and safe to protect our informations. <br />
                        There are alternatives of firebase we can use.Heres some : <br />
                        <li>MongoDB.</li>
                        <li>Oracle Database.</li>
                        <li>Amazon Redshift.</li>
                        <li>DataStax Enterprise.</li>
                        <li>Redis Enterprise Cloud.</li>
                        <li>Cloudera Enterprise Data Hub.</li>
                        <li>Db2.</li>
                        <li>Couchbase Server.</li>
                    </p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    How does the private route work?
                </div>
                <div className="collapse-content">
                    <p>
                        Private route also a simple route as the public route.Generally the display content is the children of that private route.And the private route return the child component based on on or more conditions.
                        if the user cannot pass the conditions he/she will not able to see the displaycontent of the private route and generally redirected to the login or sign up page.
                    </p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                <div className="collapse-title text-xl font-medium">
                    What is Node? How does Node work?
                </div>
                <div className="collapse-content">
                    <p>
                        Node.js is a JavaScript runtime environment.It is used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;
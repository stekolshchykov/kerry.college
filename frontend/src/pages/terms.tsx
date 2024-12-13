import React from "react";

const TermsOfService: React.FC = () => {
    return (
        <div style={{padding: "20px", fontFamily: "Arial, sans-serif"}}>
            <h1>Terms of Service</h1>
            <p>
                By using the Kerry College website, you agree to the following terms and conditions:
            </p>
            <ul>
                <li>All content on this site is for informational purposes only.</li>
                <li>
                    You agree not to use the website for any illegal activities or actions that could harm its
                    functionality.
                </li>
                <li>
                    Kerry College reserves the right to update these terms at any time without prior notice.
                </li>
            </ul>
            <p>
                For questions regarding these terms, please contact us at{" "}
                <a href="mailto:team.kerry.college@gmail.com">team.kerry.college@gmail.com</a>.
            </p>
        </div>
    );
};

export default TermsOfService;

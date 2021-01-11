import * as React from "react";

const Form = () => {

    return (
        <form
            id="business-consultation"
            name="junket-business-consultation"
            acceptCharset="utf-8"
            action="https://formspree.io/contact@wejunket.com"
            method="post"
            className="w-full"
        >
            <fieldset
                id="fs-frm-inputs"
                className="m-auto flex flex-col text-white w-3/4"
            >
                <input
                    className="bg-transparent border-white border-2 mb-4 placeholder-white rounded-lg w-full"
                    type="text"
                    name="name"
                    id="full-name"
                    placeholder="Name"
                    required
                />
                <input
                    className="bg-transparent border-white border-2 mb-4 placeholder-white rounded-lg w-full"
                    type="email"
                    name="_replyto"
                    id="email-address"
                    placeholder="Email"
                    required
                />
                <input
                    className="bg-transparent border-white border-2 mb-4 placeholder-white rounded-lg w-full"
                    type="text"
                    name="organization"
                    id="organization"
                    placeholder="Organization"
                    required
                />
                <textarea
                    className="bg-transparent border-white border-2 mb-4 placeholder-white rounded-lg w-full"
                    name="message"
                    id="message"
                    placeholder="Message"
                    required
                />
                <input
                    type="hidden"
                    name="_subject"
                    id="email-subject"
                    value="Contact Form Submission"
                />
                <input type="submit" value="Submit" className="bg-transparent m-auto" />
            </fieldset>
        </form>
    )
}

export default Form

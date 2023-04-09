import Botpoison from "@botpoison/browser";
import axios from "axios";
import { useState } from "react";

const botpoison = new Botpoison({
    publicKey: "pk_67fbefc4-fed9-4972-99e8-cbd66efced7d",
});

export default function ContactSection({ contactSectionRef }: { contactSectionRef: React.RefObject<HTMLDivElement> }) {
    const [formValues, setFormValues] = useState({ name: "", email: "", phone: "", message: "" })
    const [submitting, setSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setError(false)
        setSubmitting(true);
        await postSubmission();
        setSubmitting(false);
    }
    async function postSubmission() {
        const formSparkURL = "https://submit-form.com/UVJicB0Z";
        const payload = {
            fname: formValues.name.split(" ")[0],
            lname: formValues.name.split(" ").slice(1).join(" "),
            email: formValues.email,
            phone: formValues.phone,
            message: formValues.message,
        };
        try {
            const { solution } = await botpoison.challenge();

            await axios.post(formSparkURL, payload);
            setFormValues({ name: "", email: "", phone: "", message: "" })
            setSubmitted(true)
        } catch (err) {
            setError(true)
        }
    }

    return (
        <div className="w-full px-10 py-20 bg-bg-dark flex justify-center" ref={contactSectionRef}>
            <div className="w-full max-w-3xl flex flex-col md:flex-row rounded-md overflow-hidden">
                <div className="w-full md:w-96 p-6 bg-bg-mid">
                    <h3 className="text-2xl font-semibold text-shadow mb-5">Reach out!</h3>
                    <p>I{"'"}d love to help bring your vision to life! Please let me know if you have a package in mind, or if you need help deciding.</p>
                </div>
                <div className="w-full bg-bg-light p-6">
                    <form onSubmit={handleSubmit}>
                        <fieldset disabled={submitting || submitted} className="flex flex-col gap-3 md:py-4">
                            <input
                                className="p-2 rounded-md bg-bg-mid"
                                type="text" placeholder="Your name" value={formValues.name} onChange={(e) => setFormValues({ ...formValues, name: e.target.value })} />
                            <input
                                className="p-2 rounded-md bg-bg-mid"
                                type="email" placeholder="Your email" value={formValues.email} onChange={(e) => setFormValues({ ...formValues, email: e.target.value })} />
                            <input
                                className="p-2 rounded-md bg-bg-mid"
                                type="tel" placeholder="Your phone number" value={formValues.phone} onChange={(e) => setFormValues({ ...formValues, phone: e.target.value })} />
                            <textarea
                                className="p-2 rounded-md bg-bg-mid"
                                placeholder="What can I help with?"
                                rows={4}
                                value={formValues.message} onChange={(e) => setFormValues({ ...formValues, message: e.target.value })}
                            />
                            {
                                submitted &&
                                <div id="toast-success" className={`w-full flex items-center p-4 mb-4 text-gray-400 rounded-lg shadow bg-bg-dark`} role="alert">
                                    <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-bg-dark rounded-lg bg-green-200">
                                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                                        <span className="sr-only">Check icon</span>
                                    </div>
                                    <div className="ml-3 text-sm font-normal">Form sent successfully. I will get back to you as soon as possible!</div>
                                </div>
                            }
                            {
                                error &&
                                <div id="toast-error" className={`w-full flex items-center p-4 mb-4 text-gray-400 rounded-lg shadow bg-bg-dark`} role="alert">
                                    <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 rounded-lg bg-red-800 text-red-200">
                                        <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                        <span className="sr-only">Error icon</span>
                                    </div>
                                    <div className="ml-3 text-sm font-normal">There was an error. Please try again or <a href="mailto:rosewald2003@gmail.com" className="font-semibold underline">contact me</a> directly</div>
                                </div>
                            }
                            <button type="submit" className="mt-2 bg-bg-mid font-semibold rounded-md p-2 hover:bg-c-green hover:text-shadow hover:text-bg-dark transition-all">Submit</button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    )
}
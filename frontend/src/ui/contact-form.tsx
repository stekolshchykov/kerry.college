import ButtonUi from "@/ui/button-ui";
import InputUi from "@/ui/input-ui";
import TextareaUi from "@/ui/textarea-ui";
import React, {useState} from 'react';
import {toast} from "react-toastify";

interface FormData {
    name: string;
    email: string;
    message: string;
    subject: string;
}

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
        subject: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                    subject: '',
                });
                toast.success("Thank you! Your message has been successfully sent. We’ll get back to you as soon as possible.");
            } else {
                toast.error("Oops! Something went wrong. Please try again later or contact us directly if the issue persists.");
            }
        } catch (error) {
            console.error("Failed to send message:", error);
            toast.error("Failed to send your message. Please try again.");
        }
    };

    return (
        <div className="w-full flex items-center justify-center">
            <div className="min-w-full">
                <form onSubmit={handleSubmit} className="w-full">
                    <InputUi
                        label={"Name"}
                        value={formData.name}
                        onChange={(name) => setFormData({...formData, name})}
                    />
                    <InputUi
                        label={"Subject"}
                        value={formData.subject}
                        onChange={(subject) => setFormData({...formData, subject})}
                        additionalClasses={"mt-2"}
                    />
                    <InputUi
                        label={"Email"}
                        value={formData.email}
                        onChange={(email) => setFormData({...formData, email})}
                        additionalClasses={"mt-2"}
                    />
                    <TextareaUi
                        label={"Message"}
                        value={formData.message}
                        onChange={(message) => setFormData({...formData, message})}
                        additionalClasses={"mt-2"}
                    />
                    <ButtonUi type={"submit"} label={"Send"} additionalClasses={"mt-3"}/>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;

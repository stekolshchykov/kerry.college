import InputUi from "@/ui/input-ui";
import React, {useState} from 'react';

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

    const [status, setStatus] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus(null);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('Message sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                    subject: '',
                });
            } else {
                throw new Error('Failed to send message');
            }
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (_) {
            setStatus('Failed to send message. Please try again.');
        }
    };

    return (
        <div className="w-full flex items-center justify-center">
            <div className="min-w-full">
                {/*<InputUi label={"Name"} value={"11"} onChange={}/>*/}
                <form onSubmit={handleSubmit} className="space-y-4">

                    <InputUi
                        label={"Subject"}
                        value={formData.name}
                        onChange={name => setFormData({...formData, name: `${name}`})}/>

                    <InputUi
                        label={"Name"}
                        value={formData.subject}
                        onChange={subject => setFormData({...formData, subject: `${subject}`})}/>

                    <InputUi
                        label={"Email"}
                        value={formData.email}
                        onChange={email => setFormData({...formData, email: `${email}`})}/>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                            Message:
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                            rows={4}
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow"
                    >
                        Send
                    </button>
                </form>
                {status && (
                    <p
                        className={`mt-4 text-center ${
                            status.includes('successfully') ? 'text-green-500' : 'text-red-500'
                        }`}
                    >
                        {status}
                    </p>
                )}
            </div>
        </div>
    );
};

export default ContactForm;

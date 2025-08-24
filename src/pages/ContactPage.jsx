import Footer from "../components/Footer";
import Header from "../components/Header";
import illustration from "../assets/contact.avif";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";
import { useRef } from "react";


export default function ContactPage() {

    const {t} = useTranslation();
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
        .sendForm('service_08wiv54', 'template_ytljt1k', form.current, '6H1Mn0Uyg8JJrwAsR')
        .then(
            () => {
                console.log('SUCCESS !');
            },
            (error) => 
                {console.log('FAILED...', error.text);
            },
        );
    }
    return (
        <>
            <Header />

            <section className="max-w-6xl mx-auto my-16 px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-8">
                
                <div className="flex-1 dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden w-full">
                    <div className="p-8">
                        <h1 className="text-3xl font-bold dark:text-white mb-2">{t('contact.title')}</h1>
                        <p className="dark:text-gray-300 mb-6">
                            {t('contact.subtitle')}
                        </p>

                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium dark:text-gray-300 mb-1"
                                >
                                    {t('contact.form.name')}*
                                </label>
                                <input
                                    id="name"
                                    name="user_name"
                                    type="text"
                                    placeholder={t('contact.form.namePlaceholder')}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-gray-700 dark:text-white transition duration-200"
                                    required
                                />

                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium dark:text-gray-300 mt-4 mb-1"
                                >
                                    {t('contact.form.email')}*

                                </label>
                                <input
                                    id="email"
                                    name="user_email"
                                    type="email"
                                    placeholder={t('contact.form.emailPlaceholder')}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition duration-200"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-medium dark:text-gray-300 mb-1"
                                >
                                    {t('contact.form.message')}*
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    placeholder={t('contact.form.messagePlaceholder')}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition duration-200"
                                    required
                                />
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105"
                                >
                                    {t('contact.form.send')}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="flex-1 w-full">
                    <img
                        src={illustration}
                        alt="Contact illustration"
                        className="w-full h-auto object-cover"
                    />
                </div>
            </section>

            <Footer />
        </>
    );
}

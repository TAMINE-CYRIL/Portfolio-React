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

            <section className="mx-auto my-16 flex max-w-6xl flex-col items-center gap-8 px-4 sm:px-6 lg:flex-row lg:px-8">
                
                <div className="w-full flex-1 overflow-hidden rounded-3xl border border-stone-200/80 bg-gradient-to-br from-white via-stone-50 to-amber-50/60 shadow-xl">
                    <div className="p-8">
                        <h1 className="mb-2 text-3xl font-bold text-stone-900">{t('contact.title')}</h1>
                        <p className="mb-6 text-stone-600">
                            {t('contact.subtitle')}
                        </p>

                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="mb-1 block text-sm font-medium text-stone-700"
                                >
                                    {t('contact.form.name')}*
                                </label>
                                <input
                                    id="name"
                                    name="user_name"
                                    type="text"
                                    placeholder={t('contact.form.namePlaceholder')}
                                    className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-stone-800 placeholder:text-stone-400 transition duration-200 focus:border-amber-400 focus:outline-none focus:ring-4 focus:ring-amber-100"
                                    required
                                />

                                <label
                                    htmlFor="email"
                                    className="mb-1 mt-4 block text-sm font-medium text-stone-700"
                                >
                                    {t('contact.form.email')}*

                                </label>
                                <input
                                    id="email"
                                    name="user_email"
                                    type="email"
                                    placeholder={t('contact.form.emailPlaceholder')}
                                    className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-stone-800 placeholder:text-stone-400 transition duration-200 focus:border-amber-400 focus:outline-none focus:ring-4 focus:ring-amber-100"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="mb-1 block text-sm font-medium text-stone-700"
                                >
                                    {t('contact.form.message')}*
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    placeholder={t('contact.form.messagePlaceholder')}
                                    className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-stone-800 placeholder:text-stone-400 transition duration-200 focus:border-amber-400 focus:outline-none focus:ring-4 focus:ring-amber-100"
                                    required
                                />
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full rounded-xl bg-amber-500 px-4 py-3 font-medium text-white transition duration-200 hover:scale-[1.02] hover:bg-amber-600"
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
                        className="h-auto w-full rounded-3xl border border-stone-200/70 object-cover shadow-lg"
                    />
                </div>
            </section>

            <Footer />
        </>
    );
}

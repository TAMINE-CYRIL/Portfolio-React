import Footer from "../components/Footer";
import Header from "../components/Header";
import illustration from "../assets/contact.avif";
import { useTranslation } from "react-i18next";
import emailjs from "emailjs-com";
import { useRef, useState } from "react";

export default function ContactPage() {
    const { t } = useTranslation();
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const [feedback, setFeedback] = useState({ type: "", message: "" });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const sendEmail = async (e) => {
        e.preventDefault();

        if (!serviceId || !templateId || !publicKey) {
            setFeedback({
                type: "error",
                message: t("contact.feedback.missingConfig"),
            });
            return;
        }

        setIsSending(true);
        setFeedback({ type: "", message: "" });

        try {
            await emailjs.sendForm(serviceId, templateId, form.current, publicKey);
            form.current.reset();
            setFeedback({
                type: "success",
                message: t("contact.feedback.success"),
            });
        } catch (error) {
            console.error("EmailJS error:", error);
            setFeedback({
                type: "error",
                message:
                    error?.status || error?.text
                        ? t("contact.feedback.errorWithDetails", {
                              status: error?.status ? ` (${error.status})` : "",
                              details: error?.text ? ` : ${error.text}` : "",
                          })
                        : t("contact.feedback.error"),
            });
        } finally {
            setIsSending(false);
        }
    };

    return (
        <>
            <Header />

            <section className="mx-auto my-16 flex max-w-6xl flex-col items-center gap-8 px-4 sm:px-6 lg:flex-row lg:px-8">
                <div className="w-full flex-1 overflow-hidden rounded-3xl border border-stone-200/80 bg-gradient-to-br from-white via-stone-50 to-amber-50/60 shadow-xl">
                    <div className="p-8">
                        <h1 className="mb-2 text-3xl font-bold text-stone-900">{t("contact.title")}</h1>
                        <p className="mb-6 text-stone-600">{t("contact.subtitle")}</p>

                        <form ref={form} onSubmit={sendEmail} className="space-y-6">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="mb-1 block text-sm font-medium text-stone-700"
                                >
                                    {t("contact.form.name")}*
                                </label>
                                <input
                                    id="name"
                                    name="user_name"
                                    type="text"
                                    placeholder={t("contact.form.namePlaceholder")}
                                    className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-stone-800 placeholder:text-stone-400 transition duration-200 focus:border-amber-400 focus:outline-none focus:ring-4 focus:ring-amber-100"
                                    required
                                />

                                <label
                                    htmlFor="email"
                                    className="mb-1 mt-4 block text-sm font-medium text-stone-700"
                                >
                                    {t("contact.form.email")}*
                                </label>
                                <input
                                    id="email"
                                    name="user_email"
                                    type="email"
                                    placeholder={t("contact.form.emailPlaceholder")}
                                    className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-stone-800 placeholder:text-stone-400 transition duration-200 focus:border-amber-400 focus:outline-none focus:ring-4 focus:ring-amber-100"
                                    required
                                />

                                <label
                                    htmlFor="subject"
                                    className="mb-1 mt-4 block text-sm font-medium text-stone-700"
                                >
                                    {t("contact.form.subject")}*
                                </label>
                                <input
                                    id="subject"
                                    name="subject"
                                    type="text"
                                    placeholder={t("contact.form.subjectPlaceholder")}
                                    className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-stone-800 placeholder:text-stone-400 transition duration-200 focus:border-amber-400 focus:outline-none focus:ring-4 focus:ring-amber-100"
                                    required
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="mb-1 block text-sm font-medium text-stone-700"
                                >
                                    {t("contact.form.message")}*
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    placeholder={t("contact.form.messagePlaceholder")}
                                    className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-stone-800 placeholder:text-stone-400 transition duration-200 focus:border-amber-400 focus:outline-none focus:ring-4 focus:ring-amber-100"
                                    required
                                />
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    disabled={isSending}
                                    className="w-full rounded-xl bg-amber-500 px-4 py-3 font-medium text-white transition duration-200 hover:scale-[1.02] hover:bg-amber-600 disabled:cursor-not-allowed disabled:bg-amber-300 disabled:hover:scale-100"
                                >
                                    {isSending ? t("contact.form.sending") : t("contact.form.send")}
                                </button>
                            </div>

                            {feedback.message && (
                                <p
                                    className={`rounded-xl border px-4 py-3 text-sm ${
                                        feedback.type === "success"
                                            ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                                            : "border-red-200 bg-red-50 text-red-700"
                                    }`}
                                >
                                    {feedback.message}
                                </p>
                            )}
                        </form>
                    </div>
                </div>

                <div className="w-full flex-1">
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

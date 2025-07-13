import Footer from "../components/Footer";
import Header from "../components/Header";

export default function ContactPage() {
    return (
        <>
            <Header />
            
            <section className="max-w-2xl mx-auto my-16 px-4 sm:px-6 lg:px-8">
                <div className="bg-slate-200 dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden">
                    <div className="p-8">
                        <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">To contact me</h1>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            Let's get in touch !
                        </p>
                        
                        <form className="space-y-6">
                            <div>
                                <label 
                                    htmlFor="name" 
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                >
                                    Your name
                                </label>
                                <input
                                    id="name"
                                    type="email"
                                    placeholder="Your name..."
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition duration-200"
                                    required
                                />

                            

                                <label 
                                    htmlFor="email" 
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                >
                                    Your email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    placeholder="your@email.com"
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition duration-200"
                                    required
                                />
                            </div>
                            
                            <div>
                                <label 
                                    htmlFor="message" 
                                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                >
                                    Your message
                                </label>
                                <textarea
                                    id="message"
                                    rows={5}
                                    placeholder="Your message..."
                                    className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white transition duration-200"
                                    required
                                />
                            </div>
                            
                            <div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                    Envoyer le message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            
            <Footer />
        </>
    );
}
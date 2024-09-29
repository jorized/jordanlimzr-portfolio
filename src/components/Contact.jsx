import { CONTACT } from "../constants";
import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false); 
  const [showToast, setShowToast] = useState(false); 

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); 
    setShowToast(false);

    emailjs
      .sendForm("service_y0kg9x6", "template_nririrk", form.current, {
        publicKey: "xmJw4Smc8zYCarUFV",
      })
      .then(
        () => {
          setLoading(false);
          setShowToast(true); 
          setTimeout(() => setShowToast(false), 3000); 
        },
        (error) => {
          setLoading(false); 
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div className="border-t border-stone-900 pb-20">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-10 text-center text-4xl bg-gradient-to-r from-[#D4145A] to-[#FBB03B] bg-clip-text text-transparent">
        Get in touch
      </motion.h2>
      <div className="text-center tracking-tighter">
        <motion.form 
          whileInView={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="mt-8 space-y-3 mx-auto w-full max-w-2xl"
          ref={form}
          onSubmit={sendEmail}
        >
          <input
            type="text"
            placeholder="Name"
            name="user_name"
            className="w-full rounded-md py-3 px-4 text-white bg-[#1E1E1E] focus:bg-[#2A2A2A] border border-gray-700 focus:border-orange-500 text-sm outline-none"
            required
            disabled={loading} // Disable input during loading
          />
          <input
            type="email"
            placeholder="Email"
            name="user_email"
            className="w-full rounded-md py-3 px-4 text-white bg-[#1E1E1E] focus:bg-[#2A2A2A] border border-gray-700 focus:border-orange-500 text-sm outline-none"
            required
            disabled={loading} // Disable input during loading
          />
          <textarea
            placeholder="Message"
            name="message"
            rows="6"
            className="w-full rounded-md px-4 text-white bg-[#1E1E1E] focus:bg-[#2A2A2A] border border-gray-700 focus:border-orange-500 text-sm pt-3 outline-none"
            required
            disabled={loading} // Disable input during loading
          ></textarea>
          <input
            type="submit"
            value={loading ? "Sending..." : "Send"} // Change button text based on loading state
            className={`cursor-pointer text-white bg-gradient-to-r from-[#D4145A] to-[#FBB03B] hover:from-[#FBB03B] hover:to-[#D4145A] tracking-wide rounded-md text-sm px-4 py-3 w-full ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading} // Disable button during loading
          />
        </motion.form>

        {/* Custom toast message */}
        <AnimatePresence>
          {showToast && (
            <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
              <motion.div
                id="toast-simple"
                className="flex items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800"
                role="alert"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
              >
                <svg className="w-5 h-5 text-green-600 dark:text-green-500 rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"/>
                </svg>
                <div className="ps-4 text-sm font-normal">Email sent successfully.</div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

export default Contact;

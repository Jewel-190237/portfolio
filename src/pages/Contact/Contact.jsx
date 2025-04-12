import { useState } from "react";
import { Send, MapPin, Mail } from "lucide-react";
import { BorderBeam } from "@/components/magicui/border-beam";
import { ToastContainer, toast } from 'react-toastify';
import emailjs from 'emailjs-com';
import { FaWhatsapp } from "react-icons/fa";
export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const validateForm = () => {
    let tempErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.subject.trim()) {
      tempErrors.subject = "Subject is required";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fill in all fields correctly.");
      return;
    }

    emailjs
      .send(
        'service_6e81197',
        'template_pjl1nfd',
        formData,
        'vGyvHNpbS_ximT6EO'
      )
      .then(
        () => {
          toast.success("Thank you for reaching out! I’ll get back to you as soon as possible.");
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (error) => {
          toast.error(error);
        }
      );
  };

  return (
    <main
      className="pt-20 lg:pt-[0rem] bg-[#04081A]
 text-white min-h-screen"
    >
      <section className="hero min-h-screen flex items-center relative px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                  Get in Touch
                </h2>
                <p className="text-gray-300 text-lg">
                  Have a question or want to work together? Drop me a message!
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-500/10 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <a
                      href="mailto:190237@ku.ac.bd"
                      className="text-gray-400 hover:text-purple-400 underline underline-offset-2 transaction-colors duration-300"
                    >
                      190237@ku.ac.bd
                    </a>
                  </div>

                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-green-500/10 p-3 rounded-lg">
                    <FaWhatsapp className="w-6 h-6 text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone Number</h3>
                    <a
                      href="tel:+8801980445424"
                      className="text-gray-400 hover:text-green-400 underline underline-offset-2 transaction-colors duration-300"
                    >
                      +8801980445424
                    </a>
                  </div>

                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-pink-500/10 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-pink-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-gray-400">Khulna, Bangladesh</p>
                  </div>
                </div>
              </div>
              <div className="!mt-10">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://drive.google.com/file/d/1QsWlcpjyYNYhcjH15w5cJNHND3VJdbC3/view"
                  className="group relative inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-500 to-teal-400 p-0.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA]"
                >
                  <span className="block w-full px-6 sm:px-8 py-3 sm:py-4 rounded-[11px] bg-gray-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-teal-400">
                    <span className="relative flex items-center justify-center gap-2 text-white font-medium">
                      <span>Get Resume</span>
                      <i className="fas fa-arrow-right transform transition-all duration-300 group-hover:translate-x-1"></i>
                    </span>
                  </span>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="backdrop-blur-lg bg-white/5 p-8 rounded-2xl shadow-xl">
              <BorderBeam duration={20} size={180} colorFrom="#ffaa40" colorTo="#9c40ff" />
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${errors.name ? "border-red-500" : "border-gray-700"
                        } focus:border-blue-500 focus:outline-none transition-colors`}
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${errors.email ? "border-red-500" : "border-gray-700"
                        } focus:border-blue-500 focus:outline-none transition-colors`}
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Subject"
                      className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${errors.subject ? "border-red-500" : "border-gray-700"
                        } focus:border-blue-500 focus:outline-none transition-colors`}
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.subject}
                      </p>
                    )}
                  </div>

                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows="4"
                      className={`w-full px-4 py-3 rounded-lg bg-white/5 border ${errors.message ? "border-red-500" : "border-gray-700"
                        } focus:border-blue-500 focus:outline-none transition-colors resize-none`}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                    ></textarea>
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.message}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center space-x-2 hover:opacity-90 transition-opacity"
                >
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </main>
  );
}

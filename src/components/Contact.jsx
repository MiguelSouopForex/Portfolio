// import { useState } from "react";
// import { Mail, Github, Linkedin, Send, MapPin, Phone } from "lucide-react";
// import emailjs from "@emailjs/browser";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     // document.getElementById('contactForm').addEventListener('submit', function(e) {
//       e.preventDefault();
//       const submitBtn = document.querySelector('button[type="submit"]');
//       const originalBtnContent = submitBtn.innerHTML;

//       // Désactiver le bouton et afficher un loader
//       submitBtn.disabled = true;
//       submitBtn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> <span>Envoi en cours...</span>';

//       // Préparer les paramètres pour EmailJS
//       const templateParams = {
//         from_name: formData.name,
//         from_email: formData.email,
//         message: formData.message,
//       };

//       // Envoyer l'email via EmailJS
//       emailjs.send(
//         'service_8k8gw65',
//         'template_kc1hmmg',
//         templateParams ,
//         'DSgbAf2eVMinkwAOa'
//       )

//         .then(function(response) {
//             console.log('SUCCESS!', response.status, response.text);

//             // Afficher un message de succès
//             console.log(process.env.REACT_APP_EMAILJS_SERVICE_ID);
//             submitBtn.innerHTML = '<i class="fa fa-check"></i> <span>Envoyé avec succès!</span>';
//             submitBtn.style.background = '#28a745';

//             // Afficher une notification de succès
//             showNotification('Message envoyé avec succès! Nous vous répondrons dans les plus brefs délais.', 'success');

//             // Réactiver le bouton après 3 secondes
//             setTimeout(function() {
//                 submitBtn.disabled = false;
//                 submitBtn.innerHTML = originalBtnContent;
//                 submitBtn.style.background = '';
//             }, 3000);

//         }, function(error) {
//             console.log('FAILED...', error);

//             // Afficher un message d'erreur
//             submitBtn.innerHTML = '<i class="fa fa-times"></i> <span>Erreur d\'envoi</span>';
//             submitBtn.style.background = '#dc3545';

//             // Réactiver le bouton après 2 secondes
//             setTimeout(function() {
//                 submitBtn.disabled = false;
//                 submitBtn.innerHTML = originalBtnContent;
//                 submitBtn.style.background = '';
//             }, 2000);

//             showNotification('Erreur lors de l\'envoi. Veuillez réessayer.', 'error');
//         })

//         // Fonction pour afficher les notifications
//           function showNotification(message, type) {
//               const notification = document.createElement('div');
//               notification.style.cssText = `
//                   position: fixed;
//                   top: 20px;
//                   right: 20px;
//                   padding: 20px 30px;
//                   background: ${type === 'success' ? '#28a745' : '#dc3545'};
//                   color: white;
//                   border-radius: 10px;
//                   box-shadow: 0 5px 20px rgba(0,0,0,0.2);
//                   z-index: 10000;
//                   font-weight: 600;
//                   animation: slideIn 0.3s ease;
//                   max-width: 400px;
//               `;
//               notification.textContent = message;
//               document.body.appendChild(notification);

//               setTimeout(function() {
//                   notification.style.animation = 'slideOut 0.3s ease';
//                   setTimeout(function() {
//                       document.body.removeChild(notification);
//                   }, 300);
//               }, 5000);
//           }

//       // console.log('Form submitted:', formData);
//       // alert('Message envoyé avec succès ! Je vous répondrai bientôt.');
//       setFormData({ name: '', email: '', message: '' });
//     // });
//   }

//   const socialLinks = [
//     {
//       icon: <Github size={24} />,
//       label: "GitHub",
//       href: "https://github.com/miguelsouop",
//       color: "blue",
//     },
//     {
//       icon: <Linkedin size={24} />,
//       label: "LinkedIn",
//       href: "https://www.linkedin.com/in/miguel-souop-7554a139b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
//       color: "blue",
//     },
//     {
//       icon: <Mail size={24} />,
//       label: "Email",
//       href: "mailto:miguelsouop@gmail.com",
//       color: "purple",
//     },
//   ];

//   const contactInfo = [
//     {
//       icon: <Mail size={20} />,
//       label: "Email",
//       value: "miguelsouop@gmail.com",
//       color: "purple",
//     },
//     {
//       icon: <Phone size={20} />,
//       label: "Téléphone",
//       value: "+237 676 00 77 85 / +237 697 91 27 43",
//       color: "blue",
//     },
//     {
//       icon: <MapPin size={20} />,
//       label: "Localisation",
//       value: "Douala - Cameroun",
//       color: "blue",
//     },
//   ];

//   const getColorClasses = (color) => {
//     const colors = {
//       purple: "text-cyber-purple hover:shadow-neon-purple",
//       blue: "text-cyber-blue hover:shadow-neon-blue",
//     };
//     return colors[color];
//   };

//   return (
//     <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
//       <div className="max-w-7xl mx-auto">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gradient mb-4">
//             Contact
//           </h2>
//           <div className="w-32 h-1 bg-gradient-to-r from-cyber-blue via-cyber-blue to-cyber-purple mx-auto rounded-full"></div>
//           <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
//             Une question ? Un projet ? N'hésitez pas à me contacter
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           <div className="space-y-8">
//             <div className="gradient-border">
//               <div className="gradient-border-content space-y-6">
//                 <h3 className="text-2xl font-bold text-gradient mb-6">
//                   Informations de contact
//                 </h3>
//                 {contactInfo.map((info, index) => (
//                   <div key={index} className="flex items-center gap-4">
//                     <div
//                       className={`${getColorClasses(info.color)} p-3 bg-cyber-dark rounded-lg`}
//                     >
//                       {info.icon}
//                     </div>
//                     <div>
//                       <p className="text-gray-400 text-sm">{info.label}</p>
//                       <p className="text-white font-medium">{info.value}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="gradient-border">
//               <div className="gradient-border-content">
//                 <h3 className="text-2xl font-bold text-gradient mb-6">
//                   Réseaux sociaux
//                 </h3>
//                 <div className="flex gap-4">
//                   {socialLinks.map((social, index) => (
//                     <a
//                       key={index}
//                       href={social.href}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className={`${getColorClasses(social.color)} p-4 bg-cyber-dark rounded-lg transition-all duration-300 hover:scale-110`}
//                       aria-label={social.label}
//                     >
//                       {social.icon}
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="gradient-border">
//             <div className="gradient-border-content">
//               <h3 className="text-2xl font-bold text-gradient mb-6">
//                 Envoyez-moi un message
//               </h3>
//               <form onSubmit={handleSubmit} id="contactForm"  className="space-y-6">
//                 <div>
//                   <label
//                     htmlFor="name"
//                     className="block text-gray-300 mb-2 font-medium"
//                   >
//                     Nom
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 bg-cyber-dark border-2 border-cyber-purple/30 rounded-lg text-white focus:border-cyber-purple focus:outline-none focus:shadow-neon-purple transition-all duration-300"
//                     placeholder="Votre nom"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block text-gray-300 mb-2 font-medium"
//                   >
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     className="w-full px-4 py-3 bg-cyber-dark border-2 border-cyber-blue/30 rounded-lg text-white focus:border-cyber-blue focus:outline-none focus:shadow-neon-blue transition-all duration-300"
//                     placeholder="votre.email@example.com"
//                   />
//                 </div>

//                 <div>
//                   <label
//                     htmlFor="message"
//                     className="block text-gray-300 mb-2 font-medium"
//                   >
//                     Message
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     rows="5"
//                     className="w-full px-4 py-3 bg-cyber-dark border-2 border-cyber-blue/30 rounded-lg text-white focus:border-cyber-blue focus:outline-none focus:shadow-neon-blue transition-all duration-300 resize-none"
//                     placeholder="Votre message..."
//                   ></textarea>
//                 </div>

//                 <button
//                   type="submit"
//                   className="w-full px-8 py-4 bg-gradient-to-r from-cyber-purple  to-cyber-blue rounded-lg font-semibold text-white text-lg transition-all duration-300 hover:scale-105 hover:shadow-neon-blue flex items-center justify-center gap-2"
//                 >
//                   <Send size={20} />
//                   Envoyer le message
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import { useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Send,
  MapPin,
  Phone,
  Loader2,
  Check,
  AlertTriangle,
} from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs
      .send(
        "service_8k8gw65",
        "template_kc1hmmg",
        templateParams,
        "DSgbAf2eVMinkwAOa",
      )
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      });
  };

  const socialLinks = [
    {
      icon: <Github size={20} />,
      label: "GitHub",
      href: "https://github.com/miguelsouop",
    },
    {
      icon: <Linkedin size={20} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/miguel-souop-7554a139b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
    {
      icon: <Mail size={20} />,
      label: "Email",
      href: "mailto:miguelsouop@gmail.com",
    },
  ];

  const contactInfo = [
    {
      icon: <Mail size={18} />,
      label: "Email",
      value: "miguelsouop@gmail.com",
    },
    {
      icon: <Phone size={18} />,
      label: "Téléphone",
      value: "+237 676 00 77 85 / +237 697 91 27 43",
    },
    {
      icon: <MapPin size={18} />,
      label: "Localisation",
      value: "Douala - Cameroun",
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="index-label text-xs text-amber flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-amber" />
            05 — CONTACT
          </div>
          <h2 className="font-display font-semibold text-4xl sm:text-5xl text-paper mb-4">
            Transmission
          </h2>
          <p className="text-muted text-lg max-w-2xl">
            Une question ? Un projet ? N'hésitez pas à me contacter
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-8">
            <div className="doc-panel p-8">
              <h3 className="index-label text-xs text-muted mb-6">
                INFORMATIONS DE CONTACT
              </h3>
              <div className="space-y-5">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="text-amber border border-line-strong p-2.5">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-muted text-xs index-label">
                        {info.label}
                      </p>
                      <p className="text-paper font-medium">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="doc-panel p-8">
              <h3 className="index-label text-xs text-muted mb-6">
                RÉSEAUX SOCIAUX
              </h3>
              <div className="flex gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-paper border border-line-strong p-3.5 hover:border-amber hover:text-amber transition-colors duration-200"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="doc-panel cut-corner p-8">
            <h3 className="index-label text-xs text-muted mb-6">
              ENVOYEZ-MOI UN MESSAGE
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-muted text-sm mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-ink-900 border border-line-strong text-paper focus:border-amber focus:outline-none transition-colors duration-200"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-muted text-sm mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-ink-900 border border-line-strong text-paper focus:border-amber focus:outline-none transition-colors duration-200"
                  placeholder="votre.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-muted text-sm mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 bg-ink-900 border border-line-strong text-paper focus:border-amber focus:outline-none transition-colors duration-200 resize-none"
                  placeholder="Votre message..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full px-8 py-4 bg-amber text-ink font-semibold tracking-wide flex items-center justify-center gap-2 hover:bg-amber-bright transition-colors duration-200 disabled:opacity-60"
              >
                {status === "sending" && (
                  <Loader2 size={18} className="animate-spin" />
                )}
                {status === "success" && <Check size={18} />}
                {status === "error" && <AlertTriangle size={18} />}
                {status === "idle" && <Send size={18} />}

                {status === "sending" && "Envoi en cours..."}
                {status === "success" && "Envoyé avec succès !"}
                {status === "error" && "Erreur d'envoi, réessayez"}
                {status === "idle" && "Envoyer le message"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

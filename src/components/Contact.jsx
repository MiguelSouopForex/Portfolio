import { useState } from "react";
import { Mail, Github, Linkedin, Send, MapPin, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "", 
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };


  const handleSubmit = (e) => {
    // document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault();
      const submitBtn = document.querySelector('button[type="submit"]');
      const originalBtnContent = submitBtn.innerHTML;

      // Désactiver le bouton et afficher un loader
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<i class="fa fa-spinner fa-spin"></i> <span>Envoi en cours...</span>';

      // Préparer les paramètres pour EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };


      // Envoyer l'email via EmailJS
      emailjs.send(
        'service_8k8gw65',
        'template_kc1hmmg',
        templateParams , 
        'DSgbAf2eVMinkwAOa'
      )

        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);

            // Afficher un message de succès
            console.log(process.env.REACT_APP_EMAILJS_SERVICE_ID);
            submitBtn.innerHTML = '<i class="fa fa-check"></i> <span>Envoyé avec succès!</span>';
            submitBtn.style.background = '#28a745';


            // Afficher une notification de succès
            showNotification('Message envoyé avec succès! Nous vous répondrons dans les plus brefs délais.', 'success');

            // Réactiver le bouton après 3 secondes
            setTimeout(function() {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnContent;
                submitBtn.style.background = '';
            }, 3000);

        }, function(error) {
            console.log('FAILED...', error);

            // Afficher un message d'erreur
            submitBtn.innerHTML = '<i class="fa fa-times"></i> <span>Erreur d\'envoi</span>';
            submitBtn.style.background = '#dc3545';

            // Réactiver le bouton après 2 secondes
            setTimeout(function() {
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalBtnContent;
                submitBtn.style.background = '';
            }, 2000);

            showNotification('Erreur lors de l\'envoi. Veuillez réessayer.', 'error');
        })

        // Fonction pour afficher les notifications
          function showNotification(message, type) {
              const notification = document.createElement('div');
              notification.style.cssText = `
                  position: fixed;
                  top: 20px;
                  right: 20px;
                  padding: 20px 30px;
                  background: ${type === 'success' ? '#28a745' : '#dc3545'};
                  color: white;
                  border-radius: 10px;
                  box-shadow: 0 5px 20px rgba(0,0,0,0.2);
                  z-index: 10000;
                  font-weight: 600;
                  animation: slideIn 0.3s ease;
                  max-width: 400px;
              `;
              notification.textContent = message;
              document.body.appendChild(notification);

              setTimeout(function() {
                  notification.style.animation = 'slideOut 0.3s ease';
                  setTimeout(function() {
                      document.body.removeChild(notification);
                  }, 300);
              }, 5000);
          }

      // console.log('Form submitted:', formData);
      // alert('Message envoyé avec succès ! Je vous répondrai bientôt.');
      setFormData({ name: '', email: '', message: '' });
    // });
  }

  const socialLinks = [
    {
      icon: <Github size={24} />,
      label: "GitHub",
      href: "https://github.com/miguelsouop",
      color: "blue",
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/miguel-souop-7554a139b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
      color: "blue",
    },
    {
      icon: <Mail size={24} />,
      label: "Email",
      href: "mailto:miguelsouop@gmail.com",
      color: "purple",
    },
  ];

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      label: "Email",
      value: "miguelsouop@gmail.com",
      color: "purple",
    },
    {
      icon: <Phone size={20} />,
      label: "Téléphone",
      value: "+237 676 00 77 85 / +237 697 91 27 43",
      color: "blue",
    },
    {
      icon: <MapPin size={20} />,
      label: "Localisation",
      value: "Douala - Cameroun",
      color: "blue",
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      purple: "text-cyber-purple hover:shadow-neon-purple",
      blue: "text-cyber-blue hover:shadow-neon-blue",
    };
    return colors[color];
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gradient mb-4">
            Contact
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-cyber-blue via-cyber-blue to-cyber-purple mx-auto rounded-full"></div>
          <p className="text-gray-400 text-lg mt-6 max-w-2xl mx-auto">
            Une question ? Un projet ? N'hésitez pas à me contacter
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="gradient-border">
              <div className="gradient-border-content space-y-6">
                <h3 className="text-2xl font-bold text-gradient mb-6">
                  Informations de contact
                </h3>
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div
                      className={`${getColorClasses(info.color)} p-3 bg-cyber-dark rounded-lg`}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="gradient-border">
              <div className="gradient-border-content">
                <h3 className="text-2xl font-bold text-gradient mb-6">
                  Réseaux sociaux
                </h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${getColorClasses(social.color)} p-4 bg-cyber-dark rounded-lg transition-all duration-300 hover:scale-110`}
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="gradient-border">
            <div className="gradient-border-content">
              <h3 className="text-2xl font-bold text-gradient mb-6">
                Envoyez-moi un message
              </h3>
              <form onSubmit={handleSubmit} id="contactForm"  className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-gray-300 mb-2 font-medium"
                  >
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-cyber-dark border-2 border-cyber-purple/30 rounded-lg text-white focus:border-cyber-purple focus:outline-none focus:shadow-neon-purple transition-all duration-300"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-gray-300 mb-2 font-medium"
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
                    className="w-full px-4 py-3 bg-cyber-dark border-2 border-cyber-blue/30 rounded-lg text-white focus:border-cyber-blue focus:outline-none focus:shadow-neon-blue transition-all duration-300"
                    placeholder="votre.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-300 mb-2 font-medium"
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
                    className="w-full px-4 py-3 bg-cyber-dark border-2 border-cyber-blue/30 rounded-lg text-white focus:border-cyber-blue focus:outline-none focus:shadow-neon-blue transition-all duration-300 resize-none"
                    placeholder="Votre message..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-cyber-purple  to-cyber-blue rounded-lg font-semibold text-white text-lg transition-all duration-300 hover:scale-105 hover:shadow-neon-blue flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

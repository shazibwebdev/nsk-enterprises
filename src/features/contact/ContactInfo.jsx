import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react'; // Optional: lucide-react icons

const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
    },
    hover: {
        rotate: 5, scale: 1.05,
        transition: {
            duration: 0.1,
            type: 'spring',
            stiffness: 80
        }
    }
};

const ContactInfo = () => {
    const infoData = [
        {
            id: 1,
            icon: <MapPin className="w-8 h-8 text-blue-600" />,
            title: 'Our Location',
            description: '123 Main Street, Lahore, Pakistan'
        },
        {
            id: 2,
            icon: <Phone className="w-8 h-8 text-blue-600" />,
            title: 'Phone Number',
            description: '+92 300 1234567'
        },
        {
            id: 3,
            icon: <Mail className="w-8 h-8 text-blue-600" />,
            title: 'Email Address',
            description: 'support@example.com'
        },
        {
            id: 4,
            icon: <Clock className="w-8 h-8 text-blue-600" />,
            title: 'Working Hours',
            description: 'Mon - Sat : 9am to 6pm'
        }
    ];

    return (
        <section className=" bg-gray-50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 50, scale: 0.8 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className=" text-4xl md:text-5xl head text-p font-bold text-gray-800 mb-4">
                        Reach Us
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 50, scale: 0.8 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="text-gray-600">
                        We'd love to hear from you. Here’s how you can reach us.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {infoData.map((item, index) => (
                        <motion.div
                            key={item.id}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            whileHover="hover"
                            transition={{ duration: 0.3, type: 'spring', stiffness: 80, damping: 10, delay: index * 0.1 }}
                            viewport={{ once: true, amount: 0.3, }}
                            className="bg-[whitesmoke] cursor-pointer rounded-2xl shadow-md p-6 flex flex-col items-center gap-4 hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="bg-blue-100 rounded-full p-3">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-800">
                                {item.title}
                            </h3>
                            <p className="text-center text-gray-600">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ContactInfo;

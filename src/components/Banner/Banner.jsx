import { Button } from 'flowbite-react';
import img from "../../assets/logo.webp"
import { motion } from "framer-motion";
import { fadeIn } from "./variants";

const Banner = () => {
    return (
        <div className="flex flex-col md:flex-row gap-2 mt-8">
            {/* right side */}
            <div className="flex-1 flex flex-col justify-center items-center gap-3 p-6 ">
                <motion.h1
                    variants={fadeIn('down', 0.2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.6 }} className="text-[#403787] text-5xl md:text-2xl lg:text-5xl capitalize "> Give What you can <br /> Take what you need
                </motion.h1>
                <motion.p className="mt-4 text-xl"
                    variants={fadeIn('up', 0.2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.6 }}
                >
                    Join our community-driven platform, where surplus food finds a new home. Share what you have, take what you need <br /> <span className="ml-10">—no cost, no waste, just community support.</span>
                </motion.p>
                <motion.div
                    variants={fadeIn('up', 0.2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{ once: false, amount: 0.6 }}
                >
                    <Button color="warning" pill className='font-semibold text-xl'>
                        Join US
                    </Button>
                </motion.div>
            </div>
            {/* left side */}
            <motion.div className="flex-1"
                variants={fadeIn('up', 0.6)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: false, amount: 0.6 }}
            >

                <img src={img} alt="" className="w-full rounded-lg" />
            </motion.div>
        </div>
    );
};

export default Banner;
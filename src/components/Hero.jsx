import { MagicCard } from "./magicui/magic-card"
import BlurFade from "./magicui/blur-fade"
import HyperText from "./magicui/hyper-text"
import HeroVideoDialog from "./magicui/hero-video-dialog"
import { Button } from "@/components/ui/button"
import BoxReveal from "./magicui/box-reveal"
import Marquee from "./Marquee";
import Link from "next/link"

const Hero = () => {
    return (
        <div className="p-20 space-y-16">
            <BlurFade delay={0.25} inView>
                <div className="flex flex-col md:flex-row gap-8 w-full">
                    <div className="md:w-[80%]">
                        <MagicCard
                            className="cursor-pointer text-white bg-[#000000ed] border-0"
                            gradientColor={"white"}
                        >
                            <div className="flex flex-col gap-8 p-4">
                                <HyperText className="text-xl md:text-5xl font-bold text-center" text={"Pharma-Tracker"} />
                                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                                    <p className="p-1 md:p-4 text-lg md:text-3xl md:tracking-wide text-center">
                                        Your comprehensive solution for tracking pharmaceutical supply chains.
                                        Monitor inventory, shipments, and delivery statuses in real time.
                                    </p>
                                </BoxReveal>

                                <div className="w-full flex justify-center">
                                    <Link href="/dashboard">
                                    <Button variant={"secondary"} className="w-40">
                                        Get Started
                                    </Button>
                                    </Link>
                                </div>
                            </div>
                        </MagicCard>
                    </div>
                    <div>
                        <HeroVideoDialog
                            className="dark:block"
                            animationStyle="from-center"
                            videoSrc="https://www.youtube.com/embed/yW51M42ntvU"
                            thumbnailSrc="/images/thumbnail.png"
                            thumbnailAlt="Hero Video"
                        />
                    </div>
                </div>
            </BlurFade>

            <section id="services" className="mt-5 space-y-8">
                <div className="flex flex-col gap-4">
                    <div className="flex">
                        <HyperText className="text-4xl md:text-5xl font-bold text-center" text={"Services"} />
                    </div>
                    <div className="flex flex-col md:flex-row gap-8">
                        <MagicCard className="bg-[#19191778] text-white border-0 h-full min-h-[228px]">
                            <div className="p-4">
                                <HyperText className="text-3xl font-bold text-center" text={"Real-time Tracking"} />
                                <p className="text-xl p-4 text-center">
                                    Monitor the entire supply chain process in real time.
                                    Ensure timely deliveries and maintain optimal inventory levels.
                                </p>
                            </div>
                        </MagicCard>
                        <MagicCard className="bg-[#19191778] text-white border-0 h-full min-h-[228px]">
                            <div className="p-4">
                                <HyperText className="text-3xl font-bold text-center" text={"Inventory Management"} />
                                <p className="text-xl p-4 text-center">
                                    Keep track of inventory levels, reduce wastage, and optimize stock.
                                    Make informed decisions to improve efficiency.
                                </p>
                            </div>
                        </MagicCard>

                        <MagicCard className="bg-[#19191778] text-white border-0 min-h-[228px]">
                            <div className="p-4">
                                <HyperText className="text-3xl font-bold text-center" text={"Data Analytics"} />
                                <p className="text-xl p-4 text-center">
                                    Analyze supply chain data to identify trends and areas for improvement.
                                    Enhance decision-making with actionable insights.
                                </p>
                            </div>
                        </MagicCard>
                    </div>
                </div>
            </section>

            <section className="bg-black py-12">
                <div className="flex">
                    <HyperText className="text-4xl md:text-5xl font-bold text-center text-white mb-8" text={"Testimonials"} />
                </div>
                <Marquee />
            </section>
        </div>
    );
};

export default Hero;

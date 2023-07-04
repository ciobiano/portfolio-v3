import { Avatar } from "../icons/Avatar";

export function AboutHeroSection(){
    return(
        <section className="mx-auto w-full  pb-32 px-5 md:px-0 flex items-end justify-between">
            <div className="w-full md:w-1/2 justify-center items-center my-auto">
                <h1 className="text-4xl md:text-5xl font-bold text-gradient mb-5">About Us</h1>

                <div className="max-w-xl text-sm font-medium ">
                    <p className="text-grey mt-10">Lorem ips
                        um dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec,
                        mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id. Sed rhoncus,

                    </p>

                    <p className="text-grey mt-5">Lorem ips

                        um dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec,

                    </p>
                </div>

        </div>
        <Avatar />


        </section>

    )
}
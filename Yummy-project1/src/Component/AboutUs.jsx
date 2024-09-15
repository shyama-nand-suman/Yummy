import React from "react";

const AboutUs = () => {
  return (
    <>
      <div className="text-[gray] body-font w-[80%] mx-auto">
        <div className="px-[16px ]">
          <h2 className="title-font sm:text-4xl mb-4 font-medium text-[gray] mt-[8px]">
            Driving the Forece{" "}
            <span className="text-[#00cec9]">assortment </span>
          </h2>
          <p className="mb-8 leading-relaxed text-[20px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
            odit eius sint consequuntur eveniet sunt quia, praesentium impedit!
            Assumenda veritatis asperiores ullam illum, id neque labore ab quos
            quibusdam provident!
          </p>
        </div>
        <div className="container mx-auto flex px-5 py-24 md:flex-row items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Who Are We?
            </h2>
            <p className="mb-8 leading-relaxed">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
              corporis qui enim quod, earum saepe, vitae sequi maiores,
              aspernatur totam fuga voluptas similique voluptates iure dicta nam
              at provident consectetur. Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Ea numquam asperiores commodi! Optio dolor
              reprehenderit amet dignissimos ipsam architecto, ratione
              distinctio similique cupiditate molestiae illum id dolore quo
              natus libero? Lorem ipsum dolor sit amet consectetur, adipisicing
              elit. Consequatur veniam natus incidunt aliquam ut commodi, aut
              cupiditate quisquam architecto ipsa qui accusantium recusandae
              quia reprehenderit reiciendis adipisci quas asperiores
              facilis?Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Rem aliquam suscipit fuga est quam ratione, tempore a error dicta
              cum laudantium dolorum in dolore magni fugit voluptates nemo
              excepturi aspernatur!
            </p>
          </div>
             <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
               <img src="https://b.zmtcdn.com/web/about/a7b0a36d5107f3590895981dab2eeac31563208212.jpeg?output-format=webp" alt="hero"  className="object-cover object-center rounded"/>
             </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;

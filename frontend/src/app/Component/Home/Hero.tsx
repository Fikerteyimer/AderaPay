import Navbar from "../../Layouts/Navbar";

const Hero = () => {
  return (
    <section
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero.jpg')" }}
    >
     
      <div className="min-h-screen bg-[#123C2A]/65">
        <Navbar />

       
        <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-6 text-center">
          
          <div className="max-w-4xl">

           
            <p className="text-[#D4AF37] font-semibold text-lg mb-5 tracking-wide">
              Give with purpose. Connect with faith.
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
              Support the churches
              <br />
              <span className="text-[#D4AF37]">
                that matter to you.
              </span>
            </h1>

            <p className="mt-6 mx-auto max-w-2xl text-lg md:text-xl text-[#F8F6EF] leading-relaxed">
              AderaPay makes it simple and secure to support churches,
              communities, and meaningful projects from anywhere.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row justify-center gap-4">

              <button className="px-8 py-3.5 rounded-xl bg-[#D4AF37] text-[#123C2A] font-bold hover:bg-[#E2C45A] transition-all duration-300 shadow-lg">
                Start Donating
              </button>

              <button className="px-8 py-3.5 rounded-xl border border-[#D4AF37] text-white font-semibold hover:bg-[#D4AF37]/15 transition-all duration-300">
                Explore Churches
              </button>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
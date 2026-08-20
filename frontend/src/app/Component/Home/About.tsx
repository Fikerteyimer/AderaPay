const About = () => {
  return (
    <section
      id="about"
      className="bg-[#F8F6EF] py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">

          <p className="text-[#D4AF37] font-semibold tracking-widest uppercase text-sm mb-4">
            About AderaPay
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-[#123C2A]">
            Giving made simple,
            <span className="text-[#D4AF37]"> meaningful, and secure.</span>
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            AderaPay connects people with the churches and communities
            they care about, making it easier to give and make an impact
            from anywhere in the world.
          </p>

        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div className="relative">

            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/about.jpg"
                alt="Community members supporting their church"
                className="w-full h-[450px] object-cover"
              />
            </div>

            {/* Small floating card */}
            <div className="absolute -bottom-6 -right-4 md:right-6 bg-white rounded-2xl shadow-xl p-5">
              <p className="text-sm text-gray-500">
                Giving with purpose
              </p>

              <p className="text-2xl font-bold text-[#123C2A] mt-1">
                Together 🤍
              </p>
            </div>

          </div>

          {/* Text */}
          <div>

            <h3 className="text-3xl font-bold text-[#123C2A]">
              Built to bring people closer to their communities
            </h3>

            <p className="mt-6 text-gray-600 leading-relaxed">
              AderaPay is a digital donation platform designed to make
              supporting churches easier for everyone. Whether you are
              nearby or living abroad, you can discover verified churches
              and contribute securely.
            </p>

            <p className="mt-4 text-gray-600 leading-relaxed">
              We believe giving should be simple, transparent, and
              accessible. That's why AderaPay brings donors and churches
              together in one trusted platform.
            </p>

            {/* Features */}
            <div className="mt-8 grid sm:grid-cols-2 gap-5">

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-[#123C2A] flex items-center justify-center text-[#D4AF37]">
                  ✓
                </div>

                <div>
                  <h4 className="font-bold text-[#123C2A]">
                    Secure Giving
                  </h4>

                  <p className="text-sm text-gray-500 mt-1">
                    Give confidently through a secure platform.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-[#123C2A] flex items-center justify-center text-[#D4AF37]">
                  ✓
                </div>

                <div>
                  <h4 className="font-bold text-[#123C2A]">
                    Verified Churches
                  </h4>

                  <p className="text-sm text-gray-500 mt-1">
                    Support churches verified by AderaPay.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-[#123C2A] flex items-center justify-center text-[#D4AF37]">
                  ✓
                </div>

                <div>
                  <h4 className="font-bold text-[#123C2A]">
                    Easy Donations
                  </h4>

                  <p className="text-sm text-gray-500 mt-1">
                    Donate from anywhere with just a few steps.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-[#123C2A] flex items-center justify-center text-[#D4AF37]">
                  ✓
                </div>

                <div>
                  <h4 className="font-bold text-[#123C2A]">
                    Community Impact
                  </h4>

                  <p className="text-sm text-gray-500 mt-1">
                    Help communities grow through your giving.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
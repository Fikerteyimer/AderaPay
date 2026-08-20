const About = () => {
  const features = [
    {
      title: "Secure Giving",
      description: "Give confidently through a secure platform.",
    },
    {
      title: "Verified Churches",
      description: "Support churches verified by AderaPay.",
    },
    {
      title: "Easy Donations",
      description: "Donate from anywhere with just a few steps.",
    },
    {
      title: "Community Impact",
      description: "Help communities grow through your giving.",
    },
  ];

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
            <span className="text-[#D4AF37]">
              {" "}meaningful, and secure.
            </span>
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

            {/* Floating Card */}
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

              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex gap-3"
                >

                  {/* Check Icon */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#123C2A] flex items-center justify-center text-[#D4AF37] font-bold">
                    ✓
                  </div>

                  {/* Feature Text */}
                  <div>
                    <h4 className="font-bold text-[#123C2A]">
                      {feature.title}
                    </h4>

                    <p className="text-sm text-gray-500 mt-1">
                      {feature.description}
                    </p>
                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
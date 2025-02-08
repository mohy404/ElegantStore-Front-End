import TeamMember from '../assets/svg/TeamMember.svg';
import TeamMember2 from '../assets/svg/TeamMember2.svg';
import TeamMember3 from '../assets/svg/TeamMember3.svg';
import { useEffect, useRef } from 'react';

const AboutUs = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // إعداد مراقب التقاطع للحركات
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    // اختيار جميع العناصر التي تحتاج إلى حركة
    const animatedElements = document.querySelectorAll('.fade-in');
    animatedElements.forEach(el => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes pulseGlow {
            0% { box-shadow: 0 0 0 0 rgba(79, 70, 229, 0.2); }
            70% { box-shadow: 0 0 0 10px rgba(79, 70, 229, 0); }
            100% { box-shadow: 0 0 0 0 rgba(79, 70, 229, 0); }
          }

          .fade-in {
            opacity: 0;
            transform: translateY(20px);
            transition: all 0.6s ease-out;
          }

          .fade-in.show {
            opacity: 1;
            transform: translateY(0);
          }

          .team-card {
            transition: all 0.3s ease;
          }

          .team-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
          }

          .team-image-container {
            position: relative;
            display: inline-block;
          }

          .team-image-container::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border-radius: 50%;
            animation: pulseGlow 2s infinite;
          }

          .value-card {
            transition: all 0.3s ease;
            border-top: 4px solid transparent;
          }

          .value-card:hover {
            transform: translateY(-5px);
            border-top: 4px solid #4F46E5;
          }
        `}
      </style>

      <main className="pt-24 pb-16 container mx-auto px-6">
        {/* عنوان الصفحة */}
        <div className="text-center fade-in">
          <h1 className="text-5xl font-bold text-gray-800 mb-6 tracking-tight">
            About <span className="text-indigo-600">Us</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Welcome to <span className="text-indigo-600 font-semibold">ElegantStore</span>, your premier destination for
            high-quality fashion and accessories. We are dedicated to providing you with the best
            products, curated with care and attention to detail.
          </p>
        </div>

        {/* قسم الفريق */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12 fade-in">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { img: TeamMember, name: "John Doe", role: "CEO & Founder", desc: "John is passionate about fashion and has over 10 years of experience in the industry." },
              { img: TeamMember2, name: "Jane Smith", role: "Creative Director", desc: "Jane brings creativity and innovation to our product designs." },
              { img: TeamMember3, name: "Mike Johnson", role: "Head of Operations", desc: "Mike ensures that our operations run smoothly and efficiently." }
            ].map((member, index) => (
              <div 
                key={index}
                className="team-card bg-white p-8 rounded-xl shadow-lg fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="team-image-container mb-6">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto relative z-10"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800">{member.name}</h3>
                <p className="text-indigo-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* قسم المهمة */}
        <div className="mt-20 fade-in">
          <div className="bg-white p-10 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">
              Our Mission
            </h2>
            <p className="text-lg text-gray-600 text-center max-w-2xl mx-auto leading-relaxed">
              At <span className="text-indigo-600 font-semibold">ElegantStore</span>, our mission is to empower individuals
              to express their unique style through high-quality, affordable fashion. We believe that
              everyone deserves to look and feel their best, and we are committed to making that a
              reality.
            </p>
          </div>
        </div>

        {/* قسم القيم */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12 fade-in">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Quality", desc: "We are committed to providing the highest quality products to our customers." },
              { title: "Innovation", desc: "We constantly innovate to bring you the latest trends and styles." },
              { title: "Customer Satisfaction", desc: "Your satisfaction is our top priority. We strive to exceed your expectations." }
            ].map((value, index) => (
              <div
                key={index}
                className="value-card bg-white p-8 rounded-xl shadow-lg fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <h3 className="text-xl font-bold text-gray-800 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutUs;
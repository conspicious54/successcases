import React from 'react';
import { Star, ArrowRight, DollarSign, Clock, Users, Award, CheckCircle, TrendingUp } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Brent",
    revenue: "5M+",
    timeframe: "Total Revenue",
    videoId: "2X10mIm5eXc",
  },
  {
    id: 2,
    name: "Jeremy",
    revenue: "109K",
    timeframe: "In 6 Months",
    videoId: "HQxeNn2S9m8",
  },
  {
    id: 3,
    name: "Ariana",
    revenue: "100K+",
    timeframe: "Total Revenue",
    videoId: "HX2LoqSdHJA",
  },
  {
    id: 4,
    name: "AJ",
    revenue: "500K+",
    timeframe: "First Year",
    videoId: "rNt5LtAgbKA",
  },
  {
    id: 5,
    name: "Julianna",
    revenue: "100K+",
    timeframe: "Total Revenue",
    videoId: "ZRKOfZ1dhMQ",
  },
  {
    id: 6,
    name: "Willem",
    revenue: "7.8K",
    timeframe: "First Month",
    videoId: "pdm1mQWHRWE",
  },
  {
    id: 7,
    name: "Mina",
    revenue: "105K",
    timeframe: "Per Month",
    videoId: "MEHNnW4rViA",
  },
  {
    id: 8,
    name: "Anna",
    revenue: "1.2M",
    timeframe: "Per Year",
    videoId: "A3mW5yzush0",
  },
  {
    id: 9,
    name: "Troy",
    revenue: "50K+",
    timeframe: "Total Revenue",
    videoId: "Gejj9Mqmv_Q",
  },
  {
    id: 10,
    name: "Michael",
    revenue: "100K+",
    timeframe: "Total Revenue",
    videoId: "0deKJGi80Rs",
  },
  {
    id: 11,
    name: "Karla",
    revenue: "100K",
    timeframe: "Per Month",
    productType: "Herbal Tea",
    videoId: "6QMAA7YEJAI",
  },
  {
    id: 12,
    name: "Calvin",
    revenue: "300K",
    timeframe: "Total Revenue",
    videoId: "SH24ylGlT8k",
  },
  {
    id: 13,
    name: "Andrew",
    revenue: "333K+",
    timeframe: "Total Revenue",
    videoId: "IRb5EpPGnRU",
  },
  {
    id: 14,
    name: "Joseph",
    revenue: "60K",
    timeframe: "First 6 Months",
    videoId: "mmKSnvLMLQY",
  },
  {
    id: 15,
    name: "Gary",
    revenue: "100K+",
    timeframe: "Total Revenue",
    videoId: "E8HQu4glbEY",
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <h1 className="text-4xl md:text-6xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text mb-6">
          Real Amazon Success Stories
        </h1>
        <p className="text-xl text-center text-gray-400 max-w-3xl mx-auto mb-8">
          Watch how our students are building life-changing businesses on Amazon
        </p>
        <div className="flex justify-center">
          <a 
            href="https://www.thepassionproductformula.com/"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-purple-500/25 group text-lg"
          >
            Find Out How They Did It
            <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-xl p-6 backdrop-blur-sm border border-purple-500/20 relative overflow-hidden group">
            <div className="absolute inset-0 bg-purple-600/10 transform -skew-x-12 group-hover:skew-x-12 transition-transform duration-700"></div>
            <div className="relative">
              <Users className="w-8 h-8 text-purple-400 mb-2" />
              <div className="text-4xl font-bold text-white mb-1">575+</div>
              <div className="text-purple-200">Students Making $100K+/Year</div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-xl p-6 backdrop-blur-sm border border-purple-500/20 relative overflow-hidden group">
            <div className="absolute inset-0 bg-purple-600/10 transform -skew-x-12 group-hover:skew-x-12 transition-transform duration-700"></div>
            <div className="relative">
              <DollarSign className="w-8 h-8 text-green-400 mb-2" />
              <div className="text-4xl font-bold text-white mb-1">$49M+</div>
              <div className="text-purple-200">Total Student Revenue</div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-xl p-6 backdrop-blur-sm border border-purple-500/20 relative overflow-hidden group">
            <div className="absolute inset-0 bg-purple-600/10 transform -skew-x-12 group-hover:skew-x-12 transition-transform duration-700"></div>
            <div className="relative">
              <Award className="w-8 h-8 text-yellow-400 mb-2" />
              <div className="text-4xl font-bold text-white mb-1">100%</div>
              <div className="text-purple-200">
                Success Guarantee
                <a href="#guarantee" className="text-yellow-400 hover:text-yellow-300 ml-1">†</a>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-900/50 to-pink-900/50 rounded-xl p-6 backdrop-blur-sm border border-purple-500/20 relative overflow-hidden group">
            <div className="absolute inset-0 bg-purple-600/10 transform -skew-x-12 group-hover:skew-x-12 transition-transform duration-700"></div>
            <div className="relative">
              <CheckCircle className="w-8 h-8 text-blue-400 mb-2" />
              <div className="text-4xl font-bold text-white mb-1">100%</div>
              <div className="text-purple-200">Proven System</div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Grid Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="group relative bg-gray-800/50 rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-gray-700/50">
              {/* Achievement Banner */}
              <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-2 px-4 flex items-center justify-between z-10">
                <span className="font-medium">{testimonial.name}'s Story</span>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              
              {/* Video */}
              <div className="aspect-video relative mt-10">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${testimonial.videoId}`}
                  title={`${testimonial.name}'s Success Story`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Achievement Stats */}
              <div className="p-6 pt-4">
                <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-xl p-6 border border-purple-500/20">
                  <div className="flex items-center justify-center mb-2">
                    <DollarSign className="w-8 h-8 text-green-400 mr-2" />
                    <span className="text-4xl font-bold text-green-400">${testimonial.revenue}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-gray-400">
                    <Clock className="w-4 h-4" />
                    <span>{testimonial.timeframe}</span>
                  </div>
                  {testimonial.productType && (
                    <div className="mt-2 text-center text-purple-400 text-sm">
                      Selling {testimonial.productType}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Your Story Card - Full Width */}
        <div className="mt-8 group relative bg-gray-800/50 rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:scale-[1.02] backdrop-blur-sm border border-gray-700/50 col-span-full">
          {/* Achievement Banner */}
          <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 flex items-center justify-between z-10">
            <span className="text-xl font-medium">Ready to Write Your Success Story?</span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
          </div>
          
          {/* Content Grid */}
          <div className="mt-14 grid md:grid-cols-2 gap-8 p-8">
            {/* Left Side - Image */}
            <div className="relative rounded-xl overflow-hidden aspect-video bg-gradient-to-br from-purple-900/30 to-pink-900/30">
              <img
                src="https://t4.ftcdn.net/jpg/01/82/29/77/360_F_182297712_9CsfAgraiubHa1ZgwCtXzIIwwFTUcfUc.jpg"
                alt="Your Success Story"
                className="absolute inset-0 w-full h-full object-cover opacity-50 hover:opacity-70 transition-opacity"
              />
            </div>

            {/* Right Side - Content */}
            <div className="flex flex-col justify-center">
              <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">
                Your Amazon Success Story Starts Here
              </h3>
              <p className="text-gray-300 mb-6">
                Join our community of successful Amazon sellers and learn the proven system that has helped hundreds achieve financial freedom.
              </p>
              <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-xl p-6 border border-purple-500/20 mb-6">
                <div className="flex items-center justify-center mb-2">
                  <DollarSign className="w-8 h-8 text-green-400 mr-2" />
                  <span className="text-4xl font-bold text-green-400">$100K+</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>in 2025?</span>
                </div>
              </div>
              <a 
                href="https://www.thepassionproductformula.com/"
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center justify-center hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-purple-500/25 group"
              >
                Start Your Journey Today
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-purple-900/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Write Your Own Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join our community of successful Amazon sellers and start your journey today
          </p>
          <a 
            href="https://www.thepassionproductformula.com/"
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold inline-flex items-center hover:from-purple-700 hover:to-pink-700 transition-all shadow-lg hover:shadow-purple-500/25 group"
          >
            Start Your Amazon Journey
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>

      {/* Guarantee Disclaimer */}
      <div id="guarantee" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <div className="bg-gray-800/50 rounded-xl p-8 backdrop-blur-sm border border-gray-700/50">
          <h3 className="text-2xl font-semibold text-white mb-4">Our Success Guarantee</h3>
          <p className="text-gray-300">
            If you don't make at least $1,000 in your first year selling on Amazon, we will pay you $2,000
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
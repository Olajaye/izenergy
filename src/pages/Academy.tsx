import React from 'react';
import { BookOpen, Video, HelpCircle, GraduationCap, Clock, Users, Award } from 'lucide-react';
import { useTheme } from '../lib/themeStore';

const courses = [
  {
    id: 'solar-basics',
    title: 'Solar Energy Basics',
    duration: '2 hours',
    students: 1234,
    level: 'Beginner',
    image: 'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'battery-tech',
    title: 'Battery Technology',
    duration: '3 hours',
    students: 856,
    level: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'power-systems',
    title: 'Power Systems',
    duration: '4 hours',
    students: 567,
    level: 'Advanced',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800'
  }
];

const freebies = [
  {
    title: 'Energy Calculator',
    description: 'Calculate your energy needs and potential savings',
    icon: GraduationCap
  },
  {
    title: 'Installation Guide',
    description: 'Step-by-step guide for basic system setup',
    icon: BookOpen
  },
  {
    title: 'Video Tutorials',
    description: 'Quick tips and maintenance guides',
    icon: Video
  }
];

const faqs = [
  {
    question: 'How do I choose the right solar system?',
    answer: 'The right solar system depends on your energy consumption, available space, and budget. Our energy calculator can help you determine the best size for your needs.'
  },
  {
    question: 'What maintenance is required?',
    answer: 'Solar systems require minimal maintenance. Regular cleaning and annual professional inspections are recommended to ensure optimal performance.'
  },
  {
    question: 'How long do batteries last?',
    answer: 'Modern lithium batteries typically last 10-15 years with proper maintenance. Factors like usage patterns and environmental conditions can affect lifespan.'
  }
];

const Academy = () => {
  const { isDark } = useTheme();
  const [expandedFaq, setExpandedFaq] = React.useState<number | null>(null);

  return (
    <div className={`min-h-screen ${isDark ? 'bg-background' : 'bg-text'}`} id='academy'>
      {/* Hero Section */}

      <div className="relative pt-24">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=1920"
            alt="Service Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/70" />
        </div>
        <div className="relative container mx-auto px-4 py-24">
          <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">
            Learn Clean Energy
          </h1>
          <p className="text-xl text-text-dark mb-8">
            Discover our comprehensive learning resources and become an expert in sustainable energy solutions.
          </p>
          <button className="bg-accent hover:bg-accent/90 text-background px-8 py-4 rounded-lg font-medium transition-colors">
            Start Learning
          </button>
        </div>
      </div>
      {/* <div className="relative bg-gradient-to-r from-primary to-primary-dark">
        <div className="container mx-auto px-4 py-24">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-text mb-6">
              Learn Clean Energy
            </h1>
            <p className="text-xl text-text-dark mb-8">
              Discover our comprehensive learning resources and become an expert in sustainable energy solutions.
            </p>
            <button className="bg-accent hover:bg-accent/90 text-background px-8 py-4 rounded-lg font-medium transition-colors">
              Start Learning
            </button>
          </div>
        </div>
      </div> */}

      {/* Featured Courses */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Featured Courses</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className={`rounded-lg overflow-hidden ${
                isDark ? 'bg-background-light' : 'bg-secondary'
              } transition-transform hover:scale-105`}
            >
              <div className="aspect-w-16">
                <img
                  src={course.image}
                  alt={course.title}
                  className="object-cover w-full h-48"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">{course.title}</h3>
                <div className="flex items-center gap-4 text-sm mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students} students</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="w-4 h-4" />
                    <span>{course.level}</span>
                  </div>
                </div>
                <button className="w-full bg-primary hover:bg-primary-dark text-text px-6 py-3 rounded-lg font-medium transition-colors">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Free Resources */}
      <div className={`${isDark ? 'bg-background-light' : 'bg-secondary'} py-16`}>
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Free Resources</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {freebies.map((freebie, index) => (
              <div
                key={index}
                className={`p-6 rounded-lg ${
                  isDark ? 'bg-background' : 'bg-text'
                }`}
              >
                <freebie.icon className={`w-12 h-12 ${
                  isDark ? 'text-accent' : 'text-primary'
                } mb-4`} />
                <h3 className="text-xl font-bold mb-2">{freebie.title}</h3>
                <p className={`${isDark ? 'text-text-dark' : 'text-background'} mb-4`}>
                  {freebie.description}
                </p>
                <button className="text-primary hover:text-primary-dark font-medium transition-colors">
                  Access Now →
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQs */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`rounded-lg ${
                isDark ? 'bg-background-light' : 'bg-secondary'
              }`}
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between"
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
              >
                <span className="font-medium">{faq.question}</span>
                <HelpCircle className={`w-5 h-5 ${
                  isDark ? 'text-accent' : 'text-primary'
                } transition-transform ${
                  expandedFaq === index ? 'rotate-180' : ''
                }`} />
              </button>
              {expandedFaq === index && (
                <div className="px-6 pb-4">
                  <p className={isDark ? 'text-text-dark' : 'text-background'}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-text mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-text-dark mb-8 max-w-2xl mx-auto">
            Join our community of learners and become an expert in sustainable energy solutions.
          </p>
          <button className="bg-accent hover:bg-accent/90 text-background px-8 py-4 rounded-lg font-medium transition-colors">
            Browse All Courses
          </button>
        </div>
      </div>
    </div>
  );
};

export default Academy;
'use client'

import { Section, Grid } from '@/components/layout'
import { Card } from '@/components/ui'

export default function About() {
  return (
    <Section id="about" padding="xl" background="gray">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
        Know Who <span className="text-purple-600">I'M</span>
      </h2>
      <p className="text-center text-gray-600 mb-12">Let me introduce myself</p>
      
      <Grid cols={1} responsive={{ md: 2 }} gap="xl" className="items-center">
        <Card padding="lg">
          <div className="space-y-4">
            <p className="text-lg text-gray-700">
              Hi Everyone, I am <span className="text-purple-600 font-semibold">Dylan Wanganga</span> from{" "}
              <span className="text-purple-600 font-semibold">Nairobi, Kenya</span>.
            </p>
            <p className="text-lg text-gray-700">
              I am currently employed as a software developer at <span className="font-semibold">AUM Tech</span>.
            </p>
            <p className="text-lg text-gray-700">
              I have completed <span className="font-semibold">BSc in Information Technology</span>.
            </p>
            <div className="mt-6">
              <p className="text-lg text-gray-700 mb-4">
                I am passionate about technology and all the potential it has to change society.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                I am competent in high-level programming languages like{" "}
                <span className="text-purple-600 font-semibold">Python, JavaScript, and Go</span>.
              </p>
              <p className="text-lg text-gray-700">
                My fields of interest are building frontend and backend{" "}
                <span className="text-purple-600 font-semibold">Web Technologies and Products</span>. 
                I also have a keen interest in{" "}
                <span className="text-purple-600 font-semibold">Blockchain smart contract development</span>.
              </p>
            </div>
            <div className="mt-6">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Apart from coding, I love to:</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <span className="text-purple-600 mr-2">▶</span> Playing Games
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-purple-600 mr-2">▶</span> Writing Tech Blogs
                </li>
                <li className="flex items-center text-gray-700">
                  <span className="text-purple-600 mr-2">▶</span> Travelling
                </li>
              </ul>
            </div>
            <blockquote className="mt-6 p-4 bg-purple-50 border-l-4 border-purple-400 italic text-purple-700">
              "Strive to build things that make a difference!"
              <footer className="text-sm mt-2 not-italic">- Dylan</footer>
            </blockquote>
          </div>
        </Card>
        
        <Card hover className="text-center">
          <div className="w-48 h-48 bg-gradient-to-br from-purple-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-white text-lg font-medium">Dylan W.</span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Full Stack Developer</h3>
          <p className="text-gray-600 mb-4">AUM Tech | Nairobi, Kenya</p>
          <div className="flex justify-center space-x-4">
            <a href="https://github.com/Dylan66" target="_blank" rel="noopener noreferrer" 
               className="text-gray-600 hover:text-purple-600 transition-colors">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/dylan-wanganga/" target="_blank" rel="noopener noreferrer"
               className="text-gray-600 hover:text-purple-600 transition-colors">
              LinkedIn
            </a>
          </div>
        </Card>
      </Grid>
    </Section>
  )
}
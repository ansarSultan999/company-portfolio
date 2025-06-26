import React from 'react'
import { motion } from 'framer-motion'
import CountUp from 'react-countup'

const stats = [
  { id: 1, value: 500, label: 'Happy Clients', suffix: '+' },
  { id: 2, value: 1200, label: 'Projects Completed', suffix: '+' },
  { id: 3, value: 12, label: 'Years Experience', suffix: '+' },
  { id: 4, value: 98, label: 'Satisfaction Rate', suffix: '%' }
]

const StatsSection = () => {
  return (
    <section className="py-20 bg-primary-600 text-white">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />
              </div>
              <p className="text-lg text-blue-100">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
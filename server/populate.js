const express = require('express')
const Sequelize = require('sequelize')

let database = new Sequelize({
  dialect: 'sqlite',
  storage: './test.sqlite'
})

let Post = database.define('posts', {
  agileType: Sequelize.STRING,
  statement: Sequelize.STRING
})


  Post.create({ agileType: "values", statement: "Individuals and interactions over processes and tools."})
  Post.create({ agileType: "values", statement: "Working software over comprehensive documentation."})
  Post.create({ agileType: "values", statement: "Customer collaboration over contract negotiation."})
  Post.create({ agileType: "values", statement: "Responding to change over following a plan."})
  Post.create({ agileType: "principles", statement: "Our highest priority is to satisfy the customer through early and continuous delivery of valuable software."})
  Post.create({ agileType: "principles", statement: "Welcome changing requirements, even late in development. Agile processes harness change for the customer’s competitive advantage."})
  Post.create({ agileType: "principles", statement: "Deliver working software frequently, from a couple of weeks to a couple of months, with a preference to the shorter timescale."})
  Post.create({ agileType: "principles", statement: "Business people and developers must work together daily throughout the project."})
  Post.create({ agileType: "principles", statement: "Build projects around motivated individuals. Give them the environment and support they need, and trust them to get the job done."})
  Post.create({ agileType: "principles", statement: "The most efficient and effective method of conveying information to and within a development team is face-to-face conversation."})
  Post.create({ agileType: "principles", statement: "Working software is the primary measure of progress."})
  Post.create({ agileType: "principles", statement: "Agile processes promote sustainable development. The sponsors, developers, and users should be able to maintain a constant pace indefinitely."})
  Post.create({ agileType: "principles", statement: "Continuous attention to technical excellence and good design enhances agility."})
  Post.create({ agileType: "principles", statement: "Simplicity–the art of maximizing the amount of work not done–is essential."})
  Post.create({ agileType: "principles", statement: "The best architectures, requirements, and designs emerge from self-organizing teams."})
  Post.create({ agileType: "principles", statement: "At regular intervals, the team reflects on how to become more effective, then tunes and adjusts its behavior accordingly."})



/* try {
  for (const values of agileValues) {
     Post.create(values)
  }
  for (const principles in agilePrinciples) {
    Post.create(principles)
  }
} catch (error) {
  throw error
} */

// https://docs.cypress.io/api/introduction/api.html

// I'm just going to put everything in here for now because of expediency
describe('Postmaster', () => {

  // context('NavBar', () => {
  //   beforeEach(() => {
  //     cy.visit('/')
  //   })

  //   it('Has a link to the home page', () => {

  //   })
  // })
  context('Home Page', () => {
    beforeEach(() => {
      cy.visit('/');
    })
    it('shows posts', () => {
      cy.get('[data-cy=posts]').should('exist');
    })
  }) 
})

/*
  As an MVP, tests are designed to work from a seeded database exactly once, then they will start to throw errors.
  This can be remedied with fixtures

  Navbar
    Home goes to home page
    New post goes to new post page
    Search
      Allows user to search for posts
      Correctly returns results
  Homepage
    It lists a series of posts
  NewPost
    It prevents users from submitting with 0 posts
  Post
    It displays post
  Login page
    It allows user to enter in login information


*/
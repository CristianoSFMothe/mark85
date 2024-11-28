describe('POST /users', function() {

  beforeEach(function() {
    cy.fixture('users').then(function (users) {
      this.users = users
    })
  })

  it('register a new users', function() {
    const user = this.users.create

    cy.task('removeUser', user.email)

    cy.postUser(user).then(response => {
      expect(response.status).to.eq(200)

      cy.log(JSON.stringify(response.body))
      expect(response.body.name).to.eq(user.name)
      expect(response.body.email).to.eq(user.email)
    })

  })

  it('duplicate email', function() {
    const user = this.users.duplicate

    cy.task('removeUser', user.email)

    cy.postUser(user)

    cy.postUser(user).then(response => {
      const { message } = response.body;

      expect(response.status).to.eq(409)
      expect(message).to.eq("Duplicated email!")
    })

  })

  context('required fields', function() {
    let user;

    beforeEach(function() {
      user = this.users.required
    })

    it('name is required', function() {
      delete user.name
      
      cy.postUser(user).then(response => {

        const { message } = response.body
        
        expect(response.status).to.eq(400)
        expect(message).to.equal('ValidationError: \"name\" is required')
      })
    })
    
    it('email is required', function() {
      delete user.email
      
      cy.postUser(user).then(response => {

        const { message } = response.body
        
        expect(response.status).to.eq(400)
        expect(message).to.equal('ValidationError: \"email\" is required')
      })
    })

    it('password is required', function() {
      delete user.password
      
      cy.postUser(user).then(response => {

        const { message } = response.body
        
        expect(response.status).to.eq(400)
        expect(message).to.equal('ValidationError: \"password\" is required')
      })
    })
  })
})


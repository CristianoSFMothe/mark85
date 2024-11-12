describe('POST /users', () => {
  it('register a new users', () => {
    const user = {
      name: "Cristiano Ferreira",
      email: "cristiano@gmail.com",
      password: "pwd123"
    }
    cy.task('deleteUser', user.email)

    cy.postUser(user).then(response => {
      expect(response.status).to.eq(200)

      cy.log(JSON.stringify(response.body))
      expect(response.body.name).to.eq(user.name)
      expect(response.body.email).to.eq(user.email)
    })

  })

  it('duplicate email', () => {
    const user = {
      name: "James Gun",
      email: "james@hotmail.com",
      password: "pwd123"
    }
    cy.task('deleteUser', user.email)

    cy.postUser(user)

    cy.postUser(user).then(response => {
      const { message } = response.body;

      expect(response.status).to.eq(409)
      expect(message).to.eq("Duplicated email!")
    })

  })

  context.only('required fields', () => {
    let user;

    beforeEach(() => {
      user = {
        name: "Margot Robbie",
        email: "margot@hotmail.com",
        password: "pwd123"
      }
    })

    it('name is required', () => {
      delete user.name
      
      cy.postUser(user).then(response => {

        const { message } = response.body
        
        expect(response.status).to.eq(400)
        expect(message).to.equal('ValidationError: \"name\" is required')
      })
    })
    
    it('email is required', () => {
      delete user.email
      
      cy.postUser(user).then(response => {

        const { message } = response.body
        
        expect(response.status).to.eq(400)
        expect(message).to.equal('ValidationError: \"email\" is required')
      })
    })

    it('password is required', () => {
      delete user.password
      
      cy.postUser(user).then(response => {

        const { message } = response.body
        
        expect(response.status).to.eq(400)
        expect(message).to.equal('ValidationError: \"password\" is required')
      })
    })
  })
})


describe('POST /', () => {

  beforeEach(function () {
    cy.fixture('tasks').then(function (tasks) {
      this.tasks = tasks;
    })
  });

  it('register a new task', function () {
    const { user, task } = this.tasks.create

    cy.postSession(user).then(response => {
      cy.api({
        url: '/tasks',
        method: 'POST',
        body: task,
        headers: {
          Authorization: response.body.token
        },
        failOnStatusCode: false
      }).then(response => {
        expect(response.status).to.eq(200)
      })
    })
  });
});
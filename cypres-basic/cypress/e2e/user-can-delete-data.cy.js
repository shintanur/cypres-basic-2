describe('template spec', () => {
  
  beforeEach(() => {
    cy.visit('http://127.0.0.1:8000')
    cy.exec(
      'cd D:/cypres-basic/demo-app-cypress-automation && php artisan migrate:fresh --seed'
    );
    cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
    cy.get(':nth-child(3) > .form-control').type('password');
    cy.get('.btn').click();
    cy.visit('http://127.0.0.1:8000/user-management/user');
    cy.get('.card-header-action > .btn-icon').click();
  })

  //postive test case
  it('User can delete data ', () => {
    //arrange
    //act
    //assert
  })

  //positive test case
  it('User can cancel delete data ', () => {
    //arrange
    //act
    //assert
  })
  
  //negative test case
  it('dunny test ', () => {
    //arrange
    //act
    //assert
  })

  it('user cannot create new user because invalid email ', () => {
    //arrange
    //act
    //assert
  })
})
export default class ContactScreenPageObject {
  constructor(cy) {
    this.cy = cy;

    this.cy.visit('/contact');
  }

  callModalForm() {
    this.cy.get('#button').click().invoke('show');

    return this;
  }

  fillContactForm({ name, email, message }) {
    // encontrar e preencher input Nome (erro, Text também com o name=nome dentro do TextField)
    this.cy.get('#contactForm input[name=name]').type(name);
    this.cy.get('#contactForm input[name=email]').type(email);
    this.cy.get('#contactForm input[name=message]').type(message);

    return this;
  }

  submitForm() {
    this.cy.get('#contactForm button[type="submit"]').click();

    return this;
  }

  closeForm() {
    this.cy.get('#contactForm button[type="button"]').click();

    return this;
  }
}

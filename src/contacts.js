const contactBook = {
  owner: 'Biodun',
  contacts: [
    {
      id: 1,
      name: 'Tunde Bello',
      phone: '0801-234-5678',
      email: 't@gmail.com',
      city: 'Lagos',
      isFavourite: true
    },
    {
      id: 2,
      name: 'Amaka Obi',
      phone: '0802-345-6789',
      email: 'a@gmail.com',
      city: 'Abuja',
      isFavourite: false
    },
    {
      id: 3,
      name: 'Chidi Nweke',
      phone: '0803-456-7890',
      email: 'c@gmail.com',
      city: 'Port Harcourt',
      isFavourite: true
    },
    {
      id: 4,
      name: 'Sola Adeyemi',
      phone: '0804-567-8901',
      email: 's@gmail.com',
      city: 'Ibadan',
      isFavourite: true
    },
    {
      id: 5,
      name: 'Emeka Eze',
      phone: '0805-678-9012',
      email: 'e@gmail.com',
      city: 'Enugu',
      isFavourite: false
    }
  ]
}


function addContact(book, name, phone, email, city, isFavourite) {
  let newContact = book.contacts;
  let contactObject = {};

  contactObject.id = book.contacts.length + 1;
  contactObject.name = name;
  contactObject.phone = phone;
  contactObject.email = email;
  contactObject.city = city;
  contactObject.isFavourite = isFavourite;

  newContact.push(contactObject)

  return book
};

function removeContact (book, id) {
  for (let i = 0; i < book.contacts.length; i++) {
    if (id === book.contacts[i].id ) {
      book.contacts.splice(i, 1)
    }
  }
  return book
};

function searchByName (book, query) {
  for (let i = 0; i < book.contacts.length; i++) {

    let contact = book.contacts;
    let newQuery = query.toLowerCase();

    if (contact[i].name.toLowerCase().includes(newQuery) === true) {
      return book.contacts[i]
    } 
    } return "null"
  };

function listContacts (book) {
  for (let i = 0; i < book.contacts.length; i++) {
     console.log(`${book.contacts[i].id} ${book.contacts[i].name} | ${book.contacts[i].phone} | ${book.contacts[i].city} ${book.contacts[i].isFavourite ? "★" : ""}` )
  }
};

addContact(contactBook, "Tunde Bello", "0801-234-5678", "t@gmail.com", "Lagos");
addContact(contactBook, "Amaka Obi", "0802-345-6789", "a@gmail.com", "Abuja");
addContact(contactBook, "Chidi Nweke", "0803-456-7890", "c@gmail.com", "Port Harcourt");
addContact(contactBook, "Sola Adeyemi", "0804-567-8901", "s@gmail.com", "Ibadan");
addContact(contactBook, "Emeka Eze", "0805-678-9012", "e@gmail.com", "Enugu");



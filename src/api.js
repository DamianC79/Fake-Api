export const getUsers = new Promise(async (resolve, reject) => {
  const api = await fetch('https://fakerapi.it/api/v1/users?_quantity=10&_gender=male');
  const users = await api.json();
    
  resolve(users.data)
})

export const getBooks = new Promise(async (resolve, reject) => {
  const api = await fetch('https://fakerapi.it/api/v1/books?_quantity=5');
  const books = await api.json();

  resolve(books.data)
})
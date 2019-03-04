export default {
  port: 8080,
  db: {
    database: 'tabracker',
    user: 'admin',
    password: 'password',
    options: {
      dialect: 'sqlite',
      host: 'localhost',
      storage: './tabtracker.sqlite'
    }
  }
}
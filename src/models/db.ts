import mysql from 'mysql';

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  connectionLimit: 10,
  multipleStatements: true,
})

export const query = (sql: string, params: any[] = []) => {
  return new Promise((resolve, reject) => {
    pool.getConnection((err, connection) => {
      if (err) {
        reject(err)
      } else {
        connection.query(sql, params, (err, result) => {
          connection.release()
          if (err) {
            reject(err)
          } else {
            resolve(result)
          }
        })
      }
    })
  })
}

export default pool;
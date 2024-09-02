-- server/init.sql
CREATE TABLE IF NOT EXISTS cart (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  price VARCHAR(10),
  image VARCHAR(255)
);
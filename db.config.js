module.exports = {
    HOST: 'localhost',
    USER: 'root',
    PASSWORD: 'Malaysia156!',
    DB: 'course',
    PORT: 3306,
    dialect: 'mariadb',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
};
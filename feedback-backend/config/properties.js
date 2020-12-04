module.exports = {
    PORT : process.env.PORT || 4000,
    DB : `mongodb://${process.env.DB_ADDRESS}:${process.env.DB_PORT}/feedback`,
}
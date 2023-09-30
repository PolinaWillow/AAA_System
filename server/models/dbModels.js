const sequelize = require('../db.js')
const {DataTypes} = require('sequelize')

//Модель уровней доступа
const Acceess_Level = sequelize.define('acceess_level',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    level_name: {type: DataTypes.STRING, unique: true, allowNull: false}
});

//Модель пользователя
const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    //acceess_level_id: {type: DataTypes.INTEGER},
    login: {type: DataTypes.STRING, unique: true, allowNull: false},
    email: {type: DataTypes.STRING, unique: true, allowNull: false},
    number: {type: DataTypes.STRING, unique: true, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
    tgcode: {type: DataTypes.INTEGER,  allowNull: false},
    tgname: {type: DataTypes.STRING,  allowNull: false}
});

//Модель зашифрованного текста
const Encrypted_Text = sequelize.define('encrypted_text', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    //user_id: {type: DataTypes.INTEGER, allowNull: false},
    text: {type: DataTypes.TEXT, allowNull: false},
    keys: {type: DataTypes.TEXT, allowNull: false}
});

//Модель расшифрованного текста
const Decrypted_Text = sequelize.define('decrypted_text', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    //encrypted_text_id: {type: DataTypes.INTEGER, allowNull: false},
    //user_id: {type: DataTypes.INTEGER, allowNull: false},
    file: {type: DataTypes.STRING, allowNull: false},
    text: {type: DataTypes.TEXT, allowNull: false}
});

const Cat_Picture = sequelize.define('cat_picture', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    img: {type: DataTypes.STRING, allowNull: false},
});

//Связи между моделаями
Acceess_Level.hasMany(User)
User.belongsTo(Acceess_Level)

User.hasMany(Encrypted_Text)
Encrypted_Text.belongsTo(User)

User.hasMany(Decrypted_Text)
Decrypted_Text.belongsTo(User)

Encrypted_Text.hasMany(Decrypted_Text)
Decrypted_Text.belongsTo(Encrypted_Text)

//Экспортируем модели
module.exports = {
    Acceess_Level, User, Encrypted_Text, Decrypted_Text, Cat_Picture
}
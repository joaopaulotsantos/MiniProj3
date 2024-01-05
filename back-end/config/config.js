module.exports = {
    mongodb: {
        uri: 'mongodb+srv://fcabook:password@fcabook-jly7a.mongodb.net/pwa_teste?retryWrites=true&w=majority',
        //uri: 'mongodb://jp:password@192.168.1.77:27017/pwa_teste',
        //uri: 'mongodb://jp:password@mestrado-pwa.ddns.net:27017/pwa_teste',
        collections: {
            animal: 'animals',
            question: 'questions',
            quiz: 'quizzes',
            user: 'users',
            sponsor: 'sponsors',
            expert: 'experts',
            user_levels: "user_levels"
        }
    },
    auth: {
        expiration_time: 15000,
        issuer: "FCA"
    },
    sanitize: {
        alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzŠŒŽšœžŸ¥µÀÁÂÃÄÅÆÇÈÉÊËẼÌÍÎÏĨÐÑÒÓÔÕÖØÙÚÛÜÝßàáâãäåæçèéêëẽìíîïĩðñòóôõöøùúûüýÿ\\ ",
        numerical: "0123456789"
    },
    email: {
        service: "Gmail",
        auth: {
            user: "mailserverpw@gmail.com",
            //pass: "ttxirdxzkafhcuel"
        }
    }
}

const Expert = require('../models/expert.model');
const {
    validationResult
} = require('express-validator');
const ExpertMessages = require("../messages/expert.messages");
const JWT = require("jsonwebtoken");
const CONFIG = require("../config/config");
const Animal = require("../models/animal.model");

exports.get = (req, res) => {

    Expert.find(req.query, (error, experts) => {
        if (error) throw error;

        let message = ExpertMessages.success.s2;

        if (experts.length < 0)
            message = ExpertMessages.success.s5;

        message.body = experts;
        return res.status(message.http).send(message);
    });

}

exports.getOne = (req, res) => {

    const errors = validationResult(req).array();
    if (errors.length > 0) return res.status(406).send(errors);

    Expert.findOne({
        _id: req.params.id
    }, (error, expert) => {
        if (error) throw error;
        if (!expert) return res.status(ExpertMessages.error.e1.http).send(ExpertMessages.error.e1);
        let message = ExpertMessages.success.s2;
        message.body = expert;
        return res.status(message.http).send(message);
    });

}

exports.create = (req, res) => {
    const errors = validationResult(req).array();
    if (errors.length > 0) return res.status(406).send(errors);

    Expert.findOne({
        "auth.expertname": req.body.auth.expertname
    }, (error, expert) => {
        if (error) throw error;
        if (expert) return res.status(ExpertMessages.error.e0.http).send(ExpertMessages.error.e0)

        new Expert({
            name: req.body.name,
            type: req.body.type,
            birth_date: req.body.birth_date,
            description: req.body.description,
            location: {
                city: req.body.location.city,
                district: req.body.location.district,
                country: req.body.location.country
            },
            auth: {
                expertname: req.body.auth.expertname,
                password: req.body.auth.password
            }
        }).save((error, expert) => {
            if (error) throw error;

            let payload = {
                pk: expert.auth.public_key
            }

            let options = {
                expiresIn: CONFIG.auth.expiration_time,
                issuer: CONFIG.auth.issuer
            };

            let token = JWT.sign(payload, expert.auth.private_key, options);


            let message = ExpertMessages.success.s0;
            message.body = expert;
            return res.header("location", "/experts/" + expert._id).header("Authorization", token).status(message.http).send(message);
        })
    });

}

exports.update = (req, res) => {

    const errors = validationResult(req).array();
    if (errors.length > 0) return res.status(406).send(errors);

    Expert.findOneAndUpdate({
        _id: req.params.id
    }, {
        $set: req.body
    }, {
        new: true
    }, (error, expert) => {
        if (error) throw error;
        if (!expert) return res.status(ExpertMessages.error.e1.http).send(ExpertMessages.error.e1);

        let message = ExpertMessages.success.s1;
        message.body = expert;
        return res.status(message.http).send(message);

    });

}

exports.delete = (req, res) => {

    const errors = validationResult(req).array();
    if (errors.length > 0) return res.status(406).send(errors);

    Expert.deleteOne({
        _id: req.params.id
    }, (error, result) => {
        if (error) throw error;
        if (result.deletedCount <= 0) return res.status(ExpertMessages.error.e1.http).send(ExpertMessages.error.e1);

        Animal.updateMany({}, {
            $pull: {
                comments: {
                    expert: req.params.id
                }
            }
        }, (error) => {
            if (error) throw error;
            return res.status(ExpertMessages.success.s3.http).send(ExpertMessages.success.s3);
        });
    });

}

exports.activate = (req, res) => {
    const errors = validationResult(req).array();
    if (errors.length > 0) return res.status(406).send(errors);

    Expert.updateOne({
        _id: req.params.id
    }, {
        $set: {
            active: true
        }
    }, (error, result) => {
        if (error) throw error;

        if (result.n <= 0) return res.status(ExpertMessages.error.e0.http).send(ExpertMessages.error.e0);
        return res.status(ExpertMessages.success.s6.http).send(ExpertMessages.success.s6);

    });
}

exports.deactivate = (req, res) => {
    const errors = validationResult(req).array();
    if (errors.length > 0) return res.status(406).send(errors);

    Expert.updateOne({
        _id: req.params.id
    }, {
        $set: {
            active: false
        }
    }, (error, result) => {
        if (error) throw error;

        if (result.n <= 0) return res.status(ExpertMessages.error.e0.http).send(ExpertMessages.error.e0);
        return res.status(ExpertMessages.success.s4.http).send(ExpertMessages.success.s4);

    });
}
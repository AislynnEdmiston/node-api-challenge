const actionModel = require('../data/helpers/actionModel');

async function validateNewAction (req, res, next) {
    if (!req.body.project_id || !req.body.description) {
        res.status(400).json({ message: "Please add a project id and a description." })
    }
    next();
}

async function validateUpdateAction (req, res, next) {
    if (!!req.params.id) {
        const action = actionModel.get(req.params.id)

        if (action.length > 0) {
            res.status(400).json({ message: `The action ${req.body} is already on file.`})
        }
    }

    next()
}

module.exports = {validateNewAction, validateUpdateAction}
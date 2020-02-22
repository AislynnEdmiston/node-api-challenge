const projectModel = require('../data/helpers/projectModel');

async function validateNewProject (req, res, next) {
    if(!req.body.name || !req.body.description) {
        return res.status(400).json({ message: "Please add a name and a description." })
    }
    next()
}

async function validateUpdateProject (req, res, next) {
    if (!!req.params.id){
        const project = await projectModel.get( req.params.id )

        if (project.length > 0) {
            return res.status(400).json({ message: `The project ${req.body.name} is already on file. Please try another name.` })
        }
    }

    next()
}

module.exports = { validateNewProject, validateUpdateProject }
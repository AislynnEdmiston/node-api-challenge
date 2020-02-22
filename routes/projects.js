const projectModel = require("../data/helpers/projectModel");
const router = require("express").Router();
const validate = require("../middleware/projectValidate");

/* get,
  insert,
  update,
  remove,
  getProjectActions*/

async function getAllProjects(req, res) {
    try{
        const projects = await projectModel.get();
        res.status(200).json(projects)
    } catch (error) {
        res.status(500).json(error)
    }
}

async function getProjectById (req, res) {
    try{
        const project = await projectModel.get( req.params.id )
        res.status(200).json(project)
    } catch (error) {
        res.status(500).json(error)
    }
}

async function addNewProject (req, res) {
    try{
        const project = await projectModel.insert(req.body)
        res.status(201).json(project)
    } catch (error) {
        res.status(500).json(error)
    }
}

async function updateProject (req, res) {
    try{
        const project = await projectModel.update(req.params.id, req.body)
        res.status(202).json(project)
    } catch (error) {
        res.status(500).json(error)
    }
}

async function deleteProject (req, res) {
    try{
        const count = await projectModel.remove(req.params.id)
        res.status(200).json(count)
    } catch (error) {
        res.status(500).json(error)
    }
}

// async function getProjectActions (req, res) {
//     try{
//         // getProjectActions
//     } catch (error) {
//         res.status(500).json(error)
//     }
// }

router
    .get('/', getAllProjects)
    .get('/:id', getProjectById)
    .post('/', validate.validateNewProject, addNewProject)
    .put('/:id', validate.validateUpdateProject, updateProject)
    .delete('/:id', deleteProject)

module.exports = router; 
const projectModel = require("../data/helpers/actionModel");
const router = require("express").Router();
const validate = require("../middleware/actionValidate");

/*  get,
    insert,
    update,
    remove */

async function getAllActions(req, res) {
    try{
        const actions = await actionModel.get();
        res.status(200).json(actions)
    } catch (error) {
        res.status(500).json(error)
    }
}

async function getActionById (req, res) {
    try{
        const action = await ActionModel.get( req.params.id )
        res.status(200).json(action)
    } catch (error) {
        res.status(500).json(error)
    }
}

async function addNewAction (req, res) {
    try{
        const action = await actionModel.insert(req.body)
        res.status(201).json(action)
    } catch (error) {
        res.status(500).json(error)
    }
}

async function updateAction (req, res) {
    try{
        const action = await actionModel.update(req.params.id, req.body)
        res.status(202).json(action)
    } catch (error) {
        res.status(500).json(error)
    }
}

async function deleteAction (req, res) {
    try{
        const count = await actionModel.remove(req.params.id)
        res.status(200).json(count)
    } catch (error) {
        res.status(500).json(error)
    }
}

router
    .get('/', getAllActions)
    .get('/:id', getActionById)
    .post('/', validate.validateNewAction, addNewAction)
    .put('/:id', validate.validateUpdateAction, updateAction)
    .delete('/:id', deleteAction)

module.exports = router; 
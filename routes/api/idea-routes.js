//here we require express
const router = require ('express').Router();

//here we set our requirements
const {
    getAllIdeas,
    getIdeasById,
    createIdeas,
    updateIdeas,
    deleteIdeas,
    addReaction,
    deleteReaction
} = require ('../../controllers/idea-controller');


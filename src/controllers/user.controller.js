import { response } from "express";
import { asyncHandler } from "../utils/asyncHandler.js ";    // importing error handling file 

const registerUser = asyncHandler( async(req, res) => {
    res.status(200).json({
        message : "ok"})
    })

    export { registerUser }
import { Router } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
export const login = async (req, res) => {
    const { username, password } = req.body; // Extract username and password from the request body
    // Find the user in the database by username
    const user = await User.findOne({
        where: { username },
    });
    //If user is not found, send an authentication failed response
    if (!user) {
        return res.status(401).json({ message: 'Authentication failed' });
    }
    // Compare the provided password with the stored hashed password
    const passwordIsValid = await bcrypt.compare(password, user.password);
    // If password is invalid, send an authentication failed response
    if (!passwordIsValid) {
        return res.status(401).json({ message: 'Authentication failed' });
    }
    // Get the secret key from environment variables
    const secretKey = process.env.JWT_SECRET_KEY || 'secret';
    // Genterate a JWT token for the authentication user
    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
    return res.json({ token }); // Send the token as a JSON response
};
// Create a new router instance
const router = Router();
// POST /login - Login a user
router.post('/login', login); // Define the login route
export default router; // Export the router instance

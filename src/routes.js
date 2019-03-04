import authController from './controllers/authController';
import authControllerPolicy from './policies/authControllerPolicy';

export default (app) => {
    app.post('/register', authControllerPolicy.register, authController.register);
};
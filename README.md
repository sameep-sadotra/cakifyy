
# Cakify - Online Cake Ordering Platform

Cakify is an online platform for users to browse, customize, and order cakes seamlessly. Built using the MERN stack (MongoDB, Express.js, React.js, Node.js), it provides a user-friendly experience with secure payment integrations and an admin panel for managing orders and inventory.

## Features

- **Browse Cakes**: Users can view a wide selection of cakes, apply filters, and search for specific types or flavors.
- **Order Management**: Users can add cakes to the cart, customize their orders, and proceed to secure checkout.
- **Payment Integration**: Secure payments through Stripe or PayPal.
- **Admin Panel**: Admins can manage cake inventory, view orders, and process customer requests.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Payment Gateway**: Stripe/PayPal

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/your-username/cakify.git
    cd cakify
    ```

2. **Install dependencies**:
    For the backend:
    ```bash
    cd backend
    npm install
    ```

    For the frontend:
    ```bash
    cd frontend
    npm install
    ```

3. **Create a `.env` file** in the root directories (both frontend and backend) and add the following environment variables:

    Backend:
    ```bash
    MONGO_URI=your-mongodb-uri
    STRIPE_SECRET_KEY=your-stripe-secret-key
    ```

    Frontend:
    ```bash
    REACT_APP_STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
    ```

4. **Run the application**:

    For the backend (run in the backend directory):
    ```bash
    npm run start
    ```

    For the frontend (run in the frontend directory):
    ```bash
    npm start
    ```

    The frontend will be running on `http://localhost:3000` and the backend on `http://localhost:5000`.

## Project Structure

```
cakify/
 ├── backend/
 │   ├── config/
 │   ├── controllers/
 │   ├── models/
 │   ├── routes/
 │   ├── server.js
 ├── frontend/
 │   ├── public/
 │   ├── src/
 │   │   ├── components/
 │   │   ├── pages/
 │   │   ├── App.js
 │   ├── package.json
 ├── README.md
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License.

## Contact

For any queries or issues, please contact:
- **Sameep Sadotra** - [Email](mailto:sadotrasameep@gmail.com)

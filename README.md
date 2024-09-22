
# Kalp Medika

Kalp Medika is a decentralized pharmaceutical supply chain tracker built on the Kalp DLT blockchain using the KRC721 token standard. This solution provides a transparent and tamper-proof system to track the entire lifecycle of medicines, from manufacturing to distribution and retail. By leveraging blockchain technology, Kalp Medika ensures authenticity, enhances traceability, and reduces fraud in the pharmaceutical industry.

With Kalp Medika, stakeholders can verify the origin, ownership, and status of medicines at any point in the supply chain, empowering them with real-time data to make informed decisions.

---

## Local Setup

To run **Kalp Medika** locally, follow these steps:

### Prerequisites
- **Node.js** (v14 or higher)
- **npm** or **yarn** (package manager)
- **Git**

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Dhruv-Sood/kalp-medika.git
   cd kalp-medika
   ```

2. **Install dependencies:**

   Using npm:
   ```bash
   npm install
   ```

   Using yarn:
   ```bash
   yarn install
   ```

### Environment Variables

Create a `.env.local` file in the root directory and configure the following environment variables:

```
NEXT_PUBLIC_X_API_KEY=<your Kalp DLT API key>
```

### Run the Development Server

Start the local server:

```bash
npm run dev
```

or

```bash
yarn dev
```

The app will be running at [http://localhost:3000](http://localhost:3000).

### Build for Production

To build the project for production, run:

```bash
npm run build
```

or

```bash
yarn build
```

After building, you can start the production server:

```bash
npm run start
```

or

```bash
yarn start
```

---

## Smart Contract

The smart contract for **Kalp Medika** is built using the **KRC721** token standard provided by **Kalp Studio**. The KRC721 template ensures that each medicine is represented as a unique, non-fungible token (NFT), allowing precise tracking and ownership verification throughout the pharmaceutical supply chain.

### Contract Details

- **Token Standard**: KRC721 (Non-Fungible Token)
- **Blockchain**: Kalp DLT
- **Contract Address**: `yvZCOXuc2Zlpz3KQn8KLb6101k5K3Dco1727003890680`
- **Network**: Kalp DLT Testnet

### Features

- **Medicine Tracking**: Each medicine is represented by a unique KRC721 token, allowing transparent tracking across all stakeholders, including manufacturers, distributors, and pharmacies.
- **Immutable Data**: Information about the medicine's origin, expiry date, and movement in the supply chain is permanently stored on the blockchain.
- **Ownership Transfer**: Medicine ownership can be transferred from one entity to another, ensuring full traceability across the supply chain.
  
### Interaction with the Smart Contract

The app interacts with the KRC721 smart contract to:

- Mint new tokens for each batch of medicine.
- Burn tokens for old/damaged batch of medicine.
- Transfer ownership as the medicine moves across the supply chain.
- Query the contract for tracking details and ownership verification.

You can explore and interact with the deployed contract via the **Kalp Studio** blockchain explorer or integrate with the app using the contract address.

---


## Contributing

We welcome contributions to **Kalp Medika**! If you'd like to contribute, please follow these steps:

### Steps to Contribute

1. **Fork the Repository:**

   Click the "Fork" button at the top of the repository page to create a copy of this project under your own GitHub account.

2. **Clone Your Forked Repository:**

   Clone the forked repository to your local machine:

   ```bash
   git clone https://github.com/Dhruv-Sood/kalp-medika.git
   cd kalp-medika
   ```

3. **Create a New Branch:**

   Before making any changes, create a new branch to work on:

   ```bash
   git checkout -b your-branch-name
   ```

4. **Make Your Changes:**

   Implement the changes or features you'd like to contribute.

5. **Test Your Changes:**

   Ensure that all changes are properly tested and the project runs smoothly.

6. **Commit and Push:**

   After making changes, commit them to your local branch:

   ```bash
   git add .
   git commit -m "Describe your changes"
   ```

   Push your changes to your forked repository:

   ```bash
   git push origin your-branch-name
   ```

7. **Create a Pull Request:**

   Go to the original repository on GitHub, and you’ll see a prompt to create a pull request from your forked repository. Click on "New Pull Request," and provide a description of your changes.

### Guidelines for Contributions

- Ensure your code follows the project's coding standards.
- Write clear and concise commit messages.
- Test your changes before submitting the pull request.
- Include any relevant documentation or comments for your changes.
- Be responsive to feedback on your pull request.

Thank you for contributing to **Kalp Medika**!



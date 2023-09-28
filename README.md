# walletviewer-service

### Development

- Install MongoDB mongod by this [course](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/#std-label-install-mdb-community-ubuntu)

- Copy **.env.example** to .emv: `cp .env.example .env`

- Generate asymetric keys:

  1. Private key: `openssl genpkey -algorithm RSA -out private_key.pem`

  2. Public key: `openssl rsa -pubout -in private_key.pem -out public_key.pem`

- Paste these heys into .env file as base64. You are able to see these keys as base64:

  1. `cat private_key.pem | base64 -w 0`
  1. `cat public_key.pem | base64 -w 0`

- run command `bash .dev/development.sh`

# WalletViewer Service Documentation

## Development Setup

This section provides a step-by-step guide for setting up the WalletViewer service for development purposes. Please follow the instructions carefully to avoid any configuration issues.

### 1. **Install MongoDB**

MongoDB is essential for the proper functioning of the WalletViewer service. Follow the [official MongoDB installation guide](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-ubuntu/#std-label-install-mdb-community-ubuntu) to install MongoDB on Ubuntu.

### 2. **Configure Environment Variables**

Copy the example environment file to create a new environment configuration file:

```sh
cp .env.example .env
```

### 3. **Generate Asymmetric Keys**

Asymmetric keys are crucial for securing transactions within the service. Execute the following steps to generate a private and a public key:

- Generate Private Key:

  ```sh
  openssl genpkey -algorithm RSA -out private_key.pem
  ```

- Generate Public Key:
  ```sh
  openssl rsa -pubout -in private_key.pem -out public_key.pem
  ```

### 4. **Configure Keys in Environment File**

Convert the generated keys to base64 format and insert them into the .env file. Utilize the following commands to convert the keys:

- Convert Private Key:

  ```sh
  cat private_key.pem | base64 -w 0
  ```

- Convert Public Key:
  ```sh
  cat public_key.pem | base64 -w 0
  ```

### 5. **Run Development Script**

Execute the development script to finalize the setup:

```sh
bash .dev/development.sh
```

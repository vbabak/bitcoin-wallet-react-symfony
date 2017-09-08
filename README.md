Bitcoin Wallet
==========

Bitcoin wallet, done with React 15 (front-end) and Symfony 3 with MySQL (backend).

## Setup

#### Apache2:

```
<VirtualHost *:80>
        ServerName bitcoin-wallet-react-symfony-api.dev
        DocumentRoot /vagrant/bitcoin-wallet-react-symfony.dev/wallet-api/web
        <Directory "/vagrant/bitcoin-wallet-react-symfony.dev/wallet-api/web">
                AllowOverride All
                Require all granted
        </Directory>
</VirtualHost>

<VirtualHost *:80>
        ServerName bitcoin-wallet-react-symfony.dev
        DocumentRoot /vagrant/bitcoin-wallet-react-symfony.dev/react-app/build
        <Directory "/vagrant/bitcoin-wallet-react-symfony.dev/react-app/build">
                AllowOverride All
                Require all granted
        </Directory>
</VirtualHost>
```

### Symfony 3

#### Install
```sh
cd wallet-api;

// set your db parameters
cp app/config/parameters.yml.dist app/config/parameters.yml

composer install

sudo a2enmod headers
sudo service apache2 restart
```

#### Development
```sh
// clear cache
rm -rf var/cache/prod/*
./bin/console cache:clear --env prod

// dump routes
./bin/console debug:router --env=prod

// re-gerenerate autoloads
composer dump-autoload
```

### React JS

#### Install
```sh
cd react-app
cp /src/settings/settings.js.tpl /src/settings/settings.js
yarn install
yarn build
```

#### Development
```sh
yarn start
// or make a production build
yarn build
```

## License

GNU GENERAL PUBLIC LICENSE Version 3.

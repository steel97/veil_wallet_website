# Veil Wallet Website setup guide
## Setup
Required OS: **ubuntu 22.04+**

Recommended OS: **ubuntu 22.04 LTS**

Required Software:
- [NodeJS 20+](https://nodejs.org/en/)

## Update packages
```bash
sudo apt update
sudo apt upgrade
```

## Install NodeJS 20
```bash
# add nodesource PPA
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo bash -
# install nodejs
sudo apt install nodejs
```

## Create user for frontend app
```bash
sudo adduser walletwww
sudo usermod -aG sudo walletwww
```

## Create app directory
```bash
sudo mkdir /home/walletwww/server/
```

## Download and unpack frontend build (change version in link and command to actual)
```
TO-DO
```
```bash
sudo wget
sudo tar -xzf  -C /home/walletwww/server/
```

## Issue permissions for frontend
```bash
sudo chmod 755 /home/walletwww/server
sudo chown -R walletwww /home/walletwww/server/
```

## Create startup script
```bash
su walletwww
cd /home/walletwww/server/
nano start.sh
```
Add this content to opened file, change variables if required:
```bash
#!/bin/bash
# listen address, highly recommended to change it to 127.0.0.1 and hide nuxt server behind nginx proxy for example
export HOST=0.0.0.0
# listen port
export PORT=3000
# run in cluster mode
export NITRO_PRESET=node-cluster
# url on which frontend available, used for SEO, meta tags etc.
export NUXT_PUBLIC_SITE_URL=http://localhost:3000
export NUXT_I18N_BASE_URL=https://veilproject.org
export NUXT_PUBLIC_WEBSITE=https://veil-project.com
export NUXT_PUBLIC_GITHUB_SITE=https://github.com/steel97/veil_wallet_website
export NUXT_PUBLIC_GITHUB_WALLET=https://github.com/steel97/veil_wallet
export NUXT_PUBLIC_APP_GOOGLEPLAY=https://play.google.com/store/apps/details?id=org.veilproject.wallet
export NUXT_PUBLIC_APP_FDROID=https://f-droid.org/packages/org.veilproject.wallet/
export NUXT_GITHUB_REPO=steel97/veil_wallet
export NUXT_ALTSOURCE_NAME="Veil Project AltSource"
export NUXT_ALTSOURCE_SUBTITLE="Source for Veil apps on AltStore"
export NUXT_ALTSOURCE_DESCRIPTION="The goal of this source is to provide access to Veil-Project apps on iOS"
export NUXT_ALTSOURCE_ICON=https://veilproject.org/images/logo.png
export NUXT_ALTSOURCE_HEADER=https://veil-project.com/dist/img/pattern.png
export NUXT_ALTSOURCE_WEBSITE=https://veilproject.org
export NUXT_ALTSOURCE_TINT=#FFFFFF

node server/index.mjs
```

## Change permissions and test frontend
```bash
chmod +x start.sh
./start.sh
```
If there are no errors, move to next step.

## Register website as systemd service
```bash
cd /home/walletwww/server/
# download service example file
wget -O veil-wallet-website.service https://raw.githubusercontent.com/steel97/veil_wallet_website/master/docs/systemd.example
sudo systemctl ./link veil-wallet-website.service
sudo systemctl enable veil-wallet-website
```

Done, now veil wallet website is running as a background service.
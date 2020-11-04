# Cloud & Backup systems

## Overview

- [**ownCloud - Your own personal cloud based backup/data storage system**](#owncloud-your-own-personal-cloud-based-backupdata-storage-system)
- [**Nextcloud - Self-hosted productivity platform**](#nextcloud-self-hosted-productivity-platform)
- [**Nextcloud Talk - Video calls via Nextcloud, including TURN server**](#nextcloud-talk-video-calls-via-nextcloud-including-turn-server)
- [**Pydio - Feature-rich backup and sync server with web interface**](#pydio-feature-rich-backup-and-sync-server-with-web-interface)
- [**UrBackup Server - Full backups for systems on your network**](#urbackup-server-full-backups-for-systems-on-your-network)
- [**Gogs - GitHub style server, with web interface**](#gogs-github-style-server-with-web-interface)
- [**Gitea - GitHub style server, with web interface**](#gitea-github-style-server-with-web-interface)
- [**Syncthing - Backup and sync server with web interface**](#syncthing-backup-and-sync-server-with-web-interface)
- [**Tonido - Lightweight backup and sync server with web interface and cloud access**](#tonido-lightweight-backup-and-sync-server-with-web-interface-and-cloud-access)
- [**Minio - S3 compatible distributed object server**](#minio-s3-compatible-distributed-object-server)
- [**Firefox Sync Server - Sync bookmarks, tabs, history and passwords**](#firefox-sync-server-sync-bookmarks-tabs-history-and-passwords)

??? info "How do I run **DietPi-Software** and install **optimised software** ?"
    To install any of the **DietPi optimised software** listed below run from the command line:

    ```
    dietpi-software
    ```

    Choose **Software Optimised** and select one or more items. Finally click on `Install`. DietPi will do all the necessary steps to install and start these software items.

    ![DietPi software](../assets/images/dietpi-software.jpg)

    To see all the DietPi configurations options, review [DietPi Tools](../../dietpi_tools) section.

[Return to the **Optimised Software list**](../../dietpi_optimised_software)

## ownCloud - Your own personal cloud based backup/data storage system

The ownCloud package turns your DietPi system into your very own personal cloud based backup/data storage system (e.g.: Dropbox).

Also Installs:

- Webserver
- USB dedicated hard drive highly recommended

![DietPi cloud software ownCloud](../assets/images/dietpi-software-cloud-owncloud.png)

=== "Access to the web interface"

    - URL = `http://localhost/owncloud`  
      where 'localhost' can be substituted by local server IP or hostname, to access remotely.
    - Username = `admin`
    - Password = <your global password\>

    If you may want to configure your ownCloud from command line via `occ` command see the [ownCloud admin manual](https://doc.owncloud.org/server/10.5/admin_manual/configuration/server/occ_command.html).  
    We added a shortcut to the otherwise necessary `sudo -u www-data php /var/www/owncloud/occ`: Just use `occ` followed by the desired command inside your terminal.

=== "Update ownCloud to the latest version"

    1. Option: Use the web-based updater from within the ownCloud web UI settings.
    2. Option: Use the updater script from console (recommended):

        ```sh
        sudo -u www-data php /var/www/owncloud/updater/application.php
        1
        ```

    3. Follow the official documentation for a manual upgrade process: <https://doc.owncloud.com/server/admin_manual/maintenance/manual_upgrade.html>

=== "FAQ"

    #### Where is my data stored?

    `/mnt/dietpi_userdata/owncloud_data` (or `dietpi.txt` choice)

    #### Why am I limited to 2 GiB file size uploads?

    DietPi will automatically apply the max supported upload size to the PHP and ownCloud configs.

    - 32bit systems can handle 2 GB
    - 64bit systems can handle 8796 PB, yep, in petabyte
    - `echo -e "$(( $(php -r 'print(PHP_INT_MAX);') / 1024 / 1024))MB"``

    #### Will my data be saved after deinstallation?

    Your userdata directory will stay after deinstallation.  
    As well a database backup will be saved to your userdata directory. Thus you can easily restore your instance by reinstalling ownCloud and restore the database dump.

See also <https://owncloud.com/> resp. <https://doc.owncloud.org/server/admin_manual/>.

## Nextcloud - Self-hosted productivity platform

Nextcloud gives you access to all your files wherever you are. Store your documents, calendar, contacts and photos on a server at home, at one of our providers or in a data center you trust.

![DietPi cloud software Nextcloud](../assets/images/dietpi-software-cloud-nextcloud.jpg)

=== "Quick start"

    Access the web interface using the next URL when running on SBC (`http://localhost/nextcloud/`) or the IP address / hostname of your DietPi device (e.g.: `http://192.168.0.100/nextcloud/`).

    - Username = `admin`
    - Password = <your global password\>

    Nextcloud is installed together with the webserver. To fast access the files, a dedicated USB hard drive is highly recommended.

=== "Advanced configuration"

    For an advanced setup you could further configure your Nextcloud setup from the command line - see the [Nextcloud Admin guide](https://docs.nextcloud.com/server/17/admin_manual/configuration_server/occ_command.html).

    To simplify this configuration, DietPi has added a shortcut to the otherwise necessary  
    `sudo -u www-data php /var/www/nextcloud/occ`.  
    Just use inside your terminal:

    ```
    ncc [followed by the desired command]
    ```

=== "Update Nextcloud to the latest version"

    1. Option: Use the web-based updater from within the Nextcloud web UI settings.
    2. Option: Use the updater script from console (recommended):

        ```sh
        phpenmod phar # The PHP Phar module is required
        sudo -u www-data php /var/www/nextcloud/updater/updater.phar
        y # Starts download and install of files
        y # Starts the internal database upgrade and migration steps
        ```

    3. Follow the official documentation for a manual upgrade process: <https://docs.nextcloud.com/server/latest/admin_manual/maintenance/manual_upgrade.html>

=== "Official documentation"

    <https://docs.nextcloud.com/server/latest/admin_manual/contents.html>

=== "FAQ"

    #### Where is my data stored?

    `/mnt/dietpi_userdata/nextcloud_data` (or `dietpi.txt` choice)

    #### Why am I limited to 2GB file size uploads?

    DietPi will automatically apply the max supported upload size to the PHP and Nextcloud configs.

    - 32bit systems can handle 2 GB
    - 64bit systems can handle 8796 PB (petabytes)

    #### Will my data be saved after deinstallation?

    Your user data directory will stay after deinstallation. As well a database backup will be saved to your user data directory. Thus you can easily restore your instance by reinstalling Nextcloud and restore the database dump.

See also <https://nextcloud.com/athome>.

## Nextcloud Talk - Video calls via Nextcloud, including TURN server

Host video calls on your own Nextcloud instance. The TURN server ***coturn*** will be installed and configured as well to allow reliable video calls through outside the local network, NAT and firewall setups.

Also installs:

- Nextcloud
- coturn

![DietPi cloud software Nextcloud Talk](../assets/images/dietpi-software-cloud-nextcloudtalk.png)

See also <https://nextcloud.com/talk/>.

### Installation notes

During installation you will be asked to enter the external server domain and a port, that you want to use for the coturn TURN server. Note that you need to forward the chosen port and/or open it in your firewall.

If HTTPS was or is enabled via `dietpi-letsencrypt`, coturn will be configured to use the LetsEncrypt certificates for TLS connections on the chosen TURN server port automatically.  
coturn by default will listen to non-TLS requests as well on the port configured in `/etc/turnserver.conf`. You can force TLS/control this by switching port forwarding in your router and/or opening/dropping ports in your firewall.

coturn logging by default is disabled via `/etc/default/coturn` command arguments, since it is very verbose and produces much disk I/O. You can enable and configure logging via `/etc/turnserver.conf`, if required.

## Pydio - Feature-rich backup and sync server with web interface

Pydio is a feature-rich backup and sync server with web interface. Similar to ownCloud with vast configuration options to meet your "cloud" needs.

Also Installs:

- Webserver

![DietPi cloud software Pydio](../assets/images/dietpi-software-cloud-pydio.png)

=== "Access to the web interface"

    URL = `http://<your.IP>/pydio`

=== "First time connect"

    - Ignore the warnings and click the button titled `CLICK HERE TO CONTINUE TO PYDIO`.  
      Remark: If you require SSL access, please use LetsEncrypt to set this up.
    - The wizard can now be started, click the `start wizard >` button to begin.  
    - Enter and create a new admin account for use with Pydio. Then click the `>>` button.
    - Under database details, enter the following:
        - Database type = `MySQL`
        - Host = `localhost`
        - Database = `pydio`
        - User = `pydio`
        - Password = `dietpi`
        - Use MySqli = No
    - Click test connection, when successful, click the `>>` button.
    - Under advanced options, use the default values, then click the `Install Pydio` button.

=== "Setup sync client on remote systems"

    Once the server has been configured (as per above):

    - Download the sync client for your system: <https://pydio.com/en/get-pydio/downloads/pydiosync-desktop-app>
    - When configuring the remote server, use the following:
        - Select HTTP option (unless you have setup an SSL cert)
        - URL = `http://<your.IP>/pydio` (replace IP with your system IP)
        - User = The "admin" user you setup in initial setup.
        - Password = The "admin" password you setup in initial setup.

See also <https://pydio.com/>.

## UrBackup Server - Full backups for systems on your network

UrBackup Server is an Open Source client/server backup system, that through a combination of image and file backups accomplishes both data safety and a fast restoration time.  
Basically, it allows you to create a complete system backup, using a simple web interface, for systems on your network.

![DietPi cloud software UrBackup Server](../assets/images/dietpi-software-cloud-urbackup.png)

=== "Access to the web interface"

    URL = `http://<your.IP>:55414`  
    Remark: Change the IP address for your system.

=== "Backup storage location"

    The location of the backups can be changed in the web interface:

    - Select `Settings`.
    - Change the Backup Storage Path: `/mnt/dietpi_userdata/urbackup` is recommended.
    - Click `Save`.
    - Restart service with `systemctl restart urbackupsrv`.

=== "Download the client"

    Install the appropriate client on the systems you wish to backup from  
    <https://www.urbackup.org/download.html#client_windows>.

See also <https://www.urbackup.org/index.html>.

## Gogs - GitHub style server, with web interface

Your very own GitHub style server, with web interface.

![DietPi cloud software Gogs](../assets/images/dietpi-software-cloud-gogs.png)

=== "Access to the web interface"

    - URL = `http://<your.IP>:3000`

=== "First run setup"

    Remark: Documentation requires DietPi v6.11 or higher.

    Has to be done once, when connected to the web interface:

    - Change the following values only:
        - Host = `/run/mysqld/mysqld.sock`
        - User = `gogs`
        - Database password = `dietpi`
        - Repository Root Path = `/mnt/dietpi_userdata/gogs-repo`
        - Run User = `gogs`
        - Log Path = `/var/log/gogs`
        - Email service settings \> From = `anyone@anyemail.com`
    - Scroll to the bottom of page and select Install Gogs
    - When the web address changes to localhost: and fails to load, you need to reconnect to the web page using the IP address (e.g.: `http://<your.IP>:3000`)
    - Once the page has reloaded, you will need to click register to create the admin account

=== "External access"

    If you wish to allow external access to your Gogs server, you will need to setup port forwarding on your router, pointing to the IP address of your DietPi device.

    - Port = 3000
    - Protocol = TCP+UDP

See also <https://gogs.io/>.

## Gitea - GitHub style server, with web interface

Your very own GitHub style server, with web interface.

![DietPi cloud software Gitea](../assets/images/dietpi-software-cloud-gitea.jpg)

=== "Access to the web interface"

    - URL = `http://<your.IP>:3000`

=== "First run setup"

    Has to be done once, when connected to the web interface:

    - Change the following values only:
        - MySQL database user = `gitea`
        - MySQL database password = `dietpi`
        - Repository Root Path = `/mnt/dietpi_userdata/gitea/gitea-repositories`
        - Log Path = `/var/log/gitea`
    - Scroll to the bottom of page and select Install Gitea
    - When the web address changes to localhost: and fails to load, you need to reconnect to the web page using the IP address (e.g.: `http://<your.IP>:3000`)
    - Once the page has reloaded, you will need to click register to create the admin account

=== "External access"

    If you wish to allow external access to your Gitea server, you will need to setup port forwarding on your router, pointing to the IP address of your DietPi device.

    - Port = 3000
    - Protocol = TCP+UDP

See also <https://gitea.io/>.

## Syncthing - Backup and sync server with web interface

Backup and sync server with web interface. Extremely lightweight and efficient as no webserver is required.

![DietPi cloud software Syncthing](../assets/images/dietpi-software-cloud-syncthing.png)

=== "Access to the web interface"

    URL = `http://<your.IP>:8384`

=== "First run setup"

    Has to be done once, when connected to the web interface.

    - When the `Danger! Please set a GUI Authentication User and Password in the Settings dialog.` box appears, click the `settings` button inside the box.
    - Under `GUI Authentication User` and `GUI Authentication Password`: Enter new login details you would like to use for access to the web interface. Then click `save`.

    DietPi will automatically setup your default folder share to `/mnt/dietpi_userdata`.

=== "Setup a second system to sync with"

    In this example we will use a Windows system. The goal is to "sync" the user data from your DietPi device with another system.

    - Download, extract and run the Windows application `syncthing.exe`: <https://syncthing.net/downloads/>.
    - Syncthing web interface will load automatically, if not, you can access it via `http://127.0.0.1:8384/`.
        - Click `Actions` at the top right, then select `Show ID`. Copy the UUID code.
    - On the DietPi device, open the web interface and click `Add remote device` (bottom right).
        - Under `Device ID`, paste in the UUID we copied earlier.
        - Under `Device name`, enter any name. e.g.: *My Windows PC*.
        - Under `Share Folders With Device` tick/select DietPi user data, then click `save`.
    - After a few seconds, go back to the Windows web interface `http://127.0.0.1:8384/`. You should receive a message asking you to confirm the new device, click `Add Device`.
        - Under `Share Folders With Device` tick/select DietPi user data, then click `save`.

    You devices should now duplicate the user data from your DietPi device to your Windows PC.

See also <https://syncthing.net/>.

## Tonido - Lightweight backup and sync server with web interface and cloud access

Lightweight backup and sync server, includes web interface and external cloud access.

??? note "Windows app not supported for ARMv7!"

    Windows sync app is not supported for ARMv7 (RPi). See <https://github.com/MichaIng/DietPi/issues/592#issuecomment-290915782> for details.

![DietPi cloud software Tonido](../assets/images/dietpi-software-cloud-tonido.png)

=== "Installation notes"

    Remark: This documentation requires DietPi v6.12.

    - DietPi installs Tonido to the following location:  
      `/mnt/dietpi_userdata/tonido`
    - DietPi install symbolic links to the Tonido data directories automatically. Therefore, default Tonido sync/userdata locations will point to `/mnt/dietpi_userdata/tonido`:

    ```sh
    /home/tonido/tonido #PointsTo# /mnt/dietpi_userdata/tonido
    /home/tonido/TonidoSync #PointsTo# /mnt/dietpi_userdata/tonido/sync
    /home/tonido/TonidoSyncData #PointsTo# /mnt/dietpi_userdata/tonido/syncdata
    ```

    We created a `systemd` service for Tonido, DietPi will automatically start this:  
    `systemctl status tonido`

=== "Access to the web interface"

    URL = `http://<your.IP>:10001`

See also <https://www.tonido.com/>.

## Minio - S3 compatible distributed object server

T.b.d.

See also: <https://min.io/>.

## Firefox Sync Server - Sync bookmarks, tabs, history and passwords

This is Mozilla's Firefox Sync Server which manages syncing Firefox instance bookmarks, history, tabs and passwords across devices. Out of the box it runs on a Python server for small loads and can be configured to run behind Nginx or Apache.

![DietPi cloud software Firefox Sync Server](../assets/images/dietpi-software-cloud-firefoxsyncserver.png)

=== "Configure Firefox"

    - Open `about:config` to access advanced settings.
    - Search for: `identity.sync.tokenserver.uri`.
    - Set value to: `http://<your.IP>:5000/token/1.0/sync/1.5`.
        - We recommend to access your Firefox Sync Server only from local network or via VPN.
        - If you need to access it remotely without VPN, adjust the `public_url` setting inside the config file `/mnt/dietpi_userdata/firefox-sync/syncserver.ini` to contain your public IP or domain and desired port.

=== "View logs"

    View logs by executing `journalctl -u firefox-sync`.

=== "Updating"

    Update by executing `dietpi-software reinstall 177`.

=== "Installation directory"

    `/opt/firefox-sync`

=== "Database and config directory"

    `/mnt/dietpi_userdata/firefox-sync`

Source code can be found at <https://github.com/mozilla-services/syncserver>.

Credits: This software title has been added to DietPi-Software by CedArctic, many thanks! :D

[Return to the **Optimised Software list**](../../dietpi_optimised_software)

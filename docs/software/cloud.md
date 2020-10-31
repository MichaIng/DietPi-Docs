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

## Nextcloud - Self-hosted productivity platform

Nextcloud gives you access to all your files wherever you are. Store your documents, calendar, contacts and photos on a server at home, at one of our providers or in a data center you trust.

![DietPi-Software-Nextcloud](../assets/images/dietpi-software-cloud-nextcloud.jpg)

=== "Quick start"

    Access the web interface using the next URL when running on SBC (`http://localhost/nextcloud/`) or the IP address / hostname of your DietPi device (e.g.: `http://192.168.0.100/nextcloud/`).

    ```
    username = admin
    password = <your global password>
    ```

    Nextcloud is installed together with the webserver. To fast access the files, a dedicated USB hard drive is highly recommended.

=== "Advanced configuration"

    For an advanced setup you could further configure your Nextcloud setup from the command line - see the [Nextcloud Admin guide](https://docs.nextcloud.com/server/17/admin_manual/configuration_server/occ_command.html).

    To simplify this configuration, DietPi has added a shortcut to the otherwise necessary `sudo -u www-data php /var/www/nextcloud/occ`. Just use inside your terminal:

    ```
    ncc [followed by the desired command]
    ```

=== "FAQ"

    **Where is my data stored ?**
    /mnt/dietpi_userdata/nextcloud_data (or dietpi.txt choice)

    **Why am I limited to 2GB file size uploads ?**
    DietPi will automatically apply the max supported upload size to the PHP and Nextcloud configs.
    - 32bit systems can handle 2 GB
    - 64bit systems can handle 8796 PB (petabytes)

    **Will my data be saved after deinstallation?**
    Your userdata directory will stay after deinstallation. As well a database backup will be saved to your userdata directory. Thus you can easily restore your instance by reinstalling Nextcloud and restore the database dump.

    [Nextcloud Website](https://nextcloud.com/athome/)

## Nextcloud Talk - Video calls via Nextcloud, including TURN server

## Pydio - Feature-rich backup and sync server with web interface

## UrBackup Server - Full backups for systems on your network

## Gogs - GitHub style server, with web interface

## Gitea - GitHub style server, with web interface

## Syncthing - Backup and sync server with web interface

## Tonido - Lightweight backup and sync server with web interface and cloud access

## Minio - S3 compatible distributed object server

## Firefox Sync Server - Sync bookmarks, tabs, history and passwords

[Return to the **Optimised Software list**](../../dietpi_optimised_software)

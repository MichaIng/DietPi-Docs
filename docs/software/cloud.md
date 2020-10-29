# Cloud & Backup systems

## Overview

!!! warning "Documentation in progress..."

    The **Optimised Software** links marked in **bold** have a more detailed description. The other links redirect to the old documentation (available on [DietPi.com Forum](https://dietpi.com/phpbb/viewtopic.php?f=8&t=5)). **We need your help to create and update this documentation ! Thank you** :octicons-heart-16: :octicons-heart-16:

- [ownCloud - Your own personal cloud based backup/data storage system](https://dietpi.com/phpbb/viewtopic.php?f=8&t=5#p47)  
- [**Nextcloud - Self-hosted productivity platform**](#nextcloud-self-hosted-productivity-platform)  
- [Nextcloud Talk - Video calls via Nextcloud, including TURN server](https://dietpi.com/phpbb/viewtopic.php?p=15227#p15227)  
- [Pydio - Feature-rich backup and sync server with web interface.](https://dietpi.com/phpbb/viewtopic.php?p=1064#p1064)  
- [UrBackup Server - Full backups for systems on your network](https://dietpi.com/phpbb/viewtopic.php?p=65#p65)  
- [Gogs - GitHub style server, with web interface.](https://dietpi.com/phpbb/viewtopic.php?f=8&t=5&start=70#p2187)  
- [Gitea - GitHub style server, with web interface.](https://dietpi.com/phpbb/viewtopic.php?p=9863#p9863)  
- [Syncthing - Backup and sync server with web interface.](https://dietpi.com/phpbb/viewtopic.php?f=8&t=5&start=70#p2363)  
- [Tonido - Lightweight backup and sync server with web interface, and, cloud access.](https://dietpi.com/phpbb/viewtopic.php?f=8&t=5&start=90#p6476)  
- [Minio - S3 compatible distributed object server](https://dietpi.com/phpbb/viewtopic.php?p=9121#p9121)  
- [Firefox Sync Server - Sync bookmarks, tabs, history & passwords](https://dietpi.com/phpbb/viewtopic.php?p=24713#p24713)  

??? info "How do I run **DietPi-Software** and install **optimised software** ?"
    To install any of the **DietPi optimised software** listed below run from the command line:

    ```
    dietpi-software
    ```

    Choose **Software Optimised** and select one or more items. Finally click on `Install`. DietPi will do all the necessary steps to install and start these software items.

    ![DietPi software](../assets/images/dietpi-software.jpg)

    To see all the DietPi configurations options, review [DietPi Tools](../../dietpi_tools) section.

[Return to the **Optimised Software list**](../../dietpi_optimised_software)

## Nextcloud - Self-hosted productivity platform

Nextcloud gives you access to all your files wherever you are. Store your documents, calendar, contacts and photos on a server at home, at one of our providers or in a data center you trust.

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

![DietPi-Software-Nextcloud](../assets/images/dietpi-software-cloud-nextcloud.jpg)

[Return to the **Optimised Software list**](../../dietpi_optimised_software)

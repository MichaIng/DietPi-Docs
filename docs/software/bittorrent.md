---
title: BitTorrent and Download Tools Software Options
description: Description of DietPi software options related to BitTorrent and other download tools
---

# BitTorrent / Download Tools

## Overview

- [**Transmission - Lightweight BitTorrent server with web interface**](#transmission)
- [**Deluge - Alternative BitTorrent server with web interface**](#deluge)
- [**qBittorrent - Lightweight and fast (C++) BitTorrent server with web interface**](#qbittorrent)
- [**rTorrent - BitTorrent server with ruTorrent web interface**](#rtorrent)
- [**Aria2 - Download manager with web interface**](#aria2)
- [**SABnzbd - NZB download manager with web interface**](#sabnzbd)
- [**Medusa - Automatically download TV shows**](#medusa)
- [**Sonarr - Automatically download TV shows**](#sonarr)
- [**Radarr - Automatically download Movies**](#radarr)
- [**Bazarr - Automatically download Subtitles for Sonarr/Radarr**](#bazarr)
- [**Lidarr - Automatically download Music**](#lidarr)
- [**Readarr - Automatically download Ebooks**](#readarr)
- [**Prowlarr - Indexer manager & proxy for PVR**](#prowlarr)
- [**Jackett - API Support for your favourite torrent trackers**](#jackett)
- [**NZBGet - NZB download manager with web interface**](#nzbget)
- [**HTPC Manager - combines all your favourite software into one slick interface**](#htpc-manager)
- [**youtube-dl - download videos from YouTube and other sites**](#youtube-dl)

??? info "How do I run **DietPi-Software** and install **optimised software** items?"
    To install any of the **DietPi optimised software items** listed below run from the command line:

    ```sh
    dietpi-software
    ```

    Choose **Browse Software** and select one or more items. Finally select `Install`.  
    DietPi will do all the necessary steps to install and start these software items.

    ![DietPi-Software menu screenshot](../assets/images/dietpi-software.jpg){: width="643" height="365" loading="lazy"}

    To see all the DietPi configurations options, review the [DietPi Tools](../../dietpi_tools/) section.

[Return to the **Optimised Software list**](../../software/)

## Transmission

Transmission, the lightweight web interface BitTorrent server that allows you to download BitTorrent files.

!!! hint "USB dedicated hard drive highly recommended"

![Transmission web interface screenshot](../assets/images/dietpi-software-download-transmission.png){: width="500" height="334" loading="lazy"}

=== "Access to the web interface"

    The web interface is accessible via port **9091**:

    - URL = `http://<your.IP>:9091`
    - Username = `root`
    - Password = `<your global password>`

=== "Access Downloads"

    Make sure you have one of DietPi's [File Servers](../file_servers/) installed.  
    Folders used by Transmission:

    - folder accessed via file server = `downloads`
    - local folder = `/mnt/dietpi_userdata/downloads`

=== "Port closed Issues"

    DietPi sets up Transmission to use port forwarding on the router.  
    In rare cases this won't work with some routers and you will need to manually setup port forwarding:

    - Use TCP+UDP with the default DietPi transmission port of **51413**.
    - Point this port to the IP address of your DietPi system.

    Once port forwarding is setup, simply complete the following to update transmission:

    - Load up the transmission web interface
    - Click the `settings` button (bottom left spanner)
    - Click the `network` tab
    - Where is says `Use port forwarding on my router`, uncheck this box.

    Simply close and reopen this screen to refresh the port status.

=== "Recommended: Protect your privacy with a VPN"

    Although we enable forced encryption on all our BitTorrent clients, if you wish to ensure complete privacy and piece of mind for all your downloaded content, using a VPN is critical. We highly recommend [**NordVPN**](https://go.nordvpn.net/aff_c?offer_id=15&aff_id=5305&url_id=902) as it offers unlimited bandwidth, zero logging and up to 6 devices on a single account. It can be easily setup using our [**DietPi-VPN**](../../dietpi_tools/#dietpi-vpn) tool.  
    [![NordVPN logo](../assets/images/nordvpn-logo.svg){: width="300" height="65" loading="lazy"}](https://go.nordvpn.net/aff_c?offer_id=15&aff_id=5305&url_id=902)

## Deluge

Deluge, the web interface BitTorrent server that allows you to download BitTorrent files. This Python coded BitTorrent server is an alternative to the [Lightweight Transmission](#transmission) option.

!!! hint "USB dedicated hard drive highly recommended"

![Deluge web interface screenshot](../assets/images/dietpi-software-download-deluge.png){: width="500" height="338" loading="lazy"}

=== "Access to the web interface"

    The web interface is accessible via port **8112**:

    - URL = `http://<your.IP>:8112`
    - Password = `<your global password>`

    Select the host 127.0.0.1 and click `connect`.

=== "Access Deluge console"

    ```sh
    sudo -u debian-deluged deluge-console
    ```

=== "Connect using your desktop Deluge client"

    - Open up Deluge client on your other system
    - Select `Preferences` \> `Interface` and disable (uncheck) `Classic Mode`. Save changes and restart Deluge
    - When the connection manager appears, select `Add`.
    - Enter the following details:
        - Hostname = Your device's IP address (e.g.: 192.168.0.100)
        - Port = 58846
        - Username = `root`
        - Password = `<your global password>`
    - Simply select and connect to the new entry

=== "Access Downloads"

    Make sure you have one of DietPi's [File Servers](../file_servers/) installed.  
    Folders used by Deluge:

    - Folder accessed via file server = `downloads`
    - Local folder = `/mnt/dietpi_userdata/downloads`

=== "Recommended: Protect your privacy with a VPN"

    Although we enable forced encryption on all our BitTorrent clients, if you wish to ensure complete privacy and piece of mind for all your downloaded content, using a VPN is critical. We highly recommend [**NordVPN**](https://go.nordvpn.net/aff_c?offer_id=15&aff_id=5305&url_id=902) as it offers unlimited bandwidth, zero logging and up to 6 devices on a single account. It can be easily setup using our [**DietPi-VPN**](../../dietpi_tools/#dietpi-vpn) tool.  
    [![NordVPN logo](../assets/images/nordvpn-logo.svg){: width="300" height="65" loading="lazy"}](https://go.nordvpn.net/aff_c?offer_id=15&aff_id=5305&url_id=902)

## qBittorrent

qBittorrent is a lightweight BitTorrent server with a slick web interface. As its coded in C++ (Qt), it offers excellent performance on any device.

!!! hint "USB dedicated hard drive highly recommended"

![qBittorrent web interface screenshot](../assets/images/dietpi-software-download-qbittorrent.png){: width="400" height="236" loading="lazy"}

=== "Access to the web interface"

    The web interface is accessible via port **1340**:

    - URL = `http://<your.IP>:1340`
    - Username = `qbittorrent`
    - Password = `<your global password>` (default: `dietpi`)  
        NB: Since qBittorrent v4.2.0 (Debian Bullseye), a new safer hash algorithm is used, which we are currently not able to replicate dynamically for the global software password with common shell tools. Until then, for your first login the password is `dietpi`. Please change it directly after first login: <https://github.com/MichaIng/DietPi/issues/5078>

=== "Access Downloads"

    Make sure you have one of DietPi's [File Servers](../file_servers/) installed.  
    Folders used by qBittorrent:

    - Folder accessed via file server = `downloads`
    - Local folder = `/mnt/dietpi_userdata/downloads`

=== "Using of search plugins"

    Before activating search plugins within qBittorrent, you would need to install Python first. Afterwards you can search and activate the plugins.

=== "Recommended: Protect your privacy with a VPN"

    Although we enable forced encryption on all our BitTorrent clients, if you wish to ensure complete privacy and piece of mind for all your downloaded content, using a VPN is critical. We highly recommend [**NordVPN**](https://go.nordvpn.net/aff_c?offer_id=15&aff_id=5305&url_id=902) as it offers unlimited bandwidth, zero logging and up to 6 devices on a single account. It can be easily setup using our [**DietPi-VPN**](../../dietpi_tools/#dietpi-vpn) tool.  
    [![NordVPN logo](../assets/images/nordvpn-logo.svg){: width="300" height="65" loading="lazy"}](https://go.nordvpn.net/aff_c?offer_id=15&aff_id=5305&url_id=902)

## rTorrent

rTorrent is a BitTorrent server. ruTorrent is also installed to allow for web interface access and control.  

Also installs:

- Webserver

!!! hint "USB dedicated hard drive highly recommended"

![ruTorrent screenshot](../assets/images/dietpi-software-download-rtorrent.png){: width="400" height="201" loading="lazy"}

=== "Access to the web interface"

    - URL = `http://<your.IP>/rutorrent`
    - Username = `root`
    - Password = `<your global password>` (default: `dietpi`)

    The login credentials can be changed, depending on the webserver choice, with the following commands:

    ```sh
    # With Lighttpd (default):
    echo "username:rtorrent:$(echo -n 'username:rtorrent:password' | md5sum | mawk '{print $1}')" > /etc/.rutorrent-htaccess

    # With Apache:
    htpasswd -c /etc/.rutorrent-htaccess

    # With Nginx:
    echo "username:$(openssl passwd -apr1 'password')" > /etc/.rutorrent-htaccess
    ```

=== "Access downloads"

    Make sure you have one of DietPi's [File Servers](../file_servers/) installed.  
    Folders used by rTorrent:

    - Folder accessed via file server = `downloads`
    - Local folder = `/mnt/dietpi_userdata/downloads`

    Important note:  
    rTorrent creates a lock file based on the systems hostname. When the hostname is changed (e.g. via `dietpi-config` \> `Security Options`), then the old lock file needs to be removed to allow rTorrent creating a new one based on the new hostname:

    ```sh
    rm /mnt/dietpi_userdata/downloads/.session/rtorrent.lock
    systemctl restart rtorrent
    ```

=== "Access rTorrent RPC"

    rTorrent by default listens on the UNIX domain socket at `/mnt/dietpi_userdata/downloads/.session/rpc.socket`. The webserver is configured to proxy `http://<your.IP>/RPC2` calls to the UNIX socket, but HTTP authentication is enforced for that URL.

=== "Recommended: Protect your privacy with a VPN"

    Although we enable forced encryption on all our BitTorrent clients, if you wish to ensure complete privacy and piece of mind for all your downloaded content, using a VPN is critical. We highly recommend [**NordVPN**](https://go.nordvpn.net/aff_c?offer_id=15&aff_id=5305&url_id=902) as it offers unlimited bandwidth, zero logging and up to 6 devices on a single account. It can be easily setup using our [**DietPi-VPN**](../../dietpi_tools/#dietpi-vpn) tool.  
    [![NordVPN logo](../assets/images/nordvpn-logo.svg){: width="300" height="65" loading="lazy"}](https://go.nordvpn.net/aff_c?offer_id=15&aff_id=5305&url_id=902)

=== "View logs"

    To view rTorrent service logs, run the following command:

    ```sh
    journalctl -u rtorrent
    ```

    Issues with the web interface can be debugged via webserver logs:

    ```sh
    # With Lighttpd (default):
    journalctl -u lighttpd
    more /var/log/lighttpd/error.log

    # With Apache:
    journalctl -u apache2
    more /var/log/apache2/error.log

    # With Nginx:
    journalctl -u nginx
    more /var/log/nginx/error.log
    ```

=== "Update to latest version"

    rTorrent itself is installed via APT, and hence can be updated by running the following commands:

    ```sh
    apt update
    apt install rtorrent
    ```

    If the ruTorrent web interface shall be updated as well, easiest is a reinstall:

    ```sh
    dietpi-software reinstall 107
    ```

***

Official website: <https://rakshasa.github.io/rtorrent/>  
Official documentation: <https://github.com/rakshasa/rtorrent/wiki>  
Wikipedia: <https://wikipedia.org/wiki/RTorrent>  
Source code: <https://github.com/rakshasa/rtorrent>  
License: [GPLv2](https://github.com/rakshasa/rtorrent/blob/master/COPYING)

ruTorrent documentation: <https://github.com/Novik/ruTorrent/wiki>  
ruTorrent source code: <https://github.com/Novik/ruTorrent>  
ruTorrent license: [GPLv3](https://github.com/Novik/ruTorrent/blob/master/LICENSE.md)

## Aria2

Download manager, with a slick web UI interface. Also supports BitTorrent downloads.

Also installs:

- Webserver

![Aria2 web interface screenshot](../assets/images/dietpi-software-download-aria2.png){: width="400" height="199" loading="lazy"}

=== "Access to the web interface"

    - URL = `http://<your.IP>/aria2/docs`
    - rpc secret password = `<your global password>`

    This needs to be entered in the following location, in the web interface:

    - `Settings`
    - `Connection Settings`
    - Enter the rpc secret password into the `Enter the secret token (optional):` box, then save changes

=== "Access Downloads"

    Make sure you have one of DietPi's [File Servers](../file_servers/) installed.  
    Folders used by Aria2:

    - Folder accessed via file server = `downloads`
    - Local folder = `/mnt/dietpi_userdata/downloads`

=== "Make setting changes permanently"

    Please note, the `aria2-webui` does not support saving settings after session shutdown, this is a known limitation with the software, please use the file `aria2.conf` to make changes:

    - Stop services with `systemctl stop aria2`
    - Edit the following configuration file: `/mnt/dietpi_userdata/aria2/aria2.conf`, making your required changes.
    - Start services with `systemctl start aria2`

    Full list of `aria2.conf` settings: <https://aria2.github.io/manual/en/html/aria2c.html>

=== "Recommended: Protect your privacy with a VPN"

    Although we enable forced encryption on all our BitTorrent clients, if you wish to ensure complete privacy and piece of mind for all your downloaded content, using a VPN is critical. We highly recommend [**NordVPN**](https://go.nordvpn.net/aff_c?offer_id=15&aff_id=5305&url_id=902) as it offers unlimited bandwidth, zero logging and up to 6 devices on a single account. It can be easily setup using our [**DietPi-VPN**](../../dietpi_tools/#dietpi-vpn) tool.  
    [![NordVPN logo](../assets/images/nordvpn-logo.svg){: width="300" height="65" loading="lazy"}](https://go.nordvpn.net/aff_c?offer_id=15&aff_id=5305&url_id=902)

## SABnzbd

NZB download manager with web interface.

![SABnzbd web interface screenshot](../assets/images/dietpi-software-download-sabnzbd.png){: width="400" height="328" loading="lazy"}

=== "Access to the web interface"

    The web interface uses port **8080**:

    - URL = `http://<your.IP>:8080/sabnzbd`

=== "Web interface not loading / Unable to access"

    In some instances, initial config generation during installation isn't successful.  
    If you experience this, please run the following commands to reapply config settings for DietPi (copy and paste all).

    ```sh
    systemctl stop sabnzbd
    G_CONFIG_INJECT 'download_dir =' "download_dir = /mnt/dietpi_userdata/downloads/incomplete" /etc/sabnzbd/sabnzbd.ini
    G_CONFIG_INJECT 'complete_dir =' "complete_dir = /mnt/dietpi_userdata/downloads/complete" /etc/sabnzbd/sabnzbd.ini
    G_CONFIG_INJECT 'nzb_backup_dir =' "nzb_backup_dir = /mnt/dietpi_userdata/downloads/sabnzbd_nzb_backup" /etc/sabnzbd/sabnzbd.ini
    G_CONFIG_INJECT 'admin_dir =' "admin_dir = /mnt/dietpi_userdata/downloads/sabnzbd_admin" /etc/sabnzbd/sabnzbd.ini
    G_CONFIG_INJECT 'log_dir =' 'log_dir = /var/log/sabnzbd' /etc/sabnzbd/sabnzbd.ini
    G_CONFIG_INJECT 'log_level =' 'log_level = 0' /etc/sabnzbd/sabnzbd.ini
    G_CONFIG_INJECT 'refresh_rate =' 'refresh_rate = 2' /etc/sabnzbd/sabnzbd.ini
    G_CONFIG_INJECT 'host =' 'host = 0.0.0.0' /etc/sabnzbd/sabnzbd.ini
    G_CONFIG_INJECT 'permissions =' 'permissions = 0775' /etc/sabnzbd/sabnzbd.ini
    G_CONFIG_INJECT 'auto_browser =' 'auto_browser = 0' /etc/sabnzbd/sabnzbd.ini
    systemctl start sabnzbd
    ```

=== "Access Downloads"

    Make sure you have one of DietPi's [File Servers](../file_servers/) installed.  
    Folders used by SABnzbd:

    - folder accessed via file server = `downloads/complete`
    - local folder = `/mnt/dietpi_userdata/downloads/complete`

=== "Optional: Multi threaded PAR2"

    Requires compile install, please see: <https://sabnzbd.org/wiki/installation/multicore-par2>

    Remark: The steps require a Git client and build tools (Build-Essentials). You can install these running next command in the terminal:

    ```sh
    dietpi-software install 16 17
    ```

=== "Recommended: Protect your privacy with a VPN"

    Although we enable forced encryption on all our BitTorrent clients, if you wish to ensure complete privacy and piece of mind for all your downloaded content, using a VPN is critical. We highly recommend [**NordVPN**](https://go.nordvpn.net/aff_c?offer_id=15&aff_id=5305&url_id=902) as it offers unlimited bandwidth, zero logging and up to 6 devices on a single account. It can be easily setup using our [**DietPi-VPN**](../../dietpi_tools/#dietpi-vpn) tool.  
    [![NordVPN logo](../assets/images/nordvpn-logo.svg){: width="300" height="65" loading="lazy"}](https://go.nordvpn.net/aff_c?offer_id=15&aff_id=5305&url_id=902)

## Medusa

Automatically download your favorite TV shows, as they become available.  
Searches both Bit Torrent and Usenet, has a feature to automatically download and organise the download, with your favorite Bit Torrent app.

??? note "A download client is required"

    Transmission BitTorrent server is recommended to enable automatic downloads

![Medusa web interface screenshot](../assets/images/dietpi-software-download-medusa.jpg){: width="400" height="225" loading="lazy"}

=== "Access to the web interface"

    The web interface is accessible via port **8081**:

    - URL = `http://<your.IP>:8081`

=== "Add a TV show"

    Once registered and logged in with Medusa:

    - Click the `Shows` button (top of screen)
    - Click the `Add Shows` option.
    - Select the `Add new show` option
    - Input a TV show to find in the search box, select one of the entries from the search results, then click `Next`
    - Make sure the parent folder is `/mnt/dietpi_userdata/downloads`, then click `Next`
    - Finally, click the `Add show` button

=== "Optional: Change which BitTorrent sites Medusa will search"

    - Click the `Settings` "cog" button (the top right hand corner of the screen)
    - Select `Search providers`
    - Select and tick the BitTorrent sites you would like enable. When Medusa searches for a TV show, these sites will then be searched for the available torrent.
    - Finally click `Save changes` (bottom of the page)

=== "Setup Medusa to automatically download torrents"

    To use this feature, you will need a supported BitTorrent server installed. All of the BitTorrent servers available in `dietpi-software` are supported by Medusa.

    - Click the `Settings` "cog" button (the top right hand corner of the screen)
    - Select `Search settings`
    - Select `Torrent search` tab.
    - Make sure the entry enable torrent search providers is enabled (ticked)
    - Under the section `Send .torrent files to`, select the BitTorrent program you have installed, then enter the details.
    - Use the `Test connection` button at the bottom of the page to ensure Medusa can connect to your BitTorrent server.
    - Finally click `Save changes` (bottom of the page)

=== "Recommended: Protect your privacy with a VPN"

    Although we enable forced encryption on all our BitTorrent clients, if you wish to ensure complete privacy and piece of mind for all your downloaded content, using a VPN is critical. We highly recommend [**NordVPN**](https://go.nordvpn.net/aff_c?offer_id=15&aff_id=5305&url_id=902) as it offers unlimited bandwidth, zero logging and up to 6 devices on a single account. It can be easily setup using our [**DietPi-VPN**](../../dietpi_tools/#dietpi-vpn) tool.  
    [![NordVPN logo](../assets/images/nordvpn-logo.svg){: width="300" height="65" loading="lazy"}](https://go.nordvpn.net/aff_c?offer_id=15&aff_id=5305&url_id=902)

## Sonarr

Automatically download your favorite TV shows, as they become available.

??? note "A download client is required"

    Transmission BitTorrent server is recommended to enable automatic downloads

![Sonarr web interface screenshot](../assets/images/dietpi-software-download-sonarr.png){: width="400" height="200" loading="lazy"}

=== "Access to the web interface"

    The web interface is accessible via port **8989**:

    - URL = `http://<your.IP>:8989`

=== "First run setup"

    Before you can add TV shows, you'll need to select a search indexer to use from the web interface:

    - Simply go to `Settings` \> `Indexer` then choose at least one indexer.

    Setup your download client:

    - Simply go to `Settings` \> `Download Client`, select your installed download client and enter [required credentials](#transmission).

    Setup file creation mask:  
    If you require write access from other applications (e.g. Plex subtitle downloads), you'll also need to set the file/folder creation mask to allow this.

    - In the Sonarr web interface, select `Settings`
    - Toggle to `Advanced settings` slider (enable it)
    - Under `Media Management` tab, scroll down to the bottom of the page under Permissions, set the following values:

      ![Sonarr permissions options](../assets/images/dietpi-software-download-sonarrpermissions.png){: width="400" height="171" loading="lazy"}

    - Save changes

=== "Add a TV show"

    - Simply select `Series` \> `Add TV Show`
    - Type a name of the show you wish to find
    - Once found, under path use the following location `/mnt/dietpi_userdata/downloads`
    - Change any further options (such as video quality) if needed, then select `+`

=== "Using custom download/media directories"

    By default Sonarr has strict permissions to only access download and media directories inside `/mnt/`. If you need to use a different location, please do the following:

    1. Run `dietpi-services` from console
    2. Select `sonarr`
    3. Select `Edit`
    4. Uncomment (remove leading `#`) the line, starting with `ReadWritePaths=`
    5. Add your custom path to the end of this line, separated by one space
    6. Press ++ctrl+o++ buttons to save and ++ctrl+x++ to exit

=== "Link databases to RAM"

    Link the Sonarr info/settings database to RAM to increase access performance, reduce disk I/O and avoid constant external HDD spinning due to the very regular access to these files: <https://dietpi.com/forum/t/dietpi-arr-to-ram-link-sonarr-radarr-lidarr-database-files-to-ram/3120>

=== "Recommended: Protect your privacy with a VPN"

    Although we enable forced encryption on all our BitTorrent clients, if you wish to ensure complete privacy and piece of mind for all your downloaded content, using a VPN is critical. We highly recommend [**NordVPN**](https://go.nordvpn.net/aff_c?offer_id=15&aff_id=5305&url_id=902) as it offers unlimited bandwidth, zero logging and up to 6 devices on a single account. It can be easily setup using our [**DietPi-VPN**](../../dietpi_tools/#dietpi-vpn) tool.  
    [![NordVPN logo](../assets/images/nordvpn-logo.svg){: width="300" height="65" loading="lazy"}](https://go.nordvpn.net/aff_c?offer_id=15&aff_id=5305&url_id=902)

***

YouTube video tutorial: [How to install and configure Sonarr on Raspberry Pi with DietPi](https://www.youtube.com/watch?v=3h0GvdKcR0Y)

## Radarr

Automatically download your favorite movies, as they become available.

??? note "A download client is required"

    Transmission BitTorrent server is recommended to enable automatic downloads

![Radarr web interface screenshot](../assets/images/dietpi-software-download-radarr.png){: width="400" height="207" loading="lazy"}

=== "Access to the web interface"

    The web interface is accessible via port **7878**:

    - URL = `http://<your.IP>:7878`

=== "First run setup"

    Before you can add movies, you'll need to select a search indexer to use from the web interface:

    - Simply go to `Settings` \> `Indexer` then choose at least one indexer.

    Setup your download client:

    - Simply go to `Settings` \> `Download Client`, select your installed download client and enter [required credentials](#transmission).

    Setup file creation mask:  
    If you require write access from other applications (e.g. Plex subtitle downloads), you'll also need to set the file/folder creation mask to allow this.

    - In the Radarr web interface, select `Settings`
    - Toggle to `Advanced settings` (enable it)
    - Under `Media Management` tab, scroll down to the bottom of the page under Permissions, set the following values:

      ![Radarr permissions options](../assets/images/dietpi-software-download-readarrpermissions.png){: width="400" height="254" loading="lazy"}

    - Save changes

=== "Add a movie"

    - Simply select `Add New Movies`
    - Type a name of the movie you wish to find
    - Once found, under `path` use the following location `/mnt/dietpi_userdata/downloads`
    - Change any further options (such as video quality) if needed, then select `+`

=== "Using custom download/media directories"

    By default Radarr has strict permissions to only access download and media directories inside `/mnt/`. If you need to use a different location, please do the following:

    1. Run `dietpi-services` from console
    2. Select `radarr`
    3. Select `Edit`
    4. Uncomment (remove leading `#`) the line, starting with `ReadWritePaths=`
    5. Add your custom path to the end of this line, separated by one space
    6. Press ++ctrl+o++ buttons to save and ++ctrl+x++ to exit

=== "Link databases to RAM"

    Link the Radarr info/settings database to RAM to increase access performance, reduce disk I/O and avoid constant external HDD spinning due to the very regular access to these files: <https://dietpi.com/forum/t/dietpi-arr-to-ram-link-sonarr-radarr-lidarr-database-files-to-ram/3120>

=== "Recommended: Protect your privacy with a VPN"

    Although we enable forced encryption on all our BitTorrent clients, if you wish to ensure complete privacy and piece of mind for all your downloaded content, using a VPN is critical. We highly recommend [**NordVPN**](https://go.nordvpn.net/aff_c?offer_id=15&aff_id=5305&url_id=902) as it offers unlimited bandwidth, zero logging and up to 6 devices on a single account. It can be easily setup using our [**DietPi-VPN**](../../dietpi_tools/#dietpi-vpn) tool.  
    [![NordVPN logo](../assets/images/nordvpn-logo.svg){: width="300" height="65" loading="lazy"}](https://go.nordvpn.net/aff_c?offer_id=15&aff_id=5305&url_id=902)

***

YouTube video tutorial: [How to install and configure Radarr on Raspberry Pi with DietPi](https://www.youtube.com/watch?v=ji9CgSBcf5E)

## Bazarr

Bazarr is a companion application to Sonarr and Radarr that manages and downloads subtitles based on your requirements.

Key features:

- **Automatic search**
    Search automatically for missing subtitles and download them as soon as they become available in your desired language.
- **Manual search**
    Find all the matching subtitles, choose the one you want and download it to your media directory with the proper name to be used by your media player.
- **Subtitles upgrade**
    Search for matching subtitles on a regular basis and upgrade the one you previously downloaded if a better one is found.

![Bazarr web interface screenshot](../assets/images/dietpi-software-download-bazarr1.jpg){: width="1898" height="1080" loading="lazy"}

=== "Quick start"

    The web interface is accessible via port **6767**:

    - URL = `http://<your.IP>:6767`

    ![Bazarr subtitle finds list](../assets/images/dietpi-software-download-bazarr.jpg){: width="1105" height="490" loading="lazy"}

=== "Advanced"

    - Install directory: `/opt/bazarr`
    - Data directory: `/mnt/dietpi_userdata/bazarr`
    - Bazarr configuration file: `/mnt/dietpi_userdata/bazarr/config/config.ini`

=== "View logs"

    - Service: `journalctl -u bazarr`
    - Binary: `/var/log/bazarr/bazarr.log`

=== "Update to latest version"

    - Use the internal web based updater

***

Official documentation: <https://github.com/morpheus65535/bazarr/wiki>  
Source code: <https://github.com/morpheus65535/bazarr>

## Lidarr

Automatically download your favorite music.

??? note "A download client is required"

    Transmission BitTorrent server is recommended to enable automatic downloads

![Lidarr web interface screenshot](../assets/images/dietpi-software-download-lidarr.jpg){: width="400" height="205" loading="lazy"}

=== "Access to the web interface"

    The web interface is accessible via port **8686**:

    - URL = `http://<your.IP>:8686`

=== "First run setup"

    Before you can music, you'll need to select a search indexer to use from the web interface:

    - Simply go to `Settings` \> `Indexer` then choose at least one indexer.

    Setup your download client:

    - Simply go to `Settings` \> `Download Client`, select your installed download client and enter [required credentials](#transmission).

    Setup file creation mask:  
    If you require write access from other applications (e.g. Plex subtitle downloads), you'll also need to set the file/folder creation mask to allow this.

    - In the Sonarr web interface, select `Settings`
    - Toggle to `Advanced settings` slider (enable it)
    - Under `Media Management` tab, scroll down to the bottom of the page under Permissions, set the following values:

        ![Lidarr permissions options](../assets/images/dietpi-software-download-lidarrpermissions.png){: width="400" height="257" loading="lazy"}

    - Save changes

=== "Add a music"

    - Simply select `Artist` \> `Add New`
    - Type a name of the artist you wish to find
    - Once found, under root folder, use the following location `/mnt/dietpi_userdata/downloads`
    - Change any other settings as required, then select `Add`

=== "Using custom download/media directories"

    By default Lidarr has strict permissions to only access download and media directories inside `/mnt/`. If you need to use a different location, please do the following:

    1. Run `dietpi-services` from console
    2. Select `lidarr`
    3. Select `Edit`
    4. Uncomment (remove leading `#`) the line, starting with `ReadWritePaths=`
    5. Add your custom path to the end of this line, separated by one space
    6. Press ++ctrl+o++ buttons to save and ++ctrl+x++ to exit

=== "Link databases to RAM"

    Link the Lidarr info/settings database to RAM to increase access performance, reduce disk I/O and avoid constant external HDD spinning due to the very regular access to these files: <https://dietpi.com/forum/t/dietpi-arr-to-ram-link-sonarr-radarr-lidarr-database-files-to-ram/3120>

=== "Recommended: Protect your privacy with a VPN"

    Although we enable forced encryption on all our BitTorrent clients, if you wish to ensure complete privacy and piece of mind for all your downloaded content, using a VPN is critical. We highly recommend [**NordVPN**](https://go.nordvpn.net/aff_c?offer_id=15&aff_id=5305&url_id=902) as it offers unlimited bandwidth, zero logging and up to 6 devices on a single account. It can be easily setup using our [**DietPi-VPN**](../../dietpi_tools/#dietpi-vpn) tool.  
    [![NordVPN logo](../assets/images/nordvpn-logo.svg){: width="300" height="65" loading="lazy"}](https://go.nordvpn.net/aff_c?offer_id=15&aff_id=5305&url_id=902)

## Readarr

Automatically download your favorite ebook, as they become available.

??? note "A download client is required"

    Transmission BitTorrent server is recommended to enable automatic downloads

![Readarr web interface screenshot](../assets/images/dietpi-software-download-readarr.png){: width="400" height="183" loading="lazy"}

=== "Access to the web interface"

    The web interface is accessible via port **8787**:

    - URL = `http://<your.IP>:8787`

=== "First run setup"

    Before you can add ebooks, you'll need to select a search indexer to use from the web interface:

    - Simply go to `Settings` \> `Indexer` then choose at least one indexer.

    Setup your download client:

    - Simply go to `Settings` \> `Download Client`, select your installed download client and enter [required credentials](#transmission-lightweight-bittorrent-server-with-web-interface).

    Setup folder creation mask:  
    If you require write access from other applications, you'll also need to set the folder creation mask to allow this.

    - In the Readarr web interface, select `Settings`
    - Toggle to `Advanced settings` (enable it)
    - Under `Media Management` tab, scroll down to the bottom of the page under Permissions, set the following values:

      ![Readarr permissions options](../assets/images/dietpi-software-download-readarrpermissions.png){: width="400" height="254" loading="lazy"}

    - Save changes

=== "Add an ebook"

    - Simply select `Add New Author`
    - Type a name of the ebook or author you wish to find
    - Once found, under `path` use the following location `/mnt/dietpi_userdata/downloads`
    - Change any further options if needed, then select `Add`

=== "Using custom download/media directories"

    By default Readarr has strict permissions to only access download and media directories inside `/mnt/`. If you need to use a different location, please do the following:

    1. Run `dietpi-services` from console
    2. Select `readarr`
    3. Select `Edit`
    4. Uncomment (remove leading `#`) the line, starting with `ReadWritePaths=`
    5. Add your custom path to the end of this line, separated by one space
    6. Press ++ctrl+o++ buttons to save and ++ctrl+x++ to exit

=== "Setup details"

    The install, config and data directory is located at:

    - Install directory: `/opt/readarr`
    - Data directory: `/mnt/dietpi_userdata/readarr`
    - Readarr configuration file: `/mnt/dietpi_userdata/readarr/config.xml`

=== "Service control"

    Since Readarr runs as systemd service, it can be controlled with the following commands:

    ```sh
    systemctl status readarr
    ```

    ```sh
    systemctl start readarr
    ```

    ```sh
    systemctl stop readarr
    ```

    ```sh
    systemctl restart readarr
    ```

=== "View logs"

    - Service: `journalctl -u readarr`
    - Binary: `/var/log/readarr/Readarr.txt`

=== "Update"

    - Use the internal web based updater

=== "Recommended: Protect your privacy with a VPN"

    Although we enable forced encryption on all our BitTorrent clients, if you wish to ensure complete privacy and piece of mind for all your downloaded content, using a VPN is critical. We highly recommend [**NordVPN**](https://go.nordvpn.net/aff_c?offer_id=15&aff_id=5305&url_id=902) as it offers unlimited bandwidth, zero logging and up to 6 devices on a single account. It can be easily setup using our [**DietPi-VPN**](../../dietpi_tools/#dietpi-vpn) tool.  
    [![NordVPN logo](../assets/images/nordvpn-logo.svg){: width="300" height="65" loading="lazy"}](https://go.nordvpn.net/aff_c?offer_id=15&aff_id=5305&url_id=902)

***

Official website: <https://readarr.com/>  
Official documentation: <https://wiki.servarr.com/readarr>  
Source code: <https://github.com/Readarr/Readarr>  
License: [GPLv3](https://github.com/Readarr/Readarr/blob/develop/LICENSE.md)

## Prowlarr

Prowlarr is an indexer manager/proxy built on the popular \*arr .net/reactjs base stack to integrate with your various PVR apps. Prowlarr supports management of both Torrent Trackers and Usenet Indexers. It integrates seamlessly with Lidarr, Mylar3, Radarr, Readarr, and Sonarr offering complete management of your indexers.

![Prowlarr web interface screenshot](../assets/images/dietpi-software-download-prowlarr.png){: width="400" height="262" loading="lazy"}

=== "Access to the web interface"

    The web interface is accessible via port **9696**:

    - URL = `http://<your.IP>:9696`

=== "Recommended: Protect your privacy with a VPN"

    Although we enable forced encryption on all our BitTorrent clients, if you wish to ensure complete privacy and piece of mind for all your downloaded content, using a VPN is critical. We highly recommend [**NordVPN**](https://go.nordvpn.net/aff_c?offer_id=15&aff_id=5305&url_id=902) as it offers unlimited bandwidth, zero logging and up to 6 devices on a single account. It can be easily setup using our [**DietPi-VPN**](../../dietpi_tools/#dietpi-vpn) tool.  
    [![NordVPN logo](../assets/images/nordvpn-logo.svg){: width="300" height="65" loading="lazy"}](https://go.nordvpn.net/aff_c?offer_id=15&aff_id=5305&url_id=902)

***

Official website: <https://prowlarr.com/>  
Official documentation: <https://wiki.servarr.com/prowlarr>  
Source code: <https://github.com/Prowlarr/Prowlarr>  
License: [GPLv3](https://github.com/Prowlarr/Prowlarr/blob/develop/LICENSE)

## Jackett

Jackett works as a proxy server: it translates queries from apps (Sonarr, Radarr, Lidarr, Medusa) into tracker-site-specific HTTP queries, parses the HTML response, then sends results back to the requesting software. This allows for getting recent uploads (like RSS) and performing searches.

![Jackett web interface screenshot](../assets/images/dietpi-software-download-jackett.png){: width="400" height="262" loading="lazy"}

=== "Access to the web interface"

    The web interface is accessible via port **9117**:

    - URL = `http://<your.IP>:9117`

=== "Recommended: Protect your privacy with a VPN"

    Although we enable forced encryption on all our BitTorrent clients, if you wish to ensure complete privacy and piece of mind for all your downloaded content, using a VPN is critical. We highly recommend [**NordVPN**](https://go.nordvpn.net/aff_c?offer_id=15&aff_id=5305&url_id=902) as it offers unlimited bandwidth, zero logging and up to 6 devices on a single account. It can be easily setup using our [**DietPi-VPN**](../../dietpi_tools/#dietpi-vpn) tool.  
    [![NordVPN logo](../assets/images/nordvpn-logo.svg){: width="300" height="65" loading="lazy"}](https://go.nordvpn.net/aff_c?offer_id=15&aff_id=5305&url_id=902)

## NZBGet

Extremely efficient and fast NZB download manager with web interface. Coded in C++.

![NZBGet web interface screenshot](../assets/images/dietpi-software-download-nzbget.jpg){: width="400" height="270" loading="lazy"}

=== "Access to the web interface"

    The web interface is accessible via port **6789**:

    - URL = `http://<your.IP>:6789`
    - Username = `admin`
    - Password = `<your global password>`

=== "Access Downloads"

    Make sure you have one of DietPi's [File Servers](../file_servers/) installed.  
    Folders used by Transmission:

    - Folder accessed via file server = `downloads/complete`
    - Local folder = `/mnt/dietpi_userdata/downloads/complete`

=== "Recommended: Protect your privacy with a VPN"

    Although we enable forced encryption on all our BitTorrent clients, if you wish to ensure complete privacy and piece of mind for all your downloaded content, using a VPN is critical. We highly recommend [**NordVPN**](https://go.nordvpn.net/aff_c?offer_id=15&aff_id=5305&url_id=902) as it offers unlimited bandwidth, zero logging and up to 6 devices on a single account. It can be easily setup using our [**DietPi-VPN**](../../dietpi_tools/#dietpi-vpn) tool.  
    [![NordVPN logo](../assets/images/nordvpn-logo.svg){: width="300" height="65" loading="lazy"}](https://go.nordvpn.net/aff_c?offer_id=15&aff_id=5305&url_id=902)

## HTPC Manager

HTPC Manager combines all your favourite software into one slick interface.  
Do all your HTPC tasks without using 5 different interfaces!

![HTPC Manager web interface screenshot](../assets/images/dietpi-software-download-htpc-manager.png){: width="400" height="191" loading="lazy"}

=== "Access to the web interface"

    The web interface is accessible via port **8085**:

    - URL = `http://<your.IP>:8085`

=== "Update to latest version"

    ```sh
    dietpi-software reinstall 155
    ```

## youtube-dl

`youtube-dl` is a command-line program to download videos from YouTube.com and many more sites. See here the full list of supported websites - [link](https://ytdl-org.github.io/youtube-dl/supportedsites.html).

=== "Quick start"

    This tool could be accessed from the command line

    ```sh
    youtube-dl [OPTIONS] URL [URL...]
    ```

    Read the documentation for more details on the options used - [link](https://github.com/ytdl-org/youtube-dl).

***

Website: <https://ytdl-org.github.io/youtube-dl/>  
Documentation: <https://github.com/ytdl-org/youtube-dl/blob/master/README.md#readme>

[Return to the **Optimised Software list**](../../software/)

# BitTorrent / Download Tools

## Overview

- [**Transmission - Lightweight BitTorrent server with web interface**](#transmission-lightweight-bittorrent-server-with-web-interface)
- [**Deluge - Alternative BitTorrent server with web interface**](#deluge-alternative-bittorrent-server-with-web-interface)
- [**qBittorrent - Lightweight and fast (C++) BitTorrent server with web interface**](#qbittorrent-lightweight-and-fast-c-bittorrent-server-with-web-interface)
- [**rTorrent - BitTorrent server with ruTorrent web interface**](#rtorrent-bittorrent-server-with-rutorrent-web-interface)
- [**Aria2 - Download manager with web interface**](#aria2-download-manager-with-web-interface)
- [**SABnzbd - NZB download manager with web interface**](#sabnzbd-nzb-download-manager-with-web-interface)
- [**Medusa - Automatically download TV shows**](#medusa-automatically-download-tv-shows)
- [**Sonarr - Automatically download TV shows**](#sonarr-automatically-download-tv-shows)
- [**Radarr - Automatically download Movies**](#radarr-automatically-download-movies)
- [**Bazarr - Automatically download Subtitles for Sonarr/Radarr**](#bazarr-automatically-download-subtitles-for-sonarrradarr)
- [**Lidarr - Automatically download Music**](#lidarr-automatically-download-music)
- [**CouchPotato - Automatically download movies**](#couchpotato-automatically-download-movies)
- [**Jackett - API Support for your favourite torrent trackers**](#jackett-api-support-for-your-favourite-torrent-trackers)
- [**NZBGet - NZB download manager with web interface**](#nzbget-nzb-download-manager-with-web-interface)
- [**HTPC Manager - combines all your favourite software into one slick interface**](#htpc-manager-combines-all-your-favourite-software-into-one-slick-interface)

??? info "How do I run **DietPi-Software** and install **optimised software** ?"
    To install any of the **DietPi optimised software** listed below run from the command line:

    ```
    dietpi-software
    ```

    Choose **Software Optimised** and select one or more items. Finally click on `Install`. DietPi will do all the necessary steps to install and start these software items.

    ![DietPi software](../assets/images/dietpi-software.jpg)

    To see all the DietPi configurations options, review [DietPi Tools](../../dietpi_tools) section.

[Return to the **Optimised Software list**](../../dietpi_optimised_software)

## Transmission - Lightweight BitTorrent server with web interface

## Deluge - Alternative BitTorrent server with web interface

## qBittorrent - Lightweight and fast (C++) BitTorrent server with web interface

## rTorrent - BitTorrent server with ruTorrent web interface

## Aria2 - Download manager with web interface

## SABnzbd - NZB download manager with web interface

## Medusa - Automatically download TV shows

## Sonarr - Automatically download TV shows

## Radarr - Automatically download Movies

## Bazarr- Automatically download Subtitles for Sonarr/Radarr

Bazarr is a companion application to Sonarr and Radarr that manages and downloads subtitles based on your requirements.

Key features:

- **Automatic search**
    Search automatically for missing subtitles and download them as soon as they become available in your desired language.
- **Manual search**
    Find all the matching subtitles, choose the one you want and download it to your media directory with the proper name to be used by your media player.
- **Subtitles upgrade**
    Search for matching subtitles on a regular basis and upgrade the one you previously downloaded if a better one is found.

=== "Quick start"
    After installation access the web interface using port **6767** (e.g.: `http://192.168.0.100:6767`)

    ![Bazarr](../assets/images/dietpi-software-download-bazarr.jpg)

=== "Advanced"

    - Install directory: `/opt/bazarr`
    - Data directory: `/mnt/dietpi_userdata/bazarr`
    - Bazarr configuration file: `/mnt/dietpi_userdata/bazarr/config/config.ini`

    View logs:

    - Service: `journalctl -u bazarr`
    - Binary: `/var/log/bazarr/bazarr.log`

    Update to latest version:

    - Use the internal web based updater

=== "Official documentation"

    - [Official docs](https://github.com/morpheus65535/bazarr/wiki)
    - [Source code](https://github.com/morpheus65535/bazarr)

## Lidarr - Automatically download Music

## CouchPotato - Automatically download movies

## Jackett - API Support for your favourite torrent trackers

## NZBGet - NZB download manager with web interface

## HTPC Manager - combines all your favourite software into one slick interface

[Return to the **Optimised Software list**](../../dietpi_optimised_software)

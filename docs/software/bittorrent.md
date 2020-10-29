# BitTorrent / Download Tools

## Overview

!!! warning "Documentation in progress..."

    The links redirect to the old documentation available on [DietPi.com Forum](https://dietpi.com/phpbb/viewtopic.php?f=8&t=5). **We need your help to create and update this documentation ! Thank you** :octicons-heart-16: :octicons-heart-16:

- [Transmission - Lightweight BitTorrent server with web interface](https://dietpi.com/phpbb/viewtopic.php?f=8&t=5#p46)
- [Deluge - Alternative BitTorrent server with web interface](https://dietpi.com/phpbb/viewtopic.php?f=8&t=5&start=10#p61)
- [qBittorrent - Lightweight and fast (c++) BitTorrent server with web interface](https://dietpi.com/phpbb/viewtopic.php?f=8&t=5&start=70#p2272)
- [rTorrent - BitTorrent server with ruTorrent web interface](https://dietpi.com/phpbb/viewtopic.php?p=2603#p2603)
- [Aria2 - Download manager with web interface](https://dietpi.com/phpbb/viewtopic.php?f=8&t=5&start=90#p6177)
- [SABnzbd - NZB download manager with web interface.](https://dietpi.com/phpbb/viewtopic.php?f=8&t=5&start=100#p6747)
- [Medusa - Automatically download TV shows](https://dietpi.com/phpbb/viewtopic.php?f=8&t=5&start=80#p3327)
- [Sonarr - Automatically download TV shows](https://dietpi.com/phpbb/viewtopic.php?f=8&t=5&start=100#p7455)
- [Radarr - Automatically download Movies](https://dietpi.com/phpbb/viewtopic.php?p=7457#p7457)
- **[Bazarr - Automatically download Subtitles for Sonarr/Radarr](#bazarr)**
- [Lidarr - Automatically download Music](https://dietpi.com/phpbb/viewtopic.php?f=8&t=5&start=130#p13580)
- [CouchPotato - Automatically download movies.](https://dietpi.com/phpbb/viewtopic.php?p=7212#p7212)
- [Jackett - API Support for your favourite torrent trackers.](https://dietpi.com/phpbb/viewtopic.php?p=7503#p7503)
- [NZBGet - NZB download manager with web interface.](https://dietpi.com/phpbb/viewtopic.php?p=7575#p7575)
- [HTPC Manager - combines all your favourite software into one slick interface.](https://dietpi.com/phpbb/viewtopic.php?f=8&t=5&start=110#p8043)

??? info "How do I run **DietPi-Software** and install **optimised software** ?"
    To install any of the **DietPi optimised software** listed below run from the command line:

    ```
    dietpi-software
    ```

    Choose **Software Optimised** and select one or more items. Finally click on `Install`. DietPi will do all the necessary steps to install and start these software items.

    ![DietPi software](../assets/images/dietpi-software.jpg)

    To see all the DietPi configurations options, review [DietPi Tools](../../dietpi_tools) section.

[Return to the **Optimised Software list**](../../dietpi_optimised_software)

## Bazarr

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

[Return to the **Optimised Software list**](../../dietpi_optimised_software)

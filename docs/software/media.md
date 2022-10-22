---
title: Media Systems Software Options
description: Description of DietPi software options related to media systems like media (streaming) servers and players
---

# Media Systems

## Overview

- [**Kodi - Media Centre / Player**](#kodi)
- [**ympd - Lightweight web Interface audio player for MPD**](#ympd)
- [**myMPD - Lightweight web Interface audio player for MPD**](#mympd)
- [**O!MPD - Feature-rich web Interface audio player for MPD**](#ompd)
- [**CAVA - Optional: Console-based audio visualizer for MPD**](#cava)
- [**Mopidy - Web Interface Music /Radio Player**](#mopidy)
<!-- markdownlint-disable-next-line MD051 -->
- [**Airsonic-Advanced - Feature rich media streaming server with web interface**](#airsonic)
- [**Logitech Media Server - aka LMS, Squeezebox Server**](#logitech-media-server)
- [**Squeezelite - Audio player for Logitech Media Server**](#squeezelite)
- [**Shairport Sync - AirPlay audio player with multiroom sync**](#shairport-sync)
- [**ReadyMedia - (MiniDLNA) Media streaming server (DLNA, UPnP)**](#readymedia)
- [**Ampache - Web interface media streaming server**](#ampache)
- [**Emby - Web interface media streaming server**](#emby)
- [**Plex Media Server - Web interface media streaming server**](#plex-media-server)
- [**Tautulli - Monitoring and tracking tool for Plex Media Server**](#tautulli)
- [**Murmur - Mumble VoIP Server**](#murmur)
- [**Roon Bridge - Turns your device into a Roon capable audio player**](#roon-bridge)
- [**Roon Server - Turns your device into a Roon capable audio player and Roon core**](#roon-server)
- [**Roon Extension Manager - Manage extensions from within Roon**](#roon-extension-manager)
- [**NAA Daemon - Signalyst Network Audio Adaptor (NAA)**](#naa-daemon)
- [**IceCast - Shoutcast Streaming Server, including DarkIce**](#icecast)
- [**Koel - Web interface streaming server**](#koel)
- [**GMediaRender - Resource efficient UPnP/DLNA renderer**](#gmediarender)
- [**Ubooquity - Free home server for your comics and ebooks library**](#ubooquity)
- [**Komga - Free and open source comics/mangas media server with web UI**](#komga)
- [**Raspotify - Spotify Connect client**](#raspotify)
- [**Spotify Connect Web - Web interface, client and player for Spotify Premium**](#spotify-connect-web)
- [**Spotifyd - Lightweight FOSS Spotify client**](#spotifyd)
- [**Jellyfin - Media streaming server including live TV**](#jellyfin)
- [**Beets - Music organizer and manager**](#beets)
- [**Snapcast Server - Multi room audio server**](#snapcast-server)
- [**Snapcast Client - Multi room audio client**](#snapcast-client)
- [**Navidrome - Web interface media streaming server**](#navidrome)

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

## Kodi

The only media centre/player you'll ever need.

![Kodi screenshot](../assets/images/dietpi-software-media-kodi.jpg){: width="400" height="225" loading="lazy"}

If you did not select Kodi to start from boot, you can modify the autostart options in `dietpi-autostart`:

- Desktop: Kodi is available via the LXDE start menu, and, desktop.
- Console: Kodi can also be run by typing `startkodi`.

## ympd

A lightweight, bare-bones, no frills HiFi music player with a web based interface. ympd is a front end for MPD.

Also installs:

- MPD (music player daemon)

![ympd web interface screenshot](../assets/images/dietpi-software-media-ympd.png){: width="400" height="162" loading="lazy"}

=== "Access to the web interface"

    The web interface is accessible via port **1337**:

    - URL: `http://<your.IP>:1337`

=== "Transfer music to DietPi"

    Make sure you have one of DietPi's [File Servers](../file_servers/) installed.  
    Default music directory:

    - `/mnt/dietpi_userdata/Music`, `/Music` from NFS/Samba

=== "Refresh music files / database"

    Simply select the `Update DB` button from the settings menu in ympd.

=== "DietPi-JustBoom control panel"

    - Tweak audio options on the fly with the panel.
    - Simply run `dietpi-justboom` from the command line to launch it.

        ![DietPi-JustBoom menu screenshot](../assets/images/dietpi-software-media-dietpi-justboom.png){: width="400" height="269" loading="lazy"}

## myMPD

A lightweight, bare-bones, no frills HiFi music player with a web based interface. myMPD is a front end for MPD, and a recent fork of ympd.

Also installs:

- MPD (music player daemon)

![myMPD web interface screenshot](../assets/images/dietpi-software-media-mympd.gif){: width="400" height="318" loading="lazy"}

=== "Access to the web interface"

    The web interface is accessible via port **1333**:

    - URL: `http://<your.IP>:1333`

=== "Installation notes"

    We have disabled SSL and its redirect by default with the DietPi install. This is to prevent redirects to the hostname.  
    To re-enable the SSL connection and redirect option:

    - Edit `/etc/mympd.conf`
    - Replace `ssl = false` with `ssl = true`
    - Save changes and exit
    - Restart services with `systemctl restart mympd`
    - Use the same URL address above, it will redirect to HTTPS during connection

=== "Transfer music to DietPi"

    Make sure you have one of DietPi's [File Servers](../file_servers/) installed.  
    Default music directory:

    - `/mnt/dietpi_userdata/Music`, `/Music` from NFS/Samba

=== "Refresh music files / database"

    Simply select the `Update database` option from the settings menu in myMPD.

=== "DietPi-JustBoom control panel"

    - Tweak audio options on the fly with the panel.
    - Simply run `dietpi-justboom` from the command line to launch it.

        ![DietPi-JustBoom menu screenshot](../assets/images/dietpi-software-media-dietpi-justboom.png){: width="400" height="269" loading="lazy"}

## O!MPD

A feature-rich web interface audio player for MPD. Includes song/album scraping, ideal for music catalog browsing.

Also installs:

- MPD (music player daemon)
- Web server

![O!MPD web interface screenshot](../assets/images/dietpi-software-media-ompd.png){: width="400" height="199" loading="lazy"}

=== "Access to the web interface"

    - URL: `http://<your.IP>/ompd`
    - Username: `admin`
    - Password: `admin`

=== "Transfer music to DietPi"

    Make sure you have one of DietPi's [File Servers](../file_servers/) installed.  
    Default music directory:

    - `/mnt/dietpi_userdata/Music`, `/Music` from NFS/Samba

=== "Update/scan library"

    Click the `settings` button (cog, top right).  
    Click `update`.

## CAVA

Console-based Audio Visualizer for MPD. Can be displayed in SSH terminals, consoles and LCD HATS.

Also installs:

- MPD (music player daemon)

![Animated CAVA output](../assets/images/dietpi-software-media-cava.gif){: width="500" height="114" loading="lazy"}

=== "Autostart option"

    If you did not select CAVA to start from boot:

    - CAVA can also be run by typing `cava`. Use ++ctrl+c++ to terminate.
    - You can modify the autostart options in `dietpi-autostart`.

=== "DietPi-JustBoom control panel"

    - Tweak CAVA options on the fly with the panel.
    - Simply run `dietpi-justboom` from the command line to launch it.

        ![DietPi-JustBoom menu screenshot](../assets/images/dietpi-software-media-dietpi-justboom.png){: width="400" height="269" loading="lazy"}

## Mopidy

Mopidy is a Python based music player web based user interface for MPD.

![Mopidy web interface screenshot](../assets/images/dietpi-software-media-mopidy.png){: width="400" height="198" loading="lazy"}

=== "Access to the web interface"

    The web interface uses port **6680**:

    - URL: `http://<your.IP>:6680/musicbox_webclient` or just `http://<your.IP>:6680`

=== "Transfer music to DietPi"

    Make sure you have one of DietPi's [File Servers](../file_servers/) installed.  
    Default music directory:

    - `/mnt/dietpi_userdata/Music`, `/Music` from NFS/Samba

=== "Refresh music files / database"

    This is done automatic, however, you can force an update using the command

    ```sh
    mopidyctl local scan
    ```

=== "Adding Mopidy extensions"

    Mopidy is highly customisable and supports various extensions from alternative web clients to backend extensions. See [*Extensions*](https://mopidy.com/ext/) for a list.

    Those can be installed via `pip`, e.g.:

    ```sh
    pip3 install --no-cache-dir -U Mopidy-Jellyfin
    ```

    or on Stretch:

    ```sh
    pip2 install --no-cache-dir -U Mopidy-Jellyfin
    ```

=== "Support of codecs"

    Enable support for vast number of codecs like .m4a. Execute the following installation procedure:

    ```sh
    apt-get install -y gstreamer1.0-plugins-bad
    ```

    Many thanks to Roth for [this hint](https://dietpi.com/forum/t/add-mopidy-to-software-options-advanced-alsa-configs/646).

## Airsonic-Advanced {: #airsonic }

Feature rich media streaming server with a web interface, coded in Java.

![Airsonic logo](../assets/images/airsonic-logo.svg){: width="350" height="100" loading="lazy"}

=== "Web interface"

    The web interface uses port **8080**:

    - URL: `http://<your.IP>:8080/airsonic`
    - Username: `admin`
    - Password: `admin`

    !!! hint "The web interface may feel sluggish on first access."

        This is normal on first access after service start. Once a page has been viewed, respectively an element selected the first time, subsequent accesses will perform much faster.

=== "First run setup"

    Once connected to the web interface for the first time, we recommend to do the following setup steps:

    First we check off the **Getting started** page and head over to **Settings**:

    !["Getting started" page](../assets/images/airsonic_setup_1.png){: width="1440" height="900" loading="lazy"}

    On the **Media folders** tab we change the path to DietPi's default music directory `/mnt/dietpi_userdata/Music`, save and scan the new media directory:

    !["Media folders" settings page](../assets/images/airsonic_setup_2.png){: width="1440" height="900" loading="lazy"}

    On the **Credentials** tab we add a new admin password, the default `bcrypt` encoding is very good for secure password storage. Then we delete the initial default password:

    !["Credentials" settings page](../assets/images/airsonic_setup_3.png){: width="1440" height="900" loading="lazy"}

=== "Setup details"

    The install, config and data directory is located at:

    ```
    /mnt/dietpi_userdata/airsonic
    ```

=== "Service control"

    Since Airsonic-Advanced runs as systemd service, it can be controlled with the following commands:

    ```sh
    systemctl status airsonic
    ```

    ```sh
    systemctl start airsonic
    ```

    ```sh
    systemctl stop airsonic
    ```

    ```sh
    systemctl restart airsonic
    ```

=== "Logs"

    Since Airsonic-Advanced runs as systemd service, its logs can be viewed via:

    ```sh
    journalctl -u airsonic
    ```

=== "Update"

    Airsonic-Advanced can be updated by simply reinstalling it:

    ```sh
    dietpi-software reinstall 33
    ```

***

Source code: <https://github.com/airsonic-advanced/airsonic-advanced>  
License: [GPLv3](https://github.com/airsonic-advanced/airsonic-advanced/blob/master/LICENSE.txt)

## Logitech Media Server

Logitech Media Server (aka. LMS, fka. SlimServer, SqueezeCenter, SqueezeboxServer, SliMP3) is the server software that enables web interface control of:

- Software audio players: [Squeezelite](#squeezelite)
- Hardware audio players from Logitech: Squeezebox, SlimDevices

Remark: If you do not own a hardware player, you can turn your DietPi system into a Squeezebox audio capable player, by selecting [Squeezelite](#squeezelite) for installation in `dietpi-software`.

![Logitech Media Server web interface screenshot](../assets/images/dietpi-software-media-squeezebox.png){: width="400" height="216" loading="lazy"}

=== "Access to the web interface"

    The web interface is accessible via port **9000**:

    - URL: `http://<your.IP>:9000`

=== "Transfer music to DietPi"

    Make sure you have one of DietPi's [File Servers](../file_servers/) installed.  
    Default music directory:

    - `/mnt/dietpi_userdata/Music`, `/Music` from NFS/Samba

=== "View logs"

    Logs can be viewed with the following command:

    ```sh
    journalctl -u logitechmediaserver
    ```

    Additionally, log files can be found in:

    ```
    /var/log/squeezeboxserver
    ```

=== "Update"

    Logitech Media Server can be updated to the current version with the following command:

    ```sh
    dietpi-software reinstall 35
    ```

***

Wikipedia: <https://en.wikipedia.org/wiki/Logitech_Media_Server>
Source code: <https://github.com/Logitech/slimserver>

## Squeezelite

Squeezelite is a software audio player/client for the [Logitech Media Server](#logitech-media-server).

=== "Change command-line options"

    - Edit `/etc/default/squeezelite`
    - Restart the service:

        ```sh
        systemctl restart squeezelite
        ```

    !!! hint "Installs on DietPi prior to v8.10"

        On earlier Squeezelite installs, this config file didn't exist yet. If you applied command-line options via `dietpi-services`, you can migrate them to the new config file:

        - Assure Squeezelite has been updated to latest version:

        ```sh
        dietpi-software reinstall 36
        ```

        - Migrate options from `/etc/systemd/system/squeezelite.service.d/dietpi-services_edit.conf` to `/etc/default/squeezelite`.
        - Remove obsolete config and restart service:

        ```sh
        rm /etc/systemd/system/squeezelite.service.d/dietpi-services_edit.conf
        rmdir --ignore-fail-on-non-empty /etc/systemd/system/squeezelite.service.d
        systemctl daemon-reload
        systemctl restart squeezelite
        ```

=== "View logs"

    Logs can be viewed with the following command:

    ```sh
    journalctl -u squeezelite
    ```

=== "Update"

    Squeezelite can be updated to the current version with the following command:

    ```sh
    dietpi-software reinstall 36
    ```

***

Wikipedia: <https://en.wikipedia.org/wiki/Squeezelite>
Source code: <https://github.com/ralph-irving/squeezelite>

## Shairport Sync

Shairport Sync is an AirPlay audio player which plays audio streamed from iTunes, iOS devices and third-party AirPlay sources such as ForkedDaapd and Airfoil.  
Audio played by a Shairport Sync-powered device stays synchronised with the source and hence with similar devices playing the same source. This allows for synchronised multi-room audio on multiple devices.

![Shairport Sync connection scheme](../assets/images/dietpi-software-media-shairportsync.png){: width="400" height="233" loading="lazy"}

=== "Configuration"

    You can configure Shairport Sync with its config file: `/usr/local/etc/shairport-sync.conf`  
    To apply changes, restart the service:

    ```sh
    systemctl restart shairport-sync
    ```

=== "AirPlay device name"

    When searching for an AirPlay device, execute `shairport-sync` on DietPi.

=== "Stream from Android and iOS"

    There are many AirPlay players available for Android and iOS, e.g. [AirPlay For Android & TV](https://play.google.com/store/apps/details?id=com.screen.mirroring.airplay.streamtotv) and [AirPlay on iOS](https://support.apple.com/en-gb/HT204289).  
    Download and use the player of your choice.

=== "Stream from Windows and macOS"

    [Airfoil](https://www.rogueamoeba.com/airfoil/mac/) is an application that will let you stream audio playback directly to any Shairport Sync device. Press play on your favourite music player (e.g.: Winamp/Spotify) and click the speaker next to the DietPi device.  
    By using Airfoil, you can master the music in real time using the CPU. This will allow all your Shairport Sync devices to sound even better without any performance hit on the device.

    !!! hint "Airfoil for Windows has been retired"

        From End of 2019 on, sadly Airfoil isn't developed and supported anymore for Windows: <https://www.rogueamoeba.com/airfoil/windows/>  
        There is however an official legacy download available: <https://www.rogueamoeba.com/legacy/#retired>

=== "Multiple Shairport devices / Change Shairport Sync name"

    If you are planning to use multiple Shairport devices on the same network, please make sure the hostname of each device is unique. The hostname will also effect the `shairport-sync` name, if you do not actively set the `name` setting in the `general` block of the config file.  
    This can be completed in `dietpi-config` \> `Security Options` \> `Change Hostname`.

=== "Soxr interpolation"

    Soxr interpolation will improve the output audio quality on Shairport. However, it is extremely CPU intensive.  
    Enable Soxr:

    ```sh
    sed -i '/interpolation = /c\interpolation = "soxr";' /usr/local/etc/shairport-sync.conf
    systemctl restart shairport-sync
    ```

    Disable Soxr:

    ```sh
    sed -i '/interpolation = /c\\/\/interpolation = "soxr";' /usr/local/etc/shairport-sync.conf
    systemctl restart shairport-sync
    ```

    If you have choppy playback using Soxr:  
    Increasing the `shairplay-sync` process priority (nice) may resolve the issue.

    - Run `dietpi-services` from the terminal
    - Select `shairport-sync` via up/down buttons then press ++enter++
    - Select `CPU Nice` via up/down buttons then press ++enter++
    - Select `-20 : (Highest priority)` via up button, then press ++enter++

    DietPi will then automatically apply and set the nice level.

    If the choppy playback continues, the CPU most likely is insufficient for the processing required for Soxr. Then Soxr should be disabled.

## ReadyMedia

Stream your shared media to any DLNA/UPnP capable device.

![ReadyMedia logo](../assets/images/dietpi-software-media-readymedia.jpg){: width="351" height="341" loading="lazy"}

=== "Access to ReadyMedia status"

    The web interface is accessible via port **8200**:

    - URL: `http://<your.IP>:8200`

=== "Transfer media files to DietPi"

    Make sure you have one of DietPi's [File Servers](../file_servers/) installed.  
    Default media directories:

    - Audio: `/mnt/dietpi_userdata/Music`, `/Music` from NFS/Samba
    - Video: `/mnt/dietpi_userdata/Video`, `/Video` from NFS/Samba
    - Images: `/mnt/dietpi_userdata/Pictures`, `/Pictures` from NFS/Samba

=== "Refresh the ReadyMedia database"

    The database can be refreshed with this command:

    ```sh
    rm -r /mnt/dietpi_userdata/.MiniDLNA_Cache/* && systemctl restart minidlna
    ```

***

Available UPnP clients: <https://www.wikipedia.org/wiki/List_of_UPnP_AV_media_servers_and_clients#UPnP_AV_clients>

## Ampache

A web based audio/video streaming application and file manager allowing you to access your music & videos from anywhere, using almost any internet enabled device.

Also Installs:

- Webserver stack

![Ampache web interface screenshot](../assets/images/dietpi-software-media-ampacheinterface.png){: width="400" height="202" loading="lazy"}

=== "Access to the web interface"

    - URL: `http://<your.IP>/ampache`
    - Username: `admin`
    - Password: `dietpi`

=== "Transfer media files to DietPi"

    Make sure you have one of DietPi's [File Servers](../file_servers/) installed.  
    Default media directories:

    - Audio: `/mnt/dietpi_userdata/Music`, `/Music` from NFS/Samba
    - Video: `/mnt/dietpi_userdata/Video`, `/Video` from NFS/Samba

=== "Update media database"

    DietPi will automatically add various catalogue directories to Ampache during installation. You can modify these directories as needed before running your first scan.  
    To start the scan and import your media into Ampache:

    - Select the `admin` button.
    - Select `show catalogues` from the left hand side.
    - Select `Update all`.

    ![Ampache web interface screenshot with database update instructions](../assets/images/dietpi-software-media-ampacheupdatecatalogue.png){: width="400" height="193" loading="lazy"}

=== "Add media directories"

    - Select the `admin` button.
    - Select `add a catalogue` from the left hand side.
    - Enter the details of your path.
    - Select the `add catalogue` button.

    ![Ampache web interface screenshot with instructions how to add media](../assets/images/dietpi-software-media-ampacheaddcatalogue.png){: width="400" height="180" loading="lazy"}

    !!! note "Access permissions on local directories"

        If Ampache fails to add a directory, assure it has read permissions, e.g. by adding global read permissions:

        ```sh
        chmod -R a+r /my/directory
        ```

    !!! note "Access permissions on remote mounts (e.g. NFS, Samba)"

        In case you want to access a remote mount, also read permissions for Ampache need to be assured.

        - For NFS, you can grant global read permissions like you would do with a local directory, e.g. via:

            ```sh
            chmod -R a+r /my/nfs/directory
            ```

            In case the the NFS client has no write permissions, this needs to be done at the NFS server.

        - For Samba, edit `/etc/fstab` and add or set the mount options `file_mode=0775,dir_mode=0775`. Important is the last digit of each mode, which indicates read (and execute) permissions for all users. Stricter modes, still working with Ampache, would be: `file_mode=0644,dir_mode=0755`  
            Then remount the the Samba share for the change to take effect:

            ```sh
            mount -o remount /my/samba/directory
            ```

=== "Configuration"

    Since Debian Bullseye (Ampache v5), the main configuration file is located at:

    ```
    /mnt/dietpi_userdata/ampache/config/ampache.cfg.php
    ```

    Until Debian Buster (Ampache v4), the main configuration file is located at:

    ```
    /var/www/ampache/config/ampache.cfg.php
    ```

=== "Enable additional file formats via transcoding"

    E.g. to allow .m4a playback:

    - Since Debian Bullseye (Ampache v5):

        ```sh
        G_CONFIG_INJECT 'transcode_m4a[[:blank:]]' 'transcode_m4a = allowed' /mnt/dietpi_userdata/ampache/config/ampache.cfg.php
        ```

    - Until Debian Buster (Ampache v4):

        ```sh
        G_CONFIG_INJECT 'transcode_m4a[[:blank:]]' 'transcode_m4a = allowed' /var/www/ampache/config/ampache.cfg.php
        ```

    More info: <https://github.com/ampache/ampache/wiki/Transcoding>

=== "Update Ampache"

    To update Ampache to the current version, execute

    ```sh
    dietpi-software reinstall 40
    ```

## Emby

A web interface media streaming server. Think Kodi, but using any device with a web browser.

??? note "Transcoding performance on SBC"

    Video transcoding performance on SBC devices is sluggish and may stutter, even on the RPi 3:  
    <https://github.com/MichaIng/DietPi/issues/310#issuecomment-216262850>  
    SBCs should be fine for Music only.  
    A Virtual Machine is highly recommended for Video transcoding:  
    <https://github.com/MichaIng/DietPi/issues/310#issuecomment-219067830>

![Emby web interface screenshot](../assets/images/dietpi-software-media-embyserver.png){: width="400" height="199" loading="lazy"}

=== "Access to the web interface"

    The web interface is accessible via port **8096**:

    URL: `http://<your.IP>:8096`

=== "First run setup"

    Once connected to the web interface, simply follow the on screen instructions.  
    When you reach Setup your media libraries:

    ```sh
    /mnt/dietpi_userdata/Music
    /mnt/dietpi_userdata/Video
    ```

    You can also mount Samba/NFS shares by running `dietpi-drive_manager` and selecting `Mount network drive` from the menu.

=== "Transfer media files to DietPi"

    Make sure you have one of DietPi's [File Servers](../file_servers/) installed.  
    Default media directories:

    - Audio: `/mnt/dietpi_userdata/Music`, `/Music` from NFS/Samba
    - Video: `/mnt/dietpi_userdata/Video`, `/Video` from NFS/Samba

=== "View logs"

    To view Emby server logs, run the following command from console:

    ```sh
    journalctl -u emby-server
    ```

=== "Update"

    To update the Emby Server version simply reinstall Emby Server to update it to newest version. It will preserve any existing data and settings:

    ```sh
    dietpi-software reinstall 41
    ```

***

YouTube video tutorial: [DietPi Emby Media Server Setup on Raspberry Pi 3 B Plus](https://www.youtube.com/watch?v=zEcNNLCFngI)

## Plex Media Server

Plex organizes your video, music, and photo collections and streams them to all of your screens. Also known as a "Web interface media streaming server".

![Plex Media Server web interface screenshot](../assets/images/dietpi-software-media-plexmediaserver.png){: width="400" height="199" loading="lazy"}

=== "Access to the web interface"

    The web interface uses port **32400**:

    URL: `http://<your.IP>:32400/web`

=== "First run setup"

    Please follow the onscreen instructions to complete the setup wizard:

    - Create your Plex account by signing up.
    - Give your server a name (e.g.: `DietPi-Plex`)
    - Click `library` to setup your media locations:

        ```
        /mnt/dietpi_userdata/Music
        /mnt/dietpi_userdata/Video
        ```

    You can also mount Samba/NFS shares by running `dietpi-drive_manager` and selecting `Mount network drive` from the menu.

=== "Transfer media files to DietPi"

    Make sure you have one of DietPi's [File Servers](../file_servers/) installed.  
    Default media directories:

    - Audio: `/mnt/dietpi_userdata/Music`, `/Music` from NFS/Samba
    - Video: `/mnt/dietpi_userdata/Video`, `/Video` from NFS/Samba

***

Tutorial: [Setup Guide for Plex on Raspberry Pi](https://blog.barnettjones.com/2020/11/26/dietpi-plex-setup/)  
YouTube video tutorial (German language): [Raspberry Pi 4 - Plex TV Media Server unter DietPi installieren und Zugriff von aussen (FritzBox)](https://www.youtube.com/watch?v=EElrNjXc3aA){:class="nospellcheck"}

## Tautulli

A Python based monitoring and tracking tool for Plex Media Server.

![Tautulli web interface screenshot](../assets/images/dietpi-software-media-tautulli.png){: width="400" height="273" loading="lazy"}

=== "Access to the web interface"

    The web interface is accessible via port **8181**:

    - URL: `http://<your.IP>:8181`
    - After first run setup, select "SIGN IN WITH TAUTULLI" and enter the username and password you chose before. On our own tests, authentication via `plex.tv` account did not work, it may however depend on the subscription.

=== "First run setup"

    When accessing to the web interface for the first time, go through the following steps to setup Tautulli:

    1. Click "Next"
    2. Enter a username and password for future web interface logins and click "Next".
    3. Click "Sign In with Plex" and log in with your `plex.tv` account in the new window, then click "Next".
    4. Enter the IP address or hostname of your Plex Media Server, use `127.0.0.1` if it runs on the same machine, then click "Next".
    5. Choose the activity logging ignore interval and click "Next".
    6. Click "Next" and "Finish".
    7. When logging in to the Tautulli web interface, first select "SIGN IN WITH TAUTULLI" and enter the username and password you chose before. On our own tests, authentication via `plex.tv` account did not work, it may however depend on the subscription.

=== "View logs"

    Logs can be viewed from the web interface, using the gear button at the top right corner. Log files are stored on the server in the following directory:

    ```
    /mnt/dietpi_userdata/tautulli/logs/
    ```

***

Official website: <https://tautulli.com/>  
Source code: <https://github.com/Tautulli/Tautulli>  
License: [GPLv3](https://github.com/Tautulli/Tautulli/blob/master/LICENSE)

## Murmur

Turn your device into a lightweight Mumble VoIP server.

![Mumble logo](../assets/images/dietpi-software-media-murmur.png){: width="100" height="100" loading="lazy"}

=== "Murmur Server connection details"

    The server is accessible via port **64738**:

    - URL: `http://<your.IP>:64738`
    - Password: No password required
    - Superuser Password: `dietpi`

=== "Change Murmur Server settings"

    You will need to edit the Murmur config file:

    ```sh
    nano /etc/mumble-server.ini
    systemctl restart mumble-server
    ```

## Roon Bridge

Turns your SBC into a Roon capable audio player. By using the main Roon application on another device, you can stream your music catalogue directly to the Roon Bridge running on your SBC.

![Roon logo](../assets/images/dietpi-software-media-roon.png){: width="150" height="81" loading="lazy"}

![Roon Bridge interface screenshot](../assets/images/dietpi-software-media-roonbridge.png){: width="400" height="225" loading="lazy"}

=== "Requirements"

    - Roon on another system (e.g.: Windows PC) to control the player.  
    - [Roon license](https://roonlabs.com/pricing) (free trial is also available).

=== "Directories"

    The Roon Bridge installation can be found at:

    ```
    /opt/roonbridge
    ```

    Its configuration and data can be found at:

    ```
    /mnt/dietpi_userdata/roonbridge
    ```

=== "Service control"

    The Roon Bridge by default is started as systemd service and can hence be controlled with the following commands:

    ```sh
    systemctl status roonbridge
    ```

    ```sh
    systemctl stop roonbridge
    ```

    ```sh
    systemctl start roonbridge
    ```

    ```sh
    systemctl restart roonbridge
    ```

=== "View logs"

    Service logs can be reviewed with the following command:

    ```sh
    journalctl -u roonbridge
    ```

    More detailed logs from the individual Roon Bridge components can be found at the following location:

    ```
    /var/log/roonbridge
    ```

=== "Update"

    The Roon Bridge can be updated by reinstalling it, which preserves your data and configs:

    ```sh
    dietpi-software reinstall 121
    ```

***

Official website: <https://roonlabs.com/>  
Official forum: <https://community.roonlabs.com/>  
YouTube videos by `David Snyder`: <https://www.youtube.com/c/dsnyder0cnn/search?query=roon>

## Roon Server

Turns your device into a Roon capable audio player and core server.

![Roon logo](../assets/images/dietpi-software-media-roon.png){: width="150" height="81" loading="lazy"}

![Roon Server usage scheme](../assets/images/dietpi-software-media-roonserver.png){: width="400" height="134" loading="lazy"}

=== "Install a Roon Remote on another system"

    You can use the Roon Remote apps to control and configure the Roon Server: <https://roonlabs.com/downloads>

=== "Recommended Music Storage Directory"

    When configuring your Roon Server, we highly recommend using the DietPi user data directory. This will allow you to transfer music over the network easily (see Transfer music tab), and storing the music on your Roon Server system:

    ```
    /mnt/dietpi_userdata/Music
    ```

=== "Transfer music to DietPi"

    Make sure you have one of DietPi's [File Servers](../file_servers/) installed.  
    Default music directory:

    - Audio: `/mnt/dietpi_userdata/Music`, `/Music` from NFS/Samba

=== "Directories"

    The Roon Server installation can be found at:

    ```
    /opt/roonserver
    ```

    Its configuration and data can be found at:

    ```
    /mnt/dietpi_userdata/roonserver
    ```

=== "Service control"

    The Roon Server by default is started as systemd service and can hence be controlled with the following commands:

    ```sh
    systemctl status roonserver
    ```

    ```sh
    systemctl stop roonserver
    ```

    ```sh
    systemctl start roonserver
    ```

    ```sh
    systemctl restart roonserver
    ```

=== "View logs"

    Service logs can be reviewed with the following command:

    ```sh
    journalctl -u roonserver
    ```

    More detailed logs from the individual Roon Server components can be found at the following location:

    ```
    /var/log/roonserver
    ```

=== "Update"

    The Roon Server comes with an internal updater which should be used. If the installation is broken in a way, you can repair it with the following commands:

    ```sh
    rm -R /opt/roonserver
    dietpi-software reinstall 154
    ```

***

Official website: <https://roonlabs.com/>  
Official forum: <https://community.roonlabs.com/>  
YouTube videos from `David Snyder`: <https://www.youtube.com/c/dsnyder0cnn/search?query=roon>

## Roon Extension Manager

At startup the Roon Extension Manager accesses a repository containing the community developed extensions. Via `Settings` \> `Extensions` within Roon the repository can be viewed and an extension can be selected to perform a certain action.

![Roon logo](../assets/images/dietpi-software-media-roon.png){: width="150" height="81" loading="lazy"}

![Roon Extension Manager screenshot](../assets/images/dietpi-software-media-roonextmanager.jpg){: width="400" height="225" loading="lazy"}

=== "Directories"

    Roon Extension Manager data and configs can be found at the following location:

    ```
    /mnt/dietpi_userdata/roon-extension-manager
    ```

***

Details and usage information: <https://community.roonlabs.com/t/roon-extension-manager-v0-11-8/26632>  
Credits: Many thanks to @JanKoudijs for contributing this into DietPi

## NAA Daemon

Signalyst Network Audio Adapter (NAA) daemon allows you to stream music from an HQPlayer source (like Windows) and output directly from your DietPi device. Features DRC, high quality up-sampling (like 192 kHz) and more.  
Also works with Roon.

![HQPlayer screenshot](../assets/images/dietpi-software-media-naa.png){: width="400" height="300" loading="lazy"}

=== "HQPlayer Desktop (Windows)"

    This will allow you to stream audio from your Windows PC, to the NAA Daemon on the DietPi device.

    - Download and install HQPlayer Desktop for Windows:  
        <https://www.signalyst.eu/consumer.html>
    - Run the program
    - To configure HQPlayer to use the NAA Daemon on the DietPi device:
        - Select `File` then `Settings`
        - Under `Backend`, select `NetworkAudioAdapter`. The DietPi device should be detected automatically.
        - Click `OK` to save changes

=== "How do I use Roon and HQPlayer together?"

    Guide: <https://help.roonlabs.com/portal/en/kb/articles/hqplayer>

=== "Update"

    ```sh
    dietpi-software reinstall 124
    ```

***

Website: <https://www.signalyst.eu/consumer.html>

## IceCast

Shoutcast streaming server, includes DarkIce for audio input, like a microphone.

![IceCast web interface screenshot](../assets/images/dietpi-software-media-icecast.png){: width="400" height="218" loading="lazy"}

=== "Installation notes"

    DietPi will attempt to detect mic input during installation, and apply to DarkIce. If a microphone was not available, or you experience issues, check available microphones with:

    ```sh
    arecord -l
    ```

    - Then edit the device entry in `/etc/darkice.cfg`, or
    - Simply copy and paste:

        ```sh
        sed -i "/^device[[:blank:]]/c\device = hw:$(arecord -l | mawk -F'[ :]' '/card/{print $2;exit}'),0" /etc/darkice.cfg
        ```

    - Restart the DarkIce service:

        ```sh
        systemctl restart darkice
        ```

    We create `systemd` services for both, IceCast and DarkIce, automatically started by DietPi. You can check their status by running the following command:

    ```sh
    systemctl status icecast2
    systemctl status darkice
    ```

=== "Access IceCast web interface"

    The web interface is accessible via port **8000**:

    - URL: `http://<your.IP>:8000`
    - Admin user: `admin`
    - Admin password: `<your global password>` (default: `dietpi`)
    - Source password: `<your global password>` (default: `dietpi`)
    - Relay password: `<your global password>` (default: `dietpi`)

=== "Access recording file"

    This is disabled by default.

    - A recording of the stream can be enabled by edit of `/etc/darkice.cfg`, then uncomment

        ```
        localDumpFile = /mnt/dietpi_userdata/darkice_recording.ogg
        ```

    - Restart the DarkIce service:

        ```sh
        systemctl restart darkice
        ```

    - A recording will then be saved in the following location: `/mnt/dietpi_userdata/darkice_recording.ogg`

=== "Configuration files"

    - IceCast: `/etc/icecast2/icecast.xml`
    - DarkIce: `/etc/darkice.cfg`

=== "View logs"

    Run the following commands on a console to view logs for IceCast and DarkIce:

    ```sh
    journalctl -u icecast2
    journalctl -u darkice
    ```

    IceCast additionally creates access and error log files at: `/var/log/icecast2/`

=== "Update to latest version"

    IceCast and DarkIce are installed from the Debian APT repository and hence can be updated by running the following commands:

    ```sh
    apt update
    apt install icecast2 darkice
    ```

## Koel

Web interface music streamer.

![Koel web interface screenshot](../assets/images/dietpi-software-media-koel.png){: width="400" height="197" loading="lazy"}

=== "Access to the web interface"

    The web interface is accessible via port **8003**:

    - URL: `http://<your.IP>:8003`
    - Email address: `admin@koel.dev`
    - Password: `KoelIsCool`

=== "First run setup"

    We strongly recommend to change the admin users email address and password:

    1. Login to the web interface
    2. Select "Users" at the bottom of the left-sided navigation panel
    3. However over the user tile and select "Update Profile"
    4. Change name and credentials and select "Save"

=== "Transfer music to DietPi"

    Make sure you have one of DietPi's [File Servers](../file_servers/) installed.  
    Default music directory:

    - Audio: `/mnt/dietpi_userdata/Music`, `/Music` from NFS/Samba

=== "View logs"

    To view Koel service logs, run the following command from console:

    ```sh
    journalctl -u koel
    ```

=== "Update to latest version"

    To update Koel to the recent version, simply reinstall it:

    ```sh
    dietpi-software reinstall 143
    ```

***

Official website: <https://koel.dev/>  
Official documentation: <https://docs.koel.dev/>  
Source code: <https://github.com/koel/koel>  
License: [MIT](https://github.com/koel/koel/blob/master/LICENSE.md)

## GMediaRender

A DLNA audio render/endpoint. Allows you to stream and play music, from another device, such as [BubbleUPnP](https://play.google.com/store/apps/details?id=com.bubblesoft.android.bubbleupnp).

![GMediaRender logo](../assets/images/dietpi-software-media-gmediarender.png){: width="128" height="128" loading="lazy"}

=== "Change command-line options"

    - Edit `/etc/default/gmediarender`
    - Restart the service:

        ```sh
        systemctl restart gmediarender
        ```

    !!! hint "Installs on DietPi prior to v8.10"

        On earlier GMediaRender installs, this config file didn't exist yet. If you applied command-line options via `dietpi-services`, you can migrate them to the new config file:

        - Assure GMediaRender has been updated to latest version:

        ```sh
        dietpi-software reinstall 163
        ```

        - Migrate options from `/etc/systemd/system/gmediarender.service.d/dietpi-services_edit.conf` to `/etc/default/gmediarender`.
        - Remove obsolete config and restart service:

        ```sh
        rm /etc/systemd/system/gmediarender.service.d/dietpi-services_edit.conf
        rmdir --ignore-fail-on-non-empty /etc/systemd/system/gmediarender.service.d
        systemctl daemon-reload
        systemctl restart gmediarender
        ```

=== "View logs"

    Logs can be viewed with the following command:

    ```sh
    journalctl -u gmediarender
    ```

=== "Update to the latest version"

    ```sh
    dietpi-software reinstall 163
    ```

## Ubooquity

Ubooquity is a free home server for your comics and ebooks library, with remote web interface viewing.

![Ubooquity web interface screenshot](../assets/images/dietpi-software-media-ubooquity.jpg){: width="400" height="188" loading="lazy"}

=== "Access to the web interface"

    The web interface uses port **2038** resp. **2039**:

    - Admin page: `http://<your.IP>:2038/admin`
    - Library view page: `http://<your.IP>:2039`

=== "Transfer ebooks/comics to DietPi"

    Make sure you have one of DietPi's [File Servers](../file_servers/) installed.  
    Default directories:

    - ebooks: `/mnt/dietpi_userdata/ebooks`, `/ebooks` from NFS/Samba
    - Comics: `/mnt/dietpi_userdata/comics`, `/comics` from NFS/Samba

    Use the admin page to set the above locations for ebook and comic storage, then run a scan to update the database.

=== "Update to the latest version"

    ```sh
    dietpi-software reinstall 80
    ```

***

YouTube video tutorial: [DietPi Ubooquity Comics and Ebook Reader on Raspberry Pi 3 B Plus](https://www.youtube.com/watch?v=xUewleo7f2Q)

## Komga

Free and open source comics/mangas media server with web UI.

![Komga web interface screenshot](../assets/images/dietpi-software-media-komga.jpg){: width="500" height="306" loading="lazy"}

=== "Access to the web interface"

    The web interface is accessible via port **2037**:

    - URL: `http://<your.IP>:2037`

=== "Transfer ebooks/comics to DietPi"

    Make sure you have one of DietPi's [File Servers](../file_servers/) installed.  
    Default directories:

    - ebooks: `/mnt/dietpi_userdata/ebooks`, `/ebooks` from NFS/Samba
    - Comics: `/mnt/dietpi_userdata/comics`, `/comics` from NFS/Samba

=== "Data directory"

    Variable data and configs are stored in the following directory:

    ```
    /mnt/dietpi_userdata/komga
    ```

=== "Configuration file"

    The configuration file can be found at the following location:

    ```
    /mnt/dietpi_userdata/komga/application.yml
    ```

    You need to restart the service for changes to take effect:

    ```sh
    systemctl restart komga
    ```

=== "View logs"

    Logs are stored in the system journal and can be viewed by running the following command:

    ```sh
    journalctl -u komga
    ```

    If you require file logging, set a path via config file, e.g.:

    ```yaml
    logging:
      file:
        name: "/var/log/komga/komga.log"
    ```

    Assure that the directory exists and the `komga` user or group has write permissions.

=== "Update to latest version"

    To update Komga to the latest version, simply reinstall it via DietPi-Software:

    ```sh
    dietpi-software reinstall 179
    ```

***

Official website: <https://komga.org/>  
Official documentation: <https://komga.org/guides>  
Source code: <https://github.com/gotson/komga>  
License: [MIT](https://github.com/gotson/komga/blob/master/LICENSE)

## Raspotify

Spotify Connect client for the Raspberry Pi that Just Works™.

!!! note "You will need a Spotify Premium account in order to use the Spotify Connect client."

![Spotify logo](../assets/images/dietpi-software-media-raspotify.png){: width="331" height="100" loading="lazy"}

=== "Changing options"

    Raspotify should work straight out of the box. However, you can change the available options in:

    - `/etc/default/raspotify`

    Then restart the service with:

    ```sh
    systemctl restart raspotify
    ```

=== "Service control"

    The service is started automatically at boot, but you can control it manually as well:

    - Manually start the service:

        ```sh
        systemctl start raspotify
        ```

    - Manually stop the service:

        ```sh
        systemctl stop raspotify
        ```

    - Manually restart the service:

        ```sh
        systemctl restart raspotify
        ```

=== "View logs"

    View the service logs via:

    ```sh
    journalctl -u raspotify
    ```

***

Official website: <https://dtcooper.github.io/raspotify/>  
Source code: <https://github.com/dtcooper/raspotify>

## Spotify Connect Web

Spotify Connect Web is a console client and player for Spotify Connect including a web frontend.

=== "Access to the web interface"

    The web interface is accessible via port **4000**:

    - URL: `http://<your.IP>:4000`

=== "Generate the Spotify API key"

    The generation of the `spotify_appkey.key` is required to grant the application access to Spotify API using your account.

    Fill out the application form <https://developer.spotify.com/documentation/general/guides/authorization/app-settings/>.  
    Wait for it to be "accepted".

=== "Transfer Spotify API key"

    Make sure you have one of DietPi's [File Servers](../file_servers/) installed.  
    Copy the `spotify_appkey.key` to the following directory:

    - Directory: `/mnt/dietpi_userdata/spotify-connect-web`
    - Accessed from file server: `/spotify-connect-web`

=== "Service control"

    The service is started automatically at boot, but you can control it manually as well:

    - Manually start the service:

        ```sh
        systemctl start spotify-connect-web
        ```

    - Manually stop the service:

        ```sh
        systemctl stop spotify-connect-web
        ```

    - Manually restart the service:

        ```sh
        systemctl restart spotify-connect-web
        ```

=== "View logs"

    View the service logs via:

    ```sh
    journalctl -u spotify-connect-web
    ```

***

Source code: <https://github.com/Fornoth/spotify-connect-web>  
Quick start documentation: <https://developer.spotify.com/documentation/web-api/quick-start>

## Spotifyd

Spotifyd is a lightweight FOSS Spotify client, supporting the Spotify Connect protocol.

!!! note "You will need a Spotify Premium account in order to use the Spotifyd."

![Spotify logo](../assets/images/dietpi-software-media-raspotify.png){: width="331" height="100" loading="lazy"}

=== "Changing options"

    Spotifyd should work straight out of the box. However, you can change the available options in:

    - `/mnt/dietpi_userdata/spotifyd/spotifyd.conf`

    Then restart the service with:

    ```sh
    systemctl restart spotifyd
    ```

=== "Service control"

    The service is started automatically at boot, but you can control it manually as well:

    - Manually start the service:

        ```sh
        systemctl start spotifyd
        ```

    - Manually stop the service:

        ```sh
        systemctl stop spotifyd
        ```

    - Manually restart the service:

        ```sh
        systemctl restart spotifyd
        ```

=== "View logs"

    View the service logs via:

    ```sh
    journalctl -u spotifyd
    ```

***

Official documentation: <https://spotifyd.github.io/spotifyd/>  
Source code: <https://github.com/Spotifyd/spotifyd>  
License: [GPLv3](https://github.com/Spotifyd/spotifyd/blob/master/LICENSE)

## Jellyfin

A FOSS web interface media streaming server, including live TV, forked from Emby.

![Jellyfin web interface screenshot](../assets/images/dietpi-software-media-jellyfin.jpg){: width="600" height="341" loading="lazy"}

=== "Access to the web interface"

    The web interface is accessible via port **8097**:

    - URL: `http://<your.IP>:8097`

=== "View logs"

    - Service:

        ```sh
        journalctl -u jellyfin
        ```

    - Binary: `/var/log/jellyfin/`

=== "Data directory"

    `/mnt/dietpi_userdata/jellyfin`

=== "Update to latest version"

    Code: Select all

    ```sh
    apt update
    apt install jellyfin jellyfin-ffmpeg
    ```

***

Source code: <https://github.com/jellyfin/jellyfin>

## Beets

A command-line music organizer and manager. Some of the key features are:

- flexible automatic metadata corrector and file renamer
- album art downloader, lyrics fetcher, and genre identifier
- music metadata inspection and modification tool for lots of audio file types

![Beets logo](../assets/images/dietpi-software-media-beets.png){: width="144" height="144" loading="lazy"}

=== "Quick start"

    Start by typing `beet` in the command line. All the options and commands will be made available.

    You could start using Beets by importing music with `beet import` and then query the library with 'beet list'. For example next command line shows all Tangos in the year 2010

    ```sh
    beet ls year:2010 genre:Tango
    ```

=== "Changing configuration"

    You can change the Beets configuration, by editing next file: `/mnt/dietpi_userdata/beets/config.yaml`.

***

Official website: <https://beets.io/>  
Official documentation: <https://beets.readthedocs.io/en/stable/>  
Source code: <https://github.com/beetbox/beets>  
License: [MIT](https://github.com/beetbox/beets/blob/master/LICENSE)

## Snapcast Server

A FOSS multi room audio solution - this part is the server app it sends music to one or more clients to play.

![Snapcast logo](../assets/images/dietpi-software-media-snapcast.png){: width="300" height="48" loading="lazy"}

The Snapcast server needs to have its audio sources manually configured after installation. See the Snapcast documents for more details: <https://github.com/badaix/snapcast#server>

=== "Access to the web interface"

    The Snapcast server provides a web interface on port **1780**, which allows you to control volumes for all clients and optionally play audio through your browser:

    - URL: `http://<your.IP>:1780`

=== "Implementation details"

    DietPi-Software installs the Snapcast server nearly with default configs, as shipped with the official package. Only the JSON RPC, which listens by default on port **1705**, is disabled. To enable and configure it, check the `[tcp]` section of the config file (see "Changing options" tab).

=== "Changing options"

    - `/etc/snapserver.conf`

    Then restart services with:

    ```sh
    systemctl restart snapserver
    ```

=== "Using MPD as an input source"

    If you have MPD installed you can use it as an input source.

    First you need to ensure that MPD outputs to a pipe you can do this in two ways:

    1. Install CAVA from the DietPi software list.
    2. OR: Add the following to `/etc/mpd.conf` and restart with `systemctl restart mpd`

        ```
        audio_output {
            type "fifo"
            enabled "yes"
            name "snapcast"
            path "/tmp/mpd.fifo"
            format "48000:16:2"
        }
        ```

    Once you have done that you then need to add the following to `/etc/snapserver.conf` under `[stream]`. The `name` is the name as it will appear to Snapcast clients here I have called it `myMPD`. Check the Snapcast server docs for additional parameters you can pass in: <https://github.com/badaix/snapcast/blob/master/doc/configuration.md#pipe>

    ```
    source = pipe:///tmp/mpd.fifo?name=myMPD&mode=read
    ```

=== "Using Mopidy as an input source"

    If you have Mopidy installed you can use it as an input source.

    First you need to ensure that Mopidy outputs to a pipe. Add the following to `/etc/mopidy/mopidy.conf` and restart with `systemctl restart mopidy`

    ```
    [audio]
    output = audioresample ! audioconvert ! audio/x-raw,rate=48000,channels=2,format=S16LE ! wavenc ! filesink location=/tmp/mopidy.fifo
    ```

    Once you have done that you then need to add the following to `/etc/snapserver.conf` under `[stream]`. The `name` is the name as it will appear to Snapcast clients here I have called it `myMopidy`. Check the Snapcast server docs for additional parameters you can pass in: <https://github.com/badaix/snapcast/blob/master/doc/configuration.md#pipe>

    ```
    source = pipe:///tmp/mopidy.fifo?name=myMopidy&mode=read
    ```

=== "Using Raspotify/librespot as an input source"

    If you have Raspotify installed you can use it as an input source.

    Add the following config under `[stream]`. The `name` is the name as it will appear to Snapcast clients here I have called it `mySpotify`. The `devicename` is the name that will be shown when connecting in Spotify. Check the Snapcast server docs for additional parameters you can pass in: <https://github.com/badaix/snapcast/blob/master/doc/configuration.md#librespot>. I have disabled the audio cache to protect the SD card.

    ```
    source = librespot:///usr/bin/librespot?name=mySpotify&devicename=SnapcastSpotify&disable_audio_cache=true
    ```

=== "Using AirPlay (Shairport Sync) as an input"

    First install `shairport-sync`.

    Then (at the moment - see: <https://github.com/MichaIng/DietPi/issues/4470>) we need to replace the Shairport Sync binary with one that supports `stdout`. To do this we need to compile a new binary - you will find details here:  
    <https://github.com/mikebrady/shairport-sync/blob/master/INSTALL.md#build-and-install>

    You need to use this line when configuring instead of the line from the docs:

    ```sh
    ./configure --sysconfdir=/etc --with-alsa --with-soxr --with-avahi --with-ssl=openssl --with-systemd --with-metadata --with-stdout
    ```

    Don't forget to run `make` and `make install`.

    Then add the following config under `[stream]`. The `name` is the name as it will appear to Snapcast clients here I have called it `myAirport`. The `devicename` is the name that will be shown when searching for Airport devices. Check the Snapcast server docs for additional parameters you can pass in: <https://github.com/badaix/snapcast/blob/master/doc/configuration.md#airplay>

    ```
    source = airplay:///usr/local/bin/shairport-sync?name=myAirport&devicename=SnapcastAirport&params=--configfile=/usr/local/etc/shairport-sync.conf
    ```

    You will then either need to mask the original Shairport Sync service

    ```sh
    systemctl mask shairport-sync
    ```

    or you can try to run one of them on a different port - Snapcast docs shows how to do this here: <https://github.com/badaix/snapcast/blob/master/doc/configuration.md#airplay>

***

Source code: <https://github.com/badaix/snapcast>

## Snapcast Client

A FOSS multi room audio solution - this part is a client app it listens to the server and plays the audio it is sent

![Snapcast logo](../assets/images/dietpi-software-media-snapcast.png){: width="300" height="48" loading="lazy"}

The Snapcast client will prompt you for the server's IP and port when installing and will be setup to start on boot up. This should work for most people but there are additional configuration parameters that can be found in the Snapcast documentation: <https://github.com/badaix/snapcast#client>

=== "Changing options"

    It should just work but, you can change the available options in:

    - `/etc/default/snapclient`

    Then restart services with:

    ```sh
    systemctl restart snapclient
    ```

***

Source code: <https://github.com/badaix/snapcast>

## Navidrome

An open source web-based music collection server and streamer, written in Go.  
It is compatible with the [Subsonic media player](http://www.subsonic.org/pages/index.jsp).

![Navidrome web interface screenshot](../assets/images/dietpi-software-media-navidrome.png){: width="400" height="202" loading="lazy"}

=== "Web interface"

    The web interface uses port **4533**:

    - URL: `http://<your.IP>:4533`

=== "Multiple Music Folders"

    Navidrome doesn't support multiple music folders out of the box. The feature is still being developed.

    Related GitHub issue: <https://github.com/navidrome/navidrome/issues/192>

=== "Setup details"

    The install, config and data directory is located at:

    ```
    /mnt/dietpi_userdata/navidrome
    ```

=== "Service control"

    Since Navidrome runs as systemd service, it can be controlled with the following commands:

    ```sh
    systemctl status navidrome
    ```

    ```sh
    systemctl start navidrome
    ```

    ```sh
    systemctl stop navidrome
    ```

    ```sh
    systemctl restart navidrome
    ```

=== "Logs"

    Since Navidrome runs as systemd service, its logs can be viewed via:

    ```sh
    journalctl -u navidrome
    ```

=== "Update"

    Navidrome can be updated by simply reinstalling it:

    ```sh
    dietpi-software reinstall 204
    ```

=== "Transfer music to DietPi"

    Make sure you have one of DietPi's [File Servers](../file_servers/) installed.  
    Default music directory:

    - `/mnt/dietpi_userdata/Music`, `/Music` from NFS/Samba

=== "Clients for Navidrome"

    Navidrome has a Subsonic-compatible server built in, so there should be plenty of clients for different platforms available. See:

    - <https://www.navidrome.org/docs/overview/#apps>
    - <http://www.subsonic.org/pages/apps.jsp>

***

Website: <https://www.navidrome.org/>  
Source code: <https://github.com/navidrome/navidrome>  
License: [GPLv3](https://github.com/navidrome/navidrome/blob/master/LICENSE)

[Return to the **Optimised Software list**](../../software/)

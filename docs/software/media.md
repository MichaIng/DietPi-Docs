# Media Systems

## Overview

- [**Kodi - Media Centre / Player**](#kodi-media-centre-player)
- [**ympd - Lightweight web Interface audio player for MPD**](#ympd-lightweight-web-interface-audio-player-for-mpd)
- [**myMPD - Lightweight web Interface audio player for MPD**](#mympd-lightweight-web-interface-audio-player-for-mpd)
- [**O!MPD - Feature-rich web Interface audio player for MPD**](#ompd-feature-rich-web-interface-audio-player-for-mpd)
- [**CAVA - Optional: Console-based audio visualizer for MPD**](#cava-optional-console-based-audio-visualizer-for-mpd)
- [**Mopidy - Web Interface Music /Radio Player**](#mopidy-web-interface-music-radio-player)
- [**Airsonic - Feature rich media streaming server with web interface**](#airsonic-feature-rich-media-streaming-server-with-web-interface)
- [**Subsonic - Feature rich media streaming server with web interface**](#subsonic-feature-rich-media-streaming-server-with-web-interface)
- [**Logitech Media Server - aka LMS, Squeezebox Server**](#logitech-media-server-aka-lms-squeezebox-server)
- [**SqueezeLite - Audio player for Logitech Media Server**](#squeezelite-audio-player-for-logitech-media-server)
- [**Shairport Sync - AirPlay audio player with multiroom sync**](#shairport-sync-airplay-audio-player-with-multiroom-sync)
- [**ReadyMedia - (MiniDLNA) Media streaming server (DLNA, UPnP)**](#readymedia-minidlna-media-streaming-server-dlna-upnp)
- [**Ampache - Web interface media streaming server**](#ampache-web-interface-media-streaming-server)
- [**Emby - Web interface media streaming server**](#emby-web-interface-media-streaming-server)
- [**Plex Media Server - Web interface media streaming server**](#plex-media-server-web-interface-media-streaming-server)
- [**Tautulli - Monitoring and tracking tool for Plex Media Server**](#tautulli-monitoring-and-tracking-tool-for-plex-media-server)
- [**Murmur - Mumble VoIP Server**](#murmur-mumble-voip-server)
- [**Roon Bridge - Turns your device into a Roon capable audio player**](#roon-bridge-turns-your-device-into-a-roon-capable-audio-player)
- [**Roon Server - Turns your device into a Roon capable audio player and Roon core**](#roon-server-turns-your-device-into-a-roon-capable-audio-player-and-roon-core)
- [**Roon Extension Manager - Manage extensions from within Roon**](#roon-extension-manager-manage-extensions-from-within-roon)
- [**NAA Daemon - Signalyst Network Audio Adaptor (NAA)**](#naa-daemon-signalyst-network-audio-adaptor-naa)
- [**IceCast - Shoutcast Streaming Server, including DarkIce**](#icecast-shoutcast-streaming-server-including-darkice)
- [**jRiver - Media Center**](#jriver-media-center)
- [**Koel - Web interface streaming server**](#koel-web-interface-streaming-server)
- [**GMediaRender - Resource efficient UPnP/DLNA renderer**](#gmediarender-resource-efficient-upnpdlna-renderer)
- [**Ubooquity - Free home server for your comics and ebooks library**](#ubooquity-free-home-server-for-your-comics-and-ebooks-library)
- [**Komga - Free and open source comics/mangas media server with web UI**](#komga-free-and-open-source-comicsmangas-media-server-with-web-ui)

??? info "How do I run **DietPi-Software** and install **optimised software** ?"
    To install any of the **DietPi optimised software** listed below run from the command line:

    ```
    dietpi-software
    ```

    Choose **Software Optimised** and select one or more items. Finally click on `Install`. DietPi will do all the necessary steps to install and start these software items.

    ![DietPi software](../assets/images/dietpi-software.jpg)

    To see all the DietPi configurations options, review [DietPi Tools](../../dietpi_tools) section.

## Kodi - Media Centre / Player

The only media centre/player you'll ever need.

![DietPi media server software Kodi](../assets/images/dietpi-software-media-kodi.jpg){: style="width:500px"}

If you did not select Kodi to start from boot, you can modify the autostart options in `dietpi-autoStart`:

- Desktop = Kodi is available via the LXDE start menu, and, desktop.
- Console = Kodi can also be run by typing `startkodi`.

## ympd - Lightweight web Interface audio player for MPD

A lightweight, bare-bones, no frills HiFi music player with a web based interface. ympd is a front end for MPD.

Also installs:

- MPD (music player daemon)

![DietPi media server software ympd](../assets/images/dietpi-software-media-ympd.png){: style="width:500px"}

=== "Access to the web interface"

    URL = `http://<your.IP>:1337`

=== "Transfer/add music"

    Make sure you have one of DietPi's [File Servers](https://dietpi.com/docs/software/file_servers/) installed.  
    Folders used:

    - local = `/mnt/dietpi_userdata/Music`  
      accessed from file server = `/Music`

=== "Refresh music files / database"

    Simply select the `Update DB` button from the settings menu in ympd.

=== "DietPi-JustBoom control panel"

    - Tweak audio options on the fly with the panel.
    - Simply run `dietpi-justboom` from the command line to launch it.

    ![DietPi media server software ympd JustBoom](../assets/images/dietpi-software-media-dietpi-justboom.png){: style="width:300px"}

## myMPD - Lightweight web Interface audio player for MPD

A lightweight, bare-bones, no frills HiFi music player with a web based interface. myMPD is a front end for MPD, and a recent fork of ympd.

Also installs:

- MPD (music player daemon)

![DietPi media server software myMPD](../assets/images/dietpi-software-media-mympd.gif){: style="width:500px"}

=== "Access to the web interface"

    URL = `http://<your.IP>:1333`

=== "Installation notes"

    We have disabled SSL and its redirect by default with the DietPi install. This is to prevent redirects to the hostname.  
    To re-enable the SSL connection and redirect option:

    - Edit `/etc/mympd.conf`
    - Replace `ssl = false` with `ssl = true`
    - Save changes and exit
    - Restart services with `dietpi-services restart`
    - Use the same URL address above, it will redirect to HTTPS during connection

=== "Transfer/add music"

    Make sure you have one of DietPi's [File Servers](https://dietpi.com/docs/software/file_servers/) installed.  
    Folders used:

    - local = `/mnt/dietpi_userdata/Music`  
      accessed from file server = `/Music`

=== "Refresh music files / database"

    Simply select the `Update database` option from the settings menu in myMPD.

=== "DietPi-JustBoom control panel"

    - Tweak audio options on the fly with the panel.
    - Simply run `dietpi-justboom` from the command line to launch it.

    ![DietPi media server software ympd JustBoom](../assets/images/dietpi-software-media-dietpi-justboom.png){: style="width:300px"}

## O!MPD - Feature-rich web Interface audio player for MPD

A feature-rich web interface audio player for MPD. Includes song/album scraping, ideal for music catalog browsing.

Also installs:

- MPD (music player daemon)
- Web server

![DietPi media server software O!MPD](../assets/images/dietpi-software-media-ompd.png){: style="width:500px"}

=== "Access to the web interface"

    - URL = `http://<your.IP>/ompd`
    - Username = `admin`
    - Password = `admin`

=== "Transfer/add music"

    Make sure you have one of DietPi's [File Servers](https://dietpi.com/docs/software/file_servers/) installed.  
    Folders used by O!MPD:

    - local = `/mnt/dietpi_userdata/Music`  
      accessed from file server = `/Music`

=== "Update/scan library"

    Click the `settings` button (cog, top right).  
    Click `update`.

## CAVA - Optional: Console-based audio visualizer for MPD

Console-based Audio Visualizer for MPD. Can be displayed in SSH terminals, consoles and LCD HATS.

Also installs:

- MPD (music player daemon)

![DietPi media server software CAVA](../assets/images/dietpi-software-media-cava.gif){: style="width:500px"}

=== "Autostart option"

    If you did not select CAVA to start from boot:

    - CAVA can also be run by typing `cava`. Use `CTRL+C` to terminate.
    - You can modify the autostart options in `dietpi-autostart`.

=== "DietPi-JustBoom control panel"

    - Tweak CAVA options on the fly with the panel.
    - Simply run `dietpi-justboom` from the command line to launch it.

    ![DietPi media server software ympd JustBoom](../assets/images/dietpi-software-media-dietpi-justboom.png){: style="width:300px"}

## Mopidy - Web Interface Music /Radio Player

Mopidy is a python based music player web based user interface for MPD.

![DietPi media server software Mopidy](../assets/images/dietpi-software-media-mopidy.png){: style="width:500px"}

=== "Access to the web interface"

    - URL = `http://<your.IPY>:6680/musicbox_webclient` or just `http://<your.IPY>:6680`

=== "Transfer/add music"

    Make sure you have one of DietPi's [File Servers](https://dietpi.com/docs/software/file_servers/) installed.  
    Folders used by Mopidy:

    - local = `/mnt/dietpi_userdata/Music`  
      accessed from file server = `/Music`

=== "Refresh music files / database"

    This is done automatic, however, you can force an update using the command  
    `mopidyctl local scan`.

=== "Adding Mopidy extensions"

    Mopidy is highly customizable and supports various extensions from Web extensions to Backend extensions. See [*Extensions*](https://mopidy.com/ext/) for a list.

    See [*Installing extensions*](https://docs.mopidy.com/en/latest/installation/debian/?highlight=backend%20extensions#installing-extensions) for installation details.

=== "Support of codecs"

    Enable support for vast number of codecs like .m4a.   
    Many thanks to Roth for [this hint](https://dietpi.com/phpbb/viewtopic.php?f=12&t=785&p=3743#p3742).

## Airsonic - Feature rich media streaming server with web interface

Feature rich media streaming server with a web interface. Coded in Java.

![DietPi media server software Airsonic](../assets/images/dietpi-software-media-airsonic.png){: style="width:500px"}

=== "Access to the web interface"

    - URL = `http://<your.IPY>:8080/airsonic`
    - Username = `admin`
    - Password = `admin`

=== "First run setup"

    Once connected to the web interface, we need to configure the Music directory:

    - Click the `Settings` button
    - Under `Media Folders`, replace the current music folder entry with `/mnt/dietpi_userdata/Music`, then select `Save`
    - Select `Scan media folders now` to update the library

=== "Transfer/add music"

    Make sure you have one of DietPi's [File Servers](https://dietpi.com/docs/software/file_servers/) installed.  
    Folders used by Mopidy:

    - folder = `/mnt/dietpi_userdata/Music`  

## Subsonic - Feature rich media streaming server with web interface

Feature rich media streaming server with a web interface. Coded in Java.

![DietPi media server software Subsonic](../assets/images/dietpi-software-media-subsonic.png){: style="width:500px"}

=== "Access to the web interface"

    - URL = `http://<your.IPY>:4040`
    - Username = `admin`
    - Password = `admin`

    === "Transfer/add music"

        Make sure you have one of DietPi's [File Servers](https://dietpi.com/docs/software/file_servers/) installed.  
        Folders used by Mopidy:

        - folder = `/mnt/dietpi_userdata/Music`  

=== "Jetty http 404 error"

    This is a known issue with Subsonic and is out of my control.  
    If you experience this error while accessing the Subsonic webpage, you can resolve the issue by running the following:

    ```sh
    systemctl stop subsonic
    rm -R /var/subsonic/jetty
    systemctl restart subsonic
    ```

=== "GitHub Contributions"

    Many thanks to 'thechildofroth' for his testing and fixes with the Subsonic installation.

## Logitech Media Server - aka LMS, Squeezebox Server

![DietPi media server software Logitech Media Server](../assets/images/dietpi-software-media-squeezebox.png){: style="width:500px"}

## SqueezeLite - Audio player for Logitech Media Server

![DietPi media server software SqueezeLite](../assets/images/dietpi-software-media-squeezebox.png){: style="width:500px"}

## Shairport Sync - AirPlay audio player with multiroom sync

![DietPi media server software Shairport Sync](../assets/images/dietpi-software-media-shairportsync.png){: style="width:500px"}

## ReadyMedia - (MiniDLNA) Media streaming server (DLNA, UPnP)

![DietPi media server software ReadyMedia](../assets/images/dietpi-software-media-readymedia.jpg){: style="width:200px"}

## Ampache - Web interface media streaming server

![DietPi media server software Ampache](../assets/images/dietpi-software-media-ampacheinterface.png){: style="width:500px"}

![DietPi media server software Ampache update catalog](../assets/images/dietpi-software-media-ampacheupdatecatalogue.png){: style="width:500px"}

![DietPi media server software Ampache add catalog](../assets/images/dietpi-software-media-ampacheaddcatalogue.png){: style="width:500px"}

## Emby - Web interface media streaming server

![DietPi media server software Emby](../assets/images/dietpi-software-media-embyserver.png){: style="width:500px"}

## Plex Media Server - Web interface media streaming server

![DietPi media server software Plex Media Server](../assets/images/dietpi-software-media-plexmediaserver.png){: style="width:500px"}

## Tautulli - Monitoring and tracking tool for Plex Media Server

![DietPi media server software Tautulli](../assets/images/dietpi-software-media-tautulli.png){: style="width:500px"}

## Murmur - Mumble VoIP Server

![DietPi media server software Murmur](../assets/images/dietpi-software-media-murmur.png){: style="width:150px"}

## Roon Bridge - Turns your device into a Roon capable audio player

![DietPi media server software Roon Bridge](../assets/images/dietpi-software-media-roonbridge.png){: style="width:500px"}

## Roon Server - Turns your device into a Roon capable audio player and Roon core

![DietPi media server software Roon Server](../assets/images/dietpi-software-media-roonserver.png){: style="width:500px"}

## Roon Extension Manager - Manage extensions from within Roon

![DietPi media server software Roon Extension Manager](../assets/images/dietpi-software-media-roonextmanager.jpg){: style="width:500px"}

## NAA Daemon - Signalyst Network Audio Adaptor (NAA)

![DietPi media server software NAA Daemon](../assets/images/dietpi-software-media-naa.png){: style="width:500px"}

## IceCast - Shoutcast Streaming Server, including DarkIce

![DietPi media server software IceCast](../assets/images/dietpi-software-media-icecast.png){: style="width:500px"}

## jRiver - Media Center

![DietPi media server software jRiver](../assets/images/dietpi-software-media-jriver.png){: style="width:500px"}

## Koel - Web interface streaming server

![DietPi media server software Koel](../assets/images/dietpi-software-media-koel.png){: style="width:500px"}

## GMediaRender - Resource efficient UPnP/DLNA renderer

![DietPi media server software GMediaRender](../assets/images/dietpi-software-media-gmediarender.png){: style="width:150px"}

## Ubooquity - Free home server for your comics and ebooks library

![DietPi media server software Ubooquity](../assets/images/dietpi-software-media-ubooquity.jpg){: style="width:600px"}

## Komga - Free and open source comics/mangas media server with web UI

![DietPi media server software Komga](../assets/images/dietpi-software-media-komga.jpg){: style="width:500px"}

[Return to the **Optimised Software list**](../../dietpi_optimised_software)

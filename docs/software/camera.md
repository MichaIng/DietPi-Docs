# Camera / Surveillance

## Overview

- [**RPi Cam Control - RPi Camera / Web Interface Surveillance**](#rpi-cam-control-rpi-camera-web-interface-surveillance)
- [**MotionEye - Camera / Web Interface Surveillance**](#motioneye-camera-web-interface-surveillance)

??? info "How do I run **DietPi-Software** and install **Optimised software** ?"
    To install any of the **DietPi Optimised Software** listed below run from the command line:
    ```
    dietpi-launcher
    ```
    and selected _DietPi-Software_. or launch directly the tool:
    ```
    dietpi-software
    ```

    Choose **Software optimised** and select one or more items. Finally click on `Install`. DietPi will do all the necessary steps to install and start these software items.

    ![DietPi software](../assets/images/dietpi-software.jpg)

    To see all the DietPi configurations options, review [DietPi Tools](../../dietpi_tools) section.

[Return to the **Optimised Software list**](../../dietpi_optimised_software)

## RPi Cam Control - RPi Camera / Web Interface Surveillance

The *RPi Cam Control* package can be used in combination with a Raspberry PI camera module to

- take an image
- record a video
- observe based on motion detection
- record a video with timelapse

It consists of full control of the camera in a web based interface.

![DietPi camera software RPi Cam Control](../assets/images/dietpi-software-camera-rpicamcontrol.png){: style="width:500px"}

=== "Requirements"

    The requirements are:

    - Have any PI supported camera attached

=== "Access the web interface"

    The web interface is accessible via:

    - URL = `http://<your.IP>/rpicam`

=== "Location of stored media"

    The recorded media files are stored in the directory  
    `/mnt/dietpi_userdata/rpicam`

## MotionEye - Camera / Web Interface Surveillance

The *MotionEye* package offers surveillance for your RPi camera resp. USB camera.  
It is mainly focused towards motion detection usage. It contains a web interface.

![DietPi camera software MotionEye](../assets/images/dietpi-software-camera-motioneye.png){: style="width:500px"}

=== "Requirements"

    The requirements are:

    - Have any PI supported camera attached
    - Have a debian supported USB camera attached

=== "Access the web interface"

    The web interface is accessible via port 8765:

    - URL = `http://<your.IP>:8765`
    - User = `admin`
    - Password = not required

    Passwords can be configured in the web interface

=== "Access recordings (w/o web interface)"

    Make sure you have one of [DietPi's file servers](../file_servers/) installed.  
    Directories used by MotionEye:

    - Media directory = `/mnt/dietpi_userdata/motioneye`
    - Accessed from file server = `/motioneye`

=== "Upgrading"

    MotionEye can be upgraded to lastest version via `sudo pip2 install -U motioneye`.

See also <https://github.com/ccrisan/motioneye/wiki>.

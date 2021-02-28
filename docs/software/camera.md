# Camera / Surveillance

## Overview

- [**RPi Cam Control - RPi Camera / Web Interface Surveillance**](#rpi-cam-control)
- [**MotionEye - Camera / Web Interface Surveillance**](#motioneye)

??? info "How do I run **DietPi-Software** and install **optimised software**?"
    To install any of the **DietPi optimised software** listed below run from the command line:

    ```sh
    dietpi-software
    ```

    Choose **Software Optimised** and select one or more items. Finally click on `Install`. DietPi will do all the necessary steps to install and start these software items.

    ![DietPi software](../assets/images/dietpi-software.jpg){: width="643" height="365" loading="lazy"}

    To see all the DietPi configurations options, review [DietPi Tools](../../dietpi_tools/) section.

[Return to the **Optimised Software list**](../../software/)

## RPi Cam Control

The *RPi Cam Control* package can be used in combination with a Raspberry PI camera module to

- take an image
- record a video
- observe based on motion detection
- record a video with time lapse

It consists of full control of the camera in a web based interface.

![RPi Cam Control web interface screenshot](../assets/images/dietpi-software-camera-rpicamcontrol.png){: width="500" height="395" loading="lazy"}

=== "Requirements"

    The requirements are:

    - Have any RPi-supported camera attached

=== "Access the web interface"

    The web interface is accessible via:

    - URL = `http://<your.IP>/rpicam`

=== "Location of stored media"

    The recorded media files are stored in the directory  
    `/mnt/dietpi_userdata/rpicam`

## MotionEye

The *MotionEye* package offers surveillance for your camera.  
It is mainly focused towards motion detection usage. It contains a web interface.

The software can

- take an image
- record a video
- observe based on motion detection
- record a video with time lapse

![MotionEye web interface screenshot](../assets/images/dietpi-software-camera-motioneye.png){: width="500" height="246" loading="lazy"}

=== "Requirements"

    The requirements are:

    - Have any RPi-supported camera attached
    - Have a Debian-supported USB camera attached
    - Have access to an IP camera (access via network)

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

    MotionEye can be upgraded to latest version via

    ```sh
    sudo pip2 install -U motioneye
    ```

***

Github page: <https://github.com/ccrisan/motioneye/wiki>  
Tutorial: [MotionEye on DietPi on Raspberry Pi: keeping an eye on things](https://mansfield-devine.com/speculatrix/2018/12/motioneye-on-dietpi-on-raspberry-pi/)

[Return to the **Optimised Software list**](../../software/)

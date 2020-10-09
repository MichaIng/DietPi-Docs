# Remote Desktop Access

## Overview

!!! warning "Documentation in progress..." 

    The **Optimised Software** links marked in **bold** have a more detailed description. The other links redirect to the old documentation (available on [DietPi.com Forum](https://dietpi.com/phpbb/viewtopic.php?f=8&t=5)). **We need your help to create and update this documentation ! Thank you** :octicons-heart-16: :octicons-heart-16:  

- [**TigerVNC Server - Desktop for remote connection**](#29-tigervnc-server-desktop-for-remote-connection)
- [RealVNC Server - Desktop for remote connection](https://dietpi.com/phpbb/viewtopic.php?f=8&t=5&start=80#p4149)
- [XRDP - Remote desktop server for Windows Remote Desktop Client](https://dietpi.com/phpbb/viewtopic.php?f=8&t=5&start=70#p2074)
- [NoMachine - Feature rich remote desktop connection](https://dietpi.com/phpbb/viewtopic.php?f=8&t=5&start=60#p2071)

## Remote Access:
- [Remot3.it - (Weaved) Access your device over the internet.](https://dietpi.com/phpbb/viewtopic.php?f=8&t=5&start=20#p188)  
- [VirtualHere - Share physically attached USB devices from your SBC, over the network.](https://dietpi.com/phpbb/viewtopic.php?p=6709#p6709)  

[Return to the **Optimised Software list**](../../dietpi_optimised_software)

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

    ![DietPi Software](../assets/images/dietpi-software.jpg)

    To see all the DietPi configurations options, review [DietPi Tools](../user-guide_tools) section.

## [29] TigerVNC Server - Desktop for remote connection

!!! info Desktop environment

    From the list of **Optimised Software**, together with any of the Remote Desktop Software choose also one of [_Graphical Desktop environment_](../dietpi-software-desktop). DietPi will install both of them, enabling you to use your keyboard and mouse to interact with a graphical desktop environment on your device.

Run a **Desktop environment** on your device and access it accessed remotely via network. It is a great option for headless SBC devices.

=== "Quick start"

    You can control the VNC service with:
    ``` 
    systemctl status vncserver.service
    ```

    Connection Details:

    - Use the IP address of your DietPi device (e.g.: 192.168.0.100). If you can't connect, try connecting to screen 1 (e.g.: 192.168.0.100:1)
    - Use the password you entered during the installation. If you would like to change the password run from the console/terminal
    ```
    vncpasswd 
    ```
    - The default port is 5901. **Note:** To enable access from outside of your local network, this port needs to be forwarded from your router.

=== "Enable autostart"

    VNC servers start automatically during boot, unless you have selected **Desktop** from `dietpi-autostart` configuration tool.

    To enable a different startup setup, run from the command line the main DietPi tool: 
    ```
    dietpi-launcher 
    ```
    or directly. 
    ```
    dietpi-autostart 
    ```
    To see all the DietPi configurations options, review [DietPi Tools](../user-guide_tools) section.

=== "Official documentation"
    [LXDE Website](https://www.lxde.org) - [LXDE Wiki](https://wiki.lxde.org/en/Main_Page)

![DietPi-Remote-Desktop-TigerVNC](../assets/images/dietpi-software-remote-desktop-tigervnc.jpg)


### VNC Server - Shared desktop

Edit dietpi.txt and enable VNC server to run in _shared desktop_ mode:

```
nano /boot/dietpi.txt
```

and change to value 1 next line 
```
SOFTWARE_VNCSERVER_SHARE_DESKTOP=1
```

A running desktop is required in this mode, please set desktop to start from boot:
```
dietpi-autostart
```

### VNC Server - Resolution settings

Here it's an example on how to run VNC server on screen :1, creating a new desktop with 1280x720 resolution:

```
SOFTWARE_VNCSERVER_WIDTH=1280
SOFTWARE_VNCSERVER_HEIGHT=720
SOFTWARE_VNCSERVER_DEPTH=32
SOFTWARE_VNCSERVER_DISPLAY_INDEX=1
```

Restart service:
```
systemctl restart vncserver.service
```

# Desktop environments & utilities

## Overview

### Desktops

- [**LXDE - Highly optimized ultra lightweight desktop**](#lxde)
- [**LXQt - Slick and optimized lightweight desktop**](#lxqt)
- [**MATE - Popular Gnome 2 desktop**](#mate)
- [**Xfce - Lightweight desktop**](#xfce)
- [**GNUstep - Alternative/unique desktop**](#gnustep)

### Desktop Utilities

- [**Chromium - Web browser**](#chromium)
- [**GIMP - Image editor**](#gimp)
- [**QuiteRSS - RSS and Atom news feeds reader**](#quiterss)
- [**Xfce4 Power - Power manager with brightness**](#xfce4-power)

??? info "How do I run **DietPi-Software** and install **optimised software** ?"
    To install any of the **DietPi optimised software** listed below run from the command line:

    ```
    dietpi-software
    ```

    Choose **Software Optimised** and select one or more items. Finally click on `Install`. DietPi will do all the necessary steps to install and start these software items.

    ![DietPi software](../assets/images/dietpi-software.jpg)

    To see all the DietPi configurations options, review [DietPi Tools](../../dietpi_tools) section.

[Return to the **Optimised Software list**](../../dietpi_optimised_software)

## LXDE

LXDE is highly optimized and ultra lightweight desktop. It works well with computers on the low end of the performance spectrum such as new generation netbooks and small computers, or older resource-constrained machines.

=== "Quick start"
    After installation, desktop can be run by typing

    ```
    startx
    ```

=== "Enable autostart"
    To start different programs when the SBC starts, run from the command line:

    ```
    dietpi-autostart
    ```

    To see all the DietPi configurations options, review [DietPi Tools](../../dietpi_tools) section.

=== "Official documentation"
    [LXDE Website](https://www.lxde.org) - [LXDE Wiki](https://wiki.lxde.org/en/Main_Page)

![DietPi LXDE](../assets/images/dietpi-software-LXDE_desktop.jpg)

## LXQt

Optimized lightweight desktop without the bloatware. Slick and fluid GUI, however, more resource heavy than LXDE.

=== "Quick start"
    After installation, desktop can be run by typing

    ```
    startx
    ```

=== "Enable autostart"
    Using `dietpi-autostart` you can have DietPi boot directly to the desktop

=== "Official documentation"
    [LXQt Wiki](https://wiki.debian.org/LXQt)

![DietPi LXQt](../assets/images/dietpi-software-LXQt_desktop.png)

Source: [LXQt](https://lxqt.github.io/screenshots/), CC BY-SA 3.0, [wikimedia](https://commons.wikimedia.org/w/index.php?curid=52420839).

## MATE

Popular Gnome2 based desktop environment.

=== "Quick start"
    After installation, desktop can be run by typing

    ```
    startx
    ```

=== "Enable autostart"
    Using `dietpi-autostart` you can have DietPi boot directly to the desktop

=== "Official documentation"
    [MATE Desktop website](https://mate-desktop.org/)

![DietPi LXDE](../assets/images/dietpi-software-mate-desktop.jpg)

## Xfce

=== "Quick start"
    After installation, desktop can be run by typing

    ```
    startx
    ```

=== "Enable autostart"
    Using `dietpi-autostart` you can have DietPi boot directly to the desktop

=== "Official documentation"
    [Xfce website](https://wiki.debian.org/Xfce)

![DietPi Xfce](../assets/images/dietpi-software-xfce-desktop.jpg)

## GNUstep

=== "Quick start"
    After installation, desktop can be run by typing

    ```
    startx
    ```

=== "Enable autostart"
    Using `dietpi-autostart` you can have DietPi boot directly to the desktop

=== "Official documentation"
    [GNUstep website](http://gnustep.org/)

![DietPi GNUstep](../assets/images/dietpi-software-gnustep-desktop.jpg)

## Desktop utilities

### Chromium

#### Does my device support GPU acceleration?

Not all devices support GPU acceleration with Chromium.

- RPis supports native OpenGL and will be configured during installation.
- Odroids support OpenGLES and will be configured during installation.
- Other devices will most likely be limited to software rendering.

#### Where can I check the status of GPU acceleration?

Once Chromium is running, simply go to the following address: <chrome://gpu>

#### Enable support for Widevine DRM protected content on RPi

- Manually: [https://blog.vpetkov.net/2019/07/12/net ... -chromium/](https://blog.vpetkov.net/2019/07/12/netflix-and-spotify-on-a-raspberry-pi-4-with-latest-default-chromium/)
- with scripts: [https://blog.vpetkov.net/2020/03/30/ras ... many-others/](https://blog.vpetkov.net/2020/03/30/raspberry-pi-netflix-one-line-easy-install-along-with-hulu-amazon-prime-disney-plus-hbo-spotify-pandora-and-many-others/)

![DietPi GIMP](../assets/images/dietpi-software-desktop-tools-chromium.jpg)

### GIMP

MS Paint on steroids. If you need to edit pixels with a vast number of tools, GIMP is the only program you'll need.

![DietPi GIMP](../assets/images/dietpi-software-desktop-tools-gimp.jpg)

<https://www.gimp.org/>

### QuiteRSS

QuiteRSS is a open-source cross-platform RSS / Atom news feeds reader, with the main idea to be fast and comfortable to the end-user.

![DietPi QuiteRSS](../assets/images/dietpi-software-desktop-tools-quiterss.jpg)

### Xfce4 Power

Enables laptop users to set up a power profile for two different modes `on battery power` and `on AC Power` while still allowing desktop users to at least change the DPMS settings and CPU frequency using the settings dialogue.

![DietPi Xfce4 Power manager](../assets/images/dietpi-software-desktop-tools-xfce4-power-manager.jpg)

[Return to the **Optimised Software list**](../../dietpi_optimised_software)

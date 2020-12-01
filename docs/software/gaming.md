# Gaming & Emulation

## Overview

- [**OpenTyrian - open-source port of the DOS game Tyrian**](#opentyrian)
- [**Cuberite - Fast Minecraft server with web interface**](#cuberite)
- [**MineOS - Multiple Minecraft servers with web interface**](#mineos)
- [**Nukkit - Server for Minecraft Pocket Edition**](#nukkit)
- [**Amiberry - Amiga emulation system**](#amiberry)
- [**DXX-Rebirth - Descent 1 and 2 OpenGL port**](#dxx-rebirth)
- [**Steam - Steam client**](#steam)
- [**PaperMC - Fast and optimized Minecraft server**](#papermc)

??? info "How do I run **DietPi-Software** and install **optimised software** ?"
    To install any of the **DietPi optimised software** listed below run from the command line:

    ```
    dietpi-software
    ```

    Choose **Software Optimised** and select one or more items. Finally click on `Install`. DietPi will do all the necessary steps to install and start these software items.

    ![DietPi software](../assets/images/dietpi-software.jpg)

    To see all the DietPi configurations options, review [DietPi Tools](../../dietpi_tools) section.

[Return to the **Optimised Software list**](../../dietpi_optimised_software)

## OpenTyrian

Tyrian is an arcade-style vertical scrolling shooter.  The story is set
in 20,031 where you play as Trent Hawkins, a skilled fighter-pilot employed
to fight MicroSol and save the galaxy.

![DietPi gaming software OpenTyrian](../assets/images/dietpi-software-games-opentyrian.jpg){: style="width:500px"}

=== "Start the game"

    If you did not select OpenTyrian to start from boot:

    - Console = OpenTyrian can also be run by typing `opentyrian`.
    - Desktop = Use the OpenTyrian icons available in the start menu and desktop.

    You can modify the AutoStart options in `dietpi-autoStart`.

=== "Personal Note"

    Tyrian (OpenTyrian) if not the best game in the world, is the best top down shooter/scroller game ever created.  
    OpenTyrian is best experienced by using a mouse and the Enter key to change rear fire mode.  
    Its old, retro, and a classic etc, but I doubt you will to find a recent and similar game that is anywhere close to OpenTyrian addictiveness.

## Cuberite

Cuberite allows you to create a single, blazingly fast Minecraft server, which utilizes the performance benefits of C++ (instead of Java). Also comes with a handy web interface.

![DietPi gaming software Cuberite](../assets/images/dietpi-software-games-cuberite.png){: style="width:500px"}

=== "Access the web interface"

    - URL= `http://<your.IP>:1339` (replace with your DietPi's local IP)
    - Username = `admin`
    - Password = your global password

=== "Tweaking"

    Tweak the server settings by modifying the following files: (yes we recognised the typo which will be fixed with DietPi v6.33 ;))

    - general server settings

        ```
        /mnt/dietpi_userdata/cubrite/settings.ini
        ```

    - settings for the web administration

        ```
        /mnt/dietpi_userdata/cubrite/webadmin.ini
        ```

    - settings for the world

        ```
        /mnt/dietpi_userdata/cubrite/world/world.ini
        ```

=== "Restart service"

    You can restart the service by running:

    ```
    systemctl restart cuberite
    ```

=== "View logs"

    - Log files: ``/mnt/dietpi_userdata/cubrite/logs/``
    - Service logs: `journalctl -u cuberite`

=== "Update"

    Update to newest version:

    ```
    dietpi-software reinstall 52
    ```

## MineOS

MineOS allows you to create multiple Minecraft servers with ease, using a simple web interface.

![DietPi gaming software MineOS](../assets/images/dietpi-software-games-mineos.png){: style="width:500px"}

=== "Access to web interface"

    - URL = `https://<your.IP>:8443`  
      You can safely ignore the certificate "warning" if one appears.
    - username = `root` (v6.11 and lower `mineos`)
    - password = <your global application password\>

=== "1st run setup"

    Once logged into the web interface:

    1. Click profiles on the left hand side of screen
    2. Choose a Minecraft version to match your needs, then click download
    3. Click create new server on the left hand side of screen
    4. Enter a server name, then click create new server at the bottom
    5. Your server will now be visible at the bottom of the dashboard screen, select it
    6. In the drop down boxes `Change profile to:` and `Change runnable jar to:` select the entry which contains the server version number you downloaded in profiles
    7. Click accept EULA
    8. Click accept EULA again
    9. Click Start

    Your server should now be running, on the default port 25565.

## Nukkit

Nukkit is Java based server for Minecraft Pocket Edition.

![DietPi gaming software Nukkit](../assets/images/dietpi-software-games-nukkit.png){: style="width:500px"}

=== "Info"

    Nukkit by default runs a single server, available on LAN.

=== "Tweaking"

    Tweak the server settings by modifying the following file:  
    `/usr/local/bin/nukkit/server.properties`

=== "Restart service"

    You can restart the service by running:  
    `dietpi-services restart`

## Amiberry

Amiberry is an optimised Amiga emulator for the Raspberry PI and other ARM-based SoCs, that brings you the highest performance Amiga emulation. Be it a classic A500, A1200, CD32 or up to a high-end model equipped with a 68040 and a graphics card, we have got you covered.

This installation is possible due to a collaboration with Dimitris Panokostas (Amiberry) and Daniel Knight (DietPi).

- Keyboard + Mouse is highly recommended.
- We also offer a completely automated installation image for Amiberry. Please see: <https://blitterstudio.com/amiberry/>.
- Direct download link: <https://dietpi.com/downloads/images/DietPi_RPi-ARMv6-Buster_Amiberry.7z>.

![DietPi gaming software Amiberry](../assets/images/dietpi-software-games-amiberry.jpg){: style="width:500px"}

### Setup steps

=== "First Run Setup"

    - Kickstarts (Amiga BIOS/boot system)  
      Amiga Kickstart ROM images are required to run the system(s) you want to emulate. These can not be bundled due to copyright restrictions.  
      If you own the Amiga Forever product, you can legally download and use Kickstarts you are eligible for, from: <https://www.amigaroms.com/>.  
      **Remark:** *Kickstart 1.3 (A500-A2500-A3000-CDTV) is highly recommended to work with most games.*  
      Kickstarts need to be placed in `/mnt/dietpi_userdata/amiberry/kickstarts`
    - Floppy disks (Amiga .adf images)  
      Amiga's floppy disk images have a .adf file extension.  
      You will need obtain at least one ADF image to start your Amiga experience.  
      Load your ADF from or place them where every you want it, e.g. create and use:  
      `/mnt/dietpi_userdata/amiberry/floppy_images`  
      To allow uploads via file servers, remember to grant required permissions, e.g.:  
      `chown dietpi:dietpi /mnt/dietpi_userdata/amiberry/floppy_images`

=== "Starting"

    - Amiberry can be started by running `systemctl start amiberry`
    - Optionally, you can enable Amiberry autostart to boot straight into the Amiga environment as fast as possible, with the least possible interference from Linux.  
      Simply run `dietpi-autostart` and select *Amiberry fast boot* then reboot your system.  
      If you face issues with the fast boot option or need to have other service starting up first, use Amiberry standard boot.

=== "Create an Amiga configuration"

    Once Amiberry is running, you will need to configure the emulator, to tell it which Amiga system to emulate.

    - Select `Quickstart` (from the left hand side menu)
    - Under Amiga model: Select the Amiga model you'd like to emulate (example A500)
    - Under Config: Select the additional options for the target Amiga model (if required)
    - Click the Set configuration, button to apply changes.

    Next you will need to setup the emulator for the Kickstart and Floppy disk image you wish to use:

    - Select a Kickstart (ROM):
      - On the left hand side, select ROM.
      - Under Main ROM File:, click the browse button (3 dots) ...
      - Navigate to your Kickstarts directory  
        `/mnt/dietpi_userdata/amiberry/kickstarts`  
        Remark: Amiberry does not currently support symbolic links. If you have a dedicated USB drive installation, the location is:  
        `/mnt/uuid-of-drive/amiberry/kickstarts`
      - Select a Kickstart (1.3 is recommended)

    - Select a Floppy disk image (ADF):
      - On the left hand side, select Floppy drives.
      - Under `DF0:`, select the browse button the right hand side (3 dots) ...
      - Navigate to your Floppy image directory, e.g.   
        `/mnt/dietpi_userdata/amiberry/floppy_images`  
        Remark: Amiberry does not currently support symbolic links. If you have a dedicated USB drive installation, the location is:  
        `/mnt/uuid-of-drive/amiberry/floppy_images`
      - Select the ROM you wish to use.

=== "Enable Fullscreen output"

    On the left hand side, select Display.  
    Ensure the Fullscreen option is enabled.

### Optional configurations

=== "Set CPU speed to fastest (recommended)"

    This will emulate the Amiga as fast as possible, ensuring you get the maximum FPS for your SBC hardware.

    - On the left hand side, select CPU and FPU.
    - Under CPU Speed, select the fastest option.
    - If you find this change slows down the emulation, try using the fixed value of 25 MHz

=== "Save configuration (recommended)"

    It is recommended to save your settings. This will ensure the settings are applied on next startup of Amiberry

    - On the left hand side, select Configurations.
    - Enter the name, e.g. autostart, then click Save

**Good to GO!**  
When ready, select Start to launch the emulator. Have fun!

### FAQ

#### How can I transfer Kickstarts & Floppy Images to the device?

Make sure you have one of DietPi's File Servers installed.

- Floppy Disk Image (.adf) directory as chosen before, e.g. `/amiberry/floppy_images`
- Kickstarts (.rom) directory = `/amiberry/kickstarts`

#### How can I open the configuration window once the emulator has started?

The pre-defined key for that is F12.

#### How can I reboot the Amiga emulation environment (Amiga reset)?

Use Ctrl + Left Windows + Right Windows keys.  
If you don’t have a Right Windows key, try using the menu key instead.

#### What are the default controls for Joystick, when using a Keyboard?

When using a keyboard, the default joystick controls are:

- Arrow Keys = Up/Down/Left/Right  
- Page Down = Fire/Button 1  
- Page Up= Fire/Button 2  

#### How can I improve performance (frame rate)?

A ***lower resolution*** may improve performance on most games. From the emulator main menu:

- On the left hand side, select Display  
- 640x256 is high resolution  
- 320x256 is low resolution and should provide improved performance  

***Overclocking*** your system will improve performance. Stability may vary across devices and overclocking is not officially supported:  

- From a terminal, run dietpi-config
- Select the Performance Options menu
- Select Overclocking Profiles
- Select an overclocking profile, then reboot the system

#### How do i set the floppy drive speed for compatibility?

Floppy drive emulation is to set to "800 %" by default. This reduces loading times by up to 8x.  
You can lower this to 100 %, increasing compatibility:

- On the left hand side, select Floppy Drives
- Change the Floppy Drive Emulation Speed value to 100 %

#### Some games are not in full screen

Games run at various resolutions, from the emulator main menu:

- On the left hand side, select Display
- Change the Height value to 200 or 256
- Press the Resume or Start button

If you find this installation useful, please donate.
All donations using this link will be split 50/50 between Dimitris Panokostas (Amiberry) and Daniel Knight (DietPi).  
[PayPal Donate](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=69B4QPASRQNNE)

## DXX-Rebirth

Descent 1 & 2. A masterpiece 3D FPS. Brought back to life with the DXX-Rebirth project. Play Descent as true to the original with OpenGL/ES rendering.

- DietPi will install the Demo and Shareware versions of Descent. Please see the FAQ below to transfer the full game.
- Keyboard + Mouse is highly recommended
- We have compiled the latest version of DXX-Rebirth (0.58.1) with support for FB and RPi OpenGL.

![DietPi gaming software DXX-Rebirth](../assets/images/dietpi-software-games-dxxrebirth.png){: style="width:500px"}

=== "Starting DXX-Rebirth"

    DXX-Rebirth can be started by running `dxx-rebirth`.  
    Auto start option is available. Simply run `dietpi-autostart` and select `DXX-Rebith (Descent 1/2)` then reboot your system.

=== "Choosing a Pilot"

    We have created a Pilot called DietPi. The config has been setup for WSAD style play and is recommended for FPS players who use WSAD + Mouse.

    - WSAD = Forward/Backwards/left/right
    - QZ = Up/down
    - ER = Rotate Z (forward) axis
    - F = Launch flare
    - ALT+F2 = Save game

### FAQ

#### How do I transfer the original Descent full game files?

Before you begin, you will need the original game files, from a legal copy and installation of Descent.  
Make sure you have one of DietPi's File Servers installed.

- Copy your Descent 1 Game files to `/mnt/dietpi_userdata/dxx-rebirth/descent_1_game`
- Copy your Descent 2 Game files to `/mnt/dietpi_userdata/dxx-rebirth/descent_2_game`

#### Where can I find more information on the DXX-Rebirth project?

<http://www.dxx-rebirth.com/>

## Steam

![DietPi gaming software Steam](../assets/images/dietpi-software-games-steam.jpg){: style="width:500px"}

### Installation notes

- Steam is installed to the DietPi user data directory `/mnt/dietpi_userdata/steam`
- By default, installing games will install them to `/mnt/dietpi_userdata/steam`

## PaperMC

A highly optimized Minecraft server with plugins, written in Java.  
PaperMC by default runs a single server, available on LAN, but can be port forwarded so other people can connect.

![DietPi gaming software PaperMC](../assets/images/dietpi-software-games-papermc.jpg){: style="width:150px"}

=== "Default server/query port"

    - The default server/query port is: `25565`

=== "Console access via rcon"

    - Port: `25575`
    - Password: `<globalSoftwarePassword>` (default: `dietpi`)
    - From DietPi: `mcrcon -p <globalSoftwarePassword>`

=== "File locations"

    - Install directory: `/opt/papermc`
    - Config/data directory: `/mnt/dietpi_userdata/papermc`
    - Main configuration file: `/mnt/dietpi_userdata/papermc/server.properties`

=== "View logs"

    - Service: `journalctl -u papermc`
    - File: `/var/log/papermc/latest.log`

=== "Tweaking"

    Tweak the server settings by modifying the following file or any file that ends in `.yml`:  
    `/opt/papermc/server.properties`

=== "Restart service"

    You can restart the service by running:  
    `systemctl restart papermc`

=== "Update to latest version"

    `dietpi-software reinstall 181`

See also <https://paper.readthedocs.io/> resp. <https://github.com/PaperMC/Paper>.

### FAQ

#### How do I interface with the server's console?

Use the installed tool MCrcon: `mcrcon -p GLOBAL_PW`.

#### How do I find and install plugins?

<https://www.spigotmc.org/resources/categories/spigot.4/>

Just move the downloaded JAR file to the `/opt/papermc/plugins` directory.

#### What version of Minecraft does this work on

PaperMC is built to run on Java edition, however with the optional Geyser and Floodgate plugins, it can run on Bedrock edition as well.

Just choose to install them at the beginning.

[Return to the **Optimised Software list**](../../dietpi_optimised_software)

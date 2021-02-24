# DietPi Tools

## DietPi launcher

It provides an easy access to all DietPi OS tools, and it could be accessed by running next command:

```sh
dietpi-launcher
```

![DietPi-Launcher screenshot](assets/images/dietpi-launcher.jpg)

## DietPi software

`dietpi-software` will be automatically displayed on the first login after the installation. It can be accessed at any time running next command:

```sh
dietpi-software
```

It is one of the core tools, enabling you to install or uninstall one or more [**DietPi optimised software**](../software/) titles.

![DietPi-Software screenshot](assets/images/dietpi-software.jpg)

### Software overview

=== "Software Optimised"

    - Begin by selecting **Software Optimized** in the main menu list and hit ++enter++.

    - Scroll through the list of available software - for more details check [DietPi Optimised Software](../software/).

    The list of optimised software is long. You either browse the list or use the option **Search**.

    - To install software on your DietPi, select it in the list and press ++space++ to add it to the installation list. If you change your mind, hit ++space++ again to remove it.

    - Once you’ve selected the software you wish to install, press ++tab++ to switch to the confirmation options at the bottom. Select **OK**, then hit ++enter++ to confirm.

    - To begin installing your software, select **Install** from the main menu list, then hit ++enter++. DietPi will ask you to confirm your choice(s). Select **OK**, then hit ++enter++ to begin the installation.

    The software you selected will begin to install at this point. Once the process is completed, you may be asked to restart your device. Press **OK** to confirm.

    ![DietPi-Software Software Optimised menu screenshot](assets/images/dietpi-software-optimised.jpg)

=== "Software Additional"

    This section provides:

    - software packages that are often used and installed via `apt install <package>`, without additional optimisation from DietPi team.
    - _or_ packages not directly required, but pulled as a dependency, like: build tools, libraries or runtime systems. E.g. packages like *Python3*, *pip*, *tcpdump* or *midnight commander* can be installed using the dialog.

    ![DietPi-Software Software Additional menu screenshot](assets/images/dietpi-software-additional.jpg){: width="640px"}

=== "Search"

    DietPi supports a large number of software titles. Instead of scrolling through the **Software Optimised** list to find a specific software title, you may use the **Search** option. Type in the software ID or any keyword form its title or description and you'll get a list filtered by matching results.

    ![DietPi-Software Search menu screenshot](assets/images/dietpi-software-search.png)

---

### Quick selections

=== "SSH Server"

    This lets you select your preferred SSH server. Also you can uninstall any SSH server to save memory and to exclude any external ssh based access.

    ![DietPi-Software SSH Server menu screenshot](assets/images/dietpi-software-ssh-selection.jpg){: width="550px"}

=== "File Server"

    DietPi-Software allows you to easily choose a method of **accessing the files** on your DietPi system.
    Installing one of DietPi's file server choices will allow you to access and share files on your DietPi system.

    DietPi will then automatically install and setup the file server for you. DietPi will also clean and remove any previous file server from your system.

    The **default destination** directory for file servers is `/mnt/dietpi_userdata`.

    The reasons for choosing **ProFTPD** over **Samba** may be:

    - ProFTPD outperforms Samba in all aspects of performance.
    - ProFTPD can max out the RPi 100 Mbit connection with minimal CPU usage.
    - Samba server on a RPi v1 will hit 100% CPU usage at 40 Mbit transfer rate.

    ![DietPi-Software File Server menu screenshot](assets/images/dietpi-software-fileserver-selection.jpg){: width="550px"}

    See [file servers overview](../software/file_servers/) for further information.

=== "Log System"

    Various logging methods can be selected from lightweight to full.
    If you don’t require log files, get a performance boost. If you need full system logging features, DietPi can do that too.

    The Log System can be changed at any time by selecting a different “Log System” from the menu.

    ![DietPi-Software Log System menu screenshot](assets/images/dietpi-software-log-system-selection.jpg){: width="550px"}

    See also <https://dietpi.com/docs/software/log_system/>.

=== "Webserver Preference"

    The DietPi **Webserver Preference** system allows you to choose your favourite webserver for use in DietPi installations. If not decided, read more on [Which WEBSERVER to CHOOSE ?](../software/webserver_stack/#which-web-application-stack-is-best-for-you)

    !!! hint "Automatic selection"

        When you select any software for installation that requires a webserver (e.g. Pi-hole, Nextcloud, Webmin, installed via *Software Optimized*), DietPi will automatically install, configure and optimize your chosen *Webserver Preference*.  

        As a result you will not need to manually select/install a webserver stack. DietPi will do it all for you.

    ![DietPi-Software Webserver Preference menu screenshot](assets/images/dietpi-software-webserver-preference.png){: width="550px"}

=== "User Data Location"

    In DietPi, we class user data as:

    - **Data storage for applications**. Some examples are ownCloud/Nextcloud data store, BitTorrent downloads and SQL data store.
    - The location where your **File Server** choice will point to, if you install one, like Samba Server or ProFTPD.
    - The location where you can upload and store your **media content**, for other applications to use, like Kodi, Emby or Plex.

    For all software you install in dietpi-software, you can access your user data with `/mnt/dietpi_userdata`. Regardless of where the data is physically stored, a symlink will automatically be created for you if needed.  
    To check where the physical location is, you can run the following command:  

    ```sh
    readlink -f /mnt/dietpi_userdata
    ```

    You can **move your user data** to another location (e.g. USB drive). Simply run `dietpi-software` and enter the *User data location* menu option:

    - If you need to setup a new external drive, select *Drive Manager* to launch *DietPi-Drive Manager*.
    - Use the *List* option to select from a list of mounted drives, or, select *Manual* for a custom location.

    DietPi will automatically move your existing user data to your new location.

    ![DietPi-Software User Data Location menu screenshot](assets/images/dietpi-software-user-data-location-selection.jpg){: width="550px"}

---

### Install or remove software

=== "Install"

    Install software item(s) which have been selected via **Optimised Software** or **Additional Software** lists, or via **SSH Server**, **File Server** or **Log System** choices.

=== "Uninstall"

    Select one or more software items which you would like to be removed from your DietPi system.

=== "Command line based installation"

    Beside the interactive software installation via `dietpi-software` with checking wanted software packages and installing them, there is the option of installing the software packages via the shell command line.  
    The usage of `dietpi-software` is:

    ```bash
    Usage: dietpi-software [<command> [<software_id>...]]
    Available commands:
      <empty>     Interactive menu to install or uninstall software
      install     <software_id>...  Install each software given by space-separated list of IDs
      reinstall   <software_id>...  Reinstall each software given by space-separated list of IDs
      uninstall   <software_id>...  Uninstall each software given by space-separated list of IDs
      list        Print a list with IDs and info for all available software titles
      free        Print an unused software ID, free for a new software implementation
    ```

    The <software_id\> which has to be given is the one which is present in the software list within the `dietpi-software` dialogues:

    ![DietPi-Tools command line installation](assets/images/dietpi-tools-command-line-installation.png){: width="400px"}

    E.g. to install Chromium, LXQt and GIMP you have to execute:

    ```sh
    dietpi-software install 113 173 174
    ```

---

### DietPi LetsEncrypt

Access the frontend for the `Let's Encrypt` integration.  
Run `dietpi-letsencrypt`.

In case of a non installed Certbot package it is installed at first:

![DietPi-LetsEncrypt screenshot](assets/images/dietpi-letsencrypt.jpg)

In the installation dialog some entries have to be made which are needed for the certificate (domain, Email), the other entries are configuration options. It is recommended to leave the key size at 4096 bits.

![DietPi-LetsEncrypt configuration screenshot](assets/images/dietpi-letsencrypt_2.png){: width="640px"}

When you execute the certificate installation it also installs it for your selected web server, i.e. you do not have to edit your web server configuration files, the installation routine does all for you.

!!! info "Port forwarding on your router"
    To be accessible from the internet, typically your router needs a port forwarding configuration to route incoming HTTP and HTTPS accesses to your DietPi system.  
    Although you only need a HTTPS protocol forwarding (typically port 433), you also need to forward the HTTP protocol (typically port 80) to your DietPi system, otherwise the certification renewal procedure will fail (due to the fact that the certification renewal procedure takes place several months later you may have forgotten this issue).

### DietPi NordVPN

Run `dietpi-nordvpn`.

![DietPi-NordVPN screenshot](assets/images/dietpi-nordvpn.jpg)

## System configuration

### DietPi configuration

Configure various system settings, from display / audio / network to _auto start_ options.  
Run `dietpi-config`.

![DietPi-Config screenshot](assets/images/dietpi-config.jpg)

=== "Display Options"

    The display options are used to

    - Set your screen resolution, or go headless to save additional resources.  
    - Control your GPU memory splits.  
    - Enable/disable the RPi camera.

=== "Audio Options"

    The audio options are used to

    - Change sound cards with ease (e.g.: HiFiBerry / Odroid HiFi shield).

=== "Performance Options"

    The performance options are used to

    - Overclock your system with a vast selection of overclocking profiles for your device.
    - Change the CPU governor and tweak your ARM temperature limits.

=== "Advanced Options"

    The advanced options are used to

    - Configure swap file size
    - Update device firmware
    - Toggle serial console
    - Toggle Bluetooth

=== "Security Options"

    The security options are used to

    - Change password and hostname

=== "Language/Regional Options"

    The language/regional options are used to

    - Set timezone, locale and keyboard options. Everything you will need to make it feel like home

=== "Network Options: Adapters"

    The network options are used to

    - Scan and connect to your WiFi router with ease
    - Change to a static IP address on your network
    - Configure your proxy settings
    - Test internet connection
    - Toggle IPv6 support

=== "Network Options: Misc"

    The miscellaneous network options options are used to

    - Select an **APT mirror** to connect to the Debian (or Raspbian) APT repository.
    - Select an **NTP mirror** to synchronise your system time.
    - Choose timeouts for network and URL connection tests.
    - **Network Drives** redirects you to the **DietPi-Drive_Manager** which allows you to mount Samba and NFS shares on your DietPi system.
    - **No-IP** is a [dynamic DNS](https://wikipedia.org/wiki/Dynamic_DNS) provider which allows you to access your home network/server with a static domain name. The client is required to inform No-IP of your current dynamic external IP on a regular basis.

=== "AutoStart Options"

    The autostart options are used to

    - Quickly and easily change what software runs after boot. Kodi, Desktop, console and many more

=== "Tools"

    The tools options are used to

    - Perform CPU, RAM, file system and network **benchmarks**, optionally upload your results and review statistics at: <https://dietpi.com/survey/#benchmark>
    - Perform CPU/IO/RAM/DISK **stress tests** to test the stability of your system, e.g. after applying some overclocking.

---

### DietPi drive manager

Feature-rich drive management utility. It is a lightweight program that allows you to:

- Manage drives: Mount, format external drives
- Maintenance drives: Check and repair drives, resize (expand) file system, change reserved blocks count
- Set drive attributes: Set read only file systems, set idle spindown time
- Move DietPi User data
- Transfer RootFS to external drive (Raspberry Pi and some ODROID boards only)
- Disable swap file, change swap file size
- Run benchmarks on drives

Run `dietpi-drive_manager`.

![DietPi-Drive_Manager screenshot](assets/images/dietpi-drive-manager.jpg)

=== "Setup a dedicated drive for DietPi"

    To use an additional drive (example USB drive) the following steps have to be done:

    1. Run `dietpi-drive_manager` to bring up the main menu.
    1. Plug in the drive you wish to use.
    1. Select `Refresh` from the menu (if it doesn't show up straight away, give it a few seconds for system to update, then try again).
    1. Select the drive you wish to use from the list, then press ++enter++.

        ![DietPi-Drive_Manager screenshot](assets/images/dietpi-drive-manager_2.png){: width="600px"}

        If needed, format the drive before usage selecting the `Format` option (file system type description see below).  
        Remark: Formatting drives can only be done unmounted.

        If needed, mount the drive via the `Mount` selection. If mounted, commands `Unmount`, `Benchmark`, `User data`, `Swapfile` and `Read only` are present.

        ![DietPi-Drive_Manager screenshot](assets/images/dietpi-drive-manager_3.png){: width="600px"}

=== "Move the location of user data and swap file"

    You can move the location of the DietPi user data (default `/mnt/dietpi_userdata`) or the swap file to a different location on a target drive. This may be useful if your file system containing the DietPi user data resp. swap file has only little space left.
    Therefore execute the following steps (example user data, swap file is quite similar):

    1. Run `dietpi-drive_manager` to bring up the main menu.
    1. Have the target drive connected and mounted (see description above).
    1. Select the target drive and press ++enter++.
    1. In the drives menu select `User data` resp. `Swapfile` and follow the instructions.

        - Move user data:

        ![DietPi-Drive_Manager screenshot](assets/images/dietpi-drive-manager_4.png){: width="500px"}

        - Change swap file size:

        ![DietPi-Drive_Manager screenshot](assets/images/dietpi-drive-manager_5.png){: width="500px"}

=== "Format file system types"

    Formatting file systems lead you to these dialogues:

    ![DietPi-Drive_Manager screenshot](assets/images/dietpi-drive-manager_6.png){: width="500px"}
    ![DietPi-Drive_Manager screenshot](assets/images/dietpi-drive-manager_7.png){: width="500px"}

    In the latter dialog you have to choose the file system type. The following selections may be chosen:

    - `EXT4` (Default)  
      Recommended for users who plan to use this drive solely on the DietPi system (e.g. dedicated drive).  
      `+` The standard for Linux file systems  
      `-` Not compatible on a Windows system

    - `NTFS`  
      Recommended for users who plan to use this drive on a Windows system.  
      `+` Compatible on a Windows system  
      `-` High CPU usage during transfers (spawns a process)

    - `FAT32`  
      Recommended for users who want high compatibility across multiples operating systems.  
      `+` Highly compatible with all OS  
      `-` 4GB file size limit  
      `-` 2TB drive size limit  
      `-` Does not support file/folder permissions  
      `-` Does not support symbolic links

    - `HFS+`  
      Recommended for Mac owners.  
      `+` Mac OS file system

    - `BTRFS`  
      A modern Linux file system.  
      `+` <https://github.com/Fourdee/DietPi/issues/271#issuecomment-247173250>

    - `F2FS`  
      Linux file system designed for flash/NAND based drives.  
      `+` Flash-Friendly File System: <https://en.wikipedia.org/wiki/F2FS>

    - `exFAT`  
      Windows file system, intended for external drives, e.g. USB flash drives or SD cards  
      `+` Flash-Friendly File System: <https://en.m.wikipedia.org/wiki/ExFAT>

=== "Move DietPi system to a larger SD card"

    If you want to extend your DietPi SD card space by moving the system to a larger memory card, this can be achieved by the following steps:

    1. Shutdown your system and put the SD card into a card reader of a different systems.
    1. Copy the SD card contents to the new (larger) SD card. This can e.g. be done using
        - the `dd` command (command line option)
        - [`balenaEtcher`](https://etcher.io/) or [`Rufus`](https://rufus.ie/) (graphical user interface option)
        - `gnome-disks` (graphical user interface option)
    1. Boot the system with the copied memory card.
    1. Run `dietpi-drive_manager` to bring up the main menu.
    1. Select the disk containing the root (`/`) partition and press ++enter++.
    1. Select `Resize` and press ++enter++.

        ![DietPi-Drive_Manager screenshot](assets/images/dietpi-drive-manager_8.png){: width="500px"}

    1. Reboot your system to expand the root file system to use the whole space of the new memory card.

    A similar procedure may be used when moving the SD card contents to a smaller SD card. During this procedure you typically need to shrink the partition size (e.g. with `parted` or `gparted`) before copying the partition image to a different memory card. Also, do the resize to use the full space on the new card.

---

### DietPi autostart

Defines software packages to start when the DietPi OS boots up. Example, boot into the desktop with Kodi running.  
Run `dietpi-autostart`.

![DietPi-Autostart screenshot](assets/images/dietpi-autostart.jpg)

!!! info "Autostart option in `dietpi.txt` (first initial boot)"
    When booting the DietPi system the first time, the autostart option can also be set via the file `dietpi.txt`. See option  
    `AUTO_SETUP_AUTOSTART_TARGET_INDEX=`  
    for further information.  
    The numbers shown on the left in the `dietpi-autostart` command correspond to the values in `dietpi.txt`.

### DietPi services

Provides service control, priority level tweaks and status print.  
Run `dietpi-services`.

![DietPi-Services screenshot](assets/images/dietpi-services.jpg)

The dialog to tweak a service is entered by highlighting the service (keys ++arrow-up++ and ++arrow-down++) and pressing ++enter++. The configuration dialog (example: cron service) looks like this:

![DietPi-Services tweaking screenshot](assets/images/dietpi-services_2.png){: width="640px"}

!!! caution "Be careful at tweaking the services."

### DietPi LED control

Change triggers for the status LEDs on your SBC/motherboard.  
Run `dietpi-led_control`.

![DietPi-LED_control screenshot](assets/images/dietpi-ledcontrol.jpg)

Depending on your used hardware, the number of entries in the dialog will change.

### DietPi cron

Modify the start times of specific cron job groups.  
Run `dietpi-cron`.

![DietPi-Cron screenshot](assets/images/dietpi-cron.jpg)

### DietPi JustBoom

Change the audio settings.  
Run `dietpi-justboom`.

If the sound output is configured, the following dialog appears:

![DietPi-JustBoom screenshot](assets/images/dietpi-justboom_2.jpg)

If no sound output is configured, the following dialog appears:

![DietPi-JustBoom screenshot](assets/images/dietpi-justboom.jpg)

In this case you have to e.g. install a sound program package via `dietpi-software` or configure the sound output e.g. via `dietpi-config`.

### DietPi survey

DietPi Survey allows the DietPi project to obtain general information regarding your system and installed software.

???+ important "Privacy and goals"

    The following privacy rules and goals are considered:

    - No private data is sent. No one can identify you. No IP address is obtained.
    - DietPi Survey is an ***Opt-in*** system, which means that it won't send any data without your explicit interactive permission.
    - On your first interactive login on a fresh DietPi system, you will be asked once for the *Opt-in*/*Opt-out* mode.
    - The transmitted data allows the DietPi project team to achieve the best future possible experience for everyone to
        - focus and improve especially popular areas,
        - ensure the most common devices and software titles will receive support and improvements,
        - keep up support for software and hardware that you use.

    **In short words:** By selecting ***Opt IN***, you are supporting the DietPi project with no impact to your system or private data.

![DietPi Survey screenshot](assets/images/dietpi-survey.jpg)

=== "Data transmission events"

    The DietPi Survey data file is sent when you install software with `dietpi-software` and update DietPi with `dietpi-update`.

=== "Uploaded amount of data"

    The uploaded data is tiny (about 1 KB) and will not affect your internet bandwidth or system performance.

=== "Transmitted data contents"

    Within the command line program `dietpi-survey` the exact copy of the transmitted data can be viewed. The transmitted file is written in bash code to allow us faster report page creation (e.g. done for <https://dietpi.com/survey>).

    Following is an example how this file may look like:

    ```sh
    #!/bin/bash
    ((aDIETPI_VERSION[6.34]++))
    ((aGIT_BRANCH[MichaIng/master]++))
    ((aDEVICE_NAME[Virtual Machine (x86_64)]++))
    ((aCPU_ARCH[x86_64]++))
    ((aCPU_COUNT[2]++))
    ((aDISTRO_VERSION[buster]++))
    ((aAUTOSTART_OPTION[${aAUTOSTART_NAME[0]:=0}]++))
    ((aAUTO_SETUP_AUTOMATED[0]++))
    ((aNETWORK_INTERFACE[eth0]++))
    # -------------------------
    # DietPi-Software installs
    # -------------------------
    ((aSOFTWARE[${aSOFTWARE_NAME6_34[103]:=103}]++))
    ((aSOFTWARE[${aSOFTWARE_NAME6_34[104]:=104}]++))
    ```

    The tail of the file lists installed software packages by their IDs. The example above shows a very basic system, so only two software packages (`#103`: DietPi-RAMlog, `#104`: Dropbear) are installed.
    To find out the names of the installed software package IDs installed via `dietpi-software` you can execute

    ```sh
    dietpi-software list | grep ' =2'
    ```

    This gives the IDs, names and info of software. The above example would show

    ```sh
    # dietpi-software list | grep ' =2'
    id 103 | =2 | dietpi-ramlog: minimal, optimised logging | | https://dietpi.com/docs/software/log_system/#dietpi-ramlog
    id 104 | =2 | dropbear: lightweight ssh server | | https://dietpi.com/docs/software/ssh/#dropbear
    ```

=== "Selecting Opt-in or Opt-out"

    You can select ***Opt-in*** or ***Opt-out*** of DietPi Survey by running the following command and follow the instructions:

    ```sh
    dietpi-survey
    ```

    This may also be achieved by setting `SURVEY_OPTED_IN=0` (*Opt-out*) or `SURVEY_OPTED_IN=1` (*Opt-in*) in `/boot/dietpi.txt` before the first system boot.

    To check the actual status, `dietpi-survey` may be called. The current mode will be pre-selected and highlighted.  
    Alternatively you can use

    ```sh
    grep 'SURVEY_OPTED_IN' /boot/dietpi.txt
    ```

    which displays the status like

    ```
    # grep 'SURVEY_OPTED_IN' /boot/dietpi.txt
    SURVEY_OPTED_IN=1
    ```

---

## System maintenance

### DietPi update

Update DietPi OS version to the latest version available and informs when updates for `apt upgrade` are available.  
Run `dietpi-update`.

### DietPi cleaner

Clean up not necessary files from the operating system and free up valuable disk space.  
Think of it as lightweight CCleaner for DietPi and Linux.  
Run `dietpi-cleaner`.

![DietPi-Cleaner screenshot](assets/images/dietpi-cleaner.jpg)

By simulating the cleaner process (via menu entry `Test`) you get a preview of the deletions the cleaner does before you start the cleaning process (via menu entry `Run`).

#### Cleaner Types

DietPi-Cleaner uses modules which you can be switched on or off before running the cleaning process. Select them via the main menu entry `Cleaners`.

![DietPi-Cleaner types screenshot](assets/images/dietpi-cleaner_2.png){: width="640px"}

#### Files cleaner

The files cleaner allows you to customize a list of filenames to search and remove, during the cleaning process. Select them via the main menu entry `Files`.

![DietPi-Cleaner types screenshot](assets/images/dietpi-cleaner_3.png){: width="640px"}

### DietPi log clear

Clear log files in `/var/log/`.  
Run `dietpi-logclear`.

![DietPi-LogClear screenshot](assets/images/dietpi-logclear.jpg)

### DietPi backup (backup/restore)

Fully backups DietPi setup. It also includes the restore capability from an already made DietPi backup.  
`DietPi-Backup` allows you to Backup and Restore your DietPi system. Same effect as *Windows system restore*. A snapshot of the system that you can restore at any time.  
You can also customize which files/folders are included and excluded through the GUI.

If you have *broken* your system, or want to reset your system to an earlier date, this can all be done with `DietPi-Backup`. Just make sure you create a backup first.  
Run `dietpi-backup`.

![DietPi-Backup screenshot](assets/images/dietpi-backup_1.png)

Remark: In the case that `rsync` is not installed, it is installed.

!!! info "DietPi-Backup is purely based on `Rsync`"

### DietPi file explorer

Lightweight file manager and explorer.  
Run `dietpi-explorer`.

![DietPi-Explorer screenshot](assets/images/dietpi-explorer.jpg)

### DietPi sync

DietPi-Sync allows you to duplicate a directory from one location (*Source Location*) to another (*Target Location*).  
Run `dietpi-sync`.

![DietPi-Sync screenshot](assets/images/dietpi-sync.jpg)

Example: If you want to duplicate (sync) the data on your external USB HDD to another location, you simply select the USB HDD as the source, then, select a target location. The target location can be anything from a networked samba file server, or even an FTP server.  
Each sync includes a leading dry run, after which you can check the expected result before deciding if you want to continue with the actual sync.

## Misc tools

### Useful DietPi shell functions

There are a couple of general commands which have a shortcut in DietPi:

- `G_OBTAIN_CPU_TEMP` - Prints integer format CPU temp in degree Celsius, for monitoring probably better than full `cpu` output
- `G_OBTAIN_CPU_USAGE` - Prints CPU usage in percent in [x]x.x format
- `G_TREESIZE` - Shows current directory/file sizes, recursively

The following commands are non-interactive, but error-handled wrappers for `apt-get` commands, useful for scripts which shall run non-interactive but allow interactive repeat and solution attempts:

- `G_AGI` - `apt-get install`
- `G_AGP` - `apt-get purge`
- `G_AGA` - `apt-get autoremove --purge`
- `G_AGUP` - `apt-get update`
- `G_AGUG` - `apt-get upgrade`
- `G_AGDUG` - `apt-get dist-upgrade`

### DietPi CPU info

Displays CPU temperature, processor frequency, throttle level etc.  
Run `cpu`.

![DietPi-CPU_info screenshot](assets/images/dietpi-tools-cpuinfo.png)

### DietPi morse code

It converts a text file into morse code.  
Run `dietpi-morsecode`.

### DietPi bug report

Run `dietpi-bugreport`.

![DietPi-Bugreport screenshot](assets/images/dietpi-bugreport.jpg)

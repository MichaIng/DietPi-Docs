# System Stats & Management

## Overview

- [**DietPi-CloudShell - Lightweight system stats for your LCD display or monitor**](#dietpi-cloudshell)
- [**Linux Dash - Web interface system stats**](#linux-dash)
- [**phpSysInfo - Web interface system stats**](#phpsysinfo)
- [**RPi-Monitor - Web interface system stats**](#rpi-monitor)
- [**Netdata - Web interface system stats**](#netdata)
- [**Webmin - Remote system management with web interface**](#webmin)

??? info "How do I run **DietPi-Software** and install **optimised software** items?"
    To install any of the **DietPi optimised software items** listed below run from the command line:

    ```sh
    dietpi-software
    ```

    Choose **Browse Software** and select one or more items. Finally select `Install`.  
    DietPi will do all the necessary steps to install and start these software items.

    ![DietPi software](../assets/images/dietpi-software.jpg){: width="643" height="365" loading="lazy"}

    To see all the DietPi configurations options, review [DietPi Tools](../../dietpi_tools/) section.

[Return to the **Optimised Software list**](../../software/)

## DietPi-CloudShell

DietPi-CloudShell turns your console or LCD screen into a lightweight system stats display.

### Sample screenshots

The following screenshots shall give an overview over the displaying features of *DietPi-CloudShell*.

=== "CPU usage"

    ![DietPi-CloudShell CPU usage dialog](../assets/images/dietpi-software-systemstat-cloudshare-cpuusage.jpg){: width="400" height="305" loading="lazy"}

=== "Memory usage"

    ![DietPi-CloudShell memory usage dialog](../assets/images/dietpi-software-systemstat-cloudshare-memoryusage.jpg){: width="400" height="293" loading="lazy"}

=== "Storage details"

    ![DietPi-CloudShell storage details dialog](../assets/images/dietpi-software-systemstat-cloudshare-storagedetails.png){: width="400" height="292" loading="lazy"}

=== "Network details"

    ![DietPi-CloudShell network details dialog](../assets/images/dietpi-software-systemstat-cloudshare-networkstats.jpg){: width="400" height="303" loading="lazy"}

=== "Pi-hole stats"

    ![DietPi-CloudShell Pi-hole dialog](../assets/images/dietpi-software-systemstat-cloudshare-piholestats.jpg){: width="400" height="305" loading="lazy"}

***

YouTube video tutorial: *DietPi CloudShell (RPi / Odroid XU4)*

<iframe src="https://www.youtube-nocookie.com/embed/O-W8Z33as_U?rel=0" frameborder="0" allow="fullscreen" width="560" height="315" loading="lazy"></iframe>

### Configuration

=== "Configuration"

    Launch the DietPi-CloudShell control panel:

    ```sh
    dietpi-cloudshell
    ```

    ![DietPi-CloudShell main menu](../assets/images/dietpi-software-systemstat-cloudshare-configuration.png){: width="600" height="298" loading="lazy"}

=== "Scenes"

    DietPi-CloudShell offers scenes with predefined display outputs resp. layouts.  
    Scenes are configured in the *Scenes* dialog within `dietpi-cloudshell`.

    ![DietPi-CloudShell scenes menu](../assets/images/dietpi-software-systemstat-cloudshare-scenes.png){: width="600" height="283" loading="lazy"}

=== "Power saving"

    This feature will allow you to automatically power down the screen and disable DietPi-CloudShell processing during a specific time.  
    Please note this feature requires DietPi-CloudShell to be launched with `dietpi-autostart`, or run `dietpi-cloudshell` from the main screen (`tty1`).  
    If you make changes to DietPi-CloudShell over SSH, once saved, please reboot the system to ensure this feature becomes activated.

    Power saving: `Auto screen off`

### Touchscreen support

=== "Waveshare32"

    See <http://www.waveshare.com/3.2inch-rpi-lcd-b.htm>.  
    This is available for all Raspberry Pi and Odroid versions. DietPi will automatically configure your system for the device.  
    Simply run `dietpi-config`, select `Display Options`, then select `waveshare32`.   
    After a reboot, your *Waveshare32* will become active.

    ![DietPi-CloudShell on Waveshare32 touchscreen photo](../assets/images/dietpi-software-systemstat-cloudshell-wavesharesupport.png){: width="400" height="258" loading="lazy"}

=== "Odroid 3.5 LCD shield"

    See <https://www.hardkernel.com/shop/c1-3-2inch-tfttouchscreen-shield/>.  
    This is available for all Odroid versions. DietPi will automatically configure your system for the device.  
    Simply run `dietpi-config`, select `Display Options`, then select `odroid-lcd35`.   
    After a reboot, your *Odroid 3.5 LCD* will become active.

    ![DietPi-CloudShell on Odroid 3.5 LCD photo](../assets/images/dietpi-software-systemstat-cloudshell-touchscreensupport.jpg){: width="400" height="224" loading="lazy"}

=== "Other touchscreens"

    The display feature of *DietPi-CloudShell* works generally with any LCD display or monitor with a resolution of at least 320x240 pixels.

## Linux Dash

Linux Dash allows you to monitor your system stats from a web page.

- Also Installs: [LASP webserver stack](../webserver_stack/)

![Linux Dash web interface screenshot](../assets/images/dietpi-software-systemstat-linuxdash.png){: width="500" height="270" loading="lazy"}

=== "Access to Linux Dash"

    The web interface of *Linux Dash* can be accessed via:

    - URL = `http://<your.IP>/linuxdash/app`

***

Official documentation: <https://github.com/afaqurk/linux-dash/wiki>

## phpSysInfo

Allows you to monitor your system stats from a web page. The display output can be customized via an `.ini` file.

- Also Installs: [LASP webserver stack](../webserver_stack/)

![phpSysInfo web interface screenshot](../assets/images/dietpi-software-systemstat-phpsysinfo.png){: width="500" height="268" loading="lazy"}

=== "Access to phpSysInfo"

    The web interface of *phpSysInfo* can be accessed via:

    - URL = `http://<your.IP>/phpsysinfo`

=== "Customization"

    This is done via the file `phpsysinfo.ini` which is located in the phpSysInfo main directory (typical `/var/www/phpsysinfo`). An example file `phpsysinfo.ini.new` is present and gives inline information about all configuration options. Just walk through this file and discover all these bells an whistles.

***

Website: <https://phpsysinfo.github.io/phpsysinfo>

## RPi-Monitor

RPi-Monitor is a slick, lightweight system stats monitor with web interface.

![RPi-Monitor web interface screenshot](../assets/images/dietpi-software-systemstat-rpimonitor.png){: width="500" height="364" loading="lazy"}

=== "Main features"

    The main features of *RPi-Monitor* are:

    - Collecting, storing and presenting metrics
    - It's flexibly configurable
    - It's user extendable
    - Metrics sharing can be done via JSON file or via SNMP
    - Alert option

=== "Access to RPi-Monitor"

    The web interface is accessible via port **8888**:

    - URL = `http://<your.IP>:8888`

=== "Configuration"

    The configuration is described there: <https://xavierberger.github.io/RPi-Monitor-docs/20_index.html>.  

***

Website: <https://github.com/XavierBerger/RPi-Monitor>.

## Netdata

Netdata is a slick and feature-rich system stats monitor, with web interface.

![Netdata web interface screenshot](../assets/images/dietpi-software-systemstat-netdata.png){: width="500" height="260" loading="lazy"}

=== "Access to Netdata"

    The web interface is accessible via port **19999**:

    - URL = `http://<your.IP>:19999`

=== "Troubleshooting"

    Depending on your system, by default Netdata might be not accessible from remote browsers. If this is the case, open the configuration file  
    `/etc/netdata/netdata.conf`  
    and change the line  
    `bind socket to IP = 127.0.0.1`  
    to match either the local network IP or static public IP of your DietPi server depending on your needs.
    Alternatively comment it e.g. if your server does not have a static public IP but you require remote access. But note that an unprotected publicly accessible Netdata web interface is a potential security risk. Head over to the "Security hardening" tab to learn more about how to restrict access to Netdata.

    Once saved, you will need to restart the service to implement the changes by entering the below into the terminal:

    ```sh
    systemctl restart netdata
    ```

=== "Security hardening"

    Note that having Netdata accessible to anyone gives potential attackers a bunch of useful information where to start hacking.  
    To learn about how to limit access to Netdata, please refer to their documentation regarding [the configuration of access lists](https://learn.netdata.cloud/docs/agent/web/server/#access-lists).

***

Official documentation: <https://learn.netdata.cloud/docs/overview/what-is-netdata>  
Wikipedia: <https://wikipedia.org/wiki/Netdata>

## Webmin

Webmin is a web-based feature-rich remote system management tool. Many system settings can easily be set using the web interface dialogues.

![Webmin interface screenshot](../assets/images/dietpi-software-systemstat-webmin.png){: width="500" height="276" loading="lazy"}

=== "Access to Webmin"

    The web interface is accessible via port **10000**:

    - URL = `https://<your.IP>:10000`
    - Username = `root`
    - Password = `<your software password>` (default: `dietpi`)

    ???+ hint "Use HTTPS"

        Please ensure `https://` URL is typed, `http://` won't work!

=== "System logging"

    The Webmin system logging panel still depends on a classical file logger, like Rsyslog. However DietPi will not impose this logging overhead on systems by default. If you need to see system logs via the *Webmin online panel*, you can either configure a custom *syslog* daemon or install *Rsyslog* manually:

    ```sh
    apt install rsyslog
    ```

    DietPi comes with *systemd* and the related *journald* system logger, which can be accessed via the command `journalctl`.

***

Website: <https://www.webmin.com>  
Wikipedia: <https://wikipedia.org/wiki/Webmin>

[Return to the **Optimised Software list**](../../software/)

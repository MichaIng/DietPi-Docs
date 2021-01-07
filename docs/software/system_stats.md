# System Stats / Management

## Overview

- [**DietPi-CloudShell - Lightweight system stats for your LCD display or monitor**](#dietpi-cloudshell)
- [**Linux Dash - Web interface system stats**](#linux-dash)
- [**phpSysInfo - Web interface system stats**](#phpsysinfo)
- [**RPi-Monitor - Web interface system stats**](#rpi-monitor)
- [**Netdata - Web interface system stats**](#netdata)
- [**Webmin - Remote system management with web interface**](#webmin)

??? info "How do I run **DietPi-Software** and install **optimised software** ?"
    To install any of the **DietPi optimised software** listed below run from the command line:

    ```
    dietpi-software
    ```

    Choose **Software Optimised** and select one or more items. Finally click on `Install`. DietPi will do all the necessary steps to install and start these software items.

    ![DietPi software](../assets/images/dietpi-software.jpg)

    To see all the DietPi configurations options, review [DietPi Tools](../../dietpi_tools) section.

[Return to the **Optimised Software list**](../../dietpi_optimised_software)

## DietPi-CloudShell

CloudShell is a Network Attached Storage (NAS) solution with RAID support. It supports a color LCD and IR receiver.  
CloudShell turns your Odroid CloudShell, Odroid 3.5 LCD Touchscreen Shield, Waveshare32, or monitor into a dedicated lightweight system stats display.

### Sample screenshots

The following screenshots shall give an overview over the displaying features of *CloudShell*.

=== "CPU usage"

    ![DietPi system stat and maintenance software CloudShell CPU usage dialog](../assets/images/dietpi-software-systemstat-cloudshare-cpuusage.jpg){: style="width:400px"}

=== "Memory usage"

    ![DietPi system stat and maintenance software CloudShell memory usage dialog](../assets/images/dietpi-software-systemstat-cloudshare-memoryusage.jpg){: style="width:400px"}

=== "Storage details"

    ![DietPi system stat and maintenance software CloudShell storage details dialog](../assets/images/dietpi-software-systemstat-cloudshare-storagedetails.png){: style="width:400px"}

=== "Network details"

    ![DietPi system stat and maintenance software CloudShell network details dialog](../assets/images/dietpi-software-systemstat-cloudshare-networkstats.jpg){: style="width:400px"}

=== "Pi-hole stats"

    ![DietPi system stat and maintenance software CloudShell Pi-hole dialog](../assets/images/dietpi-software-systemstat-cloudshare-piholestats.jpg){: style="width:400px"}

***

YouTube video tutorial: *DietPi Cloudshell (RPi / Odroid XU4)*

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/O-W8Z33as_U" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Configuration

=== "Configuration"

    Launch the DietPi-CloudShell control panel:  
    `dietpi-cloudshell`

    ![DietPi system stat and maintenance software CloudShell configuration](../assets/images/dietpi-software-systemstat-cloudshare-configuration.png){: style="width:600px"}

=== "Scenes"

    *CloudShell* offers scenes with predefined display outputs resp. layouts.  
    Scenes are configured in the *Scenes* dialog within `dietpi-cloudshell`.

    ![DietPi system stat and maintenance software CloudShell scenes configuration](../assets/images/dietpi-software-systemstat-cloudshare-scenes.png){: style="width:600px"}

=== "Power saving"

    This feature will allow you to automatically power down the screen and disable DietPi-CloudShell processing during a specific time.  
    Please note this feature requires DietPi-CloudShell to be launched with `dietpi-autostart`, or run `dietpi-cloudshell` from the main screen (`tty1`).  
    If you make changes to DietPi-CloudShell over SSH, once saved, please reboot the system to ensure this feature becomes activated.

    Power saving: `Auto screen off`

### Touchscreen support

=== "Waveshare32"

    See <http://www.waveshare.com/3.2inch-rpi-lcd-b.htm>.  
    This is available for all Raspberry PI and Odroid versions. DietPi will automatically configure your system for the device.  
    Simply run `dietpi-config` -\> *Display Options* then select `waveshare32`.   
    After a reboot, your `waveshare32` will become active.

    ![DietPi system stat and maintenance software CloudShell Waveshare32 touchscreen](../assets/images/dietpi-software-systemstat-cloudshell-wavesharesupport.png){: style="width:400px"}

=== "Odroid 3.5 LCD shield"

    See <https://www.hardkernel.com/shop/c1-3-2inch-tfttouchscreen-shield/>.  
    This is available for all Odroid versions. DietPi will automatically configure your system for the device.  
    Simply run `dietpi-config` -\> *Display Options* then select `odroid-lcd35`.   
    After a reboot, your *Odroid 3.5 LCD* will become active.

    ![DietPi system stat and maintenance software CloudShell general touchscreen](../assets/images/dietpi-software-systemstat-cloudshell-touchscreensupport.jpg){: style="width:400px"}

=== "Other touchscreens"

    The display feature of *CloudShell* works generally with any LCD display or monitor with a resolution of at least 320x240.

***

Official documentation: <https://wiki.odroid.com/accessory/add-on_boards/xu4_cloudshell2/xu4_cloudshell2>  
Website CloudShell: <https://www.hardkernel.com/shop/cloudshell-for-xu4>  
Website CloudShell 2: <https://www.hardkernel.com/shop/cloudshell-2-for-xu4>

## Linux Dash

Linux Dash allows you to monitor your system stats from a web page.

- Also Installs: [LASP webserver stack](../webserver_stack/)

![DietPi system stat and maintenance software Linux Dash](../assets/images/dietpi-software-systemstat-linuxdash.png){: style="width:500px"}

=== "Access to Linux Dash"

    The web interface of *Linux Dash* can be accessed via:

    - URL = `http://<your.IP>/linuxdash/app`

***

Official documentation: <https://github.com/afaqurk/linux-dash/wiki>

## phpSysInfo

Allows you to monitor your system stats from a web page. The display output can be customized via an `.ini` file.

- Also Installs: [LASP webserver stack](../webserver_stack/)

![DietPi system stat and maintenance software phpSysInfo](../assets/images/dietpi-software-systemstat-phpsysinfo.png){: style="width:500px"}

=== "Access to phpSysInfo"

    The web interface of *phpSysInfo* can be accessed via:

    - URL = `http://<your.IP>/phpsysinfo`

=== "Customization"

    This is done via the file `phpsysinfo.ini` which is located in the phpSysInfo main directory (typical `/var/www/phpsysinfo`). An example file `phpsysinfo.ini.new` is present and gives inline information about all configuration options. Just walk through this file and discover all these bells an whistles.

***

Website: <https://phpsysinfo.github.io/phpsysinfo>

## RPi-Monitor

RPi-Monitor is a slick, lightweight system stats monitor with web interface.

![DietPi system stat and maintenance software RPi-Monitor](../assets/images/dietpi-software-systemstat-rpimonitor.png){: style="width:500px"}

=== "Main features"

    The main features of *RPi-Monitor* are:

    - Collecting, storing and presenting metrics
    - It's flexibly configurable
    - It's user extendable
    - Metrics sharing can be done via JSON file or via SNMP
    - Alert option

=== "Access to RPi-Monitor"

    The web interface of *RPi-Monitor* can be accessed via:

    - URL = `http://<your.IP>:8888`

=== "Configuration"

    The configuration is described there: <https://xavierberger.github.io/RPi-Monitor-docs/20_index.html>.  

***

Website: <https://github.com/XavierBerger/RPi-Monitor>.

## Netdata

Netdata is a slick and feature-rich system stats monitor, with web interface.

![DietPi system stat and maintenance software Netdata](../assets/images/dietpi-software-systemstat-netdata.png){: style="width:500px"}

=== "Access to Netdata"

    The web interface of *Netdata* can be accessed via:

    - URL = `http://<your.IP>:19999`

=== "Troubleshooting"

    Depending on your system, by default Netdata might be not accessible from remote browsers. If this is the case, open the configuration file  
    `/etc/netdata/netdata.conf`  
    and change the line  
    `bind socket to IP = 127.0.0.1`  
    to match either the local network IP or static public IP of your server depending on your needs.  
    Alternatively comment it e.g. if your server does not have a static public IP but you require remote access.

=== "Security hardening"

    Note that having Netdata accessible to anyone gives potential attackers a bunch of useful information where to start hacking.  
    About how to limit access to Netdata, check as well: <https://docs.netdata.cloud/web/server/>.

=== "Pi-hole & Netdata"

    The monitoring of a *Pi-hole* system via Netdata is described there: <https://learn.netdata.cloud/guides/monitor/pi-hole-raspberry-pi>.

***

Official documentation: <https://learn.netdata.cloud/docs/overview/what-is-netdata>  
Wikipedia: <https://wikipedia.org/wiki/Netdata>

## Webmin

Webmin is a web-based feature-rich remote system management tool. Many system settings can easily be set using the web interface dialogues.

![DietPi system stat and maintenance software Webmin](../assets/images/dietpi-software-systemstat-webmin.png){: style="width:500px"}

=== "Access to Webmin"

    The web interface of *Webmin* can be accessed via:

    - URL = `https://<your.IP>:10000`
    - Username = `root`
    - Password = root password at time of installation (default: `dietpi`)

    ???+ hint "Use HTTPS"

        Please ensure `https://` URL is typed, `http://` will not function

=== "System logging"

    The Webmin system logging panel still depends on a classical file logger, like Rsyslog. However DietPi will not impose this logging overhead on systems by default. If you need to see system logs via the *Webmin online panel*, you can either configure a custom *syslog* daemon or install *Rsyslog* manually:  
    `apt install rsyslog`

    DietPi comes with *systemd* and the related *journald* system logger, which can be accessed via the command `journalctl`.

***

Website: <https://www.webmin.com>  
Wikipedia: <https://wikipedia.org/wiki/Webmin>

[Return to the **Optimised Software list**](../../dietpi_optimised_software)

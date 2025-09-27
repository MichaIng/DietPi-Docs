---
title: Printing Software Options
description: Description of DietPi software options related to printers
---

# Printing

## Overview

- [**OctoPrint - Web interface for controlling 3D printers**](#octoprint)
- [**CUPS - Common UNIX printing system**](#cups)

[//]: # (Include software expandable infoblock)
--8<---------- "snippet-includes/DietPi-Software_infoblock.md"

[Return to the **Optimised Software list**](../software.md)

## OctoPrint

OctoPrint provides a web interface for controlling consumer 3D printers.

![OctoPrint web interface screenshot](../assets/images/dietpi-software-printserver-octoprint.png "OctoPrint web interface dialog"){: width="400" height="297" loading="lazy"}

=== "Access to the web interface"

    The web interface is accessible via port **5001**:

    - URL = `http://<your.IP>:5001`  

    [//]: # (Include Avahi Daemon <hostname>.local access textblock)
    --8<---------- "snippet-includes/AvahiDaemon-WebInterface-access_textblock.md"

=== "First run setup"

    Once you are connected to the web interface, simply run through the setup wizard and configure the software and printers as needed. A login user and password needs to be created, but it does not need to match any existing UNIX login user, i.e. can be freely chosen.

=== "OctoPrint directories"

    - Base directory: `/mnt/dietpi_userdata/octoprint`
    - Data and config: `/mnt/dietpi_userdata/octoprint/.octoprint`
    - Main config file: `/mnt/dietpi_userdata/octoprint/.octoprint/config.yaml`
    - Binaries and plugins: `/mnt/dietpi_userdata/octoprint/.local`

=== "View logs"

    - Service and core logs: `journalctl -u octoprint`
    - Log files and plugin logs: `/mnt/dietpi_userdata/octoprint/.octoprint/logs/`
    - Configure logging via web interface > **Settings** > **Logging**

=== "Command line interface (CLI)"

    OctoPrint offers a command line interface to execute OctoPrint commands. To use it, simply run `octoprint --help` from the command line.

    The current shell needs to be `bash` and the user needs to be allowed to use `sudo`, as the above command is an alias to call a local OctoPrint binary as system user `octoprint`. The alias is defined in `/etc/bashrc.d/dietpi-octoprint.sh`, which is loaded automatically from bash shells. But you can as well load it from non-bash shells, if required.

***

Website: <https://octoprint.org>  
Official documentation: <https://docs.octoprint.org>  
Forum: <https://community.octoprint.org>  
Source code: <https://github.com/OctoPrint/OctoPrint>  
License: [AGPLv3](https://github.com/OctoPrint/OctoPrint/blob/master/LICENSE.txt)

## CUPS

The Common UNIX Printing System (CUPS) provides a command-line interface (CLI) and a web interface for managing your local and network printers.

![CUPS web interface screenshot](../assets/images/dietpi-software-printserver-cups.png "CUPS web interface dialog"){: width="500" height="385" loading="lazy"}

=== "Access to the web interface"

    The web interface is accessible via port **631**:

    - URL = `http(s)://<your.IP>:631`  
    - Username = `root`
    - Password = `<your root password>`

    [//]: # (Include Avahi Daemon <hostname>.local access textblock)
    --8<---------- "snippet-includes/AvahiDaemon-WebInterface-access_textblock.md"

    Checkout the official docs for quick start instructions: <https://www.cups.org/doc/overview.html>

***

Website: <https://www.cups.org>  
Official documentation: <https://www.cups.org/documentation.html>  
GitHub: <https://github.com/apple/cups>

[Return to the **Optimised Software list**](../software.md)

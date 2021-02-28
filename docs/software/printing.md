# Printing

## Overview

- [**OctoPrint - Web interface for controlling 3D printers**](#octoprint)

??? info "How do I run **DietPi-Software** and install **optimised software**?"
    To install any of the **DietPi optimised software** listed below run from the command line:

    ```sh
    dietpi-software
    ```

    Choose **Software Optimised** and select one or more items. Finally click on `Install`. DietPi will do all the necessary steps to install and start these software items.

    ![DietPi software](../assets/images/dietpi-software.jpg){: width="643" height="365" loading="lazy"}

    To see all the DietPi configurations options, review [DietPi Tools](../../dietpi_tools) section.

[Return to the **Optimised Software list**](../../software/)

## OctoPrint

OctoPrint provides a web interface for controlling consumer 3D printers.

![OctoPrint web interface screenshot](../assets/images/dietpi-software-printserver-octoprint.png){: width="400" height="297" loading="lazy"}

=== "Access the web interface"

    The web interface is accessible via port `5000` on the machine running the OctoPrint server:  

    - URL = `http://<your.IP>:5000`  

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

[Return to the **Optimised Software list**](../../software/)

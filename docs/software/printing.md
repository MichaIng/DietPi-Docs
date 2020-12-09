# Printing

## Overview

- [**OctoPrint - Web interface for controlling 3D printers**](#octoprint)

??? info "How do I run **DietPi-Software** and install **optimised software** ?"
    To install any of the **DietPi optimised software** listed below run from the command line:

    ```
    dietpi-software
    ```

    Choose **Software Optimised** and select one or more items. Finally click on `Install`. DietPi will do all the necessary steps to install and start these software items.

    ![DietPi software](../assets/images/dietpi-software.jpg)

    To see all the DietPi configurations options, review [DietPi Tools](../../dietpi_tools) section.

[Return to the **Optimised Software list**](../../dietpi_optimised_software)

## OctoPrint

OctoPrint provides a web interface for controlling consumer 3D printers.

![DietPi print server software OctoPrint](../assets/images/dietpi-software-printserver-octoprint.png){: style="width:550px"}

=== "Access the web interface"

    The web interface is accessible via port 5000 on the machine running the OctoPrint server, e.g. this could be:  

    - URL = `http://192.168.0.100:5000`  

=== "First run setup"

    Once you are connected to the web interface, simply run through the setup wizard and configure the software/printers as needed:

    - Section: *Server Commands*:
        - Restart OctoPrint = `systemctl restart octoprint`
        - Restart system = `reboot`
        - Shutdown system = `poweroff`
    - Section: *Software Updates*:
        - OctoPrint checkout folder = **/opt/octoprint** (since DietPi v6.33)

=== "OctoPrint data/config directory"

    The data/config information is located in */mnt/dietpi_userdata/octoprint* (since DietPi v6.33).

=== "Command line interface (CLI)"

    !!! hint ""
        The CLI is relevant since DietPi v6.33.

    OctoPrint also offers a command line interface to execute OctoPrint commands.  
    To use this option, run `octoprint` from the command line. Do this as user *octoprint* to invoke the correct config/data directory. In a regular bash shell session this is the case automatically via alias and sudo, see: `/etc/bashrc.d/dietpi-octoprint.sh`.

    If you use a different shell, use:

    ```sh
    sudo -u octoprint octoprint <command>
    ```

See also <https://wikipedia.org/wiki/OctoPrint> resp. <https://octoprint.org/>.

[Return to the **Optimised Software list**](../../dietpi_optimised_software)

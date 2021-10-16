# SSH Server Choices

## Overview

- [**Dropbear - Lightweight SSH Server**](#dropbear)  
- [**OpenSSH - Feature rich SSH server with SFTP/SCP support**](#openssh)  

??? info "How do I run **DietPi-Software** and install **optimised software** items?"
    To install any of the **DietPi optimised software items** listed below run from the command line:

    ```sh
    dietpi-software
    ```

    Choose **Browse Software** and select one or more items. Finally select `Install`.  
    DietPi will do all the necessary steps to install and start these software items.

    ![DietPi-Software menu screenshot](../assets/images/dietpi-software.jpg){: width="643" height="365" loading="lazy"}

    To see all the DietPi configurations options, review the [DietPi Tools](../../dietpi_tools/) section.

[Return to the **Optimised Software list**](../../software/)

## Dropbear

Dropbear is a lightweight SSH server, installed by default on DietPi systems.  
Remark: You can swap or change your SSH server at any time using *DietPi-Software*.

![Dropbear logo](../assets/images/dietpi-software-sshserver-dropbear.jpg){: width="150" height="121" loading="lazy"}

=== "Access the web interface"

    The SSH server can be connected directly from Unix with the `ssh` command line program or other SSH client programs:

    - Address = Your IP address (e.g.: *192.168.0.100*)
    - Port = *22*
    - Username = `root`
    - Password = `dietpi`

=== "Windows SSH client"

    On Windows, [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) and [KiTTY](https://www.9bis.net/kitty/) are recommended SSH clients.

***

Website: <https://matt.ucc.asn.au/dropbear/dropbear.html>  
Wikipedia: <https://wikipedia.org/wiki/Dropbear_(software)>

## OpenSSH

OpenSSH offers a feature rich SSH server with SFTP/SCP support.  
Remark: You can swap or change your SSH server at any time using *DietPi-Software*.

![OpenSSH logo](../assets/images/dietpi-software-sshserver-openssh.gif){: width="300" height="99" loading="lazy"}

=== "Access to the SSH server"

    The SSH server can be connected directly from Unix with the `ssh` command line program or other SSH client programs:

    - Address = Your IP address (e.g.: *192.168.0.100*)
    - Username = `root`
    - Password = `dietpi`
    - Port = *22*

=== "Windows SSH client"

    On Windows, [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) and [KiTTY](https://www.9bis.net/kitty/) are recommended SSH clients.

=== "Windows SFTP/SCP client"

    WinSCP will allow you to transfer files and folders on your DietPi device ([WinSCP downloads page](https://winscp.net/eng/download.php)).

***

Website: <https://www.openssh.com>  
Wikipedia: <https://wikipedia.org/wiki/OpenSSH>

[Return to the **Optimised Software list**](../../software/)

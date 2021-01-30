# SSH Server Choices

## Overview

- [**Dropbear - Lightweight SSH Server**](#dropbear)  
- [**OpenSSH - Feature rich SSH server with SFTP/SCP support**](#openssh)  

??? info "How do I run **DietPi-Software** and install **optimised software** ?"
    To install any of the **DietPi optimised software** listed below run from the command line:

    ```
    dietpi-software
    ```

    Choose **Software Optimised** and select one or more items. Finally click on `Install`. DietPi will do all the necessary steps to install and start these software items.

    ![DietPi software](../assets/images/dietpi-software.jpg)

    To see all the DietPi configurations options, review [DietPi Tools](../../dietpi_tools) section.

[Return to the **Optimised Software list**](../../software/)

## Dropbear

Dropbear is a lightweight SSH server, installed by default on DietPi systems.  
Remark: You can swap or change your SSH server at any time using *DietPi-Software*.

![DietPi ssh server software Dropbear](../assets/images/dietpi-software-sshserver-dropbear.jpg){: width="150px"}

=== "Access the web interface"

    The SSH server can be connected directly from Unix with the `ssh` command line program or other SSH client programs:

    - address = Your IP address (e.g.: *192.168.0.100*)
    - Port = *22*
    - Username = `root`
    - Password = `dietpi`

=== "Windows SSH client"

    On Windows, [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) and [KiTTY](http://www.9bis.net/kitty/) are recommended SSH clients.

***

Website: <https://matt.ucc.asn.au/dropbear/dropbear.html>  
Wikipedia: <https://wikipedia.org/wiki/Dropbear_(software)>

## OpenSSH

OpenSSH offers a feature rich SSH server with SFTP/SCP support.  
Remark: You can swap or change your SSH server at any time using *DietPi-Software*.

![DietPi ssh server software OpenSSH](../assets/images/dietpi-software-sshserver-openssh.gif){: style="width:300px"}

=== "Access to the SSH server"

    The SSH server can be connected directly from Unix with the `ssh` command line program or other SSH client programs:

    - address = Your IP address (e.g.: *192.168.0.100*)
    - Username = `root`
    - Password = `dietpi`
    - Port = *22*

=== "Windows SSH client"

    On Windows, [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) and [KiTTY](http://www.9bis.net/kitty/) are recommended SSH clients.

=== "Windows SFTP/SCP client"

    WinSCP will allow you to transfer files and folders on your DietPi device ([WinSCP downloads page](https://winscp.net/eng/download.php)).

***

Website: <https://www.openssh.com>  
Wikipedia: <https://wikipedia.org/wiki/OpenSSH>

[Return to the **Optimised Software list**](../../software/)

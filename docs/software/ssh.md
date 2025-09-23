---
title: SSH Server Choices
description: Description of DietPi SSH server options
---

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

    To see all the DietPi configurations options, review the [DietPi Tools](../dietpi_tools.md) section.

[Return to the **Optimised Software list**](../software.md)

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

=== "Control login options"

    The login options of Dropbear can be set. Valid options are:

    - `0` : Allow password logins for all users, including root (default case)
    - `root` : Disable password login for root user only
	- `1` : Disable password logins for all users (assure that you have a valid SSH key applied!)

    The options will lead in changes of the file `/etc/default/dropbear` (in `DROPBEAR_EXTRA_ARGS`) and can be set by the configuration option `SOFTWARE_DISABLE_SSH_PASSWORD_LOGINS` in the file `/boot/dietpi.txt` to be examined during the initial first boot sequence.

    Later on (after the first installation run has completed), the option can be changed by the command
    
    ```sh
    /boot/dietpi/func/dietpi-set_software disable_ssh_password_logins <option>
    ```
    
    This command sets the option and also modifies the file `/boot/dietpi.txt` accordingly.  
    Valid `<options>` are

    - `0`, `root`, `1` : Set option as described above
    - Without `<option>` (e.g. `/boot/dietpi/func/dietpi-set_software disable_ssh_password_logins`) : Use option from file `/boot/dietpi.txt`

=== "SSH server public keys"

    SSH server public keys for users `root` and `dietpi` can be added to the system.  
    The options will lead in changes of the file `~/.ssh/authorized_keys` and can be set by the configuration option `AUTO_SETUP_SSH_PUBKEY` in the file `/boot/dietpi.txt` to be examined during the initial first boot sequence.

    The needed public key (`ssh-ed25519` format) can be generated via 
    
    ```sh
    ssh-keygen -f keys
    ``` 
    
    which asks for a passphase and generates files `keys` resp. `keys.pub` in the actual directory. The file `keys.pub` holds the SSH public key to be used within `/boot/dietpi.txt`. See the comment in `/boot/dietpi.txt` and `man ssh-keygen` for further details.

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

=== "Control login options"

    The login options of OpenSSH can be set. Valid options are:

    - `0` : Allow password logins for all users, including root (default case)
    - `root` : Disable password login for root user only
	- `1` : Disable password logins for all users (assure that you have a valid SSH key applied!)

    The options will lead in changes of the file `/etc/ssh/sshd_config` (values `PubkeyAuthentication`, `PasswordAuthentication` and `PermitRootLogin`) and can be set by the configuration option `SOFTWARE_DISABLE_SSH_PASSWORD_LOGINS` in the file `/boot/dietpi.txt` to be examined during the initial first boot sequence.

    Later on (after the first installation run has completed), the option can be changed by the command
    
    ```sh
    /boot/dietpi/func/dietpi-set_software disable_ssh_password_logins <option>
    ```
    
    This command sets the option and also modifies the file `/boot/dietpi.txt` accordingly.  
    Valid `<options>` are

    - `0`, `root`, `1` : Set option as described above
    - Without `<option>` (e.g. `/boot/dietpi/func/dietpi-set_software disable_ssh_password_logins`) : Use option from file `/boot/dietpi.txt`

=== "SSH server public keys"

    SSH server public keys for users `root` and `dietpi` can be added to the system.  
    The options will lead in changes of the file `~/.ssh/authorized_keys` and can be set by the configuration option `AUTO_SETUP_SSH_PUBKEY` in the file `/boot/dietpi.txt` to be examined during the initial first boot sequence.

    The needed public key (`ssh-ed25519` format) can be generated via 
    
    ```sh
    ssh-keygen -f keys
    ``` 
    
    which asks for a passphase and generates files `keys` resp. `keys.pub` in the actual directory. The file `keys.pub` holds the SSH public key to be used within `/boot/dietpi.txt`. See the comment in `/boot/dietpi.txt` and `man ssh-keygen` for further details.

=== "Windows SSH client"

    On Windows, [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) and [KiTTY](https://www.9bis.net/kitty/) are recommended SSH clients.

=== "Windows SFTP/SCP client"

    WinSCP will allow you to transfer files and folders on your DietPi device ([WinSCP downloads page](https://winscp.net/eng/download.php)).

***

Website: <https://www.openssh.com>  
Wikipedia: <https://wikipedia.org/wiki/OpenSSH>

[Return to the **Optimised Software list**](../software.md)

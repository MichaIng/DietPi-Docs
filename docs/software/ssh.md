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

=== "Restrict root logins"

    Root logins via Dropbear can be restricted from first boot on with the `SOFTWARE_DISABLE_SSH_PASSWORD_LOGINS` setting in the `dietpi.txt` file. Valid options are:

    - `0` : Allow password logins for all users, including root (default case)
    - `root` : Disable password login for root user only
    - `1` : Disable password logins for all users (assure that you have a valid SSH key applied!)

    The first boot scripts apply them via `DROPBEAR_EXTRA_ARGS` setting in `/etc/default/dropbear`, before the SSH server starts and before the network is set up.

    Later on (after the first installation run has completed), these options can be changed by the command
    
    ```sh
    /boot/dietpi/func/dietpi-set_software disable_ssh_password_logins <option>
    ```
    
    If `<option>` is skipped/empty, the one from `/boot/dietpi.txt` will be reapplied to `/etc/default/dropbear`.

=== "Public Key Authentication"

    A public SSH authentication key for the users `root` and `dietpi` can be added from first boot on with the `AUTO_SETUP_SSH_PUBKEY` setting in the `dietpi.txt` file. The first boot procedure apply them to `~/.ssh/authorized_keys` of both users, before the SSH server starts and before the network is set up.

    A key pair can be generated with most SSH clients, e.g. with OpenSSH or Dropbear from the console (`dropbearkey` is only available if Dropbear is selected as the SSH server option):

    ```sh
    # OpenSSH client:
    ssh-keygen -t ed25519
    # Dropbear client:
    dropbearkey -t ed25519 -f ~/.ssh/id_dropbear
    ``` 

    An example output (for the `AUTO_SETUP_SSH_PUBKEY` setting in `dietpi.txt`) could be

    ```
    ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIAcoZfa+8uivetL4FTstsMl1MsnkjM1ssYW9wQh77xaS root@dietpi
    ```

    Other key types are supported, but we suggest Ed25519, a modern scheme which provides best security with a small key size.  
    The commands generate a public key with an additional key comment at the end of the generated line. This comment has generally no function and can be used to understand the entry better. It can be set in `dietpi.txt` for the users convenience.

    `ssh-keygen` asks for an optional passphrase and file path, where we suggest to use the default `~/.ssh/id_ed25519`, where the client will be able to use it OOTB. The file `id_ed25519.pub` holds the public key to be used within `/boot/dietpi.txt`. See the comment in `/boot/dietpi.txt` and [`man ssh-keygen`](https://manpages.debian.org/ssh-keygen) for further details.

    `dropbearkey` prints the public key portion to the console instead. The command can also be extended with the option `-C <key comment>`. See [`man dropbearkey`](https://manpages.debian.org/dropbearkey) for further details.

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

=== "Restrict root logins"

    Root logins via Dropbear can be restricted from first boot on with the `SOFTWARE_DISABLE_SSH_PASSWORD_LOGINS` setting in the `dietpi.txt` file. Valid options are:

    - `0` : Allow password logins for all users, including root (default case)
    - `root` : Disable password login for root user only
    - `1` : Disable password logins for all users (assure that you have a valid SSH key applied!)

    The options will lead in changes of the file `/etc/ssh/sshd_config` (values `PubkeyAuthentication`, `PasswordAuthentication` and `PermitRootLogin`) and can be set by the configuration option `SOFTWARE_DISABLE_SSH_PASSWORD_LOGINS` in the file `/boot/dietpi.txt` to be examined during the initial first boot sequence.

    Later on (after the first installation run has completed), these options can be changed by the command
    
    ```sh
    /boot/dietpi/func/dietpi-set_software disable_ssh_password_logins <option>
    ```
    
    If `<option>` is skipped/empty, the one from `/boot/dietpi.txt` will be reapplied to `/etc/default/dropbear`.

=== "Public Key Authentication"

    A public SSH authentication key for the users `root` and `dietpi` can be added from first boot on with the `AUTO_SETUP_SSH_PUBKEY` setting in the `dietpi.txt` file. The first boot scripts apply them to `~/.ssh/authorized_keys` of both users, before the SSH server starts and before the network is set up.

    A key pair can be generated with most SSH clients, e.g. with OpenSSH or Dropbear from the console (`dropbearkey` is only available if Dropbear is selected as the SSH server option):

    ```sh
    # OpenSSH client:
    ssh-keygen -t ed25519
    # Dropbear client:
    dropbearkey -t ed25519 -f ~/.ssh/id_dropbear
    ``` 

    Other key types are supported, but we suggest Ed25519, a modern scheme which provides best security with a small key size.

    `ssh-keygen` asks for an optional passphrase and file path, where we suggest to use the default `~/.ssh/id_ed25519`, where the client will be able to use it OOTB. The file `id_ed25519.pub` holds the public key to be used within `/boot/dietpi.txt`. See the comment in `/boot/dietpi.txt` and [`man ssh-keygen`](https://manpages.debian.org/ssh-keygen) for further details.

    `dropbearkey` prints the public key portion to the console instead. See [`man dropbearkey`](https://manpages.debian.org/dropbearkey) for further details.

=== "Windows SSH client"

    On Windows, [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) and [KiTTY](https://www.9bis.net/kitty/) are recommended SSH clients.

=== "Windows SFTP/SCP client"

    WinSCP will allow you to transfer files and folders on your DietPi device ([WinSCP downloads page](https://winscp.net/eng/download.php)).

***

Website: <https://www.openssh.com>  
Wikipedia: <https://wikipedia.org/wiki/OpenSSH>

[Return to the **Optimised Software list**](../software.md)

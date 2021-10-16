# File Servers

## Overview

- [**ProFTPD - Simple, efficient, lightweight FTP file server**](#proftpd)
- [**Samba - Feature rich file server**](#samba)
- [**vsftpd - Feature rich FTP file server**](#vsftpd)
- [**NFS - Network file system server**](#nfs)

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

## ProFTPD

ProFTPD gives you access to files/music/downloads etc. on your DietPi system quickly and efficiently with minimal overhead.

![DietPi file server software ProFTPD](../assets/images/dietpi-software-fileservers-proftpd.png)

=== "Access with Windows"

    The access to ProFTPD with **Windows** is achieved as follows:

    - Go to My Computer (Windows Explorer).
    - In the address bar at the top type `ftp://dietpi:dietpi@192.168.0.100` press enter.

    Change 192.168.0.100 to the IP address of your DietPi system.

=== "Access with an FTP client"

    The access to ProFTPD with an **FTP client** is achieved as follows:

    - Username = `dietpi`
    - Password = The same as your root login password. Default is `dietpi`
    - Address = Your IP address (e.g.: 192.168.0.100)
    - Port = 21

=== "Destination directory"

    The destination directory can be changed by replacing **/Path/To/Directory** to your target directory (within the configuration file `/etc/proftpd/proftpd.conf`):

    ```sh
    systemctl stop proftpd
    sed -i '/DefaultRoot /c\DefaultRoot /Path/To/Directory' /etc/proftpd/proftpd.conf
    systemctl start proftpd
    ```

=== "Jailing"

    Jailing means to lock users to their home folders.

    *Jailing* can be enabled in the configuration file `/etc/proftpd/proftpd.conf` via

    ```sh
    systemctl stop proftpd
    sed -i '/DefaultRoot /c\DefaultRoot ~' /etc/proftpd/proftpd.conf
    systemctl start proftpd
    ```

***

Wikipedia: <https://wikipedia.org/wiki/ProFTPD>

## Samba

The Samba server lets you share files on your DietPi system with ease based on the well known SMB networking protocol.

![DietPi file server software samba](../assets/images/dietpi-software-fileservers-samba.png)

=== "Access to Samba"

    The access to the Samba file server is achieved as follows:

    - Address = `\\192.168.0.100\dietpi`
    - Username = `dietpi`
    - Password = `<your global application password>` (default: `dietpi`)

=== "Change the Samba password"

    The Samba password can be changed with

    ```sh
    smbpasswd -a dietpi
    ```

=== "Add/change the valid user"

    To add/change the valid user do the following steps:

    - Edit `/etc/samba/smb.conf`
        - Search the entry `[dietpi]`, change `valid users = username_i_require`
        - Add the user to Samba with `smbpasswd -a username_i_require`
    - Restart services with `systemctl restart nmbd smbd`

    You can now connect to the samba server with the username and password you entered above.

=== "Destination directory"

    The destination directory can be changed by replacing **/Path/To/Directory** to your target directory (within the configuration file `/etc/samba/smb.conf`):

    ```sh
    sed -i '/path = /c\path = /Path/To/Directory' /etc/samba/smb.conf
    systemctl restart nmbd smbd
    ```

***

Wikipedia: <https://wikipedia.org/wiki/Samba_(software)>

YouTube video tutorial (German language): `Raspberry Pi als Datei-Server - einfache Installation eines Fileservers Samba unter DietPi`.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/XB2F_Gyjw0s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## vsftpd

Very secure FTP file server with feature rich security options.

![DietPi file server software vsftpd](../assets/images/dietpi-software-fileservers-vsftpd.png)

=== "Access with Windows"

    The access to vsftpd with **Windows** is achieved as follows:

    - Go to My Computer (Windows Explorer).
    - In the address bar at the top type `ftp://dietpi:dietpi@192.168.0.100` press enter.

    Change `192.168.0.100` to the IP address of your DietPi system.

=== "Access with an FTP client"

    The access to vsftpd with an **FTP client** is achieved as follows:

    - Username = `dietpi`
    - Password = The same as your root login password. Default is `dietpi`
    - Address = Your IP address (e.g.: 192.168.0.100)
    - Port = 21

=== "Destination directory"

    The destination directory can be changed by replacing **/Path/To/Directory** to your target directory (within the configuration file `/etc/vsftpd.conf`):

    ```sh
    sed -i '/local_root=/c\local_root=/Path/To/Directory' /etc/vsftpd.conf
    systemctl restart vsftpd
    ```

***

Wikipedia: <https://wikipedia.org/wiki/Vsftpd>

## NFS

Network file system server.

![DietPi file server software NFS](../assets/images/dietpi-software-fileservers-nfs.png)

=== "Access to an NFS share"

    The access to the NFS share with an **NFS client** is achieved as follows:

    - Address = IP address of your DietPi system (e.g.: 192.168.0.100)
    - Port = 2049

=== "Access configuration"

    The NFS access configuration is done via **export files**.  
    You can edit the `/etc/exports` file as well as adding further export files within the `/etc/exports.d` directory.

    **Explanations of the export file format** are available in the internet or can be read in the man pages (use `man exports`, therefore the package **man** needs to be installed).

    After changing the access configuration, the export information can be re-read via command

    ```
    exportfs -ra
    ```

    Alternatively you can restart the service (`systemctl restart nfs-kernel-server`).

    The actual access configuration can be displayed with the command

    ```
    exportfs
    ```

    On the client side you can query the mountable exports with the command

    ```
    showmount -e <NFS_SERVER>
    ```

=== "Default configuration / increase security"

    By default the DietPi NFS installation exports the directory `/mnt/dietpi_userdata` for everyone. This is configured in `/etc/exports.d/dietpi.exports`. You can edit this file to restrict the access.

    E.g. you could limit the access to the NFS share by setting a IP address range:

    - Edit the following file: `/etc/exports.d/dietpi.exports`
    - To only allow users access with an IP address range of 192.168.0.1-255

        ```
        /mnt/dietpi_userdata 192.168.0.*(rw,async,no_root_squash,fsid=0,crossmnt,no_subtree_check)
        ```

    - Activate the new configuration (`systemctl restart nfs-kernel-server` or `exportfs -ra`)

***

Wikipedia: <https://wikipedia.org/wiki/Network_File_System>

[Return to the **Optimised Software list**](../../software/)

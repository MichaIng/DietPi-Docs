# File Servers

## Overview

- [**ProFTPD - Simple, efficient, lightweight FTP file server**](#proftpd-simple-efficient-lightweight-ftp-file-server)  
- [**Samba - Feature rich file server**](#samba-feature-rich-file-server)  
- [**vsftpd - Feature rich FTP file server**](#vsftpd-feature-rich-ftp-file-server)  
- [**NFS - Network file system server**](#nfs-network-file-system-server)  

??? info "How do I run **DietPi-Software** and install **Optimised software** ?"
    To install any of the **DietPi Optimised Software** listed below run from the command line:
    ```
    dietpi-launcher
    ```
    and selected _DietPi-Software_. or launch directly the tool:
    ```
    dietpi-software
    ```

    Choose **Software optimised** and select one or more items. Finally click on `Install`. DietPi will do all the necessary steps to install and start these software items.

    ![DietPi software](../assets/images/dietpi-software.jpg)

    To see all the DietPi configurations options, review [DietPi Tools](../../dietpi_tools) section.

[Return to the **Optimised Software list**](../../dietpi_optimised_software)

## ProFTPD - Simple, efficient, lightweight FTP file server

ProFTPD gives you access to files/music/downloads etc. on your DietPi system quickly and efficiently with minimal overhead.

![DietPi file server software ProFTPD](../assets/images/dietpi-software-fileservers-proftpd.png)

### Access to ProFTPD

The access to ProFTPD with **Windows** is achieved as follows:

- Go to My Computer (Windows Explorer).
- In the address bar at the top type `ftp://dietpi:dietpi@192.168.0.100` press enter.

Change 192.168.0.100 to the IP address of your DietPi system.

The access to ProFTPD with an **FTP client** is achieved as follows:

- username = dietpi (v6.2 and lower = root)
- password = The same as your root login password. Default is dietpi
- address = Your IP address (e.g.: 192.168.0.100)
- port = 21

### Options

#### Destination directory

The destination directory can be changed by replacing **/Path/To/Directory** to your target directory:

```bash
systemctl stop proftpd
sed -i '/DefaultRoot /c\DefaultRoot /Path/To/Directory' /etc/proftpd/proftpd.conf
systemctl start proftpd
```

#### Jailing (lock users to their home folders)

*Jailing* can be enabled via

```bash
systemctl stop proftpd
sed -i "/DefaultRoot /c\DefaultRoot ~" /etc/proftpd/proftpd.conf
systemctl restart proftpd
```

See also <https://en.wikipedia.org/wiki/ProFTPD>.

## Samba - Feature rich file server

The Samba server lets you share files on your DietPi system with ease based on the well known SMB networking protocol.

![DietPi file server software samba](../assets/images/dietpi-software-fileservers-samba.png)

### Access to Samba

The access to the Samba file server is achieved as follows:

- Address = \\\192.168.0.100\dietpi or \\\DietPi\dietpi
- username = dietpi (DietPi v6.12 and lower = root)
- password = <your global application password\>

### Options

#### Change the Samba password

The Samba password can be changed with

```bash
smbpasswd -a dietpi
```

#### Add/change the valid user

To add/change the valid user do the following steps:

- Edit /etc/samba/smb.conf
    - Search the entry [dietpi], change `valid users = username_i_require`
    - Add the user to Samba with `smbpasswd -a username_i_require`
- Restart services with `systemctl restart nmbd smbd`

You can now connect to the samba server with the username and password you entered above.

#### Destination directory

The destination directory can be changed by replacing **/Path/To/Directory** to your target directory:

```bash
sed -i '/path = /c\path = /Path/To/Directory' /etc/samba/smb.conf
systemctl restart nmbd smbd
```

See also <https://en.wikipedia.org/wiki/Samba_(software)>.

## vsftpd - Feature rich FTP file server

Very secure FTP file server with feature rich security options.

![DietPi file server software vsftpd](../assets/images/dietpi-software-fileservers-vsftpd.png)

### Access to vsftpd

The access to vsftpd with **Windows** is achieved as follows:

- Go to My Computer (Windows Explorer).
- In the address bar at the top type `ftp://dietpi:dietpi@192.168.0.100` press enter.

Change 192.168.0.100 to the IP address of your DietPi system.

The access to vsftpd with an **FTP client** is achieved as follows:

- username = dietpi (v6.2 and lower = root)
- password = The same as your root login password. Default is dietpi
- address = Your IP address (e.g.: 192.168.0.100)
- port = 21

See also <https://en.wikipedia.org/wiki/Vsftpd>.

## NFS - Network file system server

Network file system server.

![DietPi file server software NFS](../assets/images/dietpi-software-fileservers-nfs.png)

### Access to an NFS share

The access to the NFS share with an **NFS client** is achieved as follows:

- Address = IP address of your DietPi system (e.g.: 192.168.0.100)
- Port = 2049

### Options

#### Increase security

By default NFS will allow anyone to connect. You can limit who can access the NFS share by setting a IP address range:

- Edit the following file /etc/exports
- To only allow users access with an IP address range of 192.168.0.1-255

    ```bash
/mnt/dietpi_userdata 192.168.0.*(rw,async,no_root_squash,fsid=0,crossmnt,no_subtree_check)
```

- Restart services via `systemctl restart nfs-kernel-server`

See also <https://en.wikipedia.org/wiki/Network_File_System>.

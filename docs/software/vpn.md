---
title: VPN Software Options
description: Description of DietPi software options related to VPNs
---

# VPN

## Overview

- [**OpenVPN - Easy to use, minimal hassle VPN server**](#openvpn)
- [**PiVPN - OpenVPN server installer and management tool**](#pivpn)
- [**WireGuard - An extremely simple yet fast and modern VPN**](#wireguard)
- [**Tailscale - Zero config VPN**](#tailscale)
- [**ZeroTier - Free easy to deploy cloud-hosted VPN service**](#zerotier)

[//]: # (Include software expandable infoblock)
--8<---------- "snippet-includes/DietPi-Software_infoblock.md"

[Return to the **Optimised Software list**](../software.md)

## OpenVPN

An easy to use VPN server and client system. The DietPi installation of OpenVPN uses a single client file to get you connected with minimal hassle.

![OpenVPN logo](../assets/images/dietpi-software-vpn-openvpn-logo.png){: width="200" height="58" loading="lazy"}

=== "Client connection file"

    #### Generate client connection file for your VPN client system

    As a prerequisite, a client connection file (`DietPi_OpenVPN_Client.ovpn`) has to be obtained and put on your target system where your VPN client is running.  
    DietPi will automatically generate unique 2048 bit server and client keys during installation and place them into a unified client config file. You will need this file to connect to your OpenVPN server from a client.

    Client file location:

    - DietPi will generate the client config file and place it here:  
      `/boot/DietPi_OpenVPN_Client.ovpn`.  
      Simply power off and plug the SD card into your target system to obtain the file from the FAT partition.
    - DietPi will also create a copy of the file in  
      `/mnt/dietpi_userdata/DietPi_OpenVPN_Client.ovpn`.  
      Use one of DietPi's file servers to access this file.

    ???+ warning "Security issue"
        For security reasons, please remove those client connection files after they have been deployed on the client system!

    #### Changing the target address for the client file

    You will need to open the `DietPi_OpenVPN_Client.ovpn` file in a text editor to change the target domain/IP address. This can be anything from a website address, No-IP domain name, or IP address.  
    Examples for changing `mywebsite.com`. e.g.:  

    - `remote MySuperDooperWebsite.com 1194`
    - `remote 81.252.0.1 1194`

=== "Router setup"

    You have to set up your router to enable external access.  
    OpenVPN server uses the following port:

    - UDP 1194

    This port must be enabled in port forwarding on your router and point to the IP address of your DietPi system.

=== "Windows client"

    Installation of the Windows OpenVPN client program is done with the following steps:

    1. Download the software under  
      URL = <https://openvpn.net/community-downloads/>
    2. Download and install the installer that suites to your Windows version.

=== "Connecting to your OpenVPN server (Windows)"

    Method 1 - Quick:  
    Simply right click the `DietPi_OpenVPN_Client.ovpn` file and choose "Start OpenVPN on this config file".

    Method 2 - GUI:  
    If you want to use the OpenVPN GUI, you will need to copy `DietPi_OpenVPN_Client.ovpn` to the OpenVPN config location (e.g.: `C:\Program Files\OpenVPN\config`).

=== "OpenVPN + Pi-hole"

    To allow VPN clients accessing your local Pi-hole instance, you need to allow DNS requests from all network interfaces:  
    `pihole -a -i local`

***

Website: <https://openvpn.net>  
Wikipedia: <https://wikipedia.org/wiki/OpenVPN>  
Installation article (German language): [PiVPN: Raspberry Pi mit OpenVPN – Raspberry Pi Teil3](https://www.kuketz-blog.de/pivpn-raspberry-pi-mit-openvpn-raspberry-pi-teil3/){:class="nospellcheck"}

## PiVPN

PiVPN is an OpenVPN and WireGuard installer and management tool. It also has a command `pivpn` which allows for simple creation of additional user profiles and configurations.

![PiVPN logo](../assets/images/dietpi-software-vpn-pivpn-logo.png){: width="100" height="100" loading="lazy"}

=== "Using PiVPN"

    Run the command `pivpn` to see a list of options.

=== "Create a new user profile"

    Simply run the command `pivpn -a`.

=== "Unattended installation"

    For an unattended PiVPN installation during first boot of DietPi, place a configuration file named `unattended_pivpn.conf` into the boot partition/directory. For example configs, have a look at <https://github.com/pivpn/pivpn/tree/master/examples>.  
    More details can be found in the [corresponding part of the PiVPN installation documentation](https://docs.pivpn.io/install/#non-interactive-installation).

***

Website: <https://pivpn.io/>  
Documentation: <https://docs.pivpn.io/>  
YouTube video tutorial: [VPN configuration using Raspberry Pi and DietPi](https://www.youtube.com/watch?v=aYPaDeqtMG8)  
YouTube video tutorial: [DietPi PiVPN Server Setup on Raspberry Pi 3 B Plus](https://www.youtube.com/watch?v=0t0bwskZJFw)

## WireGuard

WireGuard is an extremely simple yet fast and modern VPN that utilizes state-of-the-art cryptography. It aims to be faster, simpler, leaner and more useful than IPsec, while avoiding the massive headache.

![WireGuard logo](../assets/images/dietpi-software-vpn-wireguard.svg){: width="300" height="53" loading="lazy"}

When installing using `dietpi-software`, you can choose whether to install WireGuard as VPN server or client. Server and client configurations can be managed with [**DietPi-WireGuard**](../dietpi_tools/software_installation.md#dietpi-wireguard).

=== "Installing as VPN server"

    #### General

    The installation creates a VPN server which is ready to use:

    - Name `wg0`, started automatically at boot
    - UDP port `51820`. You can preset another port with `SOFTWARE_WIREGUARD_PORT` in `/boot/dietpi.txt`.
    - VPN address `10.9.0.1`, so the clients get addresses like `10.9.0.2`
    - An IPv6 address range, so that clients can use IPv6, unless IPv6 is disabled on your system

    The clients can reach your home network and the Internet through the server.

    Forward the UDP port from your router to your DietPi system, so that clients can connect from the Internet.

    #### Adding clients

    No client configuration is created during the installation. Add one for each of your devices:

    ```sh
    dietpi-wireguard
    ```

    How to add clients, show their QR codes and manage them is described in [**DietPi-WireGuard**](../dietpi_tools/software_installation.md#dietpi-wireguard).

    #### Which traffic goes through the VPN

    By default, all traffic of a client goes through the VPN. This includes DNS requests, which your server answers.  
    You may want to use only the Pi-hole of your server, and keep all other traffic outside the VPN. Then add the client with these options. The IP address needs to be the local IP address of your DietPi system:

    ```sh
    dietpi-wireguard add phone --dns 192.168.0.100 --allowed-ips 192.168.0.100/32
    ```

    To allow VPN clients to use your local Pi-hole, allow DNS requests from all network interfaces: `pihole -a -i local`

    #### Servers from older DietPi versions

    Your existing server and its clients keep working. DietPi-WireGuard finds them automatically.

    The IPv6 address range is not added to existing servers automatically. If you want it, turn it on with `dietpi-wireguard server ipv6=on`. Your clients then need their new config.

=== "Installing as VPN client"

    Usually the VPN provider will have install instructions and ship a configuration file.  
    If you want to connect to another DietPi machine, create a client on that machine with `dietpi-wireguard add <name>`. Then copy the config file `/etc/wireguard/clients/wg0-<name>.conf` to this system, e.g. as `/etc/wireguard/wg-client.conf`.  
    If no WireGuard (auto)start instructions are included, but you require it, please do the following:

    - Check for the created configuration file/interface name: `ls -Al /etc/wireguard/`
    - It has a `.conf` file ending, lets assume: `wg-client.conf`
    - To start the VPN interface, run: `systemctl start wg-quick@wg-client`
    - To autostart the VPN interface on boot, run: `systemctl enable wg-quick@wg-client`
    - To disable autostart again, run: `systemctl disable wg-quick@wg-client`

    Remark: If the client config sets the DNS server via `DNS = ...` directive, assure that the `resolvconf` package is installed:

    ```sh
    apt install resolvconf
    ```

=== "View logs"

    The status of the VPN connection and - when running it as server - connected clients can be viewed with:

    ```sh
    wg
    ```

    The list of clients with their state can be viewed with:

    ```sh
    dietpi-wireguard list
    ```

    Local service logs can be viewed with:

    ```sh
    journalctl -u wg-quick@wg0
    ```

    respectively

    ```sh
    journalctl -u wg-quick@<config_name>
    ```

***

Website: <https://www.wireguard.com>  
Wikipedia: <https://wikipedia.org/wiki/WireGuard>  
YouTube video tutorial (German language): [Raspberry Pi & PiVPN mit WireGuard: Installation unter DietPi mit NoIP und AVM Fritzbox](https://www.youtube.com/watch?v=yRkdzGmnvA4){:class="nospellcheck"}

## Tailscale

Zero config VPN.

Tailscale is a VPN service that makes the devices and applications you own accessible anywhere in the world, securely and effortlessly. It enables encrypted point-to-point connections using the open source WireGuard protocol, which means only devices on your private network can communicate with each other.

![Tailscale logo](../assets/images/tailscale-logo.svg){: width="242" height="44" loading="lazy"}

=== "Quick start"

    Step 1: Sign up for an account

    [Sign up for a Tailscale account](https://login.tailscale.com/start). Get started with a free personal plan or trial for an organizational plan.

    Tailscale requires a Single Sign-On (SSO) provider, so you’ll need a Google, Microsoft, GitHub, Okta, OneLogin, or other supported SSO identity provider account to begin.

    Step 2: Add this device to your network

    ```sh
    tailscale up
    ```

    Tailscale helps you connect your devices together. For that to be possible, Tailscale needs to also be installed on other devices that you want to connect to.

=== "Service control"

    Since Tailscale runs as a systemd service, it can be controlled with the following commands:

    ```sh
    systemctl status tailscaled
    ```

    ```sh
    systemctl start tailscaled
    ```

    ```sh
    systemctl stop tailscaled
    ```

    ```sh
    systemctl restart tailscaled
    ```

=== "View logs"

    Tailscale runs as a systemd service, hence logs can be viewed with the following command:

    ```sh
    journalctl -u tailscaled
    ```

=== "Update"

    Tailscale is installed as an APT package and can hence be upgraded using the following commands:

    ```sh
    apt update
    apt install tailscale
    ```

***

[What is Tailscale?](https://tailscale.com/kb/1151/what-is-tailscale/)  
Website: <https://tailscale.com/>  
Docs: <https://tailscale.com/kb/>  
License: [BSD 3-Clause](https://github.com/tailscale/tailscale/blob/main/LICENSE)  
YouTube video tutorial: [Tailscale VPN - WireGuard was never so easy!](https://www.youtube.com/watch?v=Kzyolu9yn0E)

## ZeroTier

ZeroTier is a smart programmable Ethernet switch for planet Earth. It allows all networked devices, VMs, containers, and applications to communicate as if they all reside in the same physical data centre or cloud region.

![ZeroTier logo](../assets/images/zerotier-logo.png){: width="300" height="71" loading="lazy"}

=== "Creation of P2P Network on controller"

    In order to use ZeroTier you firstly need to create network in controller either in ZeroTier ltd. hosted or self-hosted controllers.  
    Firstly let's show step-by-step instructions for ZeroTier hosted networks. For that we will need to:
    
    1. Register on <https://my.zerotier.com>
    2. Press on **"Create A Network"**
    3. Go to page of created network, where we need to choose which type network we would like to have:
        - Private: Nodes must be authorized to become members
        - Public: Any node can become a member. Members cannot be de-authorized or deleted. Members that haven't been online in 30 days will be removed, but can rejoin.

=== "Joining to network via `zerotier-cli`"

    By running `sudo zerotier-cli join <network-id>`, whereas `<network-id>` could be found in controllers web page in list of networks, we will join network.  
    If Network type is Private, then we will need to go to controller website and authorize joining node by going to `https://my.zerotier.com/network/<network-id>` and scrolling down to members list where we will find on first column checkbox, if we fill it then node is authorized else it's not.  
    If Network type is Public, then we automatically have access to other nodes.  
    In order to leave certain network we need to run next command:

    ```sh
    zerotier-cli leave <network-id>
    ```

    For printing out the node ID, run:

    ```sh
    zerotier-cli info
    ```

=== "Self-hosting controllers"

    ZeroTier supports self-hosting controllers on nodes:

    - Self-hosting a controller: <https://docs.zerotier.com/self-hosting/network-controllers>
    - Self-hosting the controller UI: <https://github.com/dec0dOS/zero-ui>

=== "Service control"

    Since ZeroTier runs as a systemd service, it can be controlled with the following commands:

    ```sh
    systemctl status zerotier-one
    ```

    ```sh
    systemctl start zerotier-one
    ```

    ```sh
    systemctl stop zerotier-one
    ```

    ```sh
    systemctl restart zerotier-one
    ```

=== "View logs"

    ZeroTier runs as a systemd service, hence logs can be viewed with the following command:

    ```sh
    journalctl -u zerotier-one
    ```

=== "Update"

    ZeroTier is installed as an APT package and can hence be upgraded using the following commands:

    ```sh
    apt update
    apt install zerotier-one
    ```

***

Website: <https://zerotier.com>  
Wikipedia : <https://en.wikipedia.org/wiki/ZeroTier>  
Source code: <https://github.com/zerotier/ZeroTierOne>
License: [BSLv1.1](https://github.com/zerotier/ZeroTierOne/blob/master/LICENSE.txt)  
YouTube video tutorial: [ZeroTier Tutorial: Delivering the Capabilities of VPN, SDN, and SD-WAN via an Open Source System](https://www.youtube.com/watch?v=Bl_Vau8wtgc)  
YouTube video tutorial: [How To Work Remotely Using ZeroTier & Windows Remote Desktop (RDP)](https://www.youtube.com/watch?v=ZShna7v77xc)

[Return to the **Optimised Software list**](../software.md)

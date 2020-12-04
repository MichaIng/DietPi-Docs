# Advanced Networking

## Overview

- [**HAProxy - High performance TCP/HTTP load balancer**](#haproxy)
- [**Tor Relay - Add a node to the Tor network**](#tor-relay)

??? info "How do I run **DietPi-Software** and install **optimised software** ?"
    To install any of the **DietPi optimised software** listed below run from the command line:

    ```
    dietpi-software
    ```

    Choose **Software Optimised** and select one or more items. Finally click on `Install`. DietPi will do all the necessary steps to install and start these software items.

    ![DietPi software](../assets/images/dietpi-software.jpg)

    To see all the DietPi configurations options, review [DietPi Tools](../../dietpi_tools) section.

## HAProxy

HAProxy, which stands for High Availability Proxy, is a popular open source software TCP/HTTP Load Balancer and proxy solution. Its most common use is to improve the performance and reliability of a server environment by distributing the workload across multiple servers (e.g. web, application, database).

It is best suited for high traffic web sites and powers quite a number of the world's most visited ones: GitHub, Imgur, Instagram, and Twitter. It has become the de-facto standard open-source load balancer, and it is often deployed by default in cloud platforms.

!!! warning ""
    This software title is recommended ONLY for advanced users !

=== "Quick start"
    After installation, you need to manually modify the `haproxy.cfg` to best fit your network requirements. Check the configuration manual [here](http://www.haproxy.org/#docs).

    ``` bash
    systemctl stop haproxy
    nano /etc/haproxy/haproxy.cfg
    systemctl start haproxy    
    ```

    Access web interface stats:

    ``` bash
    URL = http://<your.local.ip>:1338
    Username = admin
    Password = dietpi
    ```

    !!! hint ""
        This installation was made possible by Jerome Queneuder, who provided the methods for compiling and installation.

=== "Load balancing"

    The simplest way to load balance network traffic to multiple servers is to use layer 4 (transport layer) load balancing. Load balancing this way will forward user traffic based on IP range and port.

    ![advanced-networking-layer4](../assets/images/dietpi-software-advanced-networking-layer4.jpg)

    The user accesses the load balancer, which forwards the user’s request to the web-backend group of backend servers. Whichever backend server is selected will respond directly to the user’s request.

    Help text extracted from the tutorial: [An Introduction to HAProxy and Load Balancing Concepts](https://www.digitalocean.com/community/tutorials/an-introduction-to-haproxy-and-advanced-networking-concepts)

=== "High availability"

    A high availability (HA) setup is an infrastructure without a single point of failure. It prevents a single server failure from being a downtime event by adding redundancy to every layer of your architecture. A load balancer facilitates redundancy for the backend layer (web/app servers), but for a true high availability setup, you need to have redundant load balancers as well.

    Here is a diagram of a basic high availability setup:
    ![advanced-networking-high-availability](../assets/images/dietpi-software-advanced-networking-high-availability.gif)

    Help text extracted from the tutorial: [An Introduction to HAProxy and Load Balancing Concepts](https://www.digitalocean.com/community/tutorials/an-introduction-to-haproxy-and-advanced-networking-concepts)

=== "Official documentation"
    [Website HAProxy Community Edition](http://www.haproxy.org)

    [HAProxy Documentation](http://www.haproxy.org/#docs)

![advanced-networking-high-availability](../assets/images/dietpi-software-advanced-networking-haproxy2.jpg)

## Tor Relay

![advanced-networking-tor](../assets/images/dietpi-software-advanced-networking-tor.png){: style="width:500px"}

Contribute a node to the Tor network, which allows people to be anonymous on the internet.

=== "Types of relay"
    You can run many types of relay, each with their own technical requirements and legal implications.

    Bridges are the safest relay to run from home, and are relatively easy, low-risk and low bandwidth, but they have a big impact on users, especially in censored countries. Normally, IP addresses and other information of Tor relays is published, making it easy for websites to blacklist the relay, and anything else using that IP address. Since a bridge isn't listed publicly, it is unlikely to be blocked by websites or recieve abuse complaints.

    Guard/Middle relays are the first and second relays connected to, respectively. Information about them is listed, but they are unlikely to recieve abuse complaints. However, they may be blocked by certain services that don't understand how Tor works or deliberately want to censor Tor users. If you have one static IP address, consider running a bridge instead.

    Exit relays are the final relay connected to, and the one that actually sends traffic to its destination. The website will see the exit relay's IP address instead of the real IP address of the Tor user. Exit relays have the greatest legal exposure and liability of all the relays, and should not be run from home.

=== "Monitoring"

    The simplest way to monitor the Tor relay is to use the DietPi-CloudShell scene.

=== "Keeping up-to-date"

    Keeping Tor relays updated is important to the safety of both the users and the operator. Because of this, automated upgrades are recommended and asked about when first installing. Otherwise, use `apt-get update && apt-get upgrade`

=== "Official documentation"

    [Tor Relay Documentation](https://community.torproject.org/relay/setup/)

[Return to the **Optimised Software list**](../../dietpi_optimised_software)

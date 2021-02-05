# Development & Programming

## Overview

- [**Python - high-level interpreted programming language**](#python)
- [**Docker - Build, ship, and run distributed applications**](#docker)
- [**Docker-Compose - run multi-container applications on Docker**](#docker-compose)
- [**Portainer - Docker container management**](#portainer)

??? info "How do I run **DietPi-Software** and install **optimised software** ?"
    To install any of the **DietPi optimised software** listed below run from the command line:

    ```
    dietpi-software
    ```

    Choose **Software Optimised** and select one or more items. Finally click on `Install`. DietPi will do all the necessary steps to install and start these software items.

    ![DietPi software](../assets/images/dietpi-software.jpg)

    To see all the DietPi configurations options, review [DietPi Tools](../../dietpi_tools) section.

[Return to the **Optimised Software list**](../../software/)

## Python

Python is a text based interpreted programming language with object oriented programming options for general purpose applications.  

![DietPi programming software Python](../assets/images/dietpi-software-programming-pythonlogo.png){: width="200px"}

Source: By [www.python.org](http://www.python.org/community/logos/), [GPL](https://commons.wikimedia.org/w/index.php?curid=34991637)

The install option explicitly only installs Python 3.  
The `pip` resp. `pip3` Python package manager and development headers are included.

To use the `pip` package manager, a typical usage will be `pip3 install -U <module>`.

***

Wikipedia: <https://wikipedia.org/wiki/Python_(programming_language)>

## Docker

Docker is used to build, ship, and run distributed applications.

![DietPi programming software Docker](../assets/images/dietpi-software-programming-docker1.svg){: width="200px"}

![DietPi programming software Docker screenshot](../assets/images/dietpi-software-programming-docker2.svg){: width="400px"}

Source: [User:`Maklaan` - Based on a Docker blog post](https://commons.wikimedia.org/w/index.php?curid=37965701)

=== "Access logs"

    Access logs can be viewed with this command:

    ```sh
    journalctl -u docker -u containerd
    ```

=== "Config files"

    The Docker configuration files are:

    - Docker: `/etc/docker/daemon.json`
    - containerd: `/etc/containerd/config.toml`

***

Website: <https://docs.docker.com/get-started/overview>  
Configuration file: <https://docs.docker.com/engine/reference/commandline/dockerd/#daemon-configuration-file>  
Logging: <https://docs.docker.com/config/containers/logging/configure>  
Wikipedia: <https://wikipedia.org/wiki/Docker_(software)>

YouTube video tutorial: *DietPi Docker Setup on Raspberry Pi 3 B Plus*.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/y_VfLOGm5nA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Docker-Compose

Docker Compose is a tool for running multi-container applications on Docker defined using the Compose file format.

![DietPi programming software Docker-Compose](https://raw.githubusercontent.com/docker/compose/master/logo.png)

=== "Update"

    Update to latest version:

    ```
    sudo pip3 install docker-compose --upgrade
    ```

***

Official documentation: <https://docs.docker.com/compose>
Getting started: <https://docs.docker.com/compose/gettingstarted>

## Portainer

Portainer simplifies your Docker container management via Portainer web interface. It enables faster deploy of the applications and it gives real time visibility.

![DietPi Optimised Software Portainer](../assets/images/dietpi-software-portainer.jpg)

=== "Quick start"

    - It starts automatically after installation. View Portainer web interface by opening the browser using next URL: `http://<your.local.ip>:9002` [^1].

    - If you have basic questions on how to use **Portainer**, please read the beginner guide: <https://codeopolis.com/posts/beginners-guide-to-portainer/>.

=== "Update"

    Update to latest version:

    ```
    dietpi-software reinstall 185
    ```

***

Official documentation: <https://documentation.portainer.io>  
Source code: <https://github.com/portainer/portainer>  
Open-source license: zlib

[Return to the **Optimised Software list**](../../software/)

[^1]:
    [Logitech Media Server](../media/#logitech-media-server) already listened to port `9000`, and this is why **Portainer** has been configured to start using port `9002`. For more details on the implementation Portainer in DietPi see the GitHub task: <https://github.com/MichaIng/DietPi/pull/3933>

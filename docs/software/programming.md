# Development & Programming

## Overview

- [**Python - high-level interpreted programming language**](#python)
- [**Docker - Build, ship, and run distributed applications**](#docker)  

??? info "How do I run **DietPi-Software** and install **optimised software** ?"
    To install any of the **DietPi optimised software** listed below run from the command line:

    ```
    dietpi-software
    ```

    Choose **Software Optimised** and select one or more items. Finally click on `Install`. DietPi will do all the necessary steps to install and start these software items.

    ![DietPi software](../assets/images/dietpi-software.jpg)

    To see all the DietPi configurations options, review [DietPi Tools](../../dietpi_tools) section.

[Return to the **Optimised Software list**](../../dietpi_optimised_software)

## Python

Python is a text based interpreted programming language with object oriented programming options for general purpose applications.  

![DietPi programming software Python](../assets/images/dietpi-software-programming-pythonlogo.png){: style="width:200px"}

Source: By [www.python.org](http://www.python.org/community/logos/), [GPL](https://commons.wikimedia.org/w/index.php?curid=34991637)

See also: <https://wikipedia.org/wiki/Python_(programming_language)>.

## Docker

Docker is used to build, ship, and run distributed applications.

![DietPi programming software Docker](../assets/images/dietpi-software-programming-docker1.svg){: style="width:200px"}

![DietPi programming software Docker screenshot](../assets/images/dietpi-software-programming-docker2.svg){: style="width:400px"}

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

=== "Official documentation"

    - Configuration file: <https://docs.docker.com/engine/reference/commandline/dockerd/#daemon-configuration-file>
    - Logging: <https://docs.docker.com/config/containers/logging/configure>

See also <https://wikipedia.org/wiki/Docker_(software)> resp. <https://docs.docker.com/get-started/overview>.

[Return to the **Optimised Software list**](../../dietpi_optimised_software)

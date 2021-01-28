# Web Development

## Overview

[**Stacks for Web Development**](#stacks-for-web-development)

- [**LAMP** web stack - **Apache2 / MariaDB / PHP**](#lamp-web-stack)
- [**LASP** web stack - **Apache2 / SQLite / PHP**](#lasp-web-stack)
- [**LEMP** web stack - **Nginx / MariaDB / PHP**](#lemp-web-stack)
- [**LESP** web stack - **Nginx / SQLite / PHP**](#lesp-web-stack)  
- [**LLMP** web stack - **Lighttpd / MariaDB / PHP**](#llmp-web-stack)
- [**LLSP** web stack - **Lighttpd / SQLite / PHP**](#llsp-web-stack)

[**Web Servers**](#webservers)

- [**Apache2** - Feature-rich webserver](#apache2)  
- [**Nginx** - High performance web server, load balancer & reverse proxy](#nginx)  
- [**Lighttpd** - Extremely lightweight webserver](#lighttpd)
- [**Tomcat8** - Apache Tomcat server](#tomcat)

[**Databases & Data stores**](#databases-data-stores)

- [**MariaDB** - Open Source Relational Database](#mariadb)
  - [**phpMyAdmin** - SQL Administration Tool for MariaDB](#phpmyadmin)  
- [**SQLite** - Small, Fast and High reliable SQL database engine](#sqlite)
- [**Redis** - Open Source In-memory key–value Data Store](#redis)
- [**InfluxDB** - Open Source Time Series Database](#influxdb)

[**Web development - Programming & Frameworks**](#web-development-programming-frameworks)

- [**Flask - Micro web framework powered by Python**](#flask)
- [**PHP** - Scripting language suited to web development](#php)

??? info "How do I run **DietPi-Software** and install **optimised software** ?"
    To install any of the **DietPi optimised software** listed below run from the command line:

    ```
    dietpi-software
    ```

    Choose **Software Optimised** and select one or more items. Finally click on `Install`. DietPi will do all the necessary steps to install and start these software items.

    ![DietPi software](../assets/images/dietpi-software.jpg)

    To see all the DietPi configurations options, review [DietPi Tools](../../dietpi_tools) section.

[Return to the **Optimised Software list**](../../software/)

## Stacks for Web Development

DietPi offers an **one-click-installation** of the following web development stacks:

- [**LAMP** web stack - **Apache2 / MariaDB / PHP**](#lamp-web-stack)
- [**LASP** web stack - **Apache2 / SQLite / PHP**](#lasp-web-stack)
- [**LEMP** web stack - **Nginx / MariaDB / PHP**](#lemp-web-stack)
- [**LESP** web stack - **Nginx / SQLite / PHP**](#lesp-web-stack)  
- [**LLMP** web stack - **Lighttpd / MariaDB / PHP**](#llmp-web-stack)
- [**LLSP** web stack - **Lighttpd / SQLite / PHP**](#llsp-web-stack)

!!! hint "Meaning of the acronyms *LAMP*, *LASP*, *LEMP*, *LESP*, *LLMP*, *LLSP*"

    - OS: **L** for Linux / DietPi
    - Webserver: **A** for Apache2, **E** for [Nginx](#nginx), **L** for [Lighttpd](#lighttpd)
    - Database: **M** for MariaDB, **S** for [SQLite](#sqlite)
    - Scripting language: **P** for [PHP](#php)

!!! hint ""
    All stacks come with **PHP caches** (APCu and OPcache), being optimized based on a share of the total memory.

### Which Web Application Stack is best for you ?

=== "Which WEBSERVER to CHOOSE ?"

    **[Apache2](#apache2)**

    - Memory use = **High** | Multithreaded = **Yes**

    It is feature-rich and popular. It is recommended for beginners and users who are looking to follow Apache2 based guides.

    **[Nginx](#nginx)**

    - Memory use = **Medium** | Multithreaded = **Yes**

    It is a lightweight alternative to [Apache2](#apache2) and claims[^4] faster webserver performance compared to [Apache2](#apache2). It is ideal for medium-high traffic situations where [Lighttpd](#lighttpd) will suffer.

    **[Lighttpd](#lighttpd)**

    - Memory use = **Low** | Multithreaded = **Optional** - Some drawbacks

    It is extremely lightweight and is generally considered to offer the "best" webserver performance on Linux for SBCs (single board computers). It is recommended for users who expect low webserver traffic and/or personal use.  

    Although the DietPi installation of Lighttpd is set to single threaded, do not be put off by this, in low usage scenarios (<10 users) it will still outperform [Nginx](#nginx) and [Apache2](#apache2). Activation of multithreading is described in the [Lighttpd](#lighttpd) package description.

    !!! hint "DietPi - Webserver Preference"

        The DietPi webserver preference screen allows you to choose your favourite webserver for use in DietPi installations. Check more the **Web Preference** in the [Advanced configuration](../../dietpi_tools/#quick-selections).

    !!! info ""

        For further details see [The battle of the web servers Apache vs. Nginx vs. Lighttpd 2](https://detechter.com/the-battle-of-the-web-servers-apache-vs-Nginx-vs-lighttpd-2/).

=== "Which DATABASE to CHOOSE ?"

    **[MariaDB](#mariadb)**  
    It is an open source RDBMS (relational data base management system). It is application compatible to MySQL, i.e. it can be used as a *drop in* replacement for MySQL. It has more features, fewer bugs, and a better performance compared to MySQL.

    **[SQLite](#sqlite)**  
    It is an RDBMS, also compatible to MySQL. It offers a broader language support (i.e. more bindings to programming languages) compared to [MariaDB](#mariadb). [SQLite](#sqlite) has a very small footprint. As drawbacks, it has no multi user capabilities and a couple of SQL features are missing.

***

### How to install ?

DietPi contains the option to choose the web stack of your favourite. Basically choosing the web stack resp. webserver, you have two options within `dietpi-software`:

- Selection via ***Software Optimized*** or
- Selection via ***Webserver Preference***

The latter is used only in the case of the first webserver background installation.

=== "Selection via Software Optimized"

    ![DietPi webserver selection software optimized](../assets/images/dietpi-software-webstack-selection.png)

    Using this option you select the complete web stack for installation. Just select the web stack you want to install and do the installation via the *Install* execution within `dietpi-software`.

    !!! hint ""
        Unless you _specifically_ need a web stack, it is recommended that you allow DietPi to install the default web stack automatically. This ensures compatibility and stability of your system.

=== "Selection via Webserver Preference"

    ![DietPi webserver selection webserver preference](../assets/images/dietpi-software-webserver-preference.png){: style="width:500px"}

    Using this option you only select the webserver for use in DietPi installations.  
    When you select any software for installation that requires a webserver (e.g. Pi-hole, Nextcloud, Webmin, installed via *Software Optimized*), DietPi will automatically install, configure and optimize your chosen webserver preference. DietPi will also install [MariaDB](#mariadb) / [SQLite](#sqlite) as required, depending on your software selections. Basically, you will never need to manually select/install a webserver stack again. DietPi will do it all for you.

    ???+ info "No webserver change if already installed"
        This setting "Webserver Preference* can NOT be changed if an existing webserver is installed on the system.

***

YouTube video tutorial: *DietPi Web Server Tutorial | Host a website from Home | Raspberry Pi*.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/nB-i959ZGzQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

***

### LAMP Web Stack

LAMP stack is a popular open source web platform commonly used to run dynamic web sites and servers. It is considered by many, as the platform of choice for development and deployment of high performance web applications which require a solid and reliable foundation.

![dietpi-webstack-lamp](../assets/images/dietpi-software-webstack-lamp.jpg)

=== "Quick start"

    **Access website:**

    - URL = `http://<your.IP>` or `http://<your.host.name>`
    - Local directory = `/var/www`

    **Access PHP info page:**

    - URL = `http://<your.IP>/phpinfo.php`

    **Access memory cache info:**

    - APCu = `http://<your.IP>/apc.php`
    - OPcache = `http://<your.IP>/opcache.php`

    For database, check **[MariaDB](#mariadb)** details.

=== "Secured access - HTTPS/SSL"

    **Let's Encrypt** is highly recommended - [see here how to install](../../dietpi_tools/#lets-encrypt-ssl-nordvpn-support). This will automate the creation and setup of your free SSL cert.

    ??? note "Alternative way: Manually enable HTTP/SSL by installing a self-signed SSL certificate"

        !!! caution ""
            This method is recommended only in case **Let's encrypt** is not a viable option.

        **Step 1. Create key**

        ```sh
        mkdir -p /etc/apache2/ssl
        openssl req -x509 -nodes -days 1000 -newkey rsa:2048 -keyout /etc/apache2/ssl/apache.key -out /etc/apache2/ssl/apache.crt
        ```

        **Step 2. Enable SSL config and restart Apache**

        ```sh
        chmod 600 /etc/apache2/ssl/*
        cat << _EOF_ > /etc/apache2/sites-enabled/default-ssl.conf

        <IfModule mod_ssl.c>
            <VirtualHost _default_:443>
                    ServerAdmin webmaster@localhost
                    ServerName example.com:443
                    DocumentRoot /var/www

                    LogLevel error
                    ErrorLog ${APACHE_LOG_DIR}/error.log
                    #CustomLog ${APACHE_LOG_DIR}/access.log combined

                    SSLEngine on

                    SSLCertificateFile /etc/apache2/ssl/apache.crt
                    SSLCertificateKeyFile /etc/apache2/ssl/apache.key

                    <FilesMatch "\.(cgi|shtml|phtml|php)$">
                                    SSLOptions +StdEnvVars
                    </FilesMatch>
                    <Directory /usr/lib/cgi-bin>
                                    SSLOptions +StdEnvVars
                    </Directory>
                </VirtualHost>
            </IfModule>
        '_EOF_'

        a2enmod ssl
        service apache2 restart
        ```

    Access website:

    - URL = `https://<your.IP>` or `https://<your.host.name>`

***

### LASP Web Stack

LASP is a variation of the popular open source [LAMP web stack](#lamp-web-stack), providing [SQLite](#sqlite) instead of [MariaDB](#mariadb).

[SQLite](#sqlite) is an embedded relational database engine. It is popular and together with [Apache2](#apache2) and PHP could be a good candidate for single board computer.

=== "Quick start"

    **Access website:**

    - URL = `http://<your.IP>` or `http://<your.host.name>`
    - Local directory = `/var/www`

    **Access memory cache info:**

    - APCu = `http://<your.IP>/apc.php`
    - OPcache = `http://<your.IP>/opcache.php`

=== "Secured access - HTTPS/SSL"

    **Let's Encrypt** is highly recommended - [see here how to install](../../dietpi_tools/#lets-encrypt-ssl-nordvpn-support). This will automate the creation and setup of your free SSL cert.

    ??? note "Alternative way: Manually enable HTTP/SSL by installing a self-signed SSL certificate"

        !!! caution ""
            This method is recommended only in case **Let's encrypt** is not a viable option.

        **Step 1. Create key**

        ```sh
        mkdir -p /etc/apache2/ssl
        openssl req -x509 -nodes -days 1000 -newkey rsa:2048 -keyout /etc/apache2/ssl/apache.key -out /etc/apache2/ssl/apache.crt
        ```

        **Step 2. Enable SSL config and restart Apache**

        ```sh
        chmod 600 /etc/apache2/ssl/*
        cat << _EOF_ > /etc/apache2/sites-enabled/default-ssl.conf

        <IfModule mod_ssl.c>
            <VirtualHost _default_:443>
                    ServerAdmin webmaster@localhost
                    ServerName example.com:443
                    DocumentRoot /var/www

                    LogLevel error
                    ErrorLog ${APACHE_LOG_DIR}/error.log
                    #CustomLog ${APACHE_LOG_DIR}/access.log combined

                    SSLEngine on

                    SSLCertificateFile /etc/apache2/ssl/apache.crt
                    SSLCertificateKeyFile /etc/apache2/ssl/apache.key

                    <FilesMatch "\.(cgi|shtml|phtml|php)$">
                                    SSLOptions +StdEnvVars
                    </FilesMatch>
                    <Directory /usr/lib/cgi-bin>
                                    SSLOptions +StdEnvVars
                    </Directory>
                </VirtualHost>
            </IfModule>
        '_EOF_'

        a2enmod ssl
        service apache2 restart
        ```

    Access website:

    - URL = `https://<your.IP>` or `https://<your.host.name>`

***

### LEMP Web Stack

LEMP is a variation of the popular open source [LAMP web stack](#lamp-web-stack), providing [Nginx](#nginx) instead of [Apache2](#apache2) web server.

**Nginx** is a popular choice, thanks to its lightweight utilization of resources and its flexibility to scale simply even with minimal equipment.

=== "Quick start"

    **Access website:**

    - URL = `http://<your.IP>` or `http://<your.host.name>`

    **Access PHP info page:**

    - URL = `http://<your.IP>/phpinfo.php`

    **Access memory cache info:**

    - APCu = `http://<your.IP>/apc.php`
    - OPcache = `http://<your.IP>/opcache.php`

    For database, check **[MariaDB](#mariadb)** details.

=== "Secured access - HTTPS/SSL"

    **Let's Encrypt** is highly recommended - [see here how to install](../../dietpi_tools/#lets-encrypt-ssl-nordvpn-support). This will automate the creation and setup of your free SSL cert.

    ??? note "Alternative way: Manually enable HTTP/SSL by installing a self-signed SSL certificate"

        !!! caution ""
            This method is recommended only in case **Let's encrypt** is not a viable option.

        **Step 1. Create key**

        ```sh
        mkdir -p /etc/apache2/ssl
        openssl req -x509 -nodes -days 1000 -newkey rsa:2048 -keyout /etc/apache2/ssl/apache.key -out /etc/apache2/ssl/apache.crt
        ```

        **Step 2. Enable SSL config and restart Apache**

        ```sh
        chmod 600 /etc/apache2/ssl/*
        cat << _EOF_ > /etc/apache2/sites-enabled/default-ssl.conf

        <IfModule mod_ssl.c>
            <VirtualHost _default_:443>
                    ServerAdmin webmaster@localhost
                    ServerName example.com:443
                    DocumentRoot /var/www

                    LogLevel error
                    ErrorLog ${APACHE_LOG_DIR}/error.log
                    #CustomLog ${APACHE_LOG_DIR}/access.log combined

                    SSLEngine on

                    SSLCertificateFile /etc/apache2/ssl/apache.crt
                    SSLCertificateKeyFile /etc/apache2/ssl/apache.key

                    <FilesMatch "\.(cgi|shtml|phtml|php)$">
                                    SSLOptions +StdEnvVars
                    </FilesMatch>
                    <Directory /usr/lib/cgi-bin>
                                    SSLOptions +StdEnvVars
                    </Directory>
                </VirtualHost>
            </IfModule>
        '_EOF_'

        a2enmod ssl
        service apache2 restart
        ```

    Access website:

    - URL = `https://<your.IP>` or `https://<your.host.name>`

***

### LESP Web Stack

LESP is a variation of the popular open source [LAMP web stack](#lamp-web-stack), providing [Nginx](#nginx) instead of [Apache2](#apache2) web server, and [SQLite](#sqlite) instead of MariaDB.

**[Nginx](#nginx)** is a popular choice, thanks to its lightweight utilization of resources and its flexibility to scale simply even with minimal equipment.

=== "Quick start"

    **Access website:**

    - URL = `http://<your.IP>` or `http://<your.host.name>`

    **Access memory cache info:**

    - APCu = `http://<your.IP>/apc.php`
    - OPcache = `http://<your.IP>/opcache.php`

=== "Secured access - HTTPS/SSL"

    **Let's Encrypt** is highly recommended - [see here how to install](../../dietpi_tools/#lets-encrypt-ssl-nordvpn-support). This will automate the creation and setup of your free SSL cert.

    Access website:

    - URL = `https://<your.IP>` or `https://<your.host.name>`

***

### LLMP Web Stack

LLMP is a variation of the popular open source [LAMP web stack](#lamp-web-stack), providing [Lighttpd](#lighttpd) instead of [Apache2](#apache2) web server.

=== "Quick start"

    **Access website:**

    - URL = `http://<your.IP>` or `http://<your.host.name>`
    - Local directory = `/var/www`

    **Access PHP info page:**

    - URL = `http://<your.IP>/phpinfo.php`

    **Access memory cache info:**

    - APCu = `http://<your.IP>/apc.php`
    - OPcache = `http://<your.IP>/opcache.php`

    For database, check **[MariaDB](#mariadb)** details.

=== "Secured access - HTTPS/SSL"

    **Let's Encrypt** is highly recommended - [see here how to install](../../dietpi_tools/#lets-encrypt-ssl-nordvpn-support). This will automate the creation and setup of your free SSL cert.

    Access website:

    - URL = `https://<your.IP>` or `https://<your.host.name>`

***

### LLSP web stack

LLSP is a variation of the popular open source [LAMP web stack](#lamp-web-stack), providing **[Lighttpd](#lighttpd)** instead of [Apache2](#apache2) web server and **[SQLite](#sqlite)** instead of [MariaDB](#mariadb).

=== "Quick start"

    **Access website:**

    - URL = `http://<your.IP>` or `http://<your.host.name>`
    - Local directory = `/var/www`

    **Access PHP info page:**

    - URL = `http://<your.IP>/phpinfo.php`

    **Access memory cache info:**

    - APCu = `http://<your.IP>/apc.php`
    - OPcache = `http://<your.IP>/opcache.php`

    For database, check **[MariaDB](#mariadb)** details.

=== "Secured access - HTTPS/SSL"

    **Let's Encrypt** is highly recommended - [see here how to install](../../dietpi_tools/#lets-encrypt-ssl-nordvpn-support). This will automate the creation and setup of your free SSL cert.

    Access website:

    - URL = `https://<your.IP>` or `https://<your.host.name>`

=== "Individual installation"

    The web development stack could be also individually installed. This option offers more flexibility giving the opportunity to select:

    - **Webserver**

    Depending on your needs, you may choose the web server that fits best your needs. In case **[Lighttpd](#lighttpd)** is not the right choice, you could continue with **Apache Web Server**, **[Nginx](#nginx)** or **Tomcat webserver**.

    - Database

    You may choose to install **[MariaDB](#mariadb)** or other available databases like **[InfluxDB](#influxdb)**, **[Redis](#redis)**, **[SQLite](#sqlite)**.

## WebServers

### Apache2

Apache is open source and it is the most commonly used Web server on Linux systems.

![DietPi Webstack software Apache2 logo](../assets/images/dietpi-software-webstack-apache2.jpg){: style="width:150px"}

Web servers are used to serve Web pages requested by client computers. Clients typically request and view Web pages using Web browser applications such as Firefox, Opera, Chromium, Microsoft Edge, Internet Explorer etc.

Apache is a Apache Software Foundation project. The goal is to provide a secure, efficient and extensible server that provides HTTP services in sync with the current HTTP standards.

***

Official documentation: <https://httpd.apache.org/docs>

### Nginx

**Nginx** [engine x] is an HTTP and reverse proxy server, a mail proxy server, and a generic TCP/UDP proxy server. It was released in 2004 to address the problem of increased web traffic. It has earned an excellent reputation and it is used in top million busiest sites - some of the success stories are: Dropbox, Netflix, Wordpress.com, FastMail.FM.[^1]

![DietPi Webstack software Nginx logo](../assets/images/dietpi-software-webstack-nginx.gif){: style="width:150px"}

The innovation of Nginx compared to earlier servers such as Apache was to use an asynchronous, event-driven architecture. Nginx is blazing fast, being extremely efficient when it comes to hardware utilization, allowing servers to get more speed out of their limited CPU and RAM. As a result, it is one of the fastest web server options for serving static content.

***

Official documentation: <https://www.nginx.com>

### Lighttpd

**Lighttpd** is a web server for UNIX/Linux and Windows operating systems. It is an alternative to Apache web server. It is also called Lighty.

![DietPi Webstack software Lighttpd logo](../assets/images/dietpi-software-webstack-lighttpd.svg){: style="width:100px"}

Source: Fair use, <https://en.wikipedia.org/w/index.php?curid=10881730>.

It is designed to be secure, fast, standards-compliant, and flexible while being optimized for speed-critical environments. Its low memory footprint compared to other web servers, light CPU load and its speed goals make Lighttpd a perfect candidate for SBCs.

=== "Quick access"

    After the installation, check if Lighttpd service is running on `http://<your.IP>`.

=== "Scale to multiple CPU"

    Multithreading is supported by Lighttpd and can be enabled in the configuration file `/etc/lighttpd/lighttpd.conf`. Change the value of `4` to your total core count:

    ```
    server.max-worker = 4
    ```

    Then restart services:

    ```sh
    systemctl restart lighttpd
    ```

***

Official documentation: <https://www.lighttpd.net>

### Tomcat

What is **Apache Tomcat**? Essentially it’s an open-source Java servlet and Java Server Page container that lets developers implement an array of enterprise Java applications. Tomcat also runs a HTTP web server environment in which Java code can run.

![DietPi Webstack software Tomcat logo](../assets/images/dietpi-software-webstack-tomcat.svg){: style="width:100px"}

Source: [The Apache Software Foundation](https://svn.apache.org/viewvc/jakarta/site/xdocs/images/logos/tomcat.eps), [Apache License 2.0](https://commons.wikimedia.org/w/index.php?curid=11302180).

=== "Quick access"

    After the installation, check if Tomcat service is running on `http://<your.IP>:8080`.

***

Official documentation: <https://tomcat.apache.org>

## Databases & Data stores

### MariaDB

**MariaDB** Server is one of the most popular open source relational databases. It’s made by the original developers of MySQL and guaranteed to stay open source [^2]. It is part of most cloud offerings and the default in most Linux distributions.

![DietPi Webstack software MariaDB logo](../assets/images/dietpi-software-webstack-mariadb.png){: style="width:150px"}

Source: [MariaDB](https://mariadb.com/), [LGPL](https://commons.wikimedia.org/w/index.php?curid=55946550).

=== "Quick access"

    As `root` user, run `mariadb` from command line, no separate authentication required. But note that this won’t work via sudo, but an interactive root user shell session is required.

    - Username = `root`
    - Password = The same as your root login password, default is `dietpi`

***

Official documentation: <https://mariadb.org>  
Getting started documentation: <https://mariadb.org/documentation/#getting-started>

#### phpMyAdmin

![DietPi Webstack software phpMyAdmin logo](../assets/images/dietpi-software-webstack-phpmyadmin.png){: style="width:150px"}

**phpMyAdmin** is a free software tool written in [PHP](#php), intended to handle the administration of MySQL / MariaDB over the Web.

Frequently used operations (_such as: managing databases, tables, columns, relations, indexes etc._) can be performed via the web user interface. Using the same application you could also directly execute any SQL statement.

=== "Quick access"

    - URL = `http://<your.IP>/phpmyadmin`
    - Username = `phpmyadmin`
    - Password = The same as your root login password, default is `dietpi`

***

Website: <https://www.phpmyadmin.net>  
Official documentation:  <https://www.phpmyadmin.net/docs/>

### SQLite

![DietPi Webstack software SQLite logo](../assets/images/dietpi-software-webstack-sqlite.svg){: style="width:150px"}

Source: Part of the SQLite documentation, which has been released by author D. Richard Hipp to the public domain. SVG conversion by Mike Toews. [Public Domain](https://commons.wikimedia.org/w/index.php?curid=11675072)

**SQLite** is an embedded relational database engine. It it a self-contained,  high-reliability and full-featured SQL database engine. It is very popular and there are hundreds of millions copies worldwide in use today [^3].

=== "Quick start"

    To create a database and run commands, use the [quick start documentation](https://www.sqlite.org/quickstart.html).

***

Website: <https://www.sqlite.org/index.html>  
Official documentation: <https://www.sqlite.org/docs.html>

### Redis

A non-SQL based data store.

![DietPi Webstack software Redis logo](../assets/images/dietpi-software-webstack-redis.svg){: style="width:150px"}

Source: [Carlos Prioglio](https://redis.io/images/redis-logo.svg), [licence](https://commons.wikimedia.org/w/index.php?curid=95020509).

**Redis** is an open source (BSD licensed), in-memory data structure store, used as a database, cache and message broker.

**Redis** is in the family of databases called key-value stores. The essence of a key-value store is the ability to store some data, called a value, inside a key. This data can later be retrieved only if we know the exact key used to store it.

=== "Quick start"

    The first thing to do in order to check Redis is working properly is sending a PING command:

    ```sh
    redis-cli ping
    ```

    For more commands and an introduction to Redis data types and commands, read the [quick start documentation](https://redis.io/topics/data-types-intro).

***

Website: <https://redis.io>  
Official documentation: <https://redis.io/documentation>  
Commands: <https://redis.io/commands>

### InfluxDB

![DietPi Webstack software InfluxDB logo](../assets/images/dietpi-software-webstack-influxdb.svg){: style="width:200px"}

Source: [InfluxData](https://influxdata.github.io/design.influxdata.com/branding-docs/img/influxdb/preview.svg), [Public Domain](https://commons.wikimedia.org/w/index.php?curid=55056027).

**InfluxDB** is a _time series_ database designed to handle high write and query loads. InfluxDB is not only a time series platform, but it provides also an Web UI and dashboard tools, background processing and monitoring agent.

=== "Quick start"

    After the installation, the data transfers are made via the HTTP requests, and are handled directly by the InfluxDB service running on `http://<your.IP>:8086`.

    - Create a database using `influxdb` via command line tool.
      ```sh
      influx -execute 'create database myfirstdb'
      ```

    - Create a database using a HTTP request and `curl` tool:
      ```sh
      curl -i -XPOST http://<your.IP>:8086/query --data-urlencode "q=CREATE DATABASE myfirstdb"
      ```

    - Post data
      ```sh
      curl -i -XPOST 'http://<your.IP>:8086/write?db=myfirstdb' --data-binary 'temperature value=20.12'
      ```

    - Retrieve and display data from the database
    ```sh
    influx -database myfirstdb -execute 'SELECT * FROM temperature'
    ```    

=== "Users and security"

    Create users and authorizations from influx CLI

    ```sh
    influx -username admin -password admin01
    ```

    ```sql
    CREATE USER admin WITH PASSWORD 'admin01' WITH ALL PRIVILEGES
    CREATE USER test_user WITH PASSWORD 'test_user01'
    GRANT ALL ON mydb TO test_user  
    exit
    ```

    !!! hint "How to enabled secured access (HTTPS)"
        By default the _HTTP_ authentication is disabled. To enable it, follow next two steps:

        1. Change next setting in the configuration file `/etc/influxdb/influxdb.conf`:
        ```
        auth-enabled = true
        ```
        2. Restart service
        ```sh
        systemctl restart influxdb
        ```

***

Website: <https://www.influxdata.com/products/influxdb>  
Getting started: <https://docs.influxdata.com/influxdb/v2.0/get-started/#set-up-influxdb>

## Web development - Programming & Frameworks

### PHP

![DietPi Webstack software PHP logo](../assets/images/dietpi-software-webstack-php.svg){: style="width:150px"}

Source: [Colin Viebrock](https://www.php.net/download-logos.php), [CC BY-SA 4.0](https://commons.wikimedia.org/w/index.php?curid=9632398).

First introduced by Rasmus Lerdorf, PHP is an open-source, server-side general scripting language that has now become a de-facto coding standard in the web development industry.

=== "Quick start"

    - There are many tutorials - here is the official [_Getting started_](https://www.php.net/manual/en/getting-started.php) from PHP documentation.

***

Website: <https://www.php.net>  
Official documentation: <https://www.php.net/manual/en/index.php>

### Flask

Flask is a lightweight web application framework. It is designed to make getting started quick and easy, with the ability to scale up to complex applications and it has become one of the most popular Python web application frameworks.

=== "Quick start"

    In order to use **Flask** it is first required first to install the Python Package Manager - [see Python Pip 3](../programming/#python). Then run the next command.

    ```sh
    pip3 install -U Flask
    ```

***

Website: <https://palletsprojects.com/p/flask>  
Official documentation: <https://flask.palletsprojects.com/en/1.1.x>  
PyPI package page: <https://pypi.org/project/Flask>

[^1]:
    Find out more about the success stories of Nginx on: <https://nginx.org/en/>
[^2]:
    ["Dead database walking: MySQL's creator on why the future belongs to MariaDB - MariaDB, open source, mysql, Oracle"](https://www2.computerworld.com.au/article/457551/dead_database_walking_mysql_creator_why_future_belongs_mariadb/). Computerworld. Retrieved 22 November 2020.
[^3]:
    [Most Widely Deployed and Used Database Engine](https://www.sqlite.org/mostdeployed.html). Retrieved 12 December 2020
[^4]:
    [NGINX vs. Apache: Our View of a Decade-Old Question](https://www.nginx.com/blog/nginx-vs-apache-our-view/). Retrieved 12 December 2020

[Return to the **Optimised Software list**](../../software/)
